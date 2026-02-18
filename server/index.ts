import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

// Environment detection
const isProduction = process.env.NODE_ENV === "production";

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

// ===================
// SECURITY MIDDLEWARE
// ===================

// Trust proxy in production (for rate limiting behind reverse proxy)
if (isProduction) {
  app.set("trust proxy", 1);
}

// Helmet - Sets various HTTP headers for security
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://www.youtube.com",
          "https://www.google.com",
          "https://sdks.shopifycdn.com",
          "https://*.shopify.com",
        ],
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://fonts.googleapis.com",
          "https://sdks.shopifycdn.com",
        ],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:", "blob:"],
        frameSrc: [
          "'self'",
          "https://www.youtube.com",
          "https://www.google.com",
          "https://*.shopify.com",
        ],
        connectSrc: [
          "'self'",
          "https://www.googleapis.com",
          "https://*.myshopify.com",
          "https://*.shopify.com",
        ],
        upgradeInsecureRequests: isProduction ? [] : null,
      },
    },
    crossOriginEmbedderPolicy: false, // Required for YouTube embeds
    hsts: isProduction ? { maxAge: 31536000, includeSubDomains: true, preload: true } : false,
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
  })
);

// Additional security headers
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
  next();
});

// CORS - Configure allowed origins
const allowedOrigins = [
  "http://localhost:5000",
  "http://localhost:3000",
  "https://combatzonemma.com",
  "https://www.combatzonemma.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, etc.)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Body parsing with size limits
app.use(
  express.json({
    limit: "10kb", // Limit body size to prevent memory exhaustion
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(express.urlencoded({ extended: false, limit: "10kb" }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  // Global error handler - prevents leaking stack traces in production
  app.use(
    (
      err: Error & { status?: number; statusCode?: number },
      _req: Request,
      res: Response,
      _next: NextFunction
    ) => {
      const status = err.status || err.statusCode || 500;

      // Log error details server-side
      console.error(`[ERROR] ${new Date().toISOString()}:`, {
        message: err.message,
        stack: err.stack,
        status,
      });

      // Only send generic message in production to avoid leaking sensitive info
      const message =
        isProduction && status >= 500
          ? "An unexpected error occurred. Please try again later."
          : err.message || "Internal Server Error";

      res.status(status).json({ error: message });
    }
  );

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
  const host = process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost";
  httpServer.listen(port, host, () => {
    log(`serving on ${host}:${port}`);
  });
})();
