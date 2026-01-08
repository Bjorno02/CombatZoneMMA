import { Trophy, Users, MapPin, Calendar } from "lucide-react";

export function WhatIsCombatZone() {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-200 via-blue-100 to-slate-200 text-slate-900 relative overflow-hidden">
      {/* Background Pattern - Option 1: Subtle Grid */}
      {/*<div className="absolute inset-0 opacity-[0.20] bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:40px_40px]"></div>*/}
      
     
      <div className="absolute inset-0 opacity-100 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
      {/*
      Option 3: Noise/Grain
      <div className="absolute inset-0 opacity-[0.99] bg-[url('https://www.transparenttextures.com/patterns/noise-pattern.png')]"></div>
      
      Option 4: Diagonal Lines
      <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#1e3a8a_10px,#1e3a8a_11px)]"></div>
      
      Option 5: Dot Pattern 
      <div className="absolute inset-0 opacity-[0.30] bg-[radial-gradient(circle,#1e3a8a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
       Option 6: Carbon Fiber
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Welcome to</span>
          <h2 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] uppercase italic mb-4 leading-tight">
            What is <span className="text-primary">Combat Zone</span>?
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-slate-200 shadow-sm p-6 md:p-8 rounded-lg mb-6">
            <p className="text-lg md:text-xl text-center leading-relaxed font-medium text-slate-700 mb-6">
              <span className="text-primary font-bold">Combat Zone MMA</span> is New England's longest-running and premier mixed martial arts promotion. 
              For over 24 years, we've been the proving ground where the region's top fighters showcase their skills, 
              compete for championships, and launch their careers toward the highest levels of the sport.
            </p>
            <p className="text-base text-center text-slate-600 leading-relaxed">
              Owned and operated by UFC veteran <span className="text-primary font-bold">Calvin Kattar</span>, 
              Combat Zone combines decades of tradition with modern production values, hosting professional events 
              at the prestigious <span className="font-bold">SNHU Arena</span> in Manchester, New Hampshire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-lg text-center hover:shadow-md transition-shadow">
              <Trophy className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold font-[Chakra_Petch] uppercase mb-2">Championship Platform</h3>
              <p className="text-slate-600 text-sm">
                Professional title fights across multiple weight classes
              </p>
            </div>
            <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-lg text-center hover:shadow-md transition-shadow">
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold font-[Chakra_Petch] uppercase mb-2">Talent Pipeline</h3>
              <p className="text-slate-600 text-sm">
                Where New England's best fighters begin their journey to the UFC
              </p>
            </div>
            <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-lg text-center hover:shadow-md transition-shadow">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold font-[Chakra_Petch] uppercase mb-2">Premier Venue</h3>
              <p className="text-slate-600 text-sm">
                World-class events at SNHU Arena, Manchester, NH
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

