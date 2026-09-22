/**
 * Application-wide constants
 *
 * External URLs use environment variables for easy updates.
 * Set these in .env file (see .env.example)
 */

// External URLs - configurable via environment variables
// General Admission tickets — Combat Zone 94 on Ticketmaster.
export const TICKETMASTER_EVENT_URL =
  import.meta.env.VITE_TICKETMASTER_URL || "https://www.ticketmaster.com/event/0100652F8EF184D8";

// VIP Experience tickets — Combat Zone 94 on Ticketmaster.
export const TICKETMASTER_VIP_URL =
  import.meta.env.VITE_TICKETMASTER_VIP_URL ||
  "https://www.ticketmaster.com/event/0100652F92C19064";

// Set to false to show the "on sale soon" state in the ticket options modal.
export const TICKETS_ON_SALE = true;

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
