import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";
import { TICKETMASTER_EVENT_URL } from "@/lib/constants";

// May 16, 2026 at 5:00 PM EDT
const EVENT_DATE = new Date("2026-05-16T17:00:00-04:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const difference = EVENT_DATE.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  const timeBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="relative z-20 bg-neutral-950 py-12 md:py-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Animated pulse effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bold tracking-[0.25em] text-xs uppercase">
              Next Event
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-white uppercase">
            CZ<span className="text-primary">92</span> Countdown
          </h2>
          <p className="text-neutral-500 text-sm mt-2">May 16, 2026 • 5:00 PM EDT • SNHU Arena</p>
        </div>

        {/* Countdown blocks */}
        <div className="flex justify-center gap-3 md:gap-6 mb-8">
          {timeBlocks.map((block, index) => (
            <div key={block.label} className="flex items-center">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative bg-neutral-900 border border-neutral-800 group-hover:border-primary/50 transition-colors px-4 md:px-8 py-4 md:py-6 min-w-[70px] md:min-w-[100px]">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-black font-[Chakra_Petch] text-white tabular-nums">
                    {String(block.value).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-500 mt-1 text-center">
                    {block.label}
                  </div>
                </div>
              </div>

              {/* Separator */}
              {index < timeBlocks.length - 1 && (
                <div className="text-2xl md:text-4xl font-bold text-primary mx-1 md:mx-2 animate-pulse">
                  :
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-12 md:h-14 px-8 md:px-10"
            >
              <Ticket className="mr-2" size={18} />
              Get Tickets Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
