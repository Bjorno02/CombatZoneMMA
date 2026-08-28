// All gallery images - randomly assorted (newest first)
export const GALLERY_IMAGES = [
  "/images/cz-93/CZ93Gallery-1.webp",
  "/images/cz-93/CZ93Gallery-3.webp",
  "/images/cz-93/CZ93Gallery-4.webp",
  "/images/cz-93/CZ93Gallery-5.webp",
  "/images/Gal8.JPG",
  "/images/Gal3.jpg",
  "/images/Gal12.JPG",
  "/images/Gal1.jpg",
  "/images/Gal15.JPG",
  "/images/Gal6.jpg",
  "/images/Gal10.jpg",
  "/images/Gal4.jpg",
  "/images/Gal14.JPG",
  "/images/Gal2.jpg",
  "/images/Gal9.JPG",
  "/images/Gal5.JPG",
  "/images/Gal13.jpg",
  "/images/Gal7.jpg",
  "/images/Gal11.JPG",
];

// Fisher-Yates shuffle on a copy, so the source array stays in order
export function pickRandomImages(count: number): string[] {
  const shuffled = [...GALLERY_IMAGES];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!];
  }
  return shuffled.slice(0, count);
}
