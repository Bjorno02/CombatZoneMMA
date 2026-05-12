import { useState, useEffect } from "react";
import { Link } from "wouter";
import { X, Ticket, Radio, Play } from "lucide-react";
import {
  TICKETMASTER_EVENT_URL,
  PPV_LIVE_TICKET_URL,
  PPV_LIVE_WATCH_PATH,
  PPV_LIVE_EVENT_DATE,
  PPV_LIVE_EVENT_VENUE,
  PPV_LIVE_EVENT_NUMBER,
} from "@/lib/constants";

const STORAGE_KEY = "cz92_popup_seen";
const EVENT_DATE = new Date("2026-05-16T17:00:00-04:00");
const SHOW_DELAY_MS = 1200;

function getDaysUntil(): number {
  const ms = EVENT_DATE.getTime() - Date.now();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

export function EventPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Skip if already dismissed
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // private mode / disabled storage — fall through and show
    }
    // Skip if event has already passed
    if (getDaysUntil() === 0) return;

    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    // Prevent background scroll while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  function handleClose() {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore storage errors
    }
  }

  if (!open) return null;

  const days = getDaysUntil();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cz-popup-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div className="relative bg-neutral-900 shadow-2xl w-full max-w-md mx-auto overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 bg-primary" />

        {/* Carbon fibre texture overlay */}
        <div
          className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"
          aria-hidden="true"
        />

        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          type="button"
          className="absolute top-3 right-3 z-10 text-neutral-400 hover:text-white p-2 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="relative z-[1] p-6 md:p-8">
          {/* Live PPV eyebrow with pulsing dot */}
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Live PPV Event
            </span>
          </div>

          {/* Title */}
          <h2
            id="cz-popup-title"
            className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-white uppercase italic mb-2 leading-none"
          >
            Combat Zone <span className="text-primary">{PPV_LIVE_EVENT_NUMBER}</span>
          </h2>

          {/* Days countdown */}
          <p className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-white uppercase mb-1 leading-tight">
            In <span className="text-primary">{days}</span> {days === 1 ? "Day" : "Days"}
          </p>

          {/* Event details */}
          <p className="text-neutral-400 text-sm md:text-base mb-5">
            {PPV_LIVE_EVENT_DATE} • {PPV_LIVE_EVENT_VENUE}
          </p>

          {/* Pitch */}
          <p className="text-neutral-300 mb-7 text-sm md:text-base leading-relaxed">
            Get your tickets or PPV access now — don't miss a single fight.
          </p>

          {/* CTAs */}
          <div className="space-y-3">
            <a
              href={TICKETMASTER_EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="flex items-center justify-center gap-2 bg-primary text-white font-bold uppercase tracking-wider py-3.5 hover:bg-primary/90 transition-colors text-sm md:text-base"
            >
              <Ticket size={18} />
              <span>Get In-Person Tickets</span>
            </a>

            <a
              href={PPV_LIVE_TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider py-3.5 hover:bg-white hover:text-neutral-900 transition-colors text-sm md:text-base"
            >
              <Radio size={18} />
              <span>Buy PPV Access</span>
            </a>

            <Link
              href={PPV_LIVE_WATCH_PATH}
              onClick={handleClose}
              className="flex items-center justify-center gap-2 text-neutral-400 hover:text-white font-bold uppercase tracking-wider py-2 text-xs md:text-sm transition-colors"
            >
              <Play size={14} />
              <span>Already have a code? Watch Live</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
