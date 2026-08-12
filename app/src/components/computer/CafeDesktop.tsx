"use client";
// src/components/computer/CafeDesktop.tsx
// Full desktop experience composing desktop icons, active windows, browser, Winamp music player, and taskbar.

import { useState } from "react";
import BootSequence from "./BootSequence";
import DesktopIcon from "./DesktopIcon";
import CafeTaskbar from "./CafeTaskbar";
import SystemWindow from "./SystemWindow";
import CafeBrowser from "./CafeBrowser";
import SystemDialog from "./SystemDialog";
import Receipt from "./Receipt";
import { desktopIcons } from "@/data/stories";
import type { DesktopIcon as DesktopIconData } from "@/data/types";
import { useCafeStore } from "@/store/cafeStore";
import styles from "./CafeDesktop.module.css";

export default function CafeDesktop() {
  const bootSequenceComplete = useCafeStore((s) => s.bootSequenceComplete);
  const openWindows = useCafeStore((s) => s.openWindows);
  const openWindow = useCafeStore((s) => s.openWindow);
  const [showReceiptModal, setShowReceiptModal] = useState(false);

  if (!bootSequenceComplete) {
    return <BootSequence />;
  }

  const handleOpenIcon = (icon: DesktopIconData) => {
    if (icon.action === "openBrowser" || icon.action === "openResults") {
      openWindow("Browser");
    } else if (icon.action === "openMusic") {
      openWindow("Music Player");
    } else if (icon.action === "openPrint") {
      setShowReceiptModal(true);
    } else {
      openWindow(icon.label.replace("\n", " "));
    }
  };

  return (
    <div className={styles.desktopContainer}>
      {/* Windows Wallpaper Background */}
      <div className={styles.wallpaper} />

      {/* Desktop Icons Grid */}
      <div className={styles.iconGrid}>
        {desktopIcons.map((icon) => (
          <DesktopIcon key={icon.id} icon={icon} onOpen={handleOpenIcon} />
        ))}
      </div>

      {/* Active Windows */}
      {openWindows.includes("Browser") && (
        <SystemWindow id="Browser" title="Internet Explorer" icon="public" width="600px" height="420px">
          <CafeBrowser />
        </SystemWindow>
      )}

      {openWindows.includes("Music Player") && (
        <SystemWindow id="Music Player" title="Winamp Player" icon="headphones" width="340px" height="260px">
          <div className={styles.musicPlayerBox}>
            <p className={styles.songTitle}>♪ 03:12 [Tum Hi Ho - Aashiqui 2]</p>
            <div className={styles.controlsRow}>
              <button className={styles.musicBtn}>⏮</button>
              <button className={styles.musicBtn}>▶</button>
              <button className={styles.musicBtn}>⏭</button>
            </div>
            <ul className={styles.playlist}>
              <li className={styles.activeSong}>1. Tum Hi Ho (04:22)</li>
              <li>2. Sunny Sunny (03:15)</li>
              <li>3. Kabira (03:43)</li>
              <li>4. Lungi Dance (04:36)</li>
            </ul>
          </div>
        </SystemWindow>
      )}

      {/* Receipt Modal */}
      {showReceiptModal && (
        <SystemDialog title="SESSION RECEIPT" onClose={() => setShowReceiptModal(false)}>
          <Receipt onClose={() => setShowReceiptModal(false)} />
        </SystemDialog>
      )}

      {/* Taskbar */}
      <CafeTaskbar />
    </div>
  );
}
