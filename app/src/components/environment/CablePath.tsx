"use client";

import { useMemo } from "react";
import styles from "./CablePath.module.css";

interface CablePathProps {
  definition: {
    id: string;
    path: string;
    strokeWidth: number;
    opacity: number;
    layer: "background" | "foreground";
    subtleAnimation?: boolean;
  };
  isAnimated: boolean;
}

export function CablePath({ definition, isAnimated }: CablePathProps) {
  const pathClass = useMemo(() => {
    const base = `${styles.path} ${styles[definition.layer]}`;
    if (isAnimated) return `${base} ${styles.animated}`;
    return base;
  }, [definition.layer, isAnimated]);

  return (
    <svg 
      className={pathClass}
      viewBox="0 0 400 250"
      preserveAspectRatio="none"
      pointer-events="none"
      role="img"
      aria-label="Cable clutter"
    >
      <path
        d={definition.path}
        stroke="var(--color-ink)"
        strokeWidth={definition.strokeWidth}
        fill="none"
        opacity={definition.opacity}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default CablePath;