import type { Express } from "express";
import { type Server } from "http";
import type { Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import { Resend } from "resend";

// ===================
// CONSTANTS
// ===================

const RATE_LIMIT = {
  API: { windowMs: 15 * 60 * 1000, max: 100 }, // 100 req / 15 min
  YOUTUBE: { windowMs: 60 * 1000, max: 10 }, // 10 req / 1 min
  CONTACT: { windowMs: 60 * 60 * 1000, max: 5 }, // 5 req / 1 hour
} as const;

// ===================
// UTILITY FUNCTIONS
// ===================

/**
 * Sanitize string input to prevent XSS
 * Removes HTML tags and trims whitespace
 */
function sanitizeString(input: string): string {
  return input
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/[<>]/g, "") // Remove any remaining angle brackets
    .trim();
}

/**
 * Async handler wrapper to catch errors in async routes
 */
function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

// ===================
// RATE LIMITERS
// ===================

// General API rate limiter
const apiLimiter = rateLimit({
  windowMs: RATE_LIMIT.API.windowMs,
  max: RATE_LIMIT.API.max,
  message: { error: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
  // Use default keyGenerator (handles IPv6 properly)
});

// Stricter limiter for YouTube API (preserves quota)
const youtubeLimiter = rateLimit({
  windowMs: RATE_LIMIT.YOUTUBE.windowMs,
  max: RATE_LIMIT.YOUTUBE.max,
  message: { error: "Too many video requests, please try again shortly." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Contact form limiter - prevent spam
const contactLimiter = rateLimit({
  windowMs: RATE_LIMIT.CONTACT.windowMs,
  max: RATE_LIMIT.CONTACT.max,
  message: { error: "Too many contact submissions. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// ===================
// VALIDATION SCHEMAS
// ===================

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name too long").trim(),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name too long").trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .max(100)
    .trim()
    .toLowerCase(),
  subject: z.enum(["general", "fighter", "sponsorship", "media"], {
    errorMap: () => ({ message: "Please select a valid subject" }),
  }),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message too long")
    .trim(),
});

// Email routing configuration - maps subject to recipient(s)
const EMAIL_ROUTING: Record<string, string[]> = {
  general: ["czmmaemailing@gmail.com"],
  fighter: ["czmmaemailing@gmail.com"],
  sponsorship: ["czmmaemailing@gmail.com"],
  media: ["czmmaemailing@gmail.com"],
};

// Subject labels for email formatting
const SUBJECT_LABELS: Record<string, string> = {
  general: "General Inquiry",
  fighter: "Fighter Inquiry",
  sponsorship: "Sponsorship Inquiry",
  media: "Media/Press Inquiry",
};

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  // Apply general rate limiter to all API routes
  app.use("/api", apiLimiter);

  // ===================
  // CONTACT FORM ENDPOINT
  // ===================
  app.post(
    "/api/contact",
    contactLimiter,
    asyncHandler(async (req: Request, res: Response) => {
      try {
        // Validate request body
        const validatedData = contactSchema.parse(req.body);

        // Sanitize all string inputs for XSS prevention
        const sanitizedData = {
          firstName: sanitizeString(validatedData.firstName),
          lastName: sanitizeString(validatedData.lastName),
          email: validatedData.email.toLowerCase().trim(), // Email already validated by Zod
          subject: validatedData.subject, // Enum, no sanitization needed
          message: sanitizeString(validatedData.message),
        };

        // Log sanitized data
        console.log("[CONTACT] Form submission:", {
          ...sanitizedData,
          ip: req.ip,
          timestamp: new Date().toISOString(),
          userAgent: req.get("User-Agent")?.substring(0, 100), // Truncate for safety
        });

        // Get recipient emails based on subject
        const recipients = EMAIL_ROUTING[sanitizedData.subject] ??
          EMAIL_ROUTING.general ?? ["czmmaemailing@gmail.com"];
        const subjectLabel = SUBJECT_LABELS[sanitizedData.subject] || "Contact Form";

        // Send email via Resend if API key is configured
        const resendApiKey = process.env.RESEND_API_KEY;
        console.log("[CONTACT] API KEY CHECK - exists:", !!resendApiKey);
        if (resendApiKey) {
          const resend = new Resend(resendApiKey);

          try {
            await resend.emails.send({
              from: process.env.RESEND_FROM_EMAIL || "Combat Zone <onboarding@resend.dev>",
              to: recipients,
              replyTo: sanitizedData.email,
              subject: `[${subjectLabel}] ${sanitizedData.firstName} ${sanitizedData.lastName}`,
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <div style="background: #dc2626; padding: 20px; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 24px;">Combat Zone MMA</h1>
                  </div>
                  <div style="padding: 30px; background: #f9f9f9;">
                    <h2 style="color: #333; margin-top: 0;">New ${subjectLabel}</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Name:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${sanitizedData.firstName} ${sanitizedData.lastName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Category:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${subjectLabel}</td>
                      </tr>
                    </table>
                    <div style="margin-top: 20px;">
                      <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                      <div style="background: white; padding: 15px; border-left: 4px solid #dc2626; white-space: pre-wrap;">${sanitizedData.message}</div>
                    </div>
                  </div>
                  <div style="background: #333; padding: 15px; text-align: center;">
                    <p style="color: #999; margin: 0; font-size: 12px;">This message was sent from the Combat Zone MMA website contact form.</p>
                  </div>
                </div>
              `,
            });
            console.log("[CONTACT] Email sent successfully to:", recipients.join(", "));
          } catch (emailError) {
            console.error("[CONTACT] Failed to send email:", emailError);
            // Continue - we still want to acknowledge the submission
          }
        } else {
          console.log("[CONTACT] Resend API key not configured, skipping email");
        }

        res.status(200).json({
          success: true,
          message: "Thank you for your message. We'll be in touch soon.",
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          // Validation error - return sanitized details
          res.status(400).json({
            error: "Validation failed",
            details: error.errors.map((e) => ({
              field: e.path.join("."),
              message: e.message,
            })),
          });
        } else {
          console.error("[CONTACT] Form error:", error);
          res.status(500).json({ error: "Failed to process your request. Please try again." });
        }
      }
    })
  );

  // ===================
  // YOUTUBE API ENDPOINT
  // ===================
  app.get(
    "/api/youtube/videos",
    youtubeLimiter,
    asyncHandler(async (_req: Request, res: Response) => {
      const apiKey = process.env.YOUTUBE_API_KEY;

      if (!apiKey) {
        // Return fallback data when API key isn't configured
        res.json({
          videos: [],
          message: "YouTube API not configured - visit channel directly",
        });
        return;
      }

      // Step 1: Get the channel ID from the handle
      const channelHandle = "CombatZoneMMA"; // Without the @
      let channelId = process.env.YOUTUBE_CHANNEL_ID;

      if (!channelId) {
        // Look up channel ID from handle
        console.log("[YOUTUBE] Looking up channel ID for handle:", channelHandle);
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${encodeURIComponent(channelHandle)}&key=${encodeURIComponent(apiKey)}`
        );

        if (channelResponse.ok) {
          const channelData = (await channelResponse.json()) as { items?: Array<{ id: string }> };
          channelId = channelData.items?.[0]?.id;
          console.log("[YOUTUBE] Found channel ID:", channelId);
        }
      }

      if (!channelId) {
        console.error("[YOUTUBE] Could not find channel ID");
        res.json({ videos: [], message: "Channel not found" });
        return;
      }

      // Step 2: Get recent videos (fetch more to filter out shorts)
      console.log("[YOUTUBE] Fetching videos for channel:", channelId);
      const videosResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${encodeURIComponent(channelId)}&order=date&type=video&maxResults=12&key=${encodeURIComponent(apiKey)}`
      );

      if (!videosResponse.ok) {
        const errorData = (await videosResponse.json()) as { error?: { message?: string } };
        console.error("[YOUTUBE] API error:", JSON.stringify(errorData, null, 2));
        throw new Error(
          errorData.error?.message || `YouTube API error: ${videosResponse.statusText}`
        );
      }

      interface YouTubeResponse {
        items?: Array<{
          id: { videoId: string };
          snippet: {
            title: string;
            thumbnails: {
              medium?: { url: string };
              high?: { url: string };
              default: { url: string };
            };
            publishedAt: string;
            description: string;
          };
        }>;
        error?: { message?: string };
      }

      // Log the raw response for debugging
      const rawResponse = await videosResponse.text();
      console.log("[YOUTUBE] Raw API response:", rawResponse.substring(0, 1000));

      const videosData = JSON.parse(rawResponse) as YouTubeResponse;
      console.log("[YOUTUBE] API response items count:", videosData.items?.length ?? 0);

      // Transform and filter out shorts (shorts usually have #shorts in title)
      const allVideos = (videosData.items ?? []).map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail:
          item.snippet.thumbnails.high?.url ??
          item.snippet.thumbnails.medium?.url ??
          item.snippet.thumbnails.default.url,
        publishedAt: item.snippet.publishedAt,
        description: item.snippet.description,
      }));

      // Filter out shorts and take the first 6
      const videos = allVideos
        .filter((video) => {
          const titleLower = video.title.toLowerCase();
          return !titleLower.includes("#shorts") && !titleLower.includes("#short");
        })
        .slice(0, 6);

      console.log(
        "[YOUTUBE] Returning",
        videos.length,
        "videos (filtered from",
        allVideos.length,
        ")"
      );

      res.json({ videos });
    })
  );

  // ===================
  // NEWSLETTER SIGNUP ENDPOINT
  // ===================
  const newsletterLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // 5 signups per hour per IP
    message: { error: "Too many signup attempts. Please try again later." },
    standardHeaders: true,
    legacyHeaders: false,
  });

  const newsletterSchema = z.object({
    email: z.string().email("Invalid email format").max(100).trim().toLowerCase(),
  });

  app.post(
    "/api/newsletter",
    newsletterLimiter,
    asyncHandler(async (req: Request, res: Response) => {
      try {
        const { email } = newsletterSchema.parse(req.body);

        console.log("[NEWSLETTER] Signup attempt:", {
          email,
          ip: req.ip,
          timestamp: new Date().toISOString(),
        });

        // Check for Sender API key
        const senderApiKey = process.env.SENDER_API_KEY;
        const senderGroupId = process.env.SENDER_GROUP_ID;

        if (senderApiKey) {
          // Subscribe to Sender.net
          const response = await fetch("https://api.sender.net/v2/subscribers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${senderApiKey}`,
              Accept: "application/json",
            },
            body: JSON.stringify({
              email,
              groups: senderGroupId ? [senderGroupId] : [],
            }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.error("[NEWSLETTER] Sender API error:", errorData);
            throw new Error("Failed to subscribe");
          }

          console.log("[NEWSLETTER] Successfully subscribed to Sender:", email);
        } else {
          // Sender not configured - just log for now
          console.log("[NEWSLETTER] Sender not configured. Email captured:", email);
        }

        res.status(200).json({
          success: true,
          message: "Successfully subscribed to the newsletter!",
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          res.status(400).json({
            error: "Invalid email address",
            details: error.errors,
          });
        } else {
          console.error("[NEWSLETTER] Signup error:", error);
          res.status(500).json({ error: "Failed to subscribe. Please try again." });
        }
      }
    })
  );

  // ===================
  // HEALTH CHECK ENDPOINT
  // ===================
  // Minimal response - don't expose server internals
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok" });
  });

  return httpServer;
}
