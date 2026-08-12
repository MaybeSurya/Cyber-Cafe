"use client";
// src/components/notices/StickyNote.tsx
// Yellow sticky note component with tilt angle and red handwritten ink.

import styles from "./StickyNote.module.css";

interface StickyNoteProps {
  text: string;
  rotation?: number;
  onClick?: () => void;
}

export default function StickyNote({ text, rotation = 4, onClick }: StickyNoteProps) {
  return (
    <div
      className={styles.sticky}
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className={styles.tape} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
