import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";

export function MerchSection() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32 bg-zinc-900 relative overflow-visible z-10">
      {/* Professional Texture - same as Champions section */}
      <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_21px)]"></div>

      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Gradient Mesh for Depth */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.4),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.3),transparent_50%)]"></div>

      {/* Clean divider line at TOP */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
      <div className="absolute top-0 left-1/2 -tranneutral-x-1/2 w-24 h-1 bg-primary"></div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <Star className="text-primary" size={14} />
            <span className="text-white/80 text-sm font-bold uppercase tracking-wider">
              Official Gear
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[Chakra_Petch] text-white uppercase leading-[0.9] mb-6">
            Shop <span className="text-primary">Combat Zone</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Premium apparel for real fight fans.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Featured Product Image */}
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            <div className="relative bg-black rounded-lg overflow-hidden border border-white/10">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary z-10" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary z-10" />

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1.5 z-20 text-xs font-bold uppercase tracking-wider">
                New Collection
              </div>

              <img
                src="/images/CZMERCH.JPG"
                alt="Combat Zone Official Merchandise"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right - CTA */}
          <div className="text-white flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] uppercase mb-4">
              Official Merchandise
            </h3>

            <Link href="/shop">
              <Button
                size="lg"
                className="w-full bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider h-16 text-lg group"
              >
                <ShoppingBag className="mr-3" size={22} />
                Shop Now
                <ArrowRight
                  className="ml-3 group-hover:translate-x-1 transition-transform"
                  size={22}
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Star separator at BOTTOM - closer together */}
      <div className="absolute bottom-0 left-0 right-0 h-6 flex items-center justify-center z-[1]">
        <div className="flex items-center gap-4 w-full max-w-4xl px-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3 h-3 fill-primary/40 text-primary/40" />
            ))}
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
