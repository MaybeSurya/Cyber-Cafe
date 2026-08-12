"use client";
// src/components/interactions/InteractionPrompt.tsx
// Hover tooltip revealing object action (e.g. "Use computer", "Print something").

import { useCafeStore } from "@/store/cafeStore";
import { getObjectById } from "@/data/objects";

export default function InteractionPrompt() {
  const activeHotspot = useCafeStore((s) => s.activeHotspot);

  if (!activeHotspot) return null;

  const obj = getObjectById(activeHotspot);
  const promptText = obj ? obj.ariaLabel : "Click to interact";

  return (
    <div
      role="tooltip"
      style={{
        position: "fixed",
        bottom: "60px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "var(--color-primary)",
        color: "var(--color-secondary-container)",
        fontFamily: "var(--font-courier-prime)",
        fontSize: "12px",
        fontWeight: "bold",
        padding: "var(--space-2) var(--space-4)",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--color-secondary)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
        zIndex: "var(--z-ui)",
        pointerEvents: "none",
        whiteSpace: "nowrap",
      }}
    >
      {promptText}
    </div>
  );
}
