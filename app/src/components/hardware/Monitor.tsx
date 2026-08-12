"use client";
// src/components/hardware/Monitor.tsx
// The physical monitor — graphite bezel, screen surface, bevel details.
// Used both as interactive hotspot in the scene and as full-screen wrapper.

import { ReactNode } from "react";
import styles from "./Monitor.module.css";

interface MonitorProps {
  /** Content to render inside the screen */
  children?: ReactNode;
  /** Monitor brand shown on bezel */
  brand?: string;
  /** Whether screen is powered on */
  powered?: boolean;
  /** Fullscreen mode: fills container */
  fullscreen?: boolean;
  /** Click handler for the monitor */
  onClick?: () => void;
  /** Accessible label */
  ariaLabel?: string;
  className?: string;
}

export default function Monitor({
  children,
  brand = "SYNCMASTER",
  powered = false,
  fullscreen = false,
  onClick,
  ariaLabel = "Computer monitor",
  className = "",
}: MonitorProps) {
  const interactive = Boolean(onClick);

  return (
    <div
      className={`${styles.monitor} ${fullscreen ? styles.fullscreen : ""} ${className}`}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? ariaLabel : undefined}
      onClick={onClick}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
    >
      {/* Bezel brand label */}
      <div className={styles.brand} aria-hidden="true">
        {brand}
      </div>

      {/* Power LED */}
      <div
        className={`${styles.powerLed} ${powered ? styles.ledOn : styles.ledOff}`}
        aria-hidden="true"
        title={powered ? "Power: On" : "Power: Off"}
      />

      {/* Screen surface */}
      <div
        className={`${styles.screen} ${powered ? styles.screenOn : styles.screenOff}`}
        aria-hidden={!powered}
      >
        {/* Scanline overlay */}
        <div className={`${styles.scanlines} texture-scanlines`} aria-hidden="true" />
        {/* Vignette */}
        <div className={styles.vignette} aria-hidden="true" />
        {/* Content */}
        {powered && <div className={styles.content}>{children}</div>}
        {/* Unpowered state */}
        {!powered && (
          <div className={styles.offScreen} aria-hidden="true" />
        )}
      </div>

      {/* Bezel bottom detail strip */}
      <div className={styles.bezelBottom} aria-hidden="true">
        <div className={`${styles.bezelButton} ${styles.bezelButtonWide}`} />
        <div className={styles.bezelButton} />
      </div>
    </div>
  );
}
