"use client";
// src/components/hardware/Keyboard.tsx
// Membrane keyboard component representing the worn shared desk keyboard.

import { useInteraction } from "@/hooks/useInteraction";
import { useAudio } from "@/hooks/useAudio";
import styles from "./Keyboard.module.css";

export default function Keyboard() {
  const { onMouseEnter, onMouseLeave, onFocus, onBlur, onActivate } =
    useInteraction("keyboard");
  const { playSfx } = useAudio();

  const handleClick = () => {
    onActivate(() => {
      playSfx("sfx-keyboard");
    });
  };

  return (
    <div
      className={styles.keyboard}
      role="button"
      tabIndex={0}
      aria-label="Worn membrane keyboard. Click or press keys to type."
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div className={styles.topBevel} />
      <div className={styles.keyGrid} aria-hidden="true">
        {Array.from({ length: 48 }).map((_, i) => (
          <div
            key={i}
            className={`${styles.key} ${i === 22 || i === 24 || i === 30 || i === 31 ? styles.keyWorn : ""}`}
          />
        ))}
        <div className={styles.spacebar} />
      </div>
    </div>
  );
}
