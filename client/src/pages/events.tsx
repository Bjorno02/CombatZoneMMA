import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Ticket } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-20">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">Schedule</span>
          <h1 className="text-5xl md:text-7xl font-bold font-[Chakra_Petch] uppercase max-w-4xl">Upcoming Events</h1>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase mb-12 border-l-4 border-primary pl-6">Next Event</h2>
        <div className="bg-white border border-slate-200 shadow-lg grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
            <div className="lg:col-span-8 bg-slate-100 min-h-[300px] flex items-center justify-center text-slate-300 font-[Chakra_Petch] text-4xl font-bold uppercase">
                Event Poster Placeholder
            </div>
            <div className="lg:col-span-4 p-8 flex flex-col justify-center">
                <span className="text-primary font-bold uppercase tracking-widest mb-2">Feb 21, 2026</span>
                <h3 className="text-4xl font-bold font-[Chakra_Petch] uppercase mb-2">Combat Zone 91</h3>
                <div className="flex items-center gap-2 text-slate-500 mb-6">
                    <MapPin size={18} /> SNHU Arena, Manchester NH
                </div>
                <p className="text-slate-600 mb-8">Heavyweight Championship: Kattar vs Emmett. The proving ground for New England's top talent.</p>
                <div className="space-y-3">
                    <Button className="w-full bg-primary font-bold uppercase h-12 skew-x-[-5deg]">Get Tickets</Button>
                    <Button variant="outline" className="w-full font-bold uppercase h-12 skew-x-[-5deg]">View Fight Card</Button>
                </div>
                </div>
            </div>
        </div>
      </section>

      {/* Upcoming List */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase mb-12 border-l-4 border-primary pl-6">2026 Season</h2>
        <div className="space-y-6">
            {[92, 93, 94].map((num) => (
                <div key={num} className="bg-white border border-slate-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-primary transition-colors cursor-pointer group">
                    <div className="flex items-center gap-6">
                        <div className="bg-slate-900 text-white p-4 text-center min-w-[100px]">
                            <span className="block text-2xl font-bold font-[Chakra_Petch]">{num + 4}</span>
                            <span className="block text-xs uppercase font-bold text-primary">MAY</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-[Chakra_Petch] uppercase group-hover:text-primary transition-colors">Combat Zone {num}</h3>
                            <span className="text-slate-500">SNHU Arena, Manchester NH</span>
                        </div>
                    </div>
                    <Button variant="outline" className="uppercase font-bold">Event Details</Button>
                </div>
            ))}
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
