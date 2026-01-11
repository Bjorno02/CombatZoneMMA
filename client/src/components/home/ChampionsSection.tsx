import { Trophy, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import elvinJohnsonImg from "@assets/IMAGES/CZ90ChampElvinJohnson.jpg";
import connorMorrillImg from "@assets/IMAGES/CZ90ChampConnorMorrill.jpg";

const CHAMPIONS = [
  {
    id: 1,
    name: "Elvin Johnson",
    weightClass: "Middleweight",
    defenses: 1,
    image: elvinJohnsonImg,
    event: "Combat Zone 90",
    discipline: "Kickboxing"
  },
  {
    id: 2,
    name: "Connor Morrill",
    weightClass: "Bantamweight",
    defenses: 1,
    image: connorMorrillImg,
    event: "Combat Zone 90",
    discipline: "Kickboxing"
  }
];

export function ChampionsSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-700 via-blue-900 to-slate-800 relative overflow-hidden -mt-8">
      {/* Professional Texture */}
      <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_21px)]"></div>
      
      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Gradient Mesh for Depth */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.4),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.3),transparent_50%)]"></div>
      
      {/* Flowing transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-800/10 via-blue-900/5 to-transparent"></div>
      
      {/* Flowing transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/30 via-white/15 to-transparent"></div>
      
      {/* Subtle diagonal accent line - flows through sections */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      {/* Shared decorative geometric element */}
      <div className="absolute top-1/3 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-[Chakra_Petch] uppercase tracking-tight leading-none">
            CZ 90 <span className="text-primary">Champions</span>
          </h2>
          <p className="text-slate-300 mt-2 text-sm uppercase tracking-wider font-bold">
            Championship Fight Winners from Combat Zone 90
          </p>
          <div className="w-24 h-1 bg-primary mt-2 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {CHAMPIONS.map((champion) => (
            <div
              key={champion.id}
              className="group bg-white shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full border-b-4 border-transparent hover:border-primary overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={champion.image}
                  alt={champion.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-0 left-0 bg-primary text-white text-xs font-bold uppercase px-3 py-1 skew-x-[-10deg] ml-[-5px]">
                  <span className="skew-x-[10deg] block pl-1">{champion.weightClass}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Defense Badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-slate-900">
                    {champion.defenses} {champion.defenses === 1 ? 'Defense' : 'Defenses'}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                    {champion.event}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-[Chakra_Petch] uppercase leading-[1.1] group-hover:text-primary transition-colors mb-2">
                  {champion.name}
                </h3>
                <p className="text-slate-600 text-sm font-semibold uppercase tracking-wide mb-4">
                  {champion.weightClass} {champion.discipline} Champion
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">
                    Successfully defended title
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold uppercase px-8 py-6 rounded-none">
            View All Champions
          </Button>
        </div>
      </div>
    </section>
  );
}

