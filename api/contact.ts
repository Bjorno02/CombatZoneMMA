import type { VercelRequest, VercelResponse } from "@vercel/node";

// Simple rate limiting using memory (resets on cold start)
const submissions = new Map<string, number[]>();
const RATE_LIMIT = { windowMs: 60 * 60 * 1000, max: 5 }; // 5 per hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT.windowMs;

  const requests = submissions.get(ip) || [];
  const recentRequests = requests.filter((time) => time > windowStart);

  if (recentRequests.length >= RATE_LIMIT.max) {
    return true;
  }

  recentRequests.push(now);
  submissions.set(ip, recentRequests);
  return false;
}

function sanitizeString(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .trim();
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Rate limiting
  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0] || "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many contact submissions. Please try again later." });
  }

  try {
    const { firstName, lastName, email, subject, message } = req.body;

    // Validation
    const errors: { field: string; message: string }[] = [];

    if (!firstName || typeof firstName !== "string" || firstName.trim().length < 1) {
      errors.push({ field: "firstName", message: "First name is required" });
    } else if (firstName.length > 50) {
      errors.push({ field: "firstName", message: "First name too long" });
    }

    if (!lastName || typeof lastName !== "string" || lastName.trim().length < 1) {
      errors.push({ field: "lastName", message: "Last name is required" });
    } else if (lastName.length > 50) {
      errors.push({ field: "lastName", message: "Last name too long" });
    }

    if (!email || typeof email !== "string" || !validateEmail(email)) {
      errors.push({ field: "email", message: "Invalid email format" });
    } else if (email.length > 100) {
      errors.push({ field: "email", message: "Email too long" });
    }

    const validSubjects = ["general", "fighter", "sponsorship", "media"];
    if (!subject || !validSubjects.includes(subject)) {
      errors.push({ field: "subject", message: "Please select a valid subject" });
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.push({ field: "message", message: "Message must be at least 10 characters" });
    } else if (message.length > 2000) {
      errors.push({ field: "message", message: "Message too long" });
    }

    if (errors.length > 0) {
      return res.status(400).json({ error: "Validation failed", details: errors });
    }

    // Sanitize inputs
    const sanitizedData = {
      firstName: sanitizeString(firstName),
      lastName: sanitizeString(lastName),
      email: email.toLowerCase().trim(),
      subject,
      message: sanitizeString(message),
    };

    // Log submission (in production, integrate with email service)
    console.log("[CONTACT] Form submission:", {
      ...sanitizedData,
      ip,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // await sendEmail({
    //   to: "info@combatzonemma.com",
    //   subject: `[${sanitizedData.subject}] Contact from ${sanitizedData.firstName} ${sanitizedData.lastName}`,
    //   body: sanitizedData.message,
    //   replyTo: sanitizedData.email,
    // });

    return res.status(200).json({
      success: true,
      message: "Thank you for your message. We'll be in touch soon.",
    });
  } catch (error) {
    console.error("[CONTACT] Error:", error);
    return res.status(500).json({ error: "Failed to process your request. Please try again." });
  }
}
