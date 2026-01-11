import { Star } from "lucide-react";

export function WhatIsCombatZoneSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden -mt-8">
      {/* Subtle background pattern - exactly matches PPV section */}
      <div className="absolute inset-0 opacity-[0.3] bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
      
      {/* Separator design at top - broken line pattern with stars (mirrors PPV bottom) */}
      <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-center z-[1]">
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
      
      {/* Flowing transition to next section - Champions */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800/10 via-blue-900/5 to-transparent"></div>
      
      {/* Subtle diagonal accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        {/* Contained blue box with margins */}
        <div className="relative bg-gradient-to-br from-slate-700 via-blue-900 to-slate-800 text-white rounded-lg overflow-hidden shadow-2xl">
          {/* Professional Texture */}
          <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_21px)]"></div>
          
          {/* Subtle Dot Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Gradient Mesh for Depth */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.4),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.3),transparent_50%)]"></div>
          
          {/* Content inside the blue box */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left side - takes 7 columns, main content */}
              <div className="lg:col-span-7 scroll-reveal">
                <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Welcome to</span>
                <h2 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] uppercase italic mb-8 leading-tight">
                  What is <span className="text-primary">Combat Zone</span>?
                </h2>
                <div className="w-24 h-1 bg-primary mb-10"></div>

                <div className="space-y-6 mb-10">
                  <p className="text-lg leading-relaxed text-slate-200">
                    <span className="text-primary font-bold">Combat Zone MMA</span> is New England's longest-running mixed martial arts promotion. 
                    For over 24 years, we've been the proving ground where the region's top fighters showcase their skills, 
                    compete for championships, and launch their careers toward the highest levels of the sport.
                  </p>
                  <p className="text-base leading-relaxed text-slate-300">
                    Owned and operated by UFC veteran <span className="text-primary font-bold">Calvin Kattar</span>, 
                    Combat Zone combines decades of tradition with modern production values, hosting professional events 
                    at the prestigious <span className="font-bold text-white">SNHU Arena</span> in Manchester, New Hampshire.
                  </p>
                </div>
              </div>
              
              {/* Right side - takes 5 columns, feature cards - positioned at 25% from top */}
              <div className="lg:col-span-5 space-y-4 scroll-reveal scroll-reveal-delay-1 lg:mt-[25%]">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg hover:bg-white/15 transition-all">
                  <h3 className="text-lg font-bold font-[Chakra_Petch] uppercase text-white mb-2">Championship</h3>
                  <p className="text-sm text-slate-300">Professional title fights</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg hover:bg-white/15 transition-all">
                  <h3 className="text-lg font-bold font-[Chakra_Petch] uppercase text-white mb-2">Talent Pipeline</h3>
                  <p className="text-sm text-slate-300">Path to the UFC</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg hover:bg-white/15 transition-all">
                  <h3 className="text-lg font-bold font-[Chakra_Petch] uppercase text-white mb-2">Premier Venue</h3>
                  <p className="text-sm text-slate-300">SNHU Arena</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
