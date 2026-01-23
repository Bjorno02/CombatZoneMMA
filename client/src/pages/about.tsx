import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Trophy, MapPin } from "lucide-react";
import { Link } from "wouter";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

// @ts-ignore
import kattarImg from "@assets/IMAGES/KattarContact.avif";

export default function AboutPage() {
  useSEO(SEO_CONFIG.about);
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-neutral-950" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 transform skew-x-[-6deg] origin-top-right" />

        <Container className="relative z-10 pt-32 md:pt-40 pb-20 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-6">
              Est. 2000
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Chakra_Petch] text-white leading-[1.05] mb-6">
              NEW ENGLAND'S <span className="text-primary">FIGHT HOME</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              New England's longest running MMA and kickboxing promotion, owned and operated by UFC
              veteran Calvin Kattar.
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </section>

      {/* Brand Identity Snapshot */}
      <section className="bg-white border-b border-neutral-200">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-200">
            {[
              { icon: Trophy, label: "24+ Years Running" },
              { icon: Users, label: "UFC Veteran Owned" },
              { icon: Target, label: "90+ Events Hosted" },
              { icon: MapPin, label: "SNHU Arena" },
            ].map((item, i) => (
              <div key={i} className="py-8 md:py-10 text-center px-4">
                <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-neutral-900 mb-8">
              THE STORY
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                For the past 24 years, Combat Zone has showcased top local talent in mixed martial
                arts throughout the New England region. Pro and amateur kickboxing was added into
                the mix and has been a perfect fit for fight fans.
              </p>
              <p>
                Currently, Combat Zone promotes events exclusively at SNHU Arena in Manchester, NH.
                Providing a stage for the area's top local talent is what we do.
              </p>
              <p>
                In 2020, UFC featherweight Calvin Kattar acquired Combat Zone, bringing firsthand
                experience from the sport's highest level back to the regional scene where his
                career began.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative bg-neutral-900 flex items-center justify-center min-h-[300px] overflow-hidden">
                  <img
                    src={kattarImg}
                    alt="Calvin Kattar"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
                    <h3 className="text-2xl font-bold font-[Chakra_Petch] text-white">
                      Calvin Kattar
                    </h3>
                    <p className="text-primary text-sm uppercase tracking-widest mt-1">
                      Owner & Operator
                    </p>
                  </div>
                </div>
                <div className="p-12 md:p-16 flex flex-col justify-center">
                  <h4 className="text-sm uppercase tracking-widest text-primary mb-4">
                    Why It Matters
                  </h4>
                  <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                    Before reaching the UFC, Kattar worked as a promoter at Combat Zone while
                    competing on the regional circuit. He understands both sides of the business and
                    what fighters need to develop.
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    His ownership brings UFC-level standards to regional MMA, including better
                    matchmaking, improved fighter treatment, and a clearer pathway to larger
                    organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary mb-4">Mission</h3>
              <p className="text-2xl font-[Chakra_Petch] text-neutral-900 leading-snug">
                Provide New England's combat sports athletes with a professional platform to develop
                their skills, build their records, and advance their careers.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary mb-4">Vision</h3>
              <p className="text-2xl font-[Chakra_Petch] text-neutral-900 leading-snug">
                To be the region's top developmental organization for MMA and kickboxing talent.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-neutral-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-white mb-12 text-center">
              WHAT WE STAND FOR
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: "Integrity", desc: "Fair and competitive matchmaking" },
                { title: "Safety", desc: "Fighter health and wellbeing first" },
                { title: "Quality", desc: "Professional production standards" },
                { title: "Community", desc: "Rooted in New England" },
              ].map((value, i) => (
                <div key={i} className="text-center">
                  <h4 className="font-[Chakra_Petch] font-bold text-white text-lg mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-neutral-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Legacy & Impact */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-neutral-900 mb-8">
              LEGACY & IMPACT
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                Over 90 events and hundreds of fighters have come through Combat Zone since 2000.
                Alumni have gone on to compete in the UFC, Bellator, PFL, and other major
                organizations.
              </p>
              <p>
                At a Combat Zone event you can expect action packed fights in a fun and exciting
                environment that any fight fan would enjoy.
              </p>
              <p>Come check out an event for yourself and see the action live at Combat Zone.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* New England Connection */}
      <section className="relative py-20 md:py-28 bg-neutral-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-[Chakra_Petch] text-white mb-6">
              THIS IS <span className="text-primary">NEW ENGLAND</span>
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Combat Zone operates out of SNHU Arena in Manchester, New Hampshire, drawing fighters
              and fans from across the Northeast. Massachusetts, Rhode Island, Connecticut, Maine,
              Vermont, and New Hampshire are all represented on the regional stage.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-neutral-900">
                Experience Combat Zone
              </h2>
              <p className="text-neutral-600 mt-2">Join us at SNHU Arena for the next event.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/events">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 px-8"
                >
                  Events
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link href="/fight-card">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-bold uppercase tracking-wider h-14 px-8"
                >
                  Fight Card
                </Button>
              </Link>
              <Link href="/vip">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-bold uppercase tracking-wider h-14 px-8"
                >
                  VIP
                </Button>
              </Link>
              <Link href="/sponsors">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-bold uppercase tracking-wider h-14 px-8"
                >
                  Sponsor
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
