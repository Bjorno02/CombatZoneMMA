import { Play, Star, Tv, Radio, Ticket } from "lucide-react";
import { Link } from "wouter";
import {
  PPV_REPLAY_URL,
  PPV_LIVE_EVENT_NUMBER,
  PPV_LIVE_EVENT_DATE,
  PPV_LIVE_EVENT_VENUE,
  PPV_LIVE_WATCH_PATH,
  PPV_LIVE_COMING_SOON,
  PPV_REPLAY_EVENT_NUMBER,
  PPV_REPLAY_EVENT_DATE,
  PPV_REPLAY_EVENT_VENUE,
} from "@/lib/constants";
import { PPVPurchaseModal } from "@/components/PPVPurchaseModal";

export function PPVSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden -mt-8">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.3] bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>

      {/* Separator design - broken line pattern with stars */}
      <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-center z-[1]">
        <div className="flex items-center gap-4 w-full max-w-4xl px-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3 h-3 fill-primary/40 text-primary/40" />
            ))}
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="mb-12 text-center scroll-reveal">
          <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            Watch Now
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] uppercase italic mb-6 leading-tight">
            Pay-Per-<span className="text-primary">View</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* LIVE PPV - Full width, primary CTA */}
        <div className="mb-8 scroll-reveal">
          <div className="bg-neutral-900 shadow-2xl relative overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 bg-primary" />

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Event info */}
                <div>
                  {/* LIVE badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">
                      {PPV_LIVE_COMING_SOON ? "Live PPV Event • Coming Soon" : "Live PPV Event"}
                    </span>
                  </div>

                  {/* Event title */}
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Chakra_Petch] text-white uppercase mb-3 leading-none">
                    Combat Zone <span className="text-primary">{PPV_LIVE_EVENT_NUMBER}</span>
                  </h3>

                  {/* Date */}
                  <p className="text-neutral-400 text-lg mb-6">
                    {PPV_LIVE_EVENT_DATE} • {PPV_LIVE_EVENT_VENUE}
                  </p>

                  {/* Description */}
                  <p className="text-neutral-300 leading-relaxed">
                    Stream the full live event in HD from anywhere. Every fight, every finish, every
                    moment of championship action — broadcast live from the cage.
                  </p>
                </div>

                {/* Right: Pricing + CTAs */}
                <div className="lg:pl-6 lg:border-l lg:border-white/10">
                  {/* Pricing rows */}
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-neutral-300">Live Stream Access</span>
                      <span className="text-white font-bold text-xl">
                        {PPV_LIVE_COMING_SOON ? "TBA" : "$26.90"}
                      </span>
                    </div>
                    <div className="py-2 text-neutral-400 text-sm">
                      {PPV_LIVE_COMING_SOON
                        ? "PPV purchase will open closer to fight night"
                        : "Live broadcast • HD quality • Includes replay"}
                    </div>
                  </div>

                  {/* CTA buttons */}
                  <div className="space-y-3">
                    {PPV_LIVE_COMING_SOON ? (
                      <button
                        type="button"
                        disabled
                        className="w-full flex items-center justify-center gap-2 bg-neutral-700 text-white/70 font-bold uppercase tracking-wider py-4 cursor-not-allowed"
                      >
                        <Ticket size={18} />
                        <span>Coming Soon</span>
                      </button>
                    ) : (
                      <PPVPurchaseModal>
                        <button
                          type="button"
                          className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold uppercase tracking-wider py-4 hover:bg-primary/90 transition-colors cursor-pointer"
                        >
                          <Ticket size={18} />
                          <span>Buy PPV Access</span>
                        </button>
                      </PPVPurchaseModal>
                    )}
                    <Link href={PPV_LIVE_WATCH_PATH} className="block">
                      <div className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider py-4 hover:bg-white hover:text-neutral-900 transition-colors cursor-pointer">
                        <Radio size={18} />
                        <span>Watch Live</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REPLAY - Floating in the white, no card */}
        <div className="scroll-reveal scroll-reveal-delay-1">
          <div className="pt-8 mt-4 border-t border-neutral-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              {/* Left: Event info */}
              <div className="text-center lg:text-left">
                {/* Replay badge */}
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <Tv className="w-4 h-4 text-primary" />
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">
                    Replay Available
                  </span>
                </div>

                {/* Event title */}
                <h3 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-neutral-900 uppercase mb-2 leading-tight">
                  Combat Zone <span className="text-primary">{PPV_REPLAY_EVENT_NUMBER}</span>
                </h3>

                {/* Date */}
                <p className="text-neutral-500 text-sm md:text-base mb-3">
                  {PPV_REPLAY_EVENT_DATE} • {PPV_REPLAY_EVENT_VENUE}
                </p>

                {/* Description */}
                <p className="text-neutral-700 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Missed the action? Watch the full event replay on demand in HD.
                </p>
              </div>

              {/* Right: Pricing + CTA */}
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center lg:items-start xl:items-center justify-center lg:justify-end gap-4 sm:gap-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-neutral-500 text-sm uppercase tracking-wider">Replay</span>
                  <span className="text-neutral-900 font-bold text-2xl">$20</span>
                </div>
                <a
                  href={PPV_REPLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors font-bold uppercase tracking-wider px-6 py-3 text-sm whitespace-nowrap"
                >
                  <Play size={16} />
                  <span>Watch Replay</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
