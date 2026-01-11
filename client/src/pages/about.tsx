import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-20">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-bold font-[Chakra_Petch] uppercase max-w-4xl">
            The Proving Ground of <span className="text-primary">New England</span>
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <div className="max-w-xl">
                <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase mb-8">Mission Statement</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    To provide a professional platform for New England's combat sports athletes to showcase their skills, build their legacies, and launch their careers to the global stage. We are committed to integrity, fighter safety, and delivering an unforgettable experience for our fans.
                </p>
                <div className="space-y-6">
                    <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase">Core Values</h3>
                    <ul className="space-y-3">
                        {["Integrity & Respect", "Fighter Safety First", "Community Impact", "Professionalism"].map(v => (
                            <li key={v} className="flex items-center gap-2 font-bold text-slate-800">
                                <CheckCircle2 className="text-primary" size={18} /> {v}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bg-slate-100 min-h-[400px] flex items-center justify-center text-slate-400 font-[Chakra_Petch] text-2xl uppercase font-bold">
                Brand Story Image
            </div>
            </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase mb-16 text-center">Leadership</h2>
            <div className="max-w-4xl mx-auto bg-white p-10 md:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-10 items-center">
                <div className="w-48 h-48 bg-slate-200 rounded-full flex-shrink-0"></div>
                <div>
                    <h3 className="text-2xl font-bold font-[Chakra_Petch] uppercase mb-3">Calvin Kattar</h3>
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">Owner & Operator</span>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        UFC Featherweight contender and New England native Calvin Kattar acquired Combat Zone to give back to the regional scene that built him. His vision is to elevate the standard of regional MMA.
                    </p>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
