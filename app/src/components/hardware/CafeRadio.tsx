"use client";
// src/components/hardware/CafeRadio.tsx
// The FM radio sitting on the counter. Clicking plays/pauses café FM.

import { useState } from "react";
import { useAudio } from "@/hooks/useAudio";
import styles from "./CafeRadio.module.css";

export default function CafeRadio() {
  const [playing, setPlaying] = useState(false);
  const { playSfx, audioUnlocked, handleFirstGesture } = useAudio();

  const handleToggle = () => {
    if (!audioUnlocked) {
      handleFirstGesture();
    }
    setPlaying((p) => !p);
    // In full impl: toggle Howler music-cafe-fm track
  };

  return (
    <div
      className={styles.radio}
      role="region"
      aria-label="Café FM Radio"
    >
      {/* Display */}
      <div className={styles.display}>
        <span className={styles.stationLabel}>CAFE FM</span>
        <div
          className={`${styles.indicator} ${playing ? styles.indicatorOn : ""}`}
          aria-hidden="true"
          title={playing ? "Playing" : "Off"}
        />
      </div>

      {/* Frequency dial */}
      <div className={styles.dialRow} aria-hidden="true">
        <div className={styles.dialScreen} />
        <div className={styles.dial} />
      </div>

      {/* Play button */}
      <button
        className={styles.playBtn}
        onClick={handleToggle}
        aria-label={playing ? "Pause café FM radio" : "Play café FM radio"}
        aria-pressed={playing}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
          aria-hidden="true"
        >
          {playing ? "pause" : "play_arrow"}
        </span>
      </button>

      {/* Brand */}
      <div className={styles.brandLabel} aria-hidden="true">AIWA</div>
    </div>
  );
}
