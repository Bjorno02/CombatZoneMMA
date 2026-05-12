import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Radio, Ticket, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PPV_LIVE_TICKET_URL,
  PPV_LIVE_EVENT_NAME,
  PPV_LIVE_EVENT_NUMBER,
  PPV_LIVE_EVENT_DATE,
  PPV_LIVE_EVENT_VENUE,
} from "@/lib/constants";

export default function WatchPage() {
  const [code, setCode] = useState("");
  const [embedUrl, setEmbedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [autoVerifying, setAutoVerifying] = useState(false);

  async function validateCode(codeToValidate: string) {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/ppv/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: codeToValidate }),
      });

      const data = await res.json();

      if (res.ok && data.embedUrl) {
        setEmbedUrl(data.embedUrl);
      } else {
        setError(data.error || "Invalid access code. Please check your confirmation email.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setAutoVerifying(false);
    }
  }

  // Auto-validate when arriving with ?code=XXX in the URL (post-TicketSpice redirect)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const codeFromUrl = params.get("code")?.trim();

    if (codeFromUrl && codeFromUrl.length >= 4) {
      setCode(codeFromUrl);
      setAutoVerifying(true);
      // Strip ?code= from URL so it doesn't persist in history/Referer headers
      window.history.replaceState({}, "", window.location.pathname);
      validateCode(codeFromUrl);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!code.trim()) return;
    validateCode(code.trim());
  }

  // Embedded player view
  if (embedUrl) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        {/* Slim header */}
        <div className="bg-neutral-900 border-b border-white/10 px-4 md:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <h1 className="text-white font-bold font-[Chakra_Petch] uppercase tracking-wider text-lg md:text-xl">
                {PPV_LIVE_EVENT_NAME} <span className="text-primary">Live</span>
              </h1>
            </div>
            <Link href="/">
              <span className="text-neutral-400 hover:text-white text-sm uppercase tracking-wider cursor-pointer">
                Exit
              </span>
            </Link>
          </div>
        </div>

        {/* Vimeo player container */}
        <div className="flex-1 flex items-center justify-center bg-black p-2 md:p-4">
          <div className="w-full max-w-[1600px] aspect-video">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src={embedUrl}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title={`${PPV_LIVE_EVENT_NAME} Live Stream`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Auto-verifying view (arrived from TicketSpice with ?code= in URL)
  if (autoVerifying && !error) {
    return (
      <div className="min-h-screen bg-neutral-950 relative overflow-hidden flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>

        <div className="relative z-10 max-w-md w-full text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              Live PPV Event
            </span>
          </div>

          <Loader2 size={48} className="animate-spin text-primary mx-auto mb-6" />

          <h1 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-white uppercase italic mb-3">
            Verifying Your <span className="text-primary">Access</span>
          </h1>
          <p className="text-neutral-400 text-sm">
            Hang tight — we're confirming your ticket with TicketSpice.
          </p>
        </div>
      </div>
    );
  }

  // Code entry view
  return (
    <div className="min-h-screen bg-neutral-950 relative overflow-hidden flex items-center justify-center px-4 py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>

      <div className="relative z-10 max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              Live PPV Event
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-white uppercase italic mb-3 leading-tight">
            Watch <span className="text-primary">{PPV_LIVE_EVENT_NAME}</span>
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-neutral-400">
            {PPV_LIVE_EVENT_DATE} • {PPV_LIVE_EVENT_VENUE}
          </p>
        </div>

        {/* Code entry form */}
        <form onSubmit={handleSubmit} className="bg-neutral-900 border border-white/10 p-8">
          <label
            htmlFor="access-code"
            className="block text-white text-sm font-bold uppercase tracking-wider mb-3"
          >
            Access Code
          </label>
          <Input
            id="access-code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your code"
            className="w-full bg-neutral-800 border-neutral-700 text-white text-lg h-12 rounded-none mb-2 placeholder:text-neutral-500 focus-visible:ring-primary"
            disabled={loading}
            autoFocus
            autoComplete="off"
          />
          <p className="text-neutral-500 text-xs mb-6">
            Find your code in your TicketSpice confirmation email.
          </p>

          {error && (
            <div className="flex items-start gap-2 mb-6 p-3 bg-red-950/50 border border-red-900 text-red-200 text-sm">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={loading || !code.trim()}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider rounded-none border-0"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                <Radio size={18} />
                Watch Live
              </>
            )}
          </Button>
        </form>

        {/* No code? Get tickets */}
        <div className="mt-8 text-center">
          <p className="text-neutral-400 text-sm mb-3">Don't have an access code?</p>
          <a href={PPV_LIVE_TICKET_URL} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-bold uppercase tracking-wider rounded-none bg-transparent"
            >
              <Ticket size={18} />
              Buy PPV Access
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
