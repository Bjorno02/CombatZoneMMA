import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHero } from "@/components/layout/SectionHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Ticket, Clock, Bell } from "lucide-react";
import { Link } from "wouter";
import { TicketOptionsModal } from "@/components/TicketOptionsModal";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";
import { EventSchema } from "@/components/StructuredData";
import {
  PPV_LIVE_EVENT_NAME,
  PPV_LIVE_EVENT_NUMBER,
  PPV_LIVE_EVENT_DATE_ISO,
  PPV_LIVE_EVENT_DATE,
  PPV_LIVE_EVENT_VENUE,
} from "@/lib/constants";

// Official fight card poster (full lineup in one image). null until it drops —
// the page shows a "Fights To Be Announced" card instead.
// Example once released: "/images/cz-95/cz95-fight-card.jpg"
const FIGHT_CARD_IMAGE: string | null = null;
const BOUT_COUNT = 0;

// Doors open an hour before the first bout; shown only once the date is set.
const DOORS_OPEN_TIME = "4:00 PM ET";

export default function FightCardPage() {
  useSEO(SEO_CONFIG.fightCard);
  const hasDate = PPV_LIVE_EVENT_DATE_ISO !== null;
  const dateLabel = hasDate ? PPV_LIVE_EVENT_DATE : "Date To Be Announced";

  return (
    <PageLayout>
      {/* Structured Data — schema.org Event requires a start date, so only emit once announced */}
      {PPV_LIVE_EVENT_DATE_ISO && (
        <EventSchema
          name={`${PPV_LIVE_EVENT_NAME} - Fight Card`}
          description={`The fight card for ${PPV_LIVE_EVENT_NAME} at ${PPV_LIVE_EVENT_VENUE}.`}
          startDate={PPV_LIVE_EVENT_DATE_ISO}
          venue={{
            name: "SNHU Arena",
            address: "555 Elm Street",
            city: "Manchester",
            state: "NH",
          }}
        />
      )}

      <SectionHero
        label="Official Lineup"
        title="FIGHT CARD"
        highlightWord="CARD"
        description={`${PPV_LIVE_EVENT_NAME} • ${dateLabel}`}
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
                  <div className="font-bold text-neutral-900">{dateLabel}</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">
                    {hasDate ? "Saturday" : "Stay tuned"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">
                    {hasDate ? DOORS_OPEN_TIME : "TBA"}
                  </div>
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
                  <div className="font-bold text-neutral-900">{PPV_LIVE_EVENT_VENUE}</div>
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
              CZ{PPV_LIVE_EVENT_NUMBER} Official Lineup
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-neutral-900 uppercase">
              {FIGHT_CARD_IMAGE ? `${BOUT_COUNT} Bouts Confirmed` : "Matchups Coming Soon"}
            </h2>
          </div>

          {FIGHT_CARD_IMAGE ? (
            /* Full fight card poster */
            <div className="max-w-[58rem] mx-auto bg-white p-2 rounded border-2 border-primary/80 shadow-md">
              <img
                src={FIGHT_CARD_IMAGE}
                alt={`${PPV_LIVE_EVENT_NAME} official fight card — full lineup of all ${BOUT_COUNT} bouts`}
                width={1484}
                height={1920}
                className="w-full h-auto rounded-sm"
                loading="eager"
                decoding="async"
              />
            </div>
          ) : (
            /* Fights To Be Announced */
            <div className="relative bg-neutral-950 border border-neutral-800 shadow-2xl max-w-[58rem] mx-auto overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15),transparent_70%)]" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />

              <div className="relative z-10 flex flex-col items-center text-center px-8 py-16 md:py-24">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-primary font-bold tracking-[0.25em] text-xs uppercase">
                    Coming Soon
                  </span>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>

                <h3 className="text-4xl md:text-6xl font-bold font-[Chakra_Petch] text-white uppercase leading-tight mb-4">
                  Fights For CZ<span className="text-primary">{PPV_LIVE_EVENT_NUMBER}</span>
                  <br />
                  To Be Announced
                </h3>

                <p className="text-neutral-400 text-base md:text-lg max-w-xl mb-8">
                  The matchups are being locked in now. Stay tuned — the official CZ
                  {PPV_LIVE_EVENT_NUMBER} fight card drops soon.
                </p>

                <div className="inline-flex items-center gap-3 border-2 border-white/40 px-6 py-3 text-white/90 text-sm font-bold uppercase tracking-[0.2em]">
                  <Bell size={16} className="text-primary" />
                  Stay Tuned
                </div>
              </div>
            </div>
          )}

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
