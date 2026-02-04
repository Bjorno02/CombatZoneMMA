/**
 * Shared TypeScript types and interfaces
 */

import type React from "react";

// YouTube API Types
export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  description?: string;
}

export interface YouTubeApiResponse {
  videos: YouTubeVideo[];
}

// Event Types
export interface Fight {
  fighters: string;
  weight: string;
}

export interface EventData {
  id: number;
  name: string;
  date: Date;
  doorsOpen: string;
  firstFight: string;
  venue: string;
  location: string;
  parking: string;
  foodDrink: string;
  refundPolicy: string;
  topFights: Fight[];
}

// VIP Package Types
export interface VIPPackage {
  name: string;
  price: number;
  section: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

export interface VIPFeature {
  text: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Navbar Types
export interface NavbarLink {
  href: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}
