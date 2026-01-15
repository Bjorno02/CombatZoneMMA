import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function FightersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-20">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">The Roster</span>
          <h1 className="text-5xl md:text-7xl font-bold font-[Chakra_Petch] uppercase max-w-4xl">Athletes</h1>
        </div>
      </section>

      {/* Champions Row */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase mb-16 text-center">Current Champions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="relative group cursor-pointer">
                        <div className="aspect-[3/4] bg-slate-100 overflow-hidden relative">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-1">Heavyweight Champion</span>
                                <h3 className="text-white text-2xl font-bold font-[Chakra_Petch] uppercase">Fighter Name</h3>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Fighter Resources */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase mb-8">For Fighters</h2>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Looking to compete in Combat Zone? We are always looking for top tier talent. Review the requirements and submit your application.
                    </p>
                    <ul className="space-y-5 mb-10">
                        <li className="bg-white p-4 border border-slate-200 font-bold text-slate-800 flex justify-between items-center cursor-pointer hover:border-primary">
                            Medical Requirements <span>PDF</span>
                        </li>
                        <li className="bg-white p-4 border border-slate-200 font-bold text-slate-800 flex justify-between items-center cursor-pointer hover:border-primary">
                            Licensing Forms <span>PDF</span>
                        </li>
                        <li className="bg-white p-4 border border-slate-200 font-bold text-slate-800 flex justify-between items-center cursor-pointer hover:border-primary">
                            Rules & Regulations <span>PDF</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-black text-white p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold font-[Chakra_Petch] uppercase mb-6">Apply to Fight</h3>
                    <p className="text-slate-400 mb-10 text-lg leading-relaxed">Ready to step into the cage? Fill out our fighter application form to get on the radar of our matchmakers.</p>
                    <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase py-6">Fighter Application</Button>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
