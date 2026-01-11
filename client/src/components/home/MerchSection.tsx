import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import merchImg from "@assets/IMAGES/CZMerchExample.jpg";

export function MerchSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden -mt-8">
      {/* Subtle background texture - diagonal stripes */}
      <div className="absolute inset-0 opacity-[0.35] bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(0,0,0,0.08)_8px,rgba(0,0,0,0.08)_9px)]"></div>
      
      {/* Flowing transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/20 via-slate-900/10 to-transparent"></div>
      
      {/* Subtle diagonal accent line - flows through sections */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      {/* Shared decorative geometric element */}
      <div className="absolute top-1/3 right-0 w-44 h-44 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-36 h-36 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Text Side */}
          <div className="flex flex-col justify-center py-8 scroll-reveal">
            <div className="mb-6">
              <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Official Gear</span>
              <h2 className="text-4xl md:text-6xl font-bold font-[Chakra_Petch] uppercase italic leading-tight mb-6">
                Wear the <span className="text-primary">Battle</span>
              </h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
            </div>
            
            <p className="text-lg text-slate-700 max-w-xl leading-relaxed mb-8">
              Get the latest official Combat Zone apparel. Hoodies, Tees, and Fight Kits available now. Represent the promotion that built New England's top fighters.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider shadow-lg shadow-primary/20 px-8 py-6 rounded-none skew-x-[-5deg]">
                <span className="skew-x-[5deg] flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" /> Shop Now
                </span>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold uppercase tracking-wider px-8 py-6 rounded-none skew-x-[-5deg]">
                <span className="skew-x-[5deg]">View Collection</span>
              </Button>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative flex items-center justify-center py-8 scroll-reveal scroll-reveal-delay-1">
            <div className="relative bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-200 p-6 md:p-8 overflow-hidden group">
              {/* Side border accent design - matching EventSection */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/40 opacity-60"></div>
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/40 opacity-60"></div>
              
              {/* Subtle corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30"></div>
              
              <img 
                src={merchImg} 
                alt="CZ Merch" 
                className="relative z-10 w-full max-w-[400px] object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
