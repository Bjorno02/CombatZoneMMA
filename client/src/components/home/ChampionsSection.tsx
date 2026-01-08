import { Trophy, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import champImg1 from "@assets/stock_images/calvin_kattar_ufc_fi_3ff19113.jpg";
import champImg2 from "@assets/stock_images/calvin_kattar_ufc_fi_5a5c7130.jpg";
import champImg3 from "@assets/stock_images/calvin_kattar_ufc_po_8171904a.jpg";

const CHAMPIONS = [
  {
    id: 1,
    name: "JOHN 'THE HAMMER' SMITH",
    weightClass: "Heavyweight",
    defenses: 2,
    image: champImg1,
    event: "Combat Zone 90"
  },
  {
    id: 2,
    name: "MIKE 'IRON FIST' JOHNSON",
    weightClass: "Middleweight",
    defenses: 1,
    image: champImg2,
    event: "Combat Zone 90"
  },
  {
    id: 3,
    name: "ALEX 'THE TANK' MARTINEZ",
    weightClass: "Lightweight",
    defenses: 3,
    image: champImg3,
    event: "Combat Zone 90"
  },
];

export function ChampionsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-[Chakra_Petch] uppercase tracking-tight leading-none">
              TITLE <span className="text-primary">DEFENDERS</span>
            </h2>
            <p className="text-slate-600 mt-2 text-sm uppercase tracking-wider font-bold">
              Champions Who Retained at Combat Zone 90
            </p>
            <div className="w-24 h-1 bg-primary mt-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                  {champion.weightClass} Champion
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

        <div className="text-center mt-12">
          <Button variant="outline" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold uppercase px-8 py-6 rounded-none">
            View All Champions
          </Button>
        </div>
      </div>
    </section>
  );
}

