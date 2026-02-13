import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const BENEFITS = [
  "Event announcements before tickets go public",
  "Fight card reveals and bout confirmations",
  "Exclusive behind-the-scenes content",
  "VIP offers and early access opportunities",
];

export default function NewsletterPage() {
  useSEO({
    title: "Email List | Combat Zone MMA",
    description:
      "Subscribe to the Combat Zone MMA email list. Get event announcements, fight card updates, and exclusive news delivered to your inbox.",
  });

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
    <PageLayout className="pt-20">
      {/* Main Signup Section */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center py-16 md:py-24 bg-neutral-100 relative overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0">
          {/* Angled stripe */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white transform skew-x-[-8deg] origin-top-right translate-x-20" />

          {/* Large faded text watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            <span className="text-[20rem] font-bold font-[Chakra_Petch] text-black/[0.02] uppercase tracking-tighter whitespace-nowrap">
              CZ
            </span>
          </div>

          {/* Accent elements */}
          <div className="absolute top-20 left-8 w-20 h-1 bg-primary hidden lg:block" />
          <div className="absolute top-24 left-8 w-12 h-1 bg-neutral-300 hidden lg:block" />
          <div className="absolute bottom-20 right-8 w-20 h-1 bg-primary hidden lg:block" />
          <div className="absolute bottom-24 right-8 w-12 h-1 bg-neutral-300 hidden lg:block" />
        </div>

        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary to-neutral-900" />

        <Container className="relative z-10">
          <div className="max-w-xl mx-auto">
            {/* Heading with accent */}
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary hidden md:block" />
              <span className="text-primary text-sm font-bold uppercase tracking-widest block mb-2">
                Combat Zone MMA
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-neutral-900 uppercase tracking-tight">
                Never Miss a <br className="hidden sm:block" />
                <span className="text-primary">Fight</span>
              </h1>
            </div>

            <p className="text-neutral-700 mb-10 text-lg max-w-md leading-relaxed">
              Join the list. Get event announcements and exclusive updates before anyone else.
            </p>

            {/* Form */}
            {status === "success" ? (
              <div className="bg-white p-10 text-center shadow-2xl shadow-neutral-300/50 border-2 border-primary">
                <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold font-[Chakra_Petch] uppercase text-neutral-900 mb-3">
                  You're <span className="text-primary">In</span>
                </h3>
                <p className="text-neutral-700">
                  Welcome to the list. Check your inbox for a confirmation.
                </p>
              </div>
            ) : (
              <div className="bg-white p-8 md:p-10 shadow-2xl shadow-neutral-300/50 border-2 border-primary">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-bold uppercase tracking-wider text-neutral-700 mb-2 block"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-14 text-base text-neutral-900 border-neutral-300 bg-neutral-50 focus:bg-white focus:border-primary transition-colors"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary hover:bg-neutral-900 text-white font-bold uppercase h-14 text-base tracking-wider transition-colors"
                  >
                    {status === "loading" ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        Subscribe Now
                        <ArrowRight className="ml-2" size={18} />
                      </>
                    )}
                  </Button>
                  {status === "error" && (
                    <p className="text-red-600 text-sm text-center font-medium">
                      Something went wrong. Please try again.
                    </p>
                  )}
                  <p className="text-neutral-500 text-sm text-center pt-2">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            )}

            {/* Benefits - inline style */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {BENEFITS.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-neutral-700 font-medium"
                >
                  <span className="text-primary font-bold text-base">+</span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
