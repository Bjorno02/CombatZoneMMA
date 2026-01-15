import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PlayCircle } from "lucide-react";

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-20">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">Content</span>
          <h1 className="text-5xl md:text-7xl font-bold font-[Chakra_Petch] uppercase max-w-4xl">Media Hub</h1>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="aspect-video bg-black w-full relative group cursor-pointer overflow-hidden">
             {/* Placeholder for video embed */}
             <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-24 h-24 text-white opacity-80 group-hover:scale-110 transition-transform" />
             </div>
             <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                <span className="bg-primary text-white text-xs font-bold px-2 py-1 uppercase mb-2 inline-block">Featured</span>
                <h2 className="text-white text-3xl font-bold font-[Chakra_Petch] uppercase">Combat Zone 91: Countdown</h2>
             </div>
             </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase mb-12">Latest Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="aspect-video bg-slate-200 mb-3 relative">
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                <PlayCircle className="text-white w-12 h-12" />
                            </div>
                        </div>
                        <h3 className="font-bold font-[Chakra_Petch] uppercase group-hover:text-primary leading-tight">Post Fight Interview: Main Event Winner</h3>
                        <span className="text-xs text-slate-500 font-bold uppercase mt-1 block">2 Days Ago</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Photo Galleries */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase">Photo Galleries</h2>
            <a href="#" className="text-primary font-bold uppercase text-sm hover:underline">View Archive</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-slate-100 relative group overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-bold uppercase border-b-2 border-primary">View Gallery</span>
                    </div>
                </div>
            ))}
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
