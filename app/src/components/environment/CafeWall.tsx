"use client";
// src/components/environment/CafeWall.tsx
// Café background wall layer with dingy cream texture and noise overlay.

import { ReactNode } from "react";

export default function CafeWall({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "var(--color-wall-cream)",
        zIndex: "var(--z-scene)",
        overflow: "hidden",
      }}
      className="texture-wall"
    >
      {/* Noise overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          pointerEvents: "none",
        }}
        className="texture-noise"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
