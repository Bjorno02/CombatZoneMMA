import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  ArrowRight,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 text-white">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Top Section: Newsletter & Social */}
        <div className="relative overflow-hidden mb-12 md:mb-16">
          {/* Clean gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900" />
          {/* Subtle accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 p-8 md:p-12">
            {/* Left - Newsletter Signup */}
            <div className="text-center md:text-left flex-1 max-w-lg">
              <h3 className="text-2xl sm:text-3xl font-bold font-[Chakra_Petch] uppercase mb-3">
                Join the <span className="text-primary">Fight Club</span>
              </h3>
              <p className="text-neutral-400 mb-6">
                Get event announcements, fight cards, and exclusive updates delivered to your inbox.
              </p>

              {status === "success" ? (
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={20} />
                  <span className="font-medium">You're in! Check your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-neutral-500 h-12 flex-1"
                  />
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-primary hover:bg-primary/90 text-white font-bold uppercase px-6 h-12 whitespace-nowrap"
                  >
                    {status === "loading" ? (
                      <Loader2 className="animate-spin" size={18} />
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="ml-2" size={18} />
                      </>
                    )}
                  </Button>
                </form>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
              )}
            </div>

            {/* Right - Social Icons with brand colors */}
            <div className="flex flex-col items-center md:items-end">
              <p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/combatzonemma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  }}
                >
                  <Instagram size={22} className="text-white" />
                </a>
                <a
                  href="https://www.facebook.com/CZMMA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                  style={{ backgroundColor: "#1877F2" }}
                >
                  <Facebook size={22} className="text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@CombatZoneMMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                  style={{ backgroundColor: "#FF0000" }}
                >
                  <Youtube size={22} className="text-white" />
                </a>
                <a
                  href="https://x.com/czmma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all"
                >
                  <Twitter size={22} className="text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="flex justify-center mb-20">
          <div className="text-center max-w-3xl">
            <Link
              href="/"
              className="text-2xl font-bold italic tracking-tighter text-white font-[Chakra_Petch] mb-6 block"
            >
              COMBAT<span className="text-primary">ZONE</span>
            </Link>
            <p className="text-neutral-400 text-sm mb-8 leading-relaxed max-w-2xl mx-auto">
              New England's longest-running MMA promotion. Owned and operated by UFC veteran Calvin
              Kattar. The proving ground for the region's top talent chasing the big stage.
            </p>
            <div className="flex flex-col items-center gap-2 text-neutral-400 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>SNHU Arena, Manchester, NH</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>info@combatzonemma.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Combat Zone MMA. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
