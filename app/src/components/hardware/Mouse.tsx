"use client";
// src/components/hardware/Mouse.tsx
// Wired optical mouse with click feedback and red optical light glow under base.

import { useInteraction } from "@/hooks/useInteraction";
import { useAudio } from "@/hooks/useAudio";
import { useCafeStore } from "@/store/cafeStore";
import styles from "./Mouse.module.css";

export default function Mouse() {
  const { onMouseEnter, onMouseLeave, onFocus, onBlur, onActivate } =
    useInteraction("mouse");
  const { playSfx } = useAudio();
  const unlockMemory = useCafeStore((s) => s.unlockMemory);

  const handleClick = () => {
    onActivate(() => {
      playSfx("sfx-mouse-click");
      unlockMemory("wired-mouse");
    });
  };

  return (
    <div
      className={styles.mouseContainer}
      role="button"
      tabIndex={0}
      aria-label="Wired optical mouse. Click to inspect memory."
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
      {/* Cable */}
      <svg className={styles.cableSvg} aria-hidden="true">
        <path d="M 12 0 C 12 20, 24 30, 24 50" stroke="#1c1b1b" strokeWidth="3" fill="none" />
      </svg>

      {/* Mouse body */}
      <div className={styles.mouseBody}>
        {/* Split buttons */}
        <div className={styles.buttons}>
          <div className={styles.leftBtn} />
          <div className={styles.scrollWheel} />
          <div className={styles.rightBtn} />
        </div>
        {/* Palm rest */}
        <div className={styles.palmRest} />
      </div>

      {/* Optical red glow under mouse */}
      <div className={styles.redGlow} aria-hidden="true" />
    </div>
  );
}
