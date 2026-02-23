import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHero } from "@/components/layout/SectionHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Ticket, Clock } from "lucide-react";
import { Link } from "wouter";
import { TICKETMASTER_EVENT_URL } from "@/lib/constants";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";
import { EventSchema } from "@/components/StructuredData";

export default function FightCardPage() {
  useSEO(SEO_CONFIG.fightCard);
  return (
    <PageLayout>
      {/* Structured Data */}
      <EventSchema
        name="Combat Zone 92 - Fight Card"
        description="The complete fight card for Combat Zone 92 at SNHU Arena."
        startDate="2026-05-16T17:00:00-04:00"
        venue={{
          name: "SNHU Arena",
          address: "555 Elm Street",
          city: "Manchester",
          state: "NH",
        }}
        ticketUrl={TICKETMASTER_EVENT_URL}
      />

      <SectionHero
        label="Official Lineup"
        title="FIGHT CARD"
        highlightWord="CARD"
        description="Combat Zone 92 • May 16, 2026"
      />

      {/* Event Info Bar */}
      <section className="bg-white border-b border-neutral-200">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <Calendar className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">May 16, 2026</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">Saturday</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">5:00 PM ET</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">
                    Doors Open
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">SNHU Arena</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">
                    Manchester, NH
                  </div>
                </div>
              </div>
            </div>

            <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-12 px-6">
                <Ticket className="mr-2" size={18} />
                Get Tickets
              </Button>
            </a>
          </div>
        </Container>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 md:py-36 bg-white relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* CZ92 large text */}
            <div className="mb-8">
              <span className="text-[120px] md:text-[180px] lg:text-[220px] font-black font-[Chakra_Petch] text-neutral-100 leading-none select-none">
                92
              </span>
            </div>

            {/* Main content - overlaid */}
            <div className="-mt-32 md:-mt-44 relative">
              <p className="text-primary font-bold tracking-[0.3em] text-sm uppercase mb-4">
                Full Card Announcement
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Chakra_Petch] text-neutral-900 uppercase mb-6 leading-tight">
                Coming Soon
              </h2>

              <div className="w-24 h-1 bg-primary mx-auto mb-8" />

              <p className="text-lg text-neutral-600 leading-relaxed mb-12 max-w-xl mx-auto">
                Championship bouts and top regional matchups are being finalized. Check back soon
                for the complete CZ92 lineup.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 px-10"
                  >
                    Get Tickets
                  </Button>
                </a>
                <Link href="/events">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-bold uppercase tracking-wider h-14 px-10"
                  >
                    Event Info
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
