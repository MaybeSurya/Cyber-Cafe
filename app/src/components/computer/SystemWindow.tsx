"use client";
// src/components/computer/SystemWindow.tsx
// Reusable OS window frame with titlebar controls (minimize, maximize, close).

import { ReactNode } from "react";
import { useCafeStore } from "@/store/cafeStore";
import styles from "./SystemWindow.module.css";

interface SystemWindowProps {
  id: string;
  title: string;
  icon?: string;
  children: ReactNode;
  width?: string;
  height?: string;
}

export default function SystemWindow({
  id,
  title,
  icon = "desktop_windows",
  children,
  width = "480px",
  height = "360px",
}: SystemWindowProps) {
  const closeWindow = useCafeStore((s) => s.closeWindow);
  const focusWindow = useCafeStore((s) => s.focusWindow);
  const activeWindow = useCafeStore((s) => s.activeWindow);

  const isActive = activeWindow === id;

  return (
    <div
      className={`${styles.window} ${isActive ? styles.active : ""}`}
      style={{ width, height }}
      onClick={() => focusWindow(id)}
      role="region"
      aria-label={`Window: ${title}`}
    >
      {/* Titlebar */}
      <div className={styles.titlebar}>
        <div className={styles.titleLeft}>
          <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
            {icon}
          </span>
          <span className={styles.titleText}>{title}</span>
        </div>
        <div className={styles.controls}>
          <button className={styles.ctrlBtn} aria-label="Minimize">_</button>
          <button className={styles.ctrlBtn} aria-label="Maximize">□</button>
          <button
            className={`${styles.ctrlBtn} ${styles.closeBtn}`}
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            aria-label="Close window"
          >
            ×
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
