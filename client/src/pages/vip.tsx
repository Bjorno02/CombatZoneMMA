import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHero } from "@/components/layout/SectionHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TICKETMASTER_EVENT_URL } from "@/lib/constants";
import { Star, Crown, Ticket, MapPin, HelpCircle, Sparkles, Play } from "lucide-react";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

const VIP_PACKAGES = {
  risingStar: {
    name: "Rising Star Package",
    price: 120.0,
    section: "Upper Level Bowl Seating",
    icon: Star,
  },
  elite: {
    name: "Elite Level Package",
    price: 125.0,
    section: "Lower Level Bowl Seating",
    icon: Crown,
  },
};

const SHARED_FEATURES = [
  "Official CZ event ticket",
  "In-Venue Hospitality with UFC athlete appearances",
  "Cash Bar & Food Buffet sponsored by Alltown Fresh",
  "14 x 10 event poster signed by fighters on the card",
  "Dedicated VIP Entrance to SNHU Arena",
];

const VIP_IMAGES = [
  "/images/VIP1.jpg",
  "/images/VIP2.jpg",
  "/images/VIP3.jpg",
  "/images/VIP4.jpg",
  "/images/VIP5.jpg",
  "/images/VIP6.jpg",
];

const FAQS = [
  {
    question: "Can I purchase tickets over the phone?",
    answer: "No, please contact us here to secure your VIP Package.",
  },
  {
    question: "Do the packages have a minimum age requirement?",
    answer:
      "There is typically no age requirement to attend the event and our hospitality. However, you will need an ID to check in at the event.",
  },
  {
    question: "Can I choose my seat?",
    answer:
      "You can request a certain section and row if available on the seating chart. However, the exact seat number is not confirmed until tickets are in your possession.",
  },
  {
    question: "How & when will I receive my tickets?",
    answer:
      "Tickets will be available for pick up at the VIP table along with your credentials the night of the event. An informational email will also be sent explaining details 24 hours prior to event as well.",
  },
  {
    question: "Can I purchase the VIP upgrade if I've already purchased a ticket to the event?",
    answer:
      "Yes, if you already have an event ticket purchased and would like to upgrade to a VIP package please email jmsnkattar@czmma.com and someone will be happy to assist you.",
  },
  {
    question: "What time does hospitality open and how long does it last?",
    answer:
      "Hospitality starts when doors open for the event. The food usually lasts till about the start of the main card. Typically for about 3 or so hours. A private cash bar is available throughout the entirety of the event.",
  },
  {
    question: "Is VIP parking included?",
    answer:
      "Parking is not included in these packages however, there is parking available around the venue. Please refer to the venue's website for more information regarding parking here.",
  },
  {
    question: "What if I change my mind and don't want my package?",
    answer: "All packages are non-refundable and cannot be returned once purchased.",
  },
];

