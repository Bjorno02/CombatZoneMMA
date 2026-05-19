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
        name="Combat Zone 93 - Fight Card"
        description="The complete fight card for Combat Zone 93 at SNHU Arena."
        startDate="2026-08-22T17:00:00-04:00"
        venue={{
          name: "SNHU Arena",
          address: "555 Elm Street",
          city: "Manchester",
          state: "NH",
        }}
      />

      <SectionHero
        label="Official Lineup"
        title="FIGHT CARD"
        highlightWord="CARD"
        description="Combat Zone 93 • August 22, 2026"
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
                  <div className="font-bold text-neutral-900">August 22, 2026</div>
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

      {/* Fight Card Section */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <Container className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-3">
              CZ93 Announced Bouts
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-neutral-900 uppercase">
              First Matchup Confirmed
            </h2>
          </div>

          {/* Announced Fight */}
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white p-2 md:p-3 border-2 border-primary/80 shadow-xl">
              <img
                src="/images/Smith-Castro.JPEG"
                alt="Smith vs Castro — Combat Zone 93 matchup"
                className="w-full h-auto block"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Stay tuned message */}
            <div className="mt-10 text-center">
              <p className="text-lg md:text-xl text-neutral-700 font-semibold">
                Stay tuned — more fights will be announced soon!
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-14 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-neutral-900 text-white font-bold uppercase tracking-wider h-14 px-10 rounded-none transition-all"
                >
                  <Ticket className="mr-2" size={18} />
                  Get Tickets
                </Button>
              </a>
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-bold uppercase tracking-wider h-14 px-10 rounded-none transition-all"
                >
                  Event Details
                </Button>
              </Link>
            </div>
          </div>
        </Container>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </section>
    </PageLayout>
  );
}
