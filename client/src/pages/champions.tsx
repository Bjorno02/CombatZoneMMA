import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Trophy, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

const CHAMPIONS = [
  {
    id: 1,
    name: "Connor Morrill",
    weightClass: "Bantamweight",
    division: "Kickboxing",
    defenses: 2,
    record: "5-0",
    image: "/images/CZ90ChampConnorMorrill.jpg",
    wonAt: "Combat Zone 88",
    hometown: "Manchester, NH",
    age: 25,
    stance: "Southpaw",
    bio: "KTA's Connor Morrill successfully defended his CZ Gold against Team Link's Austin Smith in the highly anticipated rematch at CZ91.",
    stats: {
      koTko: 4,
      decisions: 8,
      finishRate: "33%",
    },
    signature: "Footwork & Precision combinations",
  },
  {
    id: 2,
    name: "John Rivera",
    weightClass: "Lightweight",
    division: "MMA",
    defenses: 1,
    record: "5-2",
    image: "/images/CZ90ChampElvinJohnson.jpg",
    wonAt: "Combat Zone 89",
    hometown: "New England",
    age: null,
    stance: "Orthodox",
    bio: "John Rivera defended his CZ Lightweight title against Isaiah Longs at CZ91, proving himself as the top 155-pounder in the region.",
    stats: {
      koTko: 2,
      decisions: 3,
      finishRate: "40%",
    },
    signature: "Well-rounded game",
  },
  {
    id: 3,
    name: "Hussin Al Saadi",
    weightClass: "Flyweight",
    division: "MMA",
    defenses: 0,
    record: "5-2",
    image: "/images/CZCalvinKattarFiller.jpg",
    wonAt: "Combat Zone 91",
    hometown: "New England",
    age: null,
    stance: "Orthodox",
    bio: "Hussin Al Saadi captured the vacant CZ Flyweight championship in an extremely high-level fight at CZ91, showcasing elite skills at 125 lbs.",
    stats: {
      koTko: 2,
      decisions: 3,
      finishRate: "40%",
    },
    signature: "Technical striking & grappling",
  },
];

export default function ChampionsPage() {
  useSEO({
    title: "Current Champions | Combat Zone MMA",
    description:
      "Meet the current Combat Zone champions. Connor Morrill, John Rivera, and Hussin Al Saadi hold gold in Kickboxing and MMA.",
  });

  return (
    <PageLayout>
      {/* Hero - Gold/Championship themed */}
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden bg-neutral-950">
        {/* Background with championship gold accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />

        {/* Gold accent gradients */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-amber-500/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-amber-500/5 to-transparent" />

        {/* Trophy pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,215,0,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-amber-500/20 rotate-45" />
        <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-amber-500/20 rotate-12" />

        <Container className="relative z-10 pt-32 md:pt-40 pb-20 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <Trophy className="w-5 h-5 text-amber-500" />
              <p className="text-sm font-medium text-amber-500 tracking-widest uppercase">
                Title Holders
              </p>
              <Trophy className="w-5 h-5 text-amber-500" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Chakra_Petch] text-white leading-[1.05] mb-6">
              LATEST <span className="text-amber-500">CHAMPIONS</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              Fighters who touched gold at Combat Zone 91.
            </p>
          </div>
        </Container>

        {/* Bottom gold accent bar - championship theme */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500" />
      </section>

      {/* Champions Grid - Individual Profiles */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Championship diagonal stripes - like a belt */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(245,158,11,1) 35px, rgba(245,158,11,1) 70px)",
          }}
        />

        {/* Radial gold glow from center - spotlight effect */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient opacity-[0.88]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245,158,11,0.3) 0%, transparent 60%)",
          }}
        />

        {/* Corner laurel-inspired gold accents */}
        <div
          className="absolute top-0 left-0 w-96 h-96 opacity-[0.06]"
          style={{
            background:
              "conic-gradient(from 135deg at 0% 0%, rgba(245,158,11,0.8) 0deg, transparent 90deg)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.06]"
          style={{
            background:
              "conic-gradient(from -45deg at 100% 100%, rgba(245,158,11,0.8) 0deg, transparent 90deg)",
          }}
        />

        <Container className="relative z-10">
          <div className="space-y-24 md:space-y-32">
            {CHAMPIONS.map((champion, index) => (
              <div
                key={champion.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                    <img
                      src={champion.image}
                      alt={champion.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Champion badge */}
                    <div className="absolute top-4 left-4 bg-amber-500 text-black px-4 py-2 flex items-center gap-2">
                      <Trophy className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Champion</span>
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Name overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-2">
                        {champion.weightClass} • {champion.division}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-white uppercase">
                        {champion.name}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Info Side */}
                <div
                  className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  {/* Title Info Card */}
                  <div className="bg-neutral-900 text-white overflow-hidden">
                    {/* Gold accent bar */}
                    <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600" />

                    <div className="p-8 md:p-10">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <Trophy className="w-6 h-6 text-amber-500" />
                        <span className="text-amber-500 text-sm font-bold uppercase tracking-widest">
                          {champion.division} Champion
                        </span>
                      </div>

                      {/* Title won info */}
                      <p className="text-neutral-400 mb-8 text-lg">
                        Title won at <span className="text-white font-bold">{champion.wonAt}</span>
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-white/10">
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-white mb-1">
                            {champion.record}
                          </div>
                          <div className="text-xs uppercase tracking-widest text-neutral-500">
                            Record
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-amber-500 mb-1">
                            {champion.defenses === 0 ? "NEW" : champion.defenses}
                          </div>
                          <div className="text-xs uppercase tracking-widest text-neutral-500">
                            {champion.defenses === 0
                              ? "Champion"
                              : champion.defenses === 1
                                ? "Defense"
                                : "Defenses"}
                          </div>
                        </div>
                      </div>
                      <p className="text-neutral-400 mt-8 text-lg">{champion.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
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
                WATCH THE CHAMPIONS DEFEND
              </h2>
              <p className="text-neutral-400 max-w-lg">
                Don't miss the next Combat Zone event where our champions put their titles on the
                line.
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
