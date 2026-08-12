// src/lib/image.ts
// Image helper utilities for responsive images and asset paths.

export const IMAGE_PATHS = {
  HERO: "/images/environment/cafe-main.webp",
  COUNTER: "/images/environment/cafe-counter.webp",
  GAMING: "/images/environment/cafe-gaming.webp",
  MONITOR_SCREEN: "/images/screens/desktop-wallpaper.webp",
  RESULT_PAGE: "/images/screens/result-page.webp",
  RECEIPT: "/images/paper/receipt-print-01.webp",
  TOFFEE_BOWL: "/images/objects/toffee-bowl.webp",
};

export function getAssetPath(path: string): string {
  if (path.startsWith("/")) return path;
  return `/images/${path}`;
}

export function getImageDimensions(type: "hero" | "card" | "icon" | "texture") {
  switch (type) {
    case "hero":
      return { width: 1440, height: 900 };
    case "card":
      return { width: 400, height: 260 };
    case "icon":
      return { width: 64, height: 64 };
    case "texture":
      return { width: 200, height: 200 };
    default:
      return { width: 800, height: 600 };
  }
}
