import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHero } from "@/components/layout/SectionHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { TICKETMASTER_EVENT_URL } from "@/lib/constants";
import { Calendar, MapPin, Ticket, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";
import { EventSchema } from "@/components/StructuredData";

const EVENT_DATE = "2026-02-21T17:00:00-05:00";

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const target = new Date(EVENT_DATE).getTime();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}

export default function EventsPage() {
  useSEO(SEO_CONFIG.events);
  const { days, hours, minutes, seconds } = useCountdown();
  return (
    <PageLayout>
      {/* Structured Data */}
      <EventSchema
        name="Combat Zone 91"
        description="New England's premier MMA event featuring top regional fighters competing at SNHU Arena."
        startDate="2026-02-21T19:00:00-05:00"
        venue={{
          name: "SNHU Arena",
          address: "555 Elm Street",
          city: "Manchester",
          state: "NH",
        }}
        ticketUrl={TICKETMASTER_EVENT_URL}
        imageUrl="https://combatzonemma.com/opengraph.jpg"
      />
      <SectionHero
        label="Live Events"
        title="UPCOMING EVENTS"
        highlightWord="EVENTS"
        description="Experience New England's premier MMA promotion live at SNHU Arena"
      />

      {/* Next Event Quick Info Bar */}
      <section className="bg-white border-b border-neutral-200">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                Next Event
              </span>
              <span className="text-neutral-400 hidden sm:inline">|</span>
              <span className="font-bold font-[Chakra_Petch] text-xl text-primary">CZ91</span>
              <span className="text-neutral-400 hidden sm:inline">|</span>
              <span className="text-neutral-600">February 21, 2026</span>
            </div>
            <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-10 px-6 text-sm">
                <Ticket className="mr-2" size={16} />
                Get Tickets
              </Button>
            </a>
          </div>
        </Container>
      </section>

      {/* Featured Event - CZ91 */}
      <section className="py-16 md:py-24 bg-neutral-50 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-neutral-200/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <Container className="relative z-10">
          {/* Countdown */}
          <div className="flex flex-col items-center mb-8">
            <span className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-3">
              Event Starts In
            </span>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="text-center">
                <div className="bg-neutral-900 text-white font-bold font-[Chakra_Petch] text-2xl md:text-3xl px-4 py-2 min-w-[60px] md:min-w-[70px]">
                  {days}
                </div>
                <span className="text-xs text-neutral-500 uppercase tracking-wider mt-1 block">
                  Days
                </span>
              </div>
              <span className="text-neutral-300 text-2xl font-light">:</span>
              <div className="text-center">
                <div className="bg-neutral-900 text-white font-bold font-[Chakra_Petch] text-2xl md:text-3xl px-4 py-2 min-w-[60px] md:min-w-[70px]">
                  {hours}
                </div>
                <span className="text-xs text-neutral-500 uppercase tracking-wider mt-1 block">
                  Hours
                </span>
              </div>
              <span className="text-neutral-300 text-2xl font-light">:</span>
              <div className="text-center">
                <div className="bg-neutral-900 text-white font-bold font-[Chakra_Petch] text-2xl md:text-3xl px-4 py-2 min-w-[60px] md:min-w-[70px]">
                  {minutes}
                </div>
                <span className="text-xs text-neutral-500 uppercase tracking-wider mt-1 block">
                  Min
                </span>
              </div>
              <span className="text-neutral-300 text-2xl font-light">:</span>
              <div className="text-center">
                <div className="bg-neutral-900 text-white font-bold font-[Chakra_Petch] text-2xl md:text-3xl px-4 py-2 min-w-[60px] md:min-w-[70px]">
                  {seconds}
                </div>
                <span className="text-xs text-neutral-500 uppercase tracking-wider mt-1 block">
                  Sec
                </span>
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-24 bg-neutral-300" />
            <div className="bg-primary text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm">
              Featured Event
            </div>
            <div className="h-px flex-1 max-w-24 bg-neutral-300" />
          </div>

          {/* Central Poster Display */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div className="relative group max-w-3xl">
              <img
                src="/images/CombatZone91Poster.png"
                alt="Combat Zone 91 Event Poster"
                className="w-full h-auto object-contain shadow-[0_25px_80px_-20px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
            </div>
          </div>

          {/* Event Details Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-neutral-200 shadow-xl p-8 md:p-10">
              {/* Title */}
              <div className="text-center mb-8">
                <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
                  Next Live Event
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-neutral-900 mt-3">
                  COMBAT ZONE <span className="text-primary">91</span>
                </h2>
              </div>

              {/* Event Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-200">
                  <div className="w-12 h-12 bg-white flex items-center justify-center border border-neutral-200">
                    <Calendar className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">February 21, 2026</div>
                    <div className="text-sm text-neutral-500">Saturday Night</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-200">
                  <div className="w-12 h-12 bg-white flex items-center justify-center border border-neutral-200">
                    <Clock className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">5:00 PM EST</div>
                    <div className="text-sm text-neutral-500">Start Time</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-200">
                  <div className="w-12 h-12 bg-white flex items-center justify-center border border-neutral-200">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">SNHU Arena</div>
                    <div className="text-sm text-neutral-500">Manchester, NH</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 text-lg group"
                  >
                    <Ticket className="mr-2" size={20} />
                    Get Tickets
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </Button>
                </a>

                <Link href="/fight-card">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-bold uppercase tracking-wider h-14 text-lg"
                  >
                    View Fight Card
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Upcoming Events Schedule */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-neutral-900 text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm">
              2026 Schedule
            </div>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          {/* Events List */}
          <div className="space-y-4">
            {/* CZ 91 - Confirmed */}
            <div className="relative bg-white border border-neutral-200 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 pl-8 md:pl-10">
                <div className="flex items-center gap-6 md:gap-10 mb-4 md:mb-0">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-neutral-900">
                      CZ91
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-12 bg-neutral-200" />
                  <div>
                    <div className="font-bold text-neutral-900">February 21, 2026</div>
                    <div className="text-sm text-neutral-500">Saturday</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-neutral-600">
                  <MapPin size={18} className="text-neutral-400" />
                  <div>
                    <div className="font-medium">SNHU Arena</div>
                    <div className="text-sm text-neutral-500">Manchester, NH</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CZ 92 - TBD */}
            <div className="relative bg-white border border-neutral-200 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-neutral-200" />
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 pl-8 md:pl-10">
                <div className="flex items-center gap-6 md:gap-10 mb-4 md:mb-0">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-neutral-900">
                      CZ92
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-12 bg-neutral-200" />
                  <div>
                    <div className="font-bold text-neutral-400">May 16, 2026</div>
                    <div className="text-sm text-neutral-400">Saturday</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-neutral-600">
                  <MapPin size={18} className="text-neutral-400" />
                  <div>
                    <div className="font-medium">SNHU Arena</div>
                    <div className="text-sm text-neutral-500">Manchester, NH</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CZ 93 - TBD */}
            <div className="relative bg-white border border-neutral-200 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-neutral-200" />
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 pl-8 md:pl-10">
                <div className="flex items-center gap-6 md:gap-10 mb-4 md:mb-0">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-neutral-900">
                      CZ93
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-12 bg-neutral-200" />
                  <div>
                    <div className="font-bold text-neutral-400">August 22, 2026</div>
                    <div className="text-sm text-neutral-400">Saturday</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-neutral-600">
                  <MapPin size={18} className="text-neutral-400" />
                  <div>
                    <div className="font-medium">SNHU Arena</div>
                    <div className="text-sm text-neutral-500">Manchester, NH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Events Notice */}
          <div className="mt-8 text-center">
            <p className="text-neutral-500 text-sm">
              Additional events will be announced throughout the year
            </p>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
