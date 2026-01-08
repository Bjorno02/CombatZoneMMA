import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Import downloaded stock images
import slide1 from "@assets/stock_images/mma_stadium_crowd_ar_90b2859a.jpg";
import slide2 from "@assets/stock_images/calvin_kattar_ufc_fi_3ff19113.jpg";
import slide3 from "@assets/stock_images/calvin_kattar_ufc_fi_6020f9c3.jpg";
import slide4 from "@assets/stock_images/calvin_kattar_ufc_po_8171904a.jpg";

const SLIDES = [
  {
    id: 1,
    image: slide1,
    title: "COMBAT ZONE 91",
    subtitle: "NEW ENGLAND'S LONGEST RUNNING MMA PROMOTION",
    cta: "GET TICKETS",
    secondaryCta: "FIGHT CARD",
    align: "center", // Text alignment
  },
  {
    id: 2,
    image: slide2,
    title: "KATTAR VS EMMETT",
    subtitle: "MAIN EVENT PREVIEW",
    cta: "WATCH TRAILER",
    secondaryCta: "READ MORE",
    align: "left",
  },
  {
    id: 3,
    image: slide3,
    title: "UNSTOPPABLE FORCE",
    subtitle: "THE RISE OF A CHAMPION",
    cta: "FULL STORY",
    secondaryCta: null,
    align: "right",
  },
  {
    id: 4,
    image: slide4,
    title: "OFFICIAL MERCH",
    subtitle: "WEAR THE BATTLE",
    cta: "SHOP NOW",
    secondaryCta: null,
    align: "center",
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-screen min-h-[600px] bg-black overflow-hidden group">
      {/* Carousel Viewport */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] h-full min-w-0">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

              {/* Content Container */}
              <div className={cn(
                  "absolute inset-0 container mx-auto px-4 flex flex-col justify-center h-full z-10",
                  slide.align === "center" && "items-center text-center",
                  slide.align === "left" && "items-start text-left",
                  slide.align === "right" && "items-end text-right"
              )}>
                <div className="max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
                    <span className="inline-block py-1 px-3 bg-primary text-white text-sm font-bold tracking-widest uppercase mb-2 skew-x-[-10deg]">
                        <span className="skew-x-[10deg]">{slide.subtitle}</span>
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-[Chakra_Petch] leading-[0.9] italic drop-shadow-lg uppercase">
                        {slide.title}
                    </h1>
                    
                    <div className={cn(
                        "flex flex-wrap gap-4 pt-4",
                        slide.align === "center" && "justify-center",
                        slide.align === "left" && "justify-start",
                        slide.align === "right" && "justify-end"
                    )}>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-7 text-xl font-bold uppercase tracking-wider skew-x-[-10deg] min-w-[220px] rounded-none shadow-[0_0_20px_rgba(220,20,60,0.3)] transition-transform hover:scale-105">
                            <span className="skew-x-[10deg]">{slide.cta}</span>
                        </Button>
                        {slide.secondaryCta && (
                            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-7 text-xl font-bold uppercase tracking-wider skew-x-[-10deg] min-w-[220px] rounded-none backdrop-blur-sm transition-transform hover:scale-105">
                                <span className="skew-x-[10deg]">{slide.secondaryCta}</span>
                            </Button>
                        )}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons (Hidden on mobile, visible on hover desktop) */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-black/50 hover:text-primary w-12 h-12 rounded-full hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-8 h-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-black/50 hover:text-primary w-12 h-12 rounded-full hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={scrollNext}
      >
        <ChevronRight className="w-8 h-8" />
      </Button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-12 h-1 transition-all duration-300 rounded-full",
              index === selectedIndex ? "bg-primary" : "bg-white/30 hover:bg-white/50"
            )}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
