import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHero } from "@/components/layout/SectionHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Ticket, Clock } from "lucide-react";
import { Link } from "wouter";
import { TicketOptionsModal } from "@/components/TicketOptionsModal";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";
import { EventSchema } from "@/components/StructuredData";

const BOUT_COUNT = 20;
const POSTER_IMAGE = "/images/cz-93/CZ93-Fight-Card.jpg";

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
            <div className="flex flex-col md:flex-row md:flex-wrap items-start md:items-center gap-4 md:gap-8">
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
                  <div className="font-bold text-neutral-900">4:00 PM ET</div>
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

            <TicketOptionsModal>
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-12 px-6">
                <Ticket className="mr-2" size={18} />
                Get Tickets
              </Button>
            </TicketOptionsModal>
          </div>
        </Container>
      </section>

      {/* Matchups Section */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <Container className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-3">
              CZ93 Official Lineup
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-neutral-900 uppercase">
              {BOUT_COUNT} Bouts Confirmed
            </h2>
          </div>

          {/* Official Fight Card Poster */}
          <div className="bg-white p-2 rounded border-2 border-primary/80 shadow-md max-w-[58rem] mx-auto">
            <div className="overflow-hidden rounded-sm">
              <img
                src={POSTER_IMAGE}
                alt="Combat Zone 93 official fight card"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-14 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <TicketOptionsModal>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-neutral-900 text-white font-bold uppercase tracking-wider h-14 px-10 rounded-none transition-all"
                >
                  <Ticket className="mr-2" size={18} />
                  Get Tickets
                </Button>
              </TicketOptionsModal>
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
