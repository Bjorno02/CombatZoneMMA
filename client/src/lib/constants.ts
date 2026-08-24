/**
 * Application-wide constants
 *
 * External URLs use environment variables for easy updates.
 * Set these in .env file (see .env.example)
 */

// External URLs - configurable via environment variables
// General Admission tickets — CZ 94 links not live yet; still the old CZ 93 event.
// Update these (or the env vars) when Ticketmaster publishes CZ 94, then flip
// TICKETS_ON_SALE to true.
export const TICKETMASTER_EVENT_URL =
  import.meta.env.VITE_TICKETMASTER_URL || "https://www.ticketmaster.com/event/010064CAA9F77B03";

// VIP Experience tickets — same deal as above, still pointing at CZ 93.
export const TICKETMASTER_VIP_URL =
  import.meta.env.VITE_TICKETMASTER_VIP_URL ||
  "https://www.ticketmaster.com/event/010064CAAC2D875E";

// Flip to true once CZ 94 Ticketmaster links are live and swapped in above.
export const TICKETS_ON_SALE = false;

export const PPV_REPLAY_URL =
  import.meta.env.VITE_PPV_REPLAY_URL || "https://combatzonemma.ticketspice.com/combat-zone-93";

export const PPV_LIVE_TICKET_URL =
  import.meta.env.VITE_PPV_LIVE_TICKET_URL ||
  "https://combatzonemma.ticketspice.com/combat-zone-94";

export const PPV_LIVE_EVENT_NAME = "Combat Zone 94";
export const PPV_LIVE_EVENT_NUMBER = "94";
export const PPV_LIVE_EVENT_DATE = "November 7, 2026";
export const PPV_LIVE_EVENT_VENUE = "SNHU Arena";
export const PPV_LIVE_WATCH_PATH = "/watch";
// Flip to false once the CZ 94 TicketSpice page is live.
export const PPV_LIVE_COMING_SOON = true;

export const PPV_REPLAY_EVENT_NAME = "Combat Zone 93";
export const PPV_REPLAY_EVENT_NUMBER = "93";
export const PPV_REPLAY_EVENT_DATE = "August 22, 2026";
export const PPV_REPLAY_EVENT_VENUE = "SNHU Arena";

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
