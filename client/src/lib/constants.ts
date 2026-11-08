/**
 * Application-wide constants
 *
 * External URLs use environment variables for easy updates.
 * Set these in .env file (see .env.example)
 */

// ---------------------------------------------------------------------------
// Ticketing
// ---------------------------------------------------------------------------

// General Admission tickets — CZ 95 is not on Ticketmaster yet; this is still
// the old CZ 94 event. Swap in the CZ 95 link (or set VITE_TICKETMASTER_URL)
// when Ticketmaster publishes it, then flip TICKETS_ON_SALE to true.
export const TICKETMASTER_EVENT_URL =
  import.meta.env.VITE_TICKETMASTER_URL || "https://www.ticketmaster.com/event/0100652F8EF184D8";

// VIP packages are booked by email — see VIP_INQUIRY_EMAIL below.
export const VIP_INQUIRY_EMAIL = "jmsnkattar@czmma.com";

// Set to false to show the "on sale soon" state in the ticket options modal.
export const TICKETS_ON_SALE = false;

// ---------------------------------------------------------------------------
// Next live event (Combat Zone 95) — single source of truth
// ---------------------------------------------------------------------------
// The home page countdown, events page, fight card, navbar, SEO and PPV
// components all read from these. When CZ 95 details are announced, update
// here and everything follows.

export const PPV_LIVE_EVENT_NAME = "Combat Zone 95";
export const PPV_LIVE_EVENT_NUMBER = "95";

// ISO start time used by the countdowns and schema.org structured data.
// null = date not announced yet (the site shows a "Save the Date" state).
// Example once known: "2027-02-20T17:00:00-05:00"
export const PPV_LIVE_EVENT_DATE_ISO: string | null = null;

// Human-readable date shown throughout the site. Keep in sync with the ISO
// value above, e.g. "February 20, 2027".
export const PPV_LIVE_EVENT_DATE = "Date TBA";

// Start time shown alongside the date once the date is announced.
export const PPV_LIVE_EVENT_TIME = "5:00 PM ET";

export const PPV_LIVE_EVENT_VENUE = "SNHU Arena";

// Path to the official event poster under client/public. null = not released
// yet; the home page and events page render a "Save the Date" card instead.
// Example once released: "/images/CZ95_Poster.jpeg"
export const PPV_LIVE_EVENT_POSTER: string | null = null;

export const PPV_LIVE_TICKET_URL =
  import.meta.env.VITE_PPV_LIVE_TICKET_URL ||
  "https://combatzonemma.ticketspice.com/combat-zone-95";

export const PPV_LIVE_WATCH_PATH = "/watch";

// Flip to true on fight week to enable the "Watch Live" buttons that link to
// the stream page. While false they render disabled.
export const PPV_LIVE_WATCH_ENABLED = false;

// Flip to false once the CZ 95 TicketSpice page is live.
// Also update TICKETSPICE_EVENT_ID (the Webconnex formId) in the Vercel
// environment so /api/ppv/verify checks orders against the CZ 95 form.
export const PPV_LIVE_COMING_SOON = true;

// ---------------------------------------------------------------------------
// Most recent event replay (Combat Zone 94)
// ---------------------------------------------------------------------------

export const PPV_REPLAY_URL =
  import.meta.env.VITE_PPV_REPLAY_URL || "https://combatzonemma.ticketspice.com/combat-zone-94";

export const PPV_REPLAY_EVENT_NAME = "Combat Zone 94";
export const PPV_REPLAY_EVENT_NUMBER = "94";
export const PPV_REPLAY_EVENT_DATE = "November 7, 2026";
export const PPV_REPLAY_EVENT_VENUE = "SNHU Arena";

// ---------------------------------------------------------------------------
// Media & site
// ---------------------------------------------------------------------------

export const YOUTUBE_CHANNEL_URL =
  import.meta.env.VITE_YOUTUBE_CHANNEL_URL || "https://www.youtube.com/@CombatZoneMMA";

export const YOUTUBE_CHANNEL_HANDLE =
  import.meta.env.VITE_YOUTUBE_CHANNEL_HANDLE || "@CombatZoneMMA";

// Site configuration
export const SITE_NAME = "Combat Zone MMA";
export const SITE_URL = import.meta.env.VITE_SITE_URL || "https://combatzonemma.com";

// Container layout
export const CONTAINER_MAX_WIDTH = "max-w-[1280px]";
export const CONTAINER_PADDING = "px-8 md:px-12 lg:px-16";
