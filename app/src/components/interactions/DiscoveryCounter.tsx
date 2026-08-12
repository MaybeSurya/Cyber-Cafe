"use client";
// src/components/interactions/DiscoveryCounter.tsx
// Subtle badge tracking unlocked memories (e.g. "MEMORIES FOUND 07/24").

import { useDiscovery } from "@/hooks/useDiscovery";

export default function DiscoveryCounter() {
  const { discoveredCount, totalMemories } = useDiscovery();

  return (
    <div
      style={{
        position: "fixed",
        top: "76px",
        right: "var(--space-4)",
        backgroundColor: "rgba(0,0,0,0.6)",
        color: "var(--color-notice-paper)",
        fontFamily: "var(--font-courier-prime)",
        fontSize: "11px",
        padding: "var(--space-1) var(--space-3)",
        borderRadius: "var(--radius-sm)",
        border: "1px solid rgba(255,255,255,0.2)",
        zIndex: "var(--z-ui)",
        userSelect: "none",
        backdropFilter: "blur(2px)",
      }}
      aria-label={`${discoveredCount} out of ${totalMemories} memories discovered`}
    >
      MEMORIES DISCOVERED: {discoveredCount.toString().padStart(2, "0")} / {totalMemories}
    </div>
  );
}
