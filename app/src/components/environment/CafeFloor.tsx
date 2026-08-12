"use client";
// src/components/environment/CafeFloor.tsx
// Physical flooring texture at the base of the café scene.

export default function CafeFloor() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "140px",
        backgroundColor: "#a89f91",
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(0,0,0,0.06) 40px, rgba(0,0,0,0.06) 41px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(0,0,0,0.06) 60px, rgba(0,0,0,0.06) 61px)",
        boxShadow: "inset 0 10px 20px rgba(0,0,0,0.2)",
        zIndex: 1,
      }}
      aria-hidden="true"
    />
  );
}
