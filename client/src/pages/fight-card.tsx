import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHero } from "@/components/layout/SectionHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Ticket, Clock } from "lucide-react";
import { Link } from "wouter";
import { TicketOptionsModal } from "@/components/TicketOptionsModal";
import { cn } from "@/lib/utils";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";
import { EventSchema } from "@/components/StructuredData";

const MATCHUPS = [
  { id: 1, image: "/images/cz-93/Hargrove-Schmelzer.JPEG", fighters: "Hargrove vs Schmelzer" },
  { id: 2, image: "/images/cz-93/Bilodeau-Reza.JPEG", fighters: "Bilodeau vs Reza" },
  { id: 3, image: "/images/cz-93/Darling-Wasi.JPEG", fighters: "Darling vs Wasi" },
  { id: 4, image: "/images/cz-93/MacNeil-Batista.JPEG", fighters: "MacNeil vs Batista" },
  { id: 5, image: "/images/cz-93/Damico-Duffy.JPEG", fighters: "D'Amico vs Duffy" },
  { id: 6, image: "/images/cz-93/Fitzpatrick-Hanley.JPEG", fighters: "Fitzpatrick vs Hanley" },
  { id: 7, image: "/images/cz-93/Johnson-Cetoute.JPEG", fighters: "Johnson vs Cetoute" },
  { id: 8, image: "/images/cz-93/Kench-Boucher.JPEG", fighters: "Kench vs Boucher" },
  { id: 9, image: "/images/cz-93/Looney-Teer.JPEG", fighters: "Looney vs Teer" },
  { id: 10, image: "/images/cz-93/Morrill-Villeges.JPEG", fighters: "Morrill vs Villeges" },
  { id: 11, image: "/images/cz-93/Noleto-Reese.JPEG", fighters: "Noleto vs Reese" },
  {
    id: 12,
    image: "/images/cz-93/Whitehouse-Bernardini.JPEG",
    fighters: "Whitehouse vs Bernardini",
  },
  { id: 13, image: "/images/cz-93/Smith-Ellis.JPEG", fighters: "Smith vs Ellis" },
  { id: 14, image: "/images/cz-93/Medina-Roberts.JPEG", fighters: "Medina vs Roberts" },
  { id: 15, image: "/images/cz-93/Spiewak-Fagan.JPEG", fighters: "Spiewak vs Fagan" },
];

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
              {MATCHUPS.length} Bouts Confirmed
            </h2>
          </div>

          {/* Matchups Grid - 2 columns on tablet, stacks on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-y-12 max-w-[58rem] mx-auto">
            {MATCHUPS.map((matchup, index) => {
              const isOddCount = MATCHUPS.length % 2 === 1;
              const isFirstOddRow = isOddCount && index === 0;
              const effectiveIndex = isOddCount ? index - 1 : index;
              return (
                <div
                  key={matchup.id}
                  className={cn(
                    "group relative bg-white p-2 rounded border-2 border-primary/80 hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl max-w-[420px] mx-auto",
                    isFirstOddRow
                      ? "md:col-span-2 md:mx-auto"
                      : effectiveIndex % 2 === 0
                        ? "md:mr-auto md:ml-0"
                        : "md:ml-auto md:mr-0"
                  )}
                >
                  {/* Matchup Image - natural aspect ratio */}
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={matchup.image}
                      alt={matchup.fighters}
                      className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              );
            })}
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
