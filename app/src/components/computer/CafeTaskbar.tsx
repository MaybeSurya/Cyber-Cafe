"use client";
// src/components/computer/CafeTaskbar.tsx
// Windows XP/7 style bottom taskbar with Start button, active window tabs, and system tray clock.

import { useEffect, useState } from "react";
import { useCafeStore } from "@/store/cafeStore";
import styles from "./CafeTaskbar.module.css";

export default function CafeTaskbar() {
  const openWindows = useCafeStore((s) => s.openWindows);
  const activeWindow = useCafeStore((s) => s.activeWindow);
  const focusWindow = useCafeStore((s) => s.focusWindow);
  const [timeStr, setTimeStr] = useState("15:15 PM");

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setTimeStr(
        d.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={styles.taskbar} role="contentinfo" aria-label="Desktop taskbar">
      {/* Start Button */}
      <button className={styles.startBtn} aria-label="Start menu">
        start
      </button>

      {/* Active Windows List */}
      <div className={styles.windowList}>
        {openWindows.map((winId) => (
          <button
            key={winId}
            className={`${styles.taskTab} ${activeWindow === winId ? styles.activeTab : ""}`}
            onClick={() => focusWindow(winId)}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
              desktop_windows
            </span>
            <span className={styles.tabLabel}>{winId}</span>
          </button>
        ))}
      </div>

      {/* System Tray */}
      <div className={styles.tray}>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "14px" }}
          title="Audio volume"
        >
          volume_up
        </span>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "14px" }}
          title="Network connected"
        >
          wifi
        </span>
        <span className={styles.clock}>{timeStr}</span>
      </div>
    </footer>
  );
}
