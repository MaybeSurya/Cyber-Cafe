"use client";
// src/components/notices/Notice.tsx
// Laminated, handwritten, or printed physical notice taped to walls or boards.

import { useState } from "react";
import type { Notice as NoticeData } from "@/data/types";
import { useInteraction } from "@/hooks/useInteraction";
import styles from "./Notice.module.css";

interface NoticeProps {
  notice: NoticeData;
}

export default function Notice({ notice }: NoticeProps) {
  const [expanded, setExpanded] = useState(false);
  const { onMouseEnter, onMouseLeave, onFocus, onBlur, onActivate } =
    useInteraction(`notice-${notice.id}`);

  const handleToggle = () => {
    onActivate(() => {
      setExpanded((prev) => !prev);
    });
  };

  const styleType = styles[notice.type] || styles.laminated;
  const rotationStyle = notice.rotation ? { transform: `rotate(${notice.rotation}deg)` } : {};

  return (
    <div
      className={`${styles.notice} ${styleType} ${expanded ? styles.expanded : ""}`}
      style={rotationStyle}
      role="button"
      tabIndex={0}
      aria-label={`Notice: ${notice.content}. Click to toggle zoom.`}
      aria-expanded={expanded}
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {/* Scotch tape graphic at top */}
      <div className={styles.tape} aria-hidden="true" />

      <h3 className={styles.content}>{notice.content}</h3>
      {notice.subtext && <p className={styles.subtext}>{notice.subtext}</p>}
    </div>
  );
}
