"use client";
// src/components/environment/AmbientLayer.tsx
// Renders ambient lighting gradient and listens for global click to unlock Howler audio.

import { useAudio } from "@/hooks/useAudio";

export default function AmbientLayer() {
  const { audioUnlocked, handleFirstGesture } = useAudio();

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: audioUnlocked ? "none" : "auto",
        zIndex: 5,
      }}
      className="ambient-lighting"
      onClick={handleFirstGesture}
    />
  );
}
