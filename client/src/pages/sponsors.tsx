import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

export default function SponsorsPage() {
  useSEO(SEO_CONFIG.sponsors);
  return (
    <PageLayout>
      {/* Hero - Dark & Impactful */}
      <section className="min-h-[50vh] flex items-center justify-center bg-neutral-950 relative overflow-hidden">
        {/* Background gradient accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <Container className="relative z-10 pt-32 md:pt-40 pb-20 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-6">
              Partnership Opportunities
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Chakra_Petch] text-white leading-[1.05] mb-6">
              WHY <span className="text-primary">SPONSOR</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-8">
              Partner with New England's longest-running MMA promotion. 24 years of excellence.
              UFC-owned credibility. Real results.
            </p>

            <div className="flex justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-medium h-14 px-8 text-base"
                >
                  <Mail className="mr-2" size={18} />
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </Container>

        {/* Bottom red accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </section>

      {/* Metrics Bar */}
      <section className="py-16 bg-neutral-900 text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <div>
              <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] mb-2">24</div>
              <div className="text-neutral-400 text-sm">Years in operation</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] mb-2">90+</div>
              <div className="text-neutral-400 text-sm">Professional events hosted</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] mb-2">SNHU</div>
              <div className="text-neutral-400 text-sm">Arena - Manchester, NH</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] mb-2">UFC</div>
              <div className="text-neutral-400 text-sm">Veteran owned & operated</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Value Proposition */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-neutral-900 text-center mb-16">
              WHAT YOU GET
            </h2>

            <div className="space-y-0 border-t border-neutral-200">
              <div className="flex flex-col md:flex-row md:items-center py-8 border-b border-neutral-200 gap-4">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold font-[Chakra_Petch] text-neutral-900">
                    UFC-Level Standards
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-neutral-600">
                    Owned by Calvin Kattar, active UFC featherweight. Professional production at
                    every event.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center py-8 border-b border-neutral-200 gap-4">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold font-[Chakra_Petch] text-neutral-900">
                    Loyal Fan Base
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-neutral-600">
                    Fighters, coaches, gyms, and fans from across New England who show up event
                    after event.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center py-8 border-b border-neutral-200 gap-4">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold font-[Chakra_Petch] text-neutral-900">
                    24-Year Track Record
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-neutral-600">
                    New England's longest-running MMA promotion. Deep community roots and a
                    reputation for quality.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center py-8 border-b border-neutral-200 gap-4">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold font-[Chakra_Petch] text-neutral-900">
                    Brand Exposure
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-neutral-600">
                    In-venue signage, social media features, and live event visibility for your
                    brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Past Partners */}
      <section className="py-20 md:py-24 bg-white border-t border-neutral-200">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-neutral-500 tracking-wide mb-4">Past Partners</p>
            <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-neutral-900">
              Brands That Have Championed Combat Zone
            </h2>
          </div>

          {/* Past Sponsors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Encore Boston Harbor",
                image: "/images/encore.jpg",
                url: "https://www.encorebostonharbor.com/",
              },
              {
                name: "Big Night Entertainment",
                image: "/images/bignight.png",
                url: "https://www.bignightentertainment.com/",
              },
              {
                name: "Lobos 1707 Tequila",
                image: "/images/Lobos_1707_Tequila_Logo.jpg",
                url: "https://www.lobos1707.com/",
              },
            ].map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-8 bg-neutral-50 border border-neutral-200 hover:border-primary/30 hover:bg-white hover:shadow-lg transition-all"
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="h-24 md:h-32 w-auto object-contain grayscale group-hover:grayscale-0 transition-all mb-4"
                />
                <span className="text-sm font-bold text-neutral-600 group-hover:text-neutral-900 transition-colors text-center">
                  {sponsor.name}
                </span>
              </a>
            ))}
          </div>

          <p className="text-center text-neutral-500 text-sm mt-10">
            Thank you to all our past partners for their support over the years.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-neutral-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-white mb-6">
              Ready to reach our audience?
            </h2>
            <p className="text-xl text-neutral-400 mb-10">
              Contact our partnerships team to discuss how Combat Zone can help grow your brand.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium h-14 px-10"
              >
                <Mail className="mr-2" size={18} />
                Get in Touch
              </Button>
            </Link>
            <p className="text-sm text-neutral-500 mt-6">
              Inquiries reviewed by our partnerships team within 48 hours
            </p>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
