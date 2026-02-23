/**
 * Application-wide constants
 *
 * External URLs use environment variables for easy updates.
 * Set these in .env file (see .env.example)
 */

// External URLs - configurable via environment variables
export const TICKETMASTER_EVENT_URL =
  import.meta.env.VITE_TICKETMASTER_URL ||
  "https://www.ticketmaster.com/combat-zone-92-manchester-new-hampshire-05-16-2026/event/01006453D8DCC4F4";

export const PPV_REPLAY_URL =
  import.meta.env.VITE_PPV_REPLAY_URL || "https://combatzonemma.ticketspice.com/combat-zone-91";

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
