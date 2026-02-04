/**
 * Event data - centralized event information
 */

export interface PastEvent {
  id: number;
  date: string;
  venue: string;
  fights: number;
}

// Past events archive
export const PAST_EVENTS: PastEvent[] = [
  { id: 90, date: "November 2025", venue: "SNHU Arena", fights: 12 },
  { id: 89, date: "August 2025", venue: "SNHU Arena", fights: 11 },
  { id: 88, date: "May 2025", venue: "SNHU Arena", fights: 12 },
  { id: 87, date: "February 2025", venue: "SNHU Arena", fights: 10 },
  { id: 86, date: "November 2024", venue: "SNHU Arena", fights: 11 },
  { id: 85, date: "August 2024", venue: "SNHU Arena", fights: 12 },
];
