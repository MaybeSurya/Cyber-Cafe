"use client";
// src/components/audio/AudioController.tsx
// Persistent audio control widget pinned to screen corner.

import { useState } from "react";
import { useAudio } from "@/hooks/useAudio";
import styles from "./AudioController.module.css";

export default function AudioController() {
  const [open, setOpen] = useState(false);
  const {
    masterEnabled,
    masterVolume,
    ambienceVolume,
    musicVolume,
    toggleAudio,
    setMasterVolume,
    setAmbienceVolume,
    setMusicVolume,
  } = useAudio();

  return (
    <aside className={styles.audioController} aria-label="Audio controls">
      {/* Floating Toggle Button */}
      <button
        className={styles.mainToggle}
        onClick={toggleAudio}
        aria-label={masterEnabled ? "Mute all audio" : "Unmute all audio"}
        title="Toggle Master Sound"
      >
        <span className="material-symbols-outlined">
          {masterEnabled ? "volume_up" : "volume_off"}
        </span>
      </button>

      {/* Expand Panel Button */}
      <button
        className={styles.expandBtn}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        aria-label="Audio settings panel"
      >
        <span className="material-symbols-outlined">
          {open ? "expand_more" : "tune"}
        </span>
      </button>

      {/* Expanded Mixer Panel */}
      {open && (
        <div className={styles.mixerPanel}>
          <p className={styles.panelTitle}>AUDIO MIXER</p>

          <div className={styles.sliderRow}>
            <label htmlFor="master-vol">Master</label>
            <input
              id="master-vol"
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={masterVolume}
              onChange={(e) => setMasterVolume(parseFloat(e.target.value))}
            />
          </div>

          <div className={styles.sliderRow}>
            <label htmlFor="ambience-vol">Ambience</label>
            <input
              id="ambience-vol"
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={ambienceVolume}
              onChange={(e) => setAmbienceVolume(parseFloat(e.target.value))}
            />
          </div>

          <div className={styles.sliderRow}>
            <label htmlFor="music-vol">Radio/Music</label>
            <input
              id="music-vol"
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={musicVolume}
              onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
            />
          </div>
        </div>
      )}
    </aside>
  );
}
