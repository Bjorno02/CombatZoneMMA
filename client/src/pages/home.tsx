import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { EventSection } from "@/components/home/EventSection";
import { ChampionsSection } from "@/components/home/ChampionsSection";
import { MerchSection } from "@/components/home/MerchSection";
import { AboutSection } from "@/components/home/AboutSection";
import { PPVSection } from "@/components/home/PPVSection";
import { WhatIsCombatZoneSection } from "@/components/home/WhatIsCombatZoneSection";
import { Trophy, Star, Users, History } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white font-sans">
      <Navbar />
      
      <main>
        {/* 1. HERO: Carousel with interactive slides - Maximum visual impact */}
        <Hero />

        {/* 2. CREDIBILITY STRIP: Quick stats/trust signals - Builds immediate credibility */}
        <section className="bg-primary py-10 md:py-12 text-white relative z-20 overflow-hidden">
            {/* Flowing transition from hero */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 to-transparent"></div>
            {/* Flowing transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 via-white/5 to-transparent"></div>
            
            <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/20">
                    <div className="flex flex-col items-center">
                        <History className="mb-2 w-8 h-8 opacity-80" />
                        <span className="text-3xl font-bold font-[Chakra_Petch]">24+</span>
                        <span className="text-xs uppercase tracking-widest font-bold opacity-80">Years Running</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="mb-2 w-8 h-8 opacity-80" />
                        <span className="text-3xl font-bold font-[Chakra_Petch]">90+</span>
                        <span className="text-xs uppercase tracking-widest font-bold opacity-80">Events Hosted</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Star className="mb-2 w-8 h-8 opacity-80" />
                        <span className="text-3xl font-bold font-[Chakra_Petch]">UFC</span>
                        <span className="text-xs uppercase tracking-widest font-bold opacity-80">Veteran Owned</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Trophy className="mb-2 w-8 h-8 opacity-80" />
                        <span className="text-3xl font-bold font-[Chakra_Petch]">#1</span>
                        <span className="text-xs uppercase tracking-widest font-bold opacity-80">Regional Promotion</span>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. EVENTS: Upcoming & Featured - Primary CTA (tickets), most important content */}
        <EventSection />

        {/* 4. PPV: Pay-Per-View section */}
        <PPVSection />

        {/* 5. WHAT IS COMBAT ZONE: About section */}
        <WhatIsCombatZoneSection />

        {/* 6. CHAMPIONS: Title defenders from last event - Social proof, excitement */}
        <ChampionsSection />

        {/* 7. ABOUT: Mission & Story - Builds deeper brand connection */}
        <AboutSection />

        {/* 8. STORE: Merch - Secondary action, commerce opportunity */}
        <MerchSection />

        {/* 9. SPONSOR CTA: Business opportunity - Least urgent for general visitors */}
        <section className="py-24 md:py-32 bg-slate-900 text-center relative overflow-hidden -mt-8">
             {/* Flowing transition from previous section */}
             <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#e8f0f5]/20 via-[#e8f0f5]/10 to-transparent"></div>
             
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
             <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 lg:px-16">
                <span className="text-primary font-bold tracking-[0.2em] uppercase mb-6 block scroll-reveal">Partnership Opportunities</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white font-[Chakra_Petch] uppercase mb-8 scroll-reveal scroll-reveal-delay-1">
                    Align Your Brand With Greatness
                </h2>
                <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto scroll-reveal scroll-reveal-delay-2">
                    Connect with a passionate, loyal audience that can only be found at Combat Zone.
                </p>
                <button className="bg-white text-slate-900 hover:bg-slate-200 font-bold uppercase px-8 py-4 rounded-none transition-colors scroll-reveal scroll-reveal-delay-3">
                    Become a Sponsor
                </button>
             </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
