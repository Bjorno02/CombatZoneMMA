// JSON-LD structured data for SEO

// Organization schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: "Combat Zone MMA",
    alternateName: "CZMMA",
    url: "https://combatzonemma.com",
    logo: "https://combatzonemma.com/CZ_NEW-Transparent.png",
    image: "https://combatzonemma.com/opengraph.jpg",
    foundingDate: "2000",
    description:
      "New England's longest running MMA promotion. Live events at SNHU Arena featuring the region's top fighters since 2000.",
    slogan: "Where Legends Are Made",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manchester",
      addressRegion: "NH",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.instagram.com/combatzonemma/",
      "https://www.facebook.com/CZMMA/",
      "https://www.youtube.com/@CombatZoneMMA",
      "https://x.com/czmma",
    ],
    sport: "Mixed Martial Arts",
    keywords: "MMA, Mixed Martial Arts, Combat Sports, New England, SNHU Arena, Manchester NH",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Event schema
interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string; // ISO format: "2026-02-21T19:00:00"
  endDate?: string;
  venue: {
    name: string;
    address: string;
    city: string;
    state: string;
  };
  ticketUrl?: string;
  imageUrl?: string;
  status?: "EventScheduled" | "EventPostponed" | "EventCancelled";
}

export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  venue,
  ticketUrl,
  imageUrl,
  status = "EventScheduled",
}: EventSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: name,
    description: description,
    startDate: startDate,
    ...(endDate && { endDate: endDate }),
    eventStatus: `https://schema.org/${status}`,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: venue.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: venue.address,
        addressLocality: venue.city,
        addressRegion: venue.state,
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "SportsOrganization",
      name: "Combat Zone MMA",
      url: "https://combatzonemma.com",
    },
    sport: "Mixed Martial Arts",
    ...(ticketUrl && {
      offers: {
        "@type": "Offer",
        url: ticketUrl,
        availability: "https://schema.org/InStock",
        validFrom: new Date().toISOString(),
      },
    }),
    ...(imageUrl && { image: imageUrl }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website schema
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Combat Zone MMA",
    url: "https://combatzonemma.com",
    description: "New England's longest running MMA promotion",
    publisher: {
      "@type": "SportsOrganization",
      name: "Combat Zone MMA",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
