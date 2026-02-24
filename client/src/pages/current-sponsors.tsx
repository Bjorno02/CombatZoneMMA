import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { SPONSORS } from "@/data/sponsors";

export default function CurrentSponsorsPage() {
  useSEO({
    title: "Current Sponsors",
    description: "Meet the official sponsors and partners of Combat Zone MMA.",
  });

  return (
    <PageLayout>
      {/* Hero */}
      <section className="min-h-[40vh] flex items-center justify-center bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <Container className="relative z-10 pt-32 md:pt-40 pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-6">
              Official Partners
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Chakra_Petch] text-white leading-[1.05] mb-6">
              CURRENT <span className="text-primary">SPONSORS</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              Thank you to our sponsors for supporting Combat Zone MMA.
            </p>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </section>

      {/* Sponsors Grid */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPONSORS.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-neutral-50 border border-neutral-200 p-8 flex flex-col items-center justify-center hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="h-32 w-full flex items-center justify-center mb-4">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-neutral-900 text-center group-hover:text-primary transition-colors">
                  {sponsor.name}
                </h3>
                <ExternalLink
                  className="mt-2 text-neutral-300 group-hover:text-primary transition-colors"
                  size={14}
                />
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-white mb-4">
              BECOME A SPONSOR
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Partner with New England's longest-running MMA promotion and reach our engaged
              audience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/sponsors">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-bold uppercase tracking-wider h-14 px-8"
                >
                  Why Sponsor
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 px-8"
                >
                  <Mail className="mr-2" size={18} />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
