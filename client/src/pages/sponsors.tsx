import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-20">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">Partnerships</span>
          <h1 className="text-5xl md:text-7xl font-bold font-[Chakra_Petch] uppercase max-w-4xl">
            Grow Your Brand With <span className="text-primary">Combat Zone</span>
          </h1>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="max-w-xl">
                <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase mb-8">Why Partner With Us?</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Combat Zone offers a unique opportunity to connect with a passionate, loyal, and engaged audience. Whether you're looking for brand awareness, direct engagement, or community impact, we have a package for you.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="bg-slate-50 p-6 border border-slate-200 text-center">
                        <span className="block text-3xl font-bold font-[Chakra_Petch] text-primary">5k+</span>
                        <span className="text-sm font-bold uppercase text-slate-500">Live Attendance</span>
                    </div>
                    <div className="bg-slate-50 p-6 border border-slate-200 text-center">
                        <span className="block text-3xl font-bold font-[Chakra_Petch] text-primary">50k+</span>
                        <span className="text-sm font-bold uppercase text-slate-500">Social Reach</span>
                    </div>
                </div>
            </div>
             <div className="bg-slate-100 min-h-[400px] flex items-center justify-center text-slate-400 font-[Chakra_Petch] text-2xl uppercase font-bold">
                Crowd/Sponsor Image
            </div>
            </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase mb-16 text-center">Sponsorship Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {/* Tier 1 */}
                <div className="bg-white p-8 border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase mb-4">Event Partner</h3>
                    <ul className="space-y-3 mb-8">
                        <li className="flex gap-2 text-sm text-slate-600"><Check className="text-primary w-4 h-4" /> Logo on Event Poster</li>
                        <li className="flex gap-2 text-sm text-slate-600"><Check className="text-primary w-4 h-4" /> Social Media Shoutouts</li>
                        <li className="flex gap-2 text-sm text-slate-600"><Check className="text-primary w-4 h-4" /> 2 VIP Tickets</li>
                    </ul>
                    <Button variant="outline" className="w-full font-bold uppercase">Inquire</Button>
                </div>
                {/* Tier 2 */}
                <div className="bg-slate-900 text-white p-8 border border-primary shadow-xl scale-105">
                     <span className="bg-primary text-white text-xs font-bold px-2 py-1 uppercase mb-4 inline-block">Most Popular</span>
                    <h3 className="text-2xl font-bold font-[Chakra_Petch] uppercase mb-4">Cage Sponsor</h3>
                    <ul className="space-y-3 mb-8">
                        <li className="flex gap-2 text-sm text-slate-300"><Check className="text-primary w-4 h-4" /> Logo on Cage Canvas/Pad</li>
                        <li className="flex gap-2 text-sm text-slate-300"><Check className="text-primary w-4 h-4" /> In-Cage Announcement</li>
                        <li className="flex gap-2 text-sm text-slate-300"><Check className="text-primary w-4 h-4" /> 4 VIP Tickets</li>
                        <li className="flex gap-2 text-sm text-slate-300"><Check className="text-primary w-4 h-4" /> Booth at Event</li>
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/90 font-bold uppercase border-none">Inquire</Button>
                </div>
                 {/* Tier 3 */}
                <div className="bg-white p-8 border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase mb-4">Title Sponsor</h3>
                    <ul className="space-y-3 mb-8">
                        <li className="flex gap-2 text-sm text-slate-600"><Check className="text-primary w-4 h-4" /> "Presented By" Naming Rights</li>
                        <li className="flex gap-2 text-sm text-slate-600"><Check className="text-primary w-4 h-4" /> Center Canvas Logo</li>
                        <li className="flex gap-2 text-sm text-slate-600"><Check className="text-primary w-4 h-4" /> 10 VIP Tickets (Table)</li>
                        <li className="flex gap-2 text-sm text-slate-600"><Check className="text-primary w-4 h-4" /> Fighter Kit Branding</li>
                    </ul>
                    <Button variant="outline" className="w-full font-bold uppercase">Inquire</Button>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
