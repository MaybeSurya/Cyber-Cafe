// src/components/hardware/MouseEnhanced.tsx
"use client";

import { useState } from "react";
import { useInteraction } from "@/hooks/useInteraction";
import { useAudio } from "@/hooks/useAudio";
import { useCafeStore } from "@/store/cafeStore";
import styles from "./MouseEnhanced.module.css";

export default function MouseEnhanced() {
  const { onMouseEnter, onMouseLeave, onFocus, onBlur, onActivate } =
    useInteraction("mouse");
  const { playSfx } = useAudio();
  const unlockMemory = useCafeStore((s) => s.unlockMemory);

  const [isPressed, setIsPressed] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);

  const handleClick = () => {
    onActivate(() => {
      setIsPressed(true);
      playSfx("sfx-mouse-click");
      
      // Pulse glow effect
      setGlowIntensity(0.8);
      setTimeout(() => setGlowIntensity(0), 300);
      
      // Reset press state
      setTimeout(() => setIsPressed(false), 100);
      
      // Unlock memory
      unlockMemory("wired-mouse");
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
      className={`${styles.mouseContainer} ${isPressed ? styles.pressed : ""}`}
      role="button"
      tabIndex={0}
      aria-label="Wired optical mouse. Click to inspect memory."
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {/* Cable */}
      <svg className={styles.cableSvg} aria-hidden="true">
        <path d="M 12 0 C 12 20, 24 30, 24 50" stroke="#1c1b1b" strokeWidth="3" fill="none" />
      </svg>

      {/* Mouse body */}
      <div className={styles.mouseBody}>
        {/* Split buttons */}
        <div className={styles.buttons}>
          <div className={`${styles.leftBtn} ${isPressed ? styles.pressedBtn : ""}`} />
          <div className={styles.scrollWheel} />
          <div className={`${styles.rightBtn} ${isPressed ? styles.pressedBtn : ""}`} />
        </div>
        {/* Palm rest */}
        <div className={styles.palmRest} />
      </div>

      {/* Optical red glow under mouse */}
      <div 
        className={styles.redGlow} 
        style={{ 
          opacity: glowIntensity,
          boxShadow: `0 0 ${8 + glowIntensity * 12}px rgba(255, 0, 0, ${glowIntensity * 0.4})`
        }}
        aria-hidden="true"
      />
    </div>
  );
}