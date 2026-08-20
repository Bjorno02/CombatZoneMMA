import type { VercelRequest, VercelResponse } from "@vercel/node";

const attempts = new Map<string, number[]>();
const RATE_LIMIT = { windowMs: 60 * 1000, max: 20 };

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT.windowMs;
  const requests = attempts.get(ip) || [];
  const recentRequests = requests.filter((time) => time > windowStart);

  if (recentRequests.length >= RATE_LIMIT.max) {
    return true;
  }

  recentRequests.push(now);
  attempts.set(ip, recentRequests);
  return false;
}

interface WebconnexOrderResponse {
  responseCode?: number;
  data?: Array<{
    id?: number | string;
    orderNumber?: string;
    displayId?: string;
    status?: string;
    formId?: number | string;
  }>;
  totalResults?: number;
}

type WebconnexOrder = NonNullable<WebconnexOrderResponse["data"]>[number];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0] || "unknown";
  if (isRateLimited(ip)) {
    return res
      .status(429)
      .json({ error: "Too many verification attempts. Please try again shortly." });
  }

  try {
    const { code } = req.body || {};

    if (!code || typeof code !== "string") {
      return res.status(400).json({ error: "Code is required" });
    }
    const trimmedCode = code.trim();
    if (trimmedCode.length < 4 || trimmedCode.length > 40) {
      return res.status(400).json({ error: "Invalid code format" });
    }

    const vimeoEmbedUrl = process.env.VIMEO_EMBED_URL;
    if (!vimeoEmbedUrl) {
      console.error("[PPV] VIMEO_EMBED_URL not configured");
      return res.status(500).json({ error: "Stream not configured. Please try again later." });
    }

    // Dev escape hatch — only honored when NODE_ENV !== "production"
    const devCodes = (process.env.DEV_ACCESS_CODES || "")
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean);
    if (
      process.env.NODE_ENV !== "production" &&
      devCodes.length > 0 &&
      devCodes.includes(trimmedCode)
    ) {
      console.log("[PPV] Dev code accepted");
      return res.status(200).json({ embedUrl: vimeoEmbedUrl });
    }

    // Production path — verify against TicketSpice (Webconnex) API
    const apiKey = process.env.TICKETSPICE_API_KEY;
    const eventId = process.env.TICKETSPICE_EVENT_ID;

    if (!apiKey || !eventId) {
      console.error("[PPV] TicketSpice API credentials not configured");
      return res
        .status(500)
        .json({ error: "Verification service unavailable. Please try again later." });
    }

    // Verification uses the Order Number (e.g. "CMBTZN93-QV40001"), which is in
    // every TicketSpice confirmation email. Must use search/orders — the
    // search/tickets endpoint silently IGNORES its orderNumber param and returns
    // every ticket on the form. The XXX-XXX-XXX access token shown on TicketSpice's
    // virtual event page is internal to their player and NOT exposed via API — we
    // deliberately don't try to validate it. The orderNumber param is
    // case-sensitive, hence the variant loop. Keep in sync with server/routes.ts.
    const trimmedUpper = trimmedCode.toUpperCase();
    const codesToTry = trimmedUpper !== trimmedCode ? [trimmedCode, trimmedUpper] : [trimmedCode];

    let validOrder: WebconnexOrder | undefined = undefined;

    for (const tryCode of codesToTry) {
      const apiUrl = `https://api.webconnex.com/v2/public/search/orders?product=ticketspice.com&formId=${encodeURIComponent(eventId)}&orderNumber=${encodeURIComponent(tryCode)}`;

      const tsResponse = await fetch(apiUrl, {
        headers: {
          apiKey: apiKey,
          Accept: "application/json",
        },
      });

      if (!tsResponse.ok) {
        const errorBody = await tsResponse.text().catch(() => "");
        console.error("[PPV] TicketSpice API error:", tsResponse.status, errorBody);
        continue;
      }

      const data = (await tsResponse.json()) as WebconnexOrderResponse;
      console.log("[PPV] Webconnex returned", data.totalResults ?? 0, "results for code variant");

      // Never trust the API's filtering alone — require an exact order-number
      // match (refunded orders come back with status "refunded", not a flag).
      validOrder = data.data?.find(
        (o) =>
          String(o.formId) === String(eventId) &&
          o.orderNumber?.toUpperCase() === trimmedUpper &&
          o.status === "completed"
      );

      if (validOrder) break;
    }

    if (!validOrder) {
      console.log(
        "[PPV] No valid ticket found for code variant:",
        trimmedCode.substring(0, 4) + "..."
      );
      return res.status(403).json({
        error:
          "No matching order found. Double-check the order number from your confirmation email.",
      });
    }

    console.log("[PPV] Access granted for order:", validOrder.id);
    return res.status(200).json({ embedUrl: vimeoEmbedUrl });
  } catch (error) {
    console.error("[PPV] Verification error:", error);
    return res.status(500).json({ error: "Verification failed. Please try again." });
  }
}
