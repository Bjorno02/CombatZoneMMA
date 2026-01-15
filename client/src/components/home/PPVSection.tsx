import { Play, Link2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PPVSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden -mt-8">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.3] bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
      
      {/* Separator design - broken line pattern with stars */}
      <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-center z-[1]">
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
      
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left side - takes 2 columns, offset */}
          <div className="lg:col-span-2 lg:pl-8 scroll-reveal">
            <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Watch Live</span>
            <h2 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] uppercase italic mb-6 leading-tight">
              Pay-Per-<span className="text-primary">View</span>
            </h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Experience every knockout, submission, and championship moment from the comfort of your home. Stream live events in HD quality.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold uppercase px-8 py-6 rounded-none cursor-not-allowed opacity-60"
              disabled
            >
              Link Coming Soon
            </Button>
          </div>
          
          {/* Right side - takes 3 columns, larger visual */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end scroll-reveal scroll-reveal-delay-1">
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/3] bg-gradient-to-br from-black via-black to-black rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden group">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                
                {/* Side border accents */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/40 opacity-60"></div>
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/40 opacity-60"></div>
                
                {/* Play icon */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold font-[Chakra_Petch] uppercase text-sm mb-1">Live Streaming</p>
                    <p className="text-slate-400 text-xs">HD Quality Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
