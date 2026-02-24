import { Button } from "@/components/ui/button";
import { Award, Users, Heart, MapPin } from "lucide-react";
import { Link } from "wouter";

export function AboutSection() {
  return (
    <section className="pt-16 md:pt-24 lg:pt-32 pb-40 md:pb-52 lg:pb-64 relative overflow-hidden z-20">
      {/* Bold geometric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100" />

      {/* Diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            #dc2626 40px,
            #dc2626 42px
          )`,
        }}
      />

      {/* Large geometric accent shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/[0.08] via-primary/[0.03] to-transparent -tranneutral-y-1/3 tranneutral-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-neutral-900/[0.03] to-transparent tranneutral-y-1/3 -tranneutral-x-1/4" />

      {/* Corner accent bars - all 4 corners */}
      {/* Top Left */}
      <div className="absolute top-0 left-0 w-2 h-40 bg-gradient-to-b from-primary to-transparent" />
      <div className="absolute top-0 left-0 w-40 h-2 bg-gradient-to-r from-primary to-transparent" />
      {/* Top Right */}
      <div className="absolute top-0 right-0 w-2 h-40 bg-gradient-to-b from-primary to-transparent" />
      <div className="absolute top-0 right-0 w-40 h-2 bg-gradient-to-l from-primary to-transparent" />
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-2 h-40 bg-gradient-to-t from-primary to-transparent" />
      <div className="absolute bottom-0 left-0 w-40 h-2 bg-gradient-to-r from-primary to-transparent" />
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-2 h-40 bg-gradient-to-t from-primary to-transparent" />
      <div className="absolute bottom-0 right-0 w-40 h-2 bg-gradient-to-l from-primary to-transparent" />

      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="flex justify-center">
          {/* Overlapping Cards Container */}
          <div className="relative w-full max-w-6xl">
            {/* Mobile: Stack layout, Desktop: Overlap */}
            <div className="flex flex-col md:block">
              {/* Image Card - same size as text card, pushed up higher */}
              <div className="w-full md:w-[55%] md:ml-auto md:-mt-[7%] aspect-[4/3] relative overflow-hidden shadow-2xl transform -rotate-0 md:rotate-1 mb-6 md:mb-0 group order-1 md:order-none">
                <img
                  src="/images/CZCalvinKattarFiller.jpg"
                  alt="Calvin Kattar - Combat Zone Owner"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Corner frame accent */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/50" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/50" />
              </div>

              {/* Text Card - same width as image, contained within section */}
              <div className="relative md:absolute md:top-[0%] md:left-0 bg-white shadow-2xl p-8 md:p-10 lg:p-12 w-full md:w-[55%] transform rotate-0 md:-rotate-1 z-30 border-t-4 border-primary order-2 md:order-none">
                {/* Label */}
                <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
                  Our Story
                </span>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 font-[Chakra_Petch] uppercase leading-[0.9] mb-6">
                  From the Octagon
                  <br />
                  <span className="text-primary">to Ownership</span>
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-neutral-600 mb-8 leading-relaxed">
                  UFC veteran <span className="font-bold text-neutral-900">Calvin Kattar</span>{" "}
                  brings his firsthand experience from the highest levels of competition to create
                  opportunities for the next generation of fighters. A{" "}
                  <span className="font-bold text-neutral-900">family-owned</span> operation built
                  on passion, respect, and an unwavering commitment to the sport.
                </p>

                {/* Stats/Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center shrink-0">
                      <Award className="text-primary" size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900 text-sm uppercase">
                        UFC Veteran
                      </div>
                      <div className="text-xs text-neutral-500">Calvin Kattar</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center shrink-0">
                      <Users className="text-primary" size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900 text-sm uppercase">
                        Family Owned
                      </div>
                      <div className="text-xs text-neutral-500">Since 2013</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center shrink-0">
                      <Heart className="text-primary" size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900 text-sm uppercase">
                        Fighter First
                      </div>
                      <div className="text-xs text-neutral-500">Built for fighters</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900 text-sm uppercase">
                        New England
                      </div>
                      <div className="text-xs text-neutral-500">24+ years</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-bold uppercase px-8 py-5 text-sm"
                  >
                    Read Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
