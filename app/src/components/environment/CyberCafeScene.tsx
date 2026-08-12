"use client";
// src/components/environment/CyberCafeScene.tsx
// Main interactive scene component composing the entire café interior environment.

import { useState } from "react";
import Link from "next/link";
import CafeWall from "./CafeWall";
import CafeFloor from "./CafeFloor";
import FluorescentLight from "./FluorescentLight";
import CeilingFan from "@/components/hardware/CeilingFan";
import MdfPartition from "./MdfPartition";
import AmbientLayer from "./AmbientLayer";
import NoticeBoard from "@/components/notices/NoticeBoard";
import PcBooth from "@/components/furniture/PcBooth";
import CafeCounter from "@/components/furniture/CafeCounter";
import AudioController from "@/components/audio/AudioController";
import InteractionPrompt from "@/components/interactions/InteractionPrompt";
import DiscoveryCounter from "@/components/interactions/DiscoveryCounter";
import SystemDialog from "@/components/computer/SystemDialog";
import CafeButton from "@/components/ui/CafeButton";
import { operatorDialogues } from "@/data/stories";
import styles from "./CyberCafeScene.module.css";

export default function CyberCafeScene() {
  const [activeTab, setActiveTab] = useState<"terminals" | "counter">("terminals");
  const [showSlipModal, setShowSlipModal] = useState(false);
  const [dialogueIdx, setDialogueIdx] = useState(0);

  const currentDialogue = operatorDialogues[dialogueIdx];

  const handleNextDialogue = () => {
    setDialogueIdx((prev) => (prev + 1) % operatorDialogues.length);
  };

  return (
    <div className={styles.sceneContainer}>
      {/* ─── Top App Bar ─────────────────────────────────────────────────── */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.logo}>NET_JUNCTION_v2.1</h1>
          <nav className={styles.topNav} aria-label="Main Navigation">
            <button
              className={`${styles.navBtn} ${activeTab === "terminals" ? styles.navActive : ""}`}
              onClick={() => setActiveTab("terminals")}
            >
              Terminals
            </button>
            <button
              className={`${styles.navBtn} ${activeTab === "counter" ? styles.navActive : ""}`}
              onClick={() => setActiveTab("counter")}
            >
              Main Counter
            </button>
            <Link href="/memories" className={styles.navBtn}>
              Memories Archive
            </Link>
            <Link href="/about" className={styles.navBtn}>
              About
            </Link>
          </nav>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.iconBtn} title="Network Settings">
            <span className="material-symbols-outlined">settings_ethernet</span>
          </button>
          <Link href="/" className={styles.iconBtn} title="Power Off / Exit">
            <span className="material-symbols-outlined">power_settings_new</span>
          </Link>
        </div>
      </header>

      {/* ─── Side Navigation Bar ─────────────────────────────────────────── */}
      <aside className={styles.sidebar}>
        <div className={styles.stationBadge}>
          <h2>STATION_04</h2>
          <p>CONNECTED / 100Mbps</p>
          <CafeButton size="sm" onClick={() => setShowSlipModal(true)} style={{ marginTop: "12px" }}>
            GENERATE SLIP
          </CafeButton>
        </div>

        <nav className={styles.sideNav}>
          <button
            className={`${styles.sideBtn} ${activeTab === "terminals" ? styles.sideActive : ""}`}
            onClick={() => setActiveTab("terminals")}
          >
            <span className="material-symbols-outlined">desktop_windows</span>
            <span>Admin Console</span>
          </button>
          <button
            className={`${styles.sideBtn} ${activeTab === "counter" ? styles.sideActive : ""}`}
            onClick={() => setActiveTab("counter")}
          >
            <span className="material-symbols-outlined">receipt_long</span>
            <span>Billing Log</span>
          </button>
          <Link href="/memories" className={styles.sideBtn}>
            <span className="material-symbols-outlined">memory</span>
            <span>Memory Archive</span>
          </Link>
          <Link href="/about" className={styles.sideBtn}>
            <span className="material-symbols-outlined">info</span>
            <span>About Cyber Cafe</span>
          </Link>
        </nav>
      </aside>

      {/* ─── Main Environment Canvas ──────────────────────────────────────── */}
      <main className={styles.mainCanvas}>
        <CafeWall>
          <FluorescentLight />
          <AmbientLayer />

          {/* Left Partition — Notice Board */}
          <MdfPartition side="left">
            <NoticeBoard />
          </MdfPartition>

          {/* Center Stage — Station or Counter */}
          <div className={styles.stageArea}>
            <div className={styles.fanPos}>
              <CeilingFan />
            </div>

            {activeTab === "terminals" ? (
              <PcBooth stationId="STATION_04" connectedSpeed="CONNECTED / 100Mbps" />
            ) : (
              <CafeCounter />
            )}

            {/* Operator Speech Bubble */}
            <div
              className={styles.operatorBubble}
              onClick={handleNextDialogue}
              role="button"
              tabIndex={0}
              title="Click for next dialogue"
            >
              <span className={styles.operatorName}>OPERATOR:</span>
              <p className={styles.operatorText}>"{currentDialogue.text}"</p>
              {currentDialogue.subtext && (
                <p className={styles.operatorSubtext}>({currentDialogue.subtext})</p>
              )}
            </div>
          </div>

          <CafeFloor />
        </CafeWall>
      </main>

      {/* ─── Persistent Overlay Utilities ─────────────────────────────────── */}
      <DiscoveryCounter />
      <InteractionPrompt />
      <AudioController />

      {/* ─── Generate Slip Modal ──────────────────────────────────────────── */}
      {showSlipModal && (
        <SystemDialog title="SESSION SLIP GENERATOR" onClose={() => setShowSlipModal(false)}>
          <div className={styles.slipModalContent}>
            <h3>NET JUNCTION - ACCESS SLIP</h3>
            <p>Station: STATION_04</p>
            <p>Ticket Code: GUEST_992</p>
            <p>Rate: ₹30 / 1 Hour</p>
            <hr />
            <CafeButton onClick={() => setShowSlipModal(false)}>PRINT SLIP</CafeButton>
          </div>
        </SystemDialog>
      )}

      {/* ─── Footer ───────────────────────────────────────────────────────── */}
      <footer className={styles.footer}>
        <p>© 2017 SAIDEEP CYBER SOLUTIONS - NO SMOKING - NO PENDRIVES</p>
        <div className={styles.footerLinks}>
          <Link href="/about">Terms</Link>
          <Link href="/memories">Rate Chart</Link>
          <Link href="/about">Contact Admin</Link>
        </div>
      </footer>
    </div>
  );
}