import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const submissions = new Map<string, number[]>();
const RATE_LIMIT = { windowMs: 60 * 60 * 1000, max: 5 };

const EMAIL_ROUTING: Record<string, string[]> = {
  general: ["bshurd42@gmail.com"],
  fighter: ["jerome@czmma.com"],
  sponsorship: ["kristinmenconi@czmma.com", "skattar@czmma.com"],
  media: ["conor.hews@gmail.com"],
};

const SUBJECT_LABELS: Record<string, string> = {
  general: "General Inquiry",
  fighter: "Fighter Inquiry",
  sponsorship: "Sponsorship Inquiry",
  media: "Media/Press Inquiry",
};

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
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0] || "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many contact submissions. Please try again later." });
  }

  try {
    const { firstName, lastName, email, subject, message } = req.body;

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

    const sanitizedData = {
      firstName: sanitizeString(firstName),
      lastName: sanitizeString(lastName),
      email: email.toLowerCase().trim(),
      subject,
      message: sanitizeString(message),
    };

    console.log("[CONTACT] Form submission:", {
      ...sanitizedData,
      ip,
      timestamp: new Date().toISOString(),
    });

    const recipients = EMAIL_ROUTING[subject] ?? EMAIL_ROUTING.general ?? ["bshurd42@gmail.com"];
    const subjectLabel = SUBJECT_LABELS[subject] || "Contact Form";

    const resendApiKey = process.env.RESEND_API_KEY;
    console.log("[CONTACT] RESEND_API_KEY exists:", !!resendApiKey);

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      try {
        const result = await resend.emails.send({
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
        console.log("[CONTACT] Email sent successfully:", result);
      } catch (emailError) {
        console.error("[CONTACT] Failed to send email:", emailError);
      }
    } else {
      console.log("[CONTACT] RESEND_API_KEY not configured");
    }

    return res.status(200).json({
      success: true,
      message: "Thank you for your message. We'll be in touch soon.",
    });
  } catch (error) {
    console.error("[CONTACT] Error:", error);
    return res.status(500).json({ error: "Failed to process your request. Please try again." });
  }
}
