// src/components/hardware/KeyboardEnhanced.tsx
"use client";

import { useState } from "react";
import { useInteraction } from "@/hooks/useInteraction";
import { useAudio } from "@/hooks/useAudio";
import styles from "./KeyboardEnhanced.module.css";

export default function KeyboardEnhanced() {
  const { onMouseEnter, onMouseLeave, onFocus, onBlur, onActivate } =
    useInteraction("keyboard");
  const { playSfx } = useAudio();
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    onActivate(() => {
      setIsPressed(true);
      playSfx("sfx-keyboard");
      
      // Reset press state after short delay
      setTimeout(() => setIsPressed(false), 100);
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={`${styles.keyboard} ${isPressed ? styles.pressed : ""}`}
      role="button"
      tabIndex={0}
      aria-label="Worn membrane keyboard. Click or press keys to type."
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div className={styles.topBevel} />
      <div className={styles.keyGrid} aria-hidden="true">
        {Array.from({ length: 48 }).map((_, i) => {
          // Define worn keys: E(18), S(30), A(28), Spacebar(31)
          const isWorn = [18, 28, 30, 31].includes(i);
          const isSpace = i === 31;
          
          return (
            <div
              key={i}
              className={`${styles.key} ${isWorn ? styles.keyWorn : ""} ${isSpace ? styles.spacebar : ""}`}
              style={{ 
                transform: isPressed && isWorn ? "translateY(1px)" : "none",
                backgroundColor: isWorn ? "#b8a594" : "var(--color-surface-container)"
              }}
            />
          );
        })}
        <div className={styles.spacebar} />
      </div>
    </div>
  );
}