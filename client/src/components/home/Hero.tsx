import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { TICKETMASTER_EVENT_URL } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

const SLIDES = [
  {
    id: 1,
    image: "/images/CombatZoneHero1.png",
    title: "COMBAT ZONE",
    subtitle: "NEW ENGLAND'S LONGEST RUNNING MMA PROMOTION",
    cta: "GET TICKETS",
    ctaLink: TICKETMASTER_EVENT_URL,
    ctaExternal: true,
    secondaryCta: "FIGHT CARD",
    secondaryCtaLink: "/fight-card",
    align: "left",
    isMain: true, // main event hero - slightly fancier
  },
  {
    id: 2,
    image: "/images/CombatZoneHero2.jpg",
    title: "CHAMPIONS RISING",
    subtitle: "WHERE LEGENDS ARE MADE",
    cta: "VIEW CHAMPIONS",
    ctaLink: "/champions",
    ctaExternal: false,
    secondaryCta: null,
    secondaryCtaLink: null,
    align: "left",
    isMain: false,
  },
  {
    id: 3,
    image: "/images/calvin_kattar_ufc_po_8171904a.jpg",
    title: "OFFICIAL MERCH",
    subtitle: "WEAR THE BATTLE",
    cta: "SHOP NOW",
    ctaLink: "/shop",
    ctaExternal: false,
    secondaryCta: null,
    secondaryCtaLink: null,
    align: "left",
    isMain: false,
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
      {/* Bottom divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black z-10"></div>

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
                loading="eager"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

              {/* Content Container */}
              <div className="absolute inset-0 max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 flex flex-col justify-center items-start text-left h-full z-10">
                <div
                  className="animate-in fade-in slide-in-from-left-10 duration-1000 fill-mode-both"
                  style={{ animationDelay: "200ms" }}
                >
                  {/* Vertical accent line + content wrapper */}
                  <div className="flex gap-6 md:gap-8 items-start">
                    {/* Accent line - taller for main hero */}
                    <div
                      className={cn(
                        "hidden sm:block w-1 bg-primary",
                        slide.isMain ? "h-40 md:h-52" : "h-32 md:h-40"
                      )}
                    />

                    <div>
                      {/* Subtitle - outline style for all */}
                      <div className="mb-6 md:mb-8">
                        <span
                          className={cn(
                            "inline-block py-2 px-5 border-2 border-white/50 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-sm",
                            slide.isMain && "border-white/70"
                          )}
                        >
                          {slide.subtitle}
                        </span>
                      </div>

                      {/* Title */}
                      <h1
                        className={cn(
                          "font-bold text-white font-[Chakra_Petch] leading-[0.9] uppercase mb-8 md:mb-10",
                          slide.isMain
                            ? "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                            : "text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                        )}
                      >
                        {slide.title}
                      </h1>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                        {slide.ctaExternal ? (
                          <a href={slide.ctaLink} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="lg"
                              className={cn(
                                "text-white font-bold uppercase tracking-wider rounded-none transition-all hover:scale-105",
                                slide.isMain
                                  ? "bg-primary hover:bg-white hover:text-primary border-2 border-primary hover:border-white px-10 sm:px-12 py-7 sm:py-8 text-lg sm:text-xl min-w-[220px]"
                                  : "bg-transparent border-2 border-primary hover:bg-primary px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg min-w-[200px]"
                              )}
                            >
                              {slide.cta}
                              {slide.isMain && <ChevronRight className="ml-2" />}
                            </Button>
                          </a>
                        ) : (
                          <Link href={slide.ctaLink}>
                            <Button
                              size="lg"
                              className="bg-transparent border-2 border-primary text-white hover:bg-primary px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-bold uppercase tracking-wider min-w-[200px] rounded-none transition-all hover:scale-105"
                            >
                              {slide.cta}
                              <ChevronRight className="ml-2" />
                            </Button>
                          </Link>
                        )}
                        {slide.secondaryCta && slide.secondaryCtaLink && (
                          <Link href={slide.secondaryCtaLink}>
                            <Button
                              size="lg"
                              variant="outline"
                              className="border-2 border-white/60 text-white hover:bg-white hover:text-black px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-bold uppercase tracking-wider min-w-[200px] rounded-none backdrop-blur-sm transition-all hover:scale-105"
                            >
                              {slide.secondaryCta}
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
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
