"use client";
// src/components/environment/FluorescentLight.tsx
// Overhead fluorescent tube fixture with subtle startup flicker animation.

export default function FluorescentLight() {
  return (
    <div
      style={{
        position: "absolute",
        top: "12px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "60%",
        maxWidth: "600px",
        height: "16px",
        backgroundColor: "var(--color-fluorescent-white)",
        borderRadius: "8px",
        boxShadow: "0 0 25px rgba(240, 248, 255, 0.8), 0 0 50px rgba(240, 248, 255, 0.3)",
        zIndex: 10,
        pointerEvents: "none",
      }}
      className="animate-flicker"
      aria-hidden="true"
    />
  );
}
