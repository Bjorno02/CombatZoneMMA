import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Star, Crown, GlassWater } from "lucide-react";

export default function VIPPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-20">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10 text-center">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-6 block">Premium Experience</span>
          <h1 className="text-5xl md:text-8xl font-bold font-[Chakra_Petch] uppercase mb-8 italic">VIP Access</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Experience Combat Zone like never before. Best seats, exclusive access, and premium hospitality.
          </p>
          <Button className="bg-primary text-white font-bold uppercase px-10 py-6 text-lg skew-x-[-10deg]">
             <span className="skew-x-[10deg]">Book VIP Table</span>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-slate-50 p-8 border border-slate-100 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                    <Crown size={32} />
                </div>
                <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase mb-4">Cageside Seating</h3>
                <p className="text-slate-600">Get as close to the action as possible without being in the fight. Unobstructed views from the front row.</p>
            </div>
            <div className="bg-slate-50 p-8 border border-slate-100 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                    <Star size={32} />
                </div>
                <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase mb-4">Meet & Greets</h3>
                <p className="text-slate-600">Exclusive opportunities to meet special guests, UFC fighters, and the ring girls before the show.</p>
            </div>
            <div className="bg-slate-50 p-8 border border-slate-100 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                    <GlassWater size={32} />
                </div>
                <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase mb-4">Premium Hospitality</h3>
                <p className="text-slate-600">Dedicated VIP bar access, complimentary food options, and table service throughout the night.</p>
            </div>
            </div>
        </div>
      </section>

      {/* Visual */}
      <section className="py-24 md:py-32 bg-slate-900 text-white">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
                 <h2 className="text-4xl font-bold font-[Chakra_Petch] uppercase mb-8">The VIP Treatment</h2>
                 <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                    Don't just watch the fight, experience it. Our VIP tables offer the perfect setting for corporate hosting, bachelor parties, or just the ultimate fight night out with friends. 
                 </p>
                 <ul className="space-y-5 mb-10">
                    <li className="flex items-center gap-3 font-bold"><span className="w-2 h-2 bg-primary rounded-full"></span> 10 Tickets per Table</li>
                    <li className="flex items-center gap-3 font-bold"><span className="w-2 h-2 bg-primary rounded-full"></span> Early Entry Access</li>
                    <li className="flex items-center gap-3 font-bold"><span className="w-2 h-2 bg-primary rounded-full"></span> Signed Event Poster</li>
                 </ul>
            </div>
            <div className="aspect-video bg-white/10 flex items-center justify-center font-[Chakra_Petch] text-2xl uppercase font-bold text-white/20">
                VIP Atmosphere Photo
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
