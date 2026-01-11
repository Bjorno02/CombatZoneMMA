import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-20">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-bold font-[Chakra_Petch] uppercase max-w-4xl">Contact Us</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Form */}
            <div className="max-w-xl">
                <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase mb-8">Send us a Message</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase text-slate-500">First Name</label>
                            <Input placeholder="John" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase text-slate-500">Last Name</label>
                            <Input placeholder="Doe" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase text-slate-500">Email</label>
                        <Input placeholder="john@example.com" type="email" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase text-slate-500">Subject</label>
                         <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                            <option>General Inquiry</option>
                            <option>Fighter Inquiry</option>
                            <option>Sponsorship</option>
                            <option>Media/Press</option>
                         </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase text-slate-500">Message</label>
                        <Textarea placeholder="How can we help?" className="min-h-[150px]" />
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase w-full py-6">Submit Inquiry</Button>
                </form>
            </div>

            {/* Info */}
            <div className="max-w-xl">
                <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase mb-8">Contact Info</h2>
                <div className="space-y-10 mb-12">
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-slate-100 flex items-center justify-center text-primary rounded-none">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold font-[Chakra_Petch] uppercase text-lg">Mailing Address</h3>
                            <p className="text-slate-600">555 Elm Street<br/>Manchester, NH 03101</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-slate-100 flex items-center justify-center text-primary rounded-none">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold font-[Chakra_Petch] uppercase text-lg">Email</h3>
                            <p className="text-slate-600">info@combatzonemma.com<br/>media@combatzonemma.com</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-slate-100 flex items-center justify-center text-primary rounded-none">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold font-[Chakra_Petch] uppercase text-lg">Phone</h3>
                            <p className="text-slate-600">(555) 123-4567</p>
                        </div>
                     </div>
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-[300px] bg-slate-200 flex items-center justify-center font-bold text-slate-400 uppercase">
                    Google Maps Embed (SNHU Arena)
                </div>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
