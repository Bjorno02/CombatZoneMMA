import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

const BONUS_EVENT = "Combat Zone 94";

const BONUS_WINNERS = [
  {
    id: 1,
    name: "Evan Johnston",
    method: "TKO",
    round: 2,
    image: "/images/cz-94/Johnston-Bonus.jpg",
    bio: "Evan Johnston earned his bonus the hard way, closing the show with a brutal TKO in the second round.",
  },
  {
    id: 2,
    name: "Lindsay Rockwood",
    method: "TKO",
    round: 1,
    image: "/images/cz-94/Rockwood-Bonus.jpg",
    bio: "Lindsay Rockwood needed just one round, starting her finishing sequence with a beautiful kick to the head before sealing the TKO.",
  },
  {
    id: 3,
    name: "Chris Chiasson",
    method: "TKO",
    round: 1,
    image: "/images/cz-94/Chiasson-Bonus.jpg",
    bio: "Chris Chiasson scored a first-round TKO in his comeback to the sport, 20 years after his first fight.",
  },
];

export default function BonusWinnersPage() {
  useSEO({
    title: "Performance Bonus Winners | Combat Zone MMA",
    description:
      "Evan Johnston, Lindsay Rockwood, and Chris Chiasson earned Performance Bonuses presented by Muraco Group at Combat Zone 94.",
  });

  return (
    <PageLayout>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center bg-green-950 relative overflow-hidden">
        <Container className="relative z-10 pt-32 md:pt-40 pb-20 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-[#85bb65] tracking-widest uppercase mb-6">
              {BONUS_EVENT} • Presented by Muraco Group
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Chakra_Petch] text-white leading-[1.05]">
              PERFORMANCE <span className="text-[#85bb65]">BONUS</span> WINNERS
            </h1>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-700" />
      </section>

      {/* Winners */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-md md:max-w-none mx-auto">
            {BONUS_WINNERS.map((winner) => (
              <article key={winner.id} className="flex flex-col">
                <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
                  <img
                    src={winner.image}
                    alt={`${winner.name} - Performance Bonus winner at ${BONUS_EVENT}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 bg-neutral-900 border-t-4 border-green-700 p-6 md:p-8">
                  <div className="text-[#85bb65] text-sm font-bold uppercase tracking-widest mb-2">
                    {winner.method} • Round {winner.round}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold font-[Chakra_Petch] text-white uppercase mb-4">
                    {winner.name}
                  </h2>
                  <p className="text-neutral-400 leading-relaxed">{winner.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-neutral-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-white mb-3">
                WHO EARNS THE NEXT ONE?
              </h2>
              <p className="text-neutral-400 max-w-lg">
                Don't miss the next Combat Zone event, where the best performances of the night go
                home with a bonus.
              </p>
            </div>
            <Link href="/events">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 px-8 whitespace-nowrap"
              >
                View Upcoming Events
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
