import { Play, Star, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PPV_REPLAY_URL } from "@/lib/constants";

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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left side - takes 2 columns, offset */}
          <div className="lg:col-span-2 lg:pl-8 scroll-reveal">
            <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
              Watch Now
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] uppercase italic mb-6 leading-tight">
              Pay-Per-<span className="text-primary">View</span>
            </h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Missed the action? Watch the full replay of Combat Zone 91 on demand. Every knockout,
              submission, and championship moment in HD quality.
            </p>
            <a href={PPV_REPLAY_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-bold uppercase px-6 sm:px-8 py-5 sm:py-6 rounded-none w-full sm:w-auto"
              >
                <Play className="mr-2" size={18} />
                Watch CZ91 Replay
              </Button>
            </a>
          </div>

          {/* Right side - takes 3 columns, event promo card */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end scroll-reveal scroll-reveal-delay-1">
            <a
              href={PPV_REPLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full max-w-md block"
            >
              <div className="bg-neutral-900 shadow-2xl relative overflow-hidden group cursor-pointer">
                {/* Top accent bar */}
                <div className="h-1 bg-primary" />

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10">
                  {/* Replay badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <Play className="w-4 h-4 text-primary" fill="currentColor" />
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">
                      Replay Available Now
                    </span>
                  </div>

                  {/* Event title */}
                  <h3 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-white uppercase mb-2">
                    Combat Zone <span className="text-primary">91</span>
                  </h3>

                  {/* Date */}
                  <p className="text-neutral-400 mb-6">February 21, 2026 • SNHU Arena</p>

                  {/* Replay info */}
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-neutral-300">Full Event Replay</span>
                      <span className="text-white font-bold">$20</span>
                    </div>
                    <div className="py-2 text-neutral-400 text-sm">
                      Watch on demand • HD Quality • Unlimited replays
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center gap-2 bg-primary text-white font-bold uppercase tracking-wider py-4 group-hover:bg-primary/90 transition-colors">
                    <Play size={18} />
                    <span>Watch Replay</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
