"use client";

import { useMemo } from "react";
import { useCafeStore } from "@/store/cafeStore";
import { useInteraction } from "@/hooks/useInteraction";
import type { FanSpeed } from "@/data/types";
import styles from "./CeilingFan.module.css";

const SPEED_LABELS: Record<FanSpeed, string> = {
  0: "Fan off",
  1: "Fan slow",
  2: "Fan medium",
  3: "Fan fast",
};

export default function CeilingFan() {
  const fanSpeed = useCafeStore((s) => s.fanSpeed);
  const cycleFanSpeed = useCafeStore((s) => s.cycleFanSpeed);
  const { onMouseEnter, onMouseLeave, onFocus, onBlur, onActivate } =
    useInteraction("ceiling-fan");

  const handleClick = () => {
    onActivate(cycleFanSpeed);
  };

  // Calculate blade rotation based on fan speed
  const bladeRotation = useMemo(() => {
    switch (fanSpeed) {
      case 0: return 0; // stopped
      case 1: return (Date.now() % 7200) / 20; // slow: 1 rotation every 12s
      case 2: return (Date.now() % 3600) / 10; // medium: 1 rotation every 6s
      case 3: return (Date.now() % 1800) / 5;  // fast: 1 rotation every 3s
      default: return 0;
    }
  }, [fanSpeed]);

  // Add slight wobble at higher speeds
  const wobble = useMemo(() => {
    if (fanSpeed >= 2) {
      return Math.sin(Date.now() / 200) * (fanSpeed - 1) * 0.5;
    }
    return 0;
  }, [fanSpeed]);

  return (
    <button
      className={styles.wrapper}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label={`Ceiling fan — ${SPEED_LABELS[fanSpeed]}. Click to change speed.`}
    >
      {/* Motor hub */}
      <div className={styles.hub} aria-hidden="true">
        {/* Blades with rotation and wobble */}
        <div
          className={`${styles.blades} ${styles[`speed${fanSpeed}`]}`}
          aria-hidden="true"
          style={{ transform: `rotate(${bladeRotation}deg)` }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={styles.blade}
              style={{
                transform: `rotate(${i * 120}deg) skewY(${wobble}deg)`,
                filter: fanSpeed >= 2 ? `blur(${Math.max(0, (fanSpeed - 1) * 0.3)}px)` : "none",
              }}
            />
          ))}
        </div>
        {/* Centre cap */}
        <div className={styles.cap} />
      </div>
      {/* Rod */}
      <div className={styles.rod} aria-hidden="true" />

      {/* Accessible speed announcement */}
      <span className="sr-only" aria-live="polite">
        {SPEED_LABELS[fanSpeed]}
      </span>
    </button>
  );
}