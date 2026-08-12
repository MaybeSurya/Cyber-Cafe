"use client";
// src/components/computer/DesktopIcon.tsx
// Desktop shortcut icon matching classic OS look with label shadow.

import type { DesktopIcon as DesktopIconData } from "@/data/types";
import { useAudio } from "@/hooks/useAudio";
import styles from "./DesktopIcon.module.css";

interface DesktopIconProps {
  icon: DesktopIconData;
  onOpen: (icon: DesktopIconData) => void;
}

export default function DesktopIcon({ icon, onOpen }: DesktopIconProps) {
  const { playSfx } = useAudio();

  const handleDoubleClick = () => {
    playSfx("sfx-mouse-click");
    onOpen(icon);
  };

  return (
    <div
      className={styles.iconWrapper}
      role="button"
      tabIndex={0}
      aria-label={`Desktop shortcut: ${icon.label.replace("\n", " ")}`}
      onDoubleClick={handleDoubleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleDoubleClick();
        }
      }}
    >
      <div className={styles.iconBox}>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "32px", fontVariationSettings: "'FILL' 1" }}
          aria-hidden="true"
        >
          {icon.icon}
        </span>
      </div>
      <span className={styles.label}>{icon.label}</span>
    </div>
  );
}
