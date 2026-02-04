import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

// All gallery images - randomly assorted
const GALLERY_IMAGES = [
  "/images/Gal8.JPG",
  "/images/Gal3.jpg",
  "/images/Gal12.JPG",
  "/images/Gal1.jpg",
  "/images/Gal15.JPG",
  "/images/Gal6.jpg",
  "/images/Gal10.jpg",
  "/images/Gal4.jpg",
  "/images/Gal14.JPG",
  "/images/Gal2.jpg",
  "/images/Gal9.JPG",
  "/images/Gal5.JPG",
  "/images/Gal13.jpg",
  "/images/Gal7.jpg",
  "/images/Gal11.JPG",
];

export default function PhotoArchivePage() {
  useSEO({
    title: "Photo Archive | Combat Zone MMA",
    description:
      "Browse photos from Combat Zone MMA events. Action shots, behind-the-scenes, and memorable moments from New England's longest running MMA promotion.",
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <PageLayout className="pt-20">
      {/* Header */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-16">
        <Container>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/media" className="hover:text-primary transition-colors">
              Media Hub
            </Link>
            <span>/</span>
            <span className="text-neutral-900">Photo Archive</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
              <Camera className="text-primary" size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Chakra_Petch] uppercase">
                Photo <span className="text-primary">Archive</span>
              </h1>
            </div>
          </div>
          <p className="text-neutral-600 max-w-2xl">
            Browse through photos from Combat Zone MMA events. Relive the action, the atmosphere,
            and the unforgettable moments.
          </p>
        </Container>
      </section>

      {/* Photo Grid */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="aspect-square bg-neutral-100 relative group overflow-hidden cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Combat Zone Gallery Photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold uppercase border-b-2 border-primary text-sm">
                    View Photo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 transition-colors z-10"
          >
            <X size={32} />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY_IMAGES[currentIndex]}
              alt={`Combat Zone Gallery Photo ${currentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {currentIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </PageLayout>
  );
}
