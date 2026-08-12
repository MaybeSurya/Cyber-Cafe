"use client";
// src/components/interactions/Hotspot.tsx
// Invisible interactive hotspot zone overlaid on physical scene objects.

import { ReactNode } from "react";
import { useInteraction } from "@/hooks/useInteraction";

interface HotspotProps {
  id: string;
  ariaLabel: string;
  onInteract?: () => void;
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export default function Hotspot({
  id,
  ariaLabel,
  onInteract,
  children,
  style,
  className = "",
}: HotspotProps) {
  const { isHovered, onMouseEnter, onMouseLeave, onFocus, onBlur, onActivate } =
    useInteraction(id);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onClick={() => onActivate(onInteract)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate(onInteract);
        }
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      style={{
        cursor: "pointer",
        outline: isHovered ? "2px dashed var(--color-secondary-container)" : "none",
        outlineOffset: "2px",
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