export default function VIPPage() {
  useSEO(SEO_CONFIG.vip);

  return (
    <PageLayout>
      <SectionHero
        label="Premium Access"
        title="VIP EXPERIENCE"
        highlightWord="EXPERIENCE"
        description="Secure the ultimate VIP access to our live events. From the all-inclusive hospitality lounge to exclusive photo opportunities with UFC athletes."
      />

      {/* VIP Packages Section */}
      <section className="py-16 md:py-24 bg-neutral-50 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-neutral-200/50 to-transparent" />

        <Container className="relative z-10">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-24 bg-neutral-300" />
            <div className="bg-primary text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm">
              VIP Packages
            </div>
            <div className="h-px flex-1 max-w-24 bg-neutral-300" />
          </div>

          {/* Limited Availability Badge - Premium Style */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 bg-neutral-900 px-6 py-3 border border-neutral-700">
              <Sparkles className="text-primary" size={18} />
              <span className="text-white font-bold uppercase tracking-[0.15em] text-sm">
                Limited Availability
              </span>
              <Sparkles className="text-primary" size={18} />
            </div>
          </div>

          {/* Packages Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Rising Star Package */}
            <div className="bg-white border border-neutral-200 shadow-xl overflow-hidden group hover:border-primary/30 transition-all">
              {/* Top Accent */}
              <div className="h-1 bg-neutral-200 group-hover:bg-primary transition-colors" />

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-neutral-100 flex items-center justify-center border border-neutral-200">
                    <Star className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] uppercase text-neutral-900">
                      Rising Star
                    </h3>
                    <span className="text-sm text-neutral-500 uppercase tracking-wider">
                      Package
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-sm text-neutral-500 uppercase tracking-wider">Price</span>
                  <div className="text-5xl font-bold text-neutral-900 font-[Chakra_Petch]">
                    ${VIP_PACKAGES.risingStar.price.toFixed(2)}
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-4 mb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="text-primary" size={16} />
                    <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      Seating
                    </span>
                  </div>
                  <div className="font-bold text-neutral-900">
                    {VIP_PACKAGES.risingStar.section}
                  </div>
                </div>

                <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full bg-primary text-white hover:bg-primary/90 font-bold uppercase h-14 text-base tracking-wider"
                  >
                    <Ticket className="mr-2" size={18} />
                    Purchase Package
                  </Button>
                </a>
              </div>
            </div>

            {/* Elite Level Package */}
            <div className="bg-neutral-900 border border-neutral-700 shadow-xl overflow-hidden group hover:border-primary transition-all relative">
              {/* Top Accent */}
              <div className="h-1 bg-primary" />

              {/* Premium Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                  Premium
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-white/10 flex items-center justify-center border border-white/20">
                    <Crown className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] uppercase text-white">
                      Elite Level
                    </h3>
                    <span className="text-sm text-neutral-400 uppercase tracking-wider">
                      Package
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-sm text-neutral-400 uppercase tracking-wider">Price</span>
                  <div className="text-5xl font-bold text-white font-[Chakra_Petch]">
                    ${VIP_PACKAGES.elite.price.toFixed(2)}
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 mb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="text-primary" size={16} />
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                      Seating
                    </span>
                  </div>
                  <div className="font-bold text-white">{VIP_PACKAGES.elite.section}</div>
                </div>

                <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-bold uppercase h-14 text-base tracking-wider"
                  >
                    <Ticket className="mr-2" size={18} />
                    Purchase Package
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Shared Features Section - Clean Design */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-neutral-900 text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm">
              Package Inclusions
            </div>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-4 text-neutral-900">
                Both Packages <span className="text-primary">Include</span>
              </h2>
              <p className="text-neutral-500 max-w-xl mx-auto">
                Premium amenities included with every VIP package
              </p>
            </div>

            {/* Clean List Style */}
            <div className="border border-neutral-200 bg-white">
              {SHARED_FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-5 p-6 ${
                    index !== SHARED_FEATURES.length - 1 ? "border-b border-neutral-200" : ""
                  } group hover:bg-neutral-50 transition-colors`}
                >
                  {/* Left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-neutral-200 group-hover:bg-primary transition-colors" />

                  {/* Number */}
                  <div className="w-8 h-8 bg-neutral-900 flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>

                  {/* Text */}
                  <span className="text-neutral-900 font-medium text-base md:text-lg">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What VIP Feels Like - Images */}
      <section className="py-16 md:py-24 bg-neutral-900 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <Container className="relative z-10">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-24 bg-neutral-700" />
            <div className="bg-primary text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm">
              The Experience
            </div>
            <div className="h-px flex-1 max-w-24 bg-neutral-700" />
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] uppercase text-white mb-4">
              What VIP <span className="text-primary">Feels Like</span>
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Exclusive access, premium hospitality, and memories that last a lifetime
            </p>
          </div>

          {/* TODO: Fix video deployment on Vercel
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 blur-sm" />
              <div className="relative bg-black rounded-lg overflow-hidden border border-neutral-700">
                <video
                  className="w-full aspect-video"
                  controls
                  controlsList="nodownload"
                  playsInline
                  webkit-playsinline="true"
                  poster="/images/VIP1.jpg"
                  preload="auto"
                  style={{ maxWidth: "100%", display: "block" }}
                >
                  <source src="/images/vip-experience.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <p className="text-center text-neutral-500 text-sm mt-4 uppercase tracking-wider">
              <Play className="inline-block w-4 h-4 mr-2" />
              Watch the VIP Experience
            </p>
          </div>
          */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {VIP_IMAGES.map((image, index) => (
              <div key={index} className="group">
                <div className="aspect-square overflow-hidden relative border border-neutral-700 hover:border-primary/50 transition-all">
                  <img
                    src={image}
                    alt={`VIP Experience ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* VIP FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-neutral-900 text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm flex items-center gap-2">
                <HelpCircle size={16} />
                FAQs
              </div>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-8 text-neutral-900">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-neutral-50 border border-neutral-200 px-6 data-[state=open]:border-neutral-300"
                >
                  <AccordionTrigger className="text-left font-bold text-neutral-900 hover:text-primary hover:no-underline py-5 [&>svg]:text-neutral-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
