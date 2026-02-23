import { MapPin, Ticket, ChevronRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { TICKETMASTER_EVENT_URL } from "@/lib/constants";

export function EventSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bold tracking-[0.25em] text-xs uppercase">
              Next Live Event
            </span>
          </div>
          <Link href="/events">
            <Button
              variant="ghost"
              className="text-neutral-600 hover:text-neutral-900 font-bold uppercase tracking-wider text-sm group"
            >
              All Events
              <ChevronRight
                className="ml-1 group-hover:translate-x-1 transition-transform"
                size={16}
              />
            </Button>
          </Link>
        </div>

        {/* Main content - Side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Event Poster */}
          <div className="relative group flex justify-center lg:justify-start">
            {/* Shadow effect */}
            <div className="absolute inset-4 bg-neutral-900/10 blur-2xl rounded-lg" />

            <div className="relative">
              {/* Poster frame */}
              <div className="absolute -inset-3 border border-neutral-200" />
              <div className="absolute -inset-6 border border-neutral-100" />

              <img
                src="/images/CombatZone92Poster.png"
                alt="Combat Zone 92 Event Poster"
                className="relative w-full max-w-md h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02] shadow-xl"
                loading="eager"
              />
            </div>
          </div>

          {/* Right - Event Info */}
          <div>
            {/* Date badge */}
            <div className="inline-flex items-center gap-3 bg-neutral-100 border border-neutral-200 px-4 py-2 mb-6">
              <Calendar className="text-primary" size={16} />
              <span className="text-sm font-bold uppercase tracking-wider text-neutral-700">
                May 16, 2026
              </span>
            </div>

            {/* Title */}
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold font-[Chakra_Petch] leading-[0.85] mb-8 text-neutral-900">
              CZ<span className="text-primary">92</span>
            </h2>

            {/* Event details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-neutral-50 border-l-4 border-primary">
                <MapPin className="text-primary shrink-0" size={20} />
                <div>
                  <div className="font-bold text-neutral-900 text-lg">SNHU Arena</div>
                  <div className="text-sm text-neutral-500">Manchester, New Hampshire</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-neutral-50 border-l-4 border-neutral-200">
                <Clock className="text-neutral-400 shrink-0" size={20} />
                <div>
                  <div className="font-bold text-neutral-900 text-lg">5:00 PM EST</div>
                  <div className="text-sm text-neutral-500">Start Time</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-10 py-6 border-y border-neutral-200">
              <div>
                <div className="text-4xl font-bold font-[Chakra_Petch] text-primary">8</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Bouts</div>
              </div>
              <div>
                <div className="text-4xl font-bold font-[Chakra_Petch] text-neutral-900">4</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                  Title Fights
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider h-14 px-8"
                >
                  <Ticket className="mr-2" size={18} />
                  Get Tickets
                </Button>
              </a>
              <Link href="/fight-card">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-bold uppercase tracking-wider h-14 px-8"
                >
                  View Fight Card
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
