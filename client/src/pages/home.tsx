import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { EventCountdown } from "@/components/home/EventCountdown";
import { EventSection } from "@/components/home/EventSection";
import { ChampionsSection } from "@/components/home/ChampionsSection";
import { MerchSection } from "@/components/home/MerchSection";
import { AboutSection } from "@/components/home/AboutSection";
import { PPVSection } from "@/components/home/PPVSection";
import { WhatIsCombatZoneSection } from "@/components/home/WhatIsCombatZoneSection";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "wouter";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";
import { OrganizationSchema, WebsiteSchema } from "@/components/StructuredData";

export default function Home() {
  useSEO(SEO_CONFIG.home);
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white font-sans">
      {/* Structured Data for SEO */}
      <OrganizationSchema />
      <WebsiteSchema />

      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Event Countdown */}
        <EventCountdown />

        {/* Stats Banner */}
        <section className="relative z-20 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-primary to-red-700 bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" />

          {/* Diagonal stripes overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 20px)",
            }}
          />

          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-full bg-white/10 blur-3xl" />
          <div className="absolute top-0 right-1/4 w-64 h-full bg-white/10 blur-3xl" />

          {/* Top edge highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          {/* Bottom edge shadow */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30" />

          <div className="relative max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 py-8 md:py-10">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
              {/* Stat items with glow */}
              <div className="flex items-center gap-4 px-6 group">
                <span className="text-4xl md:text-5xl font-black font-[Chakra_Petch] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all">
                  24+
                </span>
                <span className="text-sm uppercase tracking-wider font-bold opacity-90 leading-tight">
                  Years
                  <br />
                  Running
                </span>
              </div>

              <div className="hidden md:flex items-center">
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
              </div>

              <div className="flex items-center gap-4 px-6 group">
                <span className="text-4xl md:text-5xl font-black font-[Chakra_Petch] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all">
                  90+
                </span>
                <span className="text-sm uppercase tracking-wider font-bold opacity-90 leading-tight">
                  Events
                  <br />
                  Hosted
                </span>
              </div>

              <div className="hidden md:flex items-center">
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
              </div>

              <div className="flex items-center gap-4 px-6 group">
                <span className="text-4xl md:text-5xl font-black font-[Chakra_Petch] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all">
                  UFC
                </span>
                <span className="text-sm uppercase tracking-wider font-bold opacity-90 leading-tight">
                  Veteran
                  <br />
                  Owned
                </span>
              </div>

              <div className="hidden md:flex items-center">
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
              </div>

              <div className="flex items-center gap-4 px-6 group">
                <span className="text-4xl md:text-5xl font-black font-[Chakra_Petch] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all">
                  #1
                </span>
                <span className="text-sm uppercase tracking-wider font-bold opacity-90 leading-tight">
                  Regional
                  <br />
                  Promotion
                </span>
              </div>
            </div>
          </div>
        </section>

        <EventSection />

        <PPVSection />

        <WhatIsCombatZoneSection />

        <ChampionsSection />

        <AboutSection />

        <MerchSection />

        {/* Sponsor CTA */}
        <section className="py-20 md:py-28 bg-zinc-900 text-center relative overflow-hidden">
          {/* Star separator */}
          <div className="absolute top-0 left-0 right-0 h-6 flex items-center justify-center z-[1]">
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

          {/* Professional Texture - same as Champions section */}
          <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_21px)]"></div>

          {/* Subtle Dot Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          {/* Gradient Mesh for Depth */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.4),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.3),transparent_50%)]"></div>

          {/* Red line at bottom of section */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>

          <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 lg:px-16">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm block mb-4">
              Partnership Opportunities
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[Chakra_Petch] uppercase leading-[0.9] mb-6">
              Align Your Brand
              <br />
              With <span className="text-primary">Greatness</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
              Connect with a passionate, loyal audience that can only be found at Combat Zone.
            </p>
            <Link href="/sponsors">
              <Button className="bg-white text-neutral-900 hover:bg-neutral-200 font-bold uppercase px-8 py-6 text-lg">
                Become a Sponsor
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
