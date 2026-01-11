import { Calendar, MapPin, Ticket, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventPoster from "@assets/IMAGES/CombatZone91Poster.png";

export function EventSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden -mt-12">
        {/* Flowing transition from previous section */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"></div>
        
        {/* Paper Texture Background */}
        <div className="absolute inset-0 opacity-[0.5] bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
        
        {/* Subtle Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-slate-50/30"></div>

        {/* Flowing transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-700/20 via-blue-900/10 to-transparent"></div>
        
        {/* Subtle diagonal accent line - flows through sections */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        {/* Shared decorative geometric element */}
        <div className="absolute top-1/4 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 border-b-2 border-slate-100 pb-8 scroll-reveal">
          <div className="text-center md:text-left">
            <h2 className="text-primary font-bold tracking-[0.2em] text-sm mb-1 uppercase">Next Live Event</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-900 font-[Chakra_Petch] uppercase italic">
              Combat Zone <span className="text-primary">91</span>
            </h3>
          </div>
          <Button variant="outline" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white uppercase tracking-widest font-bold group px-8 py-6 rounded-none transition-all">
            Full Schedule <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Featured Event Layout - Separated Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          
          {/* Event Poster - Left Side, Larger, Standalone */}
          <div className="lg:col-span-7 flex items-center justify-center group">
            <img
              src={eventPoster}
              alt="Combat Zone 91 Event Poster"
              className="w-full max-w-none h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02] shadow-2xl"
            />
          </div>

          {/* Right Side - Date Box and Info Box */}
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
            {/* Date Box - Separated */}
            <div className="bg-slate-900 text-white p-6 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-200 rounded-lg">
               {/* Background Pattern */}
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
               
               <div className="flex flex-col items-center z-10">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">FEB</span>
                  <span className="text-5xl md:text-6xl font-bold font-[Chakra_Petch] leading-none my-2 text-primary">21</span>
                  <span className="text-sm font-bold text-gray-400">SAT</span>
                  <div className="flex items-center gap-2 mt-4 text-xs text-gray-300 font-mono bg-white/10 px-3 py-1 rounded">
                    <Clock size={14} /> 10:00 PM EST
                  </div>
               </div>
            </div>

            {/* Location & Info Box - Separated */}
            <div className="bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-200 rounded-lg p-6 flex flex-col justify-center">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 uppercase">SNHU Arena</h4>
                  <p className="text-slate-500 text-sm">Manchester, New Hampshire</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                  <span className="font-bold text-slate-700 text-xs uppercase">MAIN CARD</span>
                  <span className="text-primary font-bold text-xs">5 BOUTS</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded">
                  <span className="font-bold text-slate-700 text-xs uppercase">PRELIMS</span>
                  <span className="text-slate-500 font-bold text-xs">7 BOUTS</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded">
                  <span className="font-bold text-slate-700 text-xs uppercase">EARLY PRELIMS</span>
                  <span className="text-slate-500 font-bold text-xs">3 BOUTS</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 mt-auto">
                <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider shadow-lg shadow-primary/20 h-12 text-base skew-x-[-5deg]">
                  <span className="skew-x-[5deg] flex items-center justify-center gap-2">
                    <Ticket className="w-5 h-5" /> Get Tickets
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="w-full border-2 border-slate-200 text-slate-900 hover:border-slate-900 hover:bg-transparent font-bold uppercase tracking-wider h-10 text-sm skew-x-[-5deg]">
                  <span className="skew-x-[5deg]">View Fight Card</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
