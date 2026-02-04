import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { ExternalLink } from "lucide-react";
import { YouTubeFeed } from "@/components/media/YouTubeFeed";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";
import { Link } from "wouter";

// Featured gallery images for preview
const GALLERY_PREVIEW = [
  "/images/Gal3.jpg",
  "/images/Gal7.jpg",
  "/images/Gal11.JPG",
  "/images/Gal14.JPG",
];

// Featured video configuration
const FEATURED_VIDEO_ID = "u4KfsNQrJqw";
const FEATURED_VIDEO_START = 150; // Start at 2:30 (150 seconds)

export default function MediaPage() {
  useSEO(SEO_CONFIG.media);

  return (
    <PageLayout className="pt-20">
      {/* Featured Video */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24">
        <Container>
          <div className="text-center mb-8">
            <a
              href="https://www.youtube.com/@CombatZoneMMA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider transition-all text-xl md:text-2xl lg:text-3xl py-6 px-8 md:py-8 md:px-12 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span>Subscribe to Combat Zone MMA YouTube Channel</span>
              <ExternalLink size={28} className="md:w-7 md:h-7" />
            </a>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] uppercase mb-6 border-l-4 border-primary pl-4">
            FEATURED VIDEO
          </h2>
          <div className="aspect-video bg-neutral-900 w-full relative overflow-hidden rounded-lg shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?start=${FEATURED_VIDEO_START}&rel=0`}
              title="Combat Zone MMA Featured Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </Container>
      </section>

      {/* Latest Videos - YouTube Feed */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <Container>
          <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase mb-12">Latest Videos</h2>
          <YouTubeFeed />
        </Container>
      </section>

      {/* Photo Galleries */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase">Photo Galleries</h2>
            <Link
              href="/media/photos"
              className="text-primary font-bold uppercase text-sm hover:underline"
            >
              View Archive
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {GALLERY_PREVIEW.map((image, i) => (
              <Link key={i} href="/media/photos">
                <div className="aspect-square bg-neutral-100 relative group overflow-hidden cursor-pointer">
                  <img
                    src={image}
                    alt={`Gallery Preview ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold uppercase border-b-2 border-primary">
                      View Gallery
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
