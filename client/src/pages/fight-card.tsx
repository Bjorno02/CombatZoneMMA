import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHero } from "@/components/layout/SectionHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Ticket, Clock, Trophy } from "lucide-react";
import { Link } from "wouter";
import { TICKETMASTER_EVENT_URL } from "@/lib/constants";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";
import { EventSchema } from "@/components/StructuredData";

// Fight card data - Combat Zone 91 (in order)
const FIGHTS = [
  {
    fighter1: { name: "Joe Poirier", record: "7-2", nickname: "" },
    fighter2: { name: "Oscar Jurado Sánchez", record: "4-2", nickname: "" },
    weightClass: "125 lbs",
    rounds: "5 x 5",
    type: "Pro MMA",
    title: "CZ Flyweight Championship",
    isMainEvent: true,
  },
  {
    fighter1: { name: "Lucas Moreira", record: "1-0", nickname: "" },
    fighter2: { name: "Gates Cook", record: "0-0", nickname: "" },
    weightClass: "170 lbs",
    rounds: "3 x 5",
    type: "Pro MMA",
    title: null,
    isMainEvent: false,
  },
  {
    fighter1: { name: "Isaiah Longs", record: "2-2", nickname: "" },
    fighter2: { name: "Jon Rivera", record: "4-2", nickname: "" },
    weightClass: "155 lbs",
    rounds: "5 x 3",
    type: "Amateur MMA",
    title: "CZ Lightweight Championship",
    isMainEvent: false,
  },
  {
    fighter1: { name: "Connor Morrill", record: "2-6", nickname: "" },
    fighter2: { name: "Austin Smith", record: "0-0", nickname: "" },
    weightClass: "135 lbs",
    rounds: "5 x 2",
    type: "Amateur MMA",
    title: "CZ Bantamweight Championship",
    isMainEvent: false,
  },
  {
    fighter1: { name: "Bruce Pacy", record: "3-5", nickname: "" },
    fighter2: { name: "Nico Mangano", record: "2-0", nickname: "" },
    weightClass: "265 lbs",
    rounds: "3 x 2",
    type: "Amateur Kickboxing",
    title: null,
    isMainEvent: false,
  },
  {
    fighter1: { name: "Angel Reyes", record: "1-2", nickname: "" },
    fighter2: { name: "Justin Santiago", record: "0-1", nickname: "" },
    weightClass: "135 lbs",
    rounds: "3 x 3",
    type: "Amateur MMA",
    title: null,
    isMainEvent: false,
  },
  {
    fighter1: { name: "Andre Carbonneau", record: "3-1", nickname: "" },
    fighter2: { name: "Lukman Obisesan", record: "3-1", nickname: "" },
    weightClass: "155 lbs",
    rounds: "3 x 3",
    type: "Amateur MMA",
    title: null,
    isMainEvent: false,
  },
  {
    fighter1: { name: "Sean Tobin", record: "3-1", nickname: "" },
    fighter2: { name: "Hussin Al-Saadi", record: "4-2", nickname: "" },
    weightClass: "125 lbs",
    rounds: "5 x 3",
    type: "Amateur MMA",
    title: "CZ Vacant Flyweight Championship",
    isMainEvent: false,
  },
];

export default function FightCardPage() {
  useSEO(SEO_CONFIG.fightCard);
  return (
    <PageLayout>
      {/* Structured Data */}
      <EventSchema
        name="Combat Zone 91 - Fight Card"
        description="The complete fight card for Combat Zone 91 featuring 7 MMA bouts and 1 kickboxing bout at SNHU Arena."
        startDate="2026-02-21T17:00:00-05:00"
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
        description="8 bouts • 7 MMA • 1 Kickboxing"
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
                  <div className="font-bold text-neutral-900">February 21, 2026</div>
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
      <section className="py-16 md:py-24 bg-neutral-50">
        <Container>
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-primary text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm">
              Fight Card
            </div>
            <div className="text-sm text-neutral-500 font-medium ml-2">8 Bouts</div>
            <div className="h-px flex-1 bg-neutral-300" />
          </div>

          <div className="space-y-4">
            {FIGHTS.map((bout, index) => (
              <div
                key={index}
                className={`bg-white border hover:border-primary/30 transition-all group ${
                  bout.isMainEvent
                    ? "border-primary/50 ring-1 ring-primary/20"
                    : "border-neutral-200"
                }`}
              >
                {/* Title banner if championship */}
                {bout.title && (
                  <div
                    className={`px-4 py-2 flex items-center justify-center gap-2 ${
                      bout.isMainEvent ? "bg-primary text-white" : "bg-amber-500 text-white"
                    }`}
                  >
                    <Trophy size={14} />
                    <span className="text-xs font-bold uppercase tracking-wider">{bout.title}</span>
                    {bout.isMainEvent && <span className="text-xs opacity-75">• Main Event</span>}
                  </div>
                )}

                <div className="grid grid-cols-[1fr_80px_1fr] md:grid-cols-[1fr_120px_1fr] items-center">
                  {/* Fighter 1 */}
                  <div className="p-4 md:p-8 text-right overflow-hidden">
                    <div className="font-bold font-[Chakra_Petch] text-sm md:text-xl text-neutral-900 uppercase truncate">
                      {bout.fighter1.name}
                    </div>
                    {bout.fighter1.nickname && (
                      <div className="text-xs text-primary font-medium italic truncate">
                        "{bout.fighter1.nickname}"
                      </div>
                    )}
                    <div className="text-xs md:text-sm text-neutral-500">
                      {bout.fighter1.record || "Debut"}
                    </div>
                  </div>

                  {/* VS Center */}
                  <div className="py-6 md:py-8 relative flex flex-col items-center justify-center">
                    <div
                      className={`w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-colors ${
                        bout.isMainEvent ? "bg-primary" : "bg-neutral-900 group-hover:bg-primary"
                      }`}
                    >
                      <span className="text-white font-bold font-[Chakra_Petch] text-sm md:text-xl">
                        VS
                      </span>
                    </div>
                    <div className="text-center mt-2 md:mt-3 space-y-0.5 md:space-y-1">
                      <div className="text-[10px] md:text-xs text-neutral-600 font-bold">
                        {bout.weightClass}
                      </div>
                      <div className="text-[10px] md:text-xs text-neutral-400 whitespace-nowrap">
                        {bout.rounds} • {bout.type}
                      </div>
                    </div>
                  </div>

                  {/* Fighter 2 */}
                  <div className="p-4 md:p-8 text-left overflow-hidden">
                    <div className="font-bold font-[Chakra_Petch] text-sm md:text-xl text-neutral-900 uppercase truncate">
                      {bout.fighter2.name}
                    </div>
                    {bout.fighter2.nickname && (
                      <div className="text-xs text-primary font-medium italic truncate">
                        "{bout.fighter2.nickname}"
                      </div>
                    )}
                    <div className="text-xs md:text-sm text-neutral-500">
                      {bout.fighter2.record || "Debut"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-900">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-white mb-4">
              DON'T MISS THE ACTION
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-8">
              8 explosive bouts featuring championship fights and top regional talent. Get your
              tickets now for Combat Zone 91 at SNHU Arena.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 px-8"
                >
                  <Ticket className="mr-2" size={20} />
                  Get Tickets
                </Button>
              </a>
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-bold uppercase tracking-wider h-14 px-8"
                >
                  Event Details
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
