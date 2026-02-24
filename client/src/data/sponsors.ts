/**
 * Sponsor data
 */

export interface Sponsor {
  id: number;
  name: string;
  image: string;
  url: string;
}

export const SPONSORS: Sponsor[] = [
  {
    id: 1,
    image: "/images/Sponsor1.jpg",
    name: "SIG SAUER Academy",
    url: "https://sigsaueracademy.com/",
  },
  { id: 2, image: "/images/Sponsor2.jpg", name: "Modelo USA", url: "https://www.modelousa.com/" },
  {
    id: 3,
    image: "/images/Sponsor3.png",
    name: "Bollards Direct USA",
    url: "https://www.bollardsdirectusa.com/",
  },
  {
    id: 4,
    image: "/images/Sponsor6.jpeg",
    name: "Alltown Fresh",
    url: "https://alltownfresh.com/",
  },
  {
    id: 5,
    image: "/images/Sponsor8.jpg",
    name: "Goat Barn Nation",
    url: "https://goatbarnation.com/",
  },
  {
    id: 6,
    image: "/images/Sponsor9.jpg",
    name: "Bell and Williams",
    url: "https://bellandwilliams.com/",
  },
  {
    id: 7,
    image: "/images/Muraco-Group-gold-[Converted].webp",
    name: "Muraco Group",
    url: "https://muracogroup.com/",
  },
  {
    id: 8,
    image: "/images/Ruthless.avif",
    name: "Ruthless Syndicate",
    url: "https://www.ruthlesssyndicate.com/",
  },
];

// Sponsorship packages
export interface SponsorPackage {
  name: string;
  featured: boolean;
  badge?: string;
  benefits: string[];
}

export const SPONSOR_PACKAGES: SponsorPackage[] = [
  {
    name: "Event Partner",
    featured: false,
    benefits: [
      "Logo on Event Poster",
      "Social Media Shoutouts",
      "2 VIP Tickets",
      "Website Recognition",
    ],
  },
  {
    name: "Cage Sponsor",
    featured: true,
    badge: "Most Popular",
    benefits: [
      "Logo on Cage Canvas/Pad",
      "In-Cage Announcement",
      "4 VIP Tickets",
      "Booth at Event",
      "Featured Social Content",
      "Website & Program Listing",
    ],
  },
  {
    name: "Title Sponsor",
    featured: false,
    benefits: [
      '"Presented By" Naming Rights',
      "Center Canvas Logo",
      "10 VIP Tickets (Table)",
      "Fighter Kit Branding",
      "Premium Booth Location",
      "Exclusive Media Access",
    ],
  },
];
