import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "event";
  noIndex?: boolean;
}

const SITE_NAME = "Combat Zone MMA";
const DEFAULT_DESCRIPTION =
  "New England's premier MMA promotion. Live events at SNHU Arena featuring the region's top fighters. Est. 2000.";
const DEFAULT_OG_IMAGE = "/og-image.jpg"; // You'll need to add this image

export function useSEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    // Set document title
    const fullTitle =
      title === "Home"
        ? `${SITE_NAME} - New England's Premier MMA Promotion`
        : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMetaTag = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Basic meta tags
    setMetaTag("description", description);

    // Open Graph tags
    setMetaTag("og:title", fullTitle, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:site_name", SITE_NAME, true);
    setMetaTag("og:image", ogImage, true);

    // Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", fullTitle);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage);

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Robots meta
    if (noIndex) {
      setMetaTag("robots", "noindex, nofollow");
    }

    // Cleanup function - reset to defaults when unmounting
    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description, canonical, ogImage, ogType, noIndex]);
}

// Per-page SEO settings
export const SEO_CONFIG = {
  home: {
    title: "Home",
    description:
      "Combat Zone MMA - New England's premier MMA promotion since 2000. Live events at SNHU Arena featuring the region's top fighters.",
  },
  events: {
    title: "Upcoming Events",
    description:
      "See upcoming Combat Zone MMA events. Get tickets for live MMA action at SNHU Arena in Manchester, NH.",
  },
  pastEvents: {
    title: "Past Events",
    description:
      "Browse the complete history of Combat Zone MMA events, fight results, and championship bouts.",
  },
  fightCard: {
    title: "Fight Card - CZ91",
    description:
      "The official fight card for Combat Zone 91. See all matchups and fighters competing at SNHU Arena.",
  },
  about: {
    title: "About Us",
    description:
      "Learn about Combat Zone MMA's 24+ year history as New England's longest-running MMA promotion.",
  },
  fighters: {
    title: "Fighters",
    description:
      "Meet the fighters of Combat Zone MMA. Rising stars and established champions from New England.",
  },
  media: {
    title: "Media",
    description:
      "Watch Combat Zone MMA videos, highlights, and fighter interviews on our official YouTube channel.",
  },
  shop: {
    title: "Shop",
    description: "Official Combat Zone MMA merchandise. Apparel, gear, and collectibles.",
  },
  sponsors: {
    title: "Why Sponsor",
    description:
      "Partner with Combat Zone MMA. Reach 5,000+ engaged fans at every event. 24 years of excellence.",
  },
  sponsorPackages: {
    title: "Sponsorship Packages",
    description:
      "Combat Zone MMA sponsorship tiers. Event Partner, Cage Sponsor, and Title Sponsor packages.",
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with Combat Zone MMA. Inquiries for fighters, sponsors, media, and general questions.",
  },
  vip: {
    title: "VIP Experience",
    description:
      "Premium VIP packages for Combat Zone MMA events. Cageside seating, meet & greets, and exclusive access.",
  },
} as const;
