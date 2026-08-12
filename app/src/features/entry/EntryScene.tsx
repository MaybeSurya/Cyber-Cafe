"use client";
// src/components/features/entry/EntryScene.tsx
// Shutter / door arrival scene introducing the cyber café before stepping inside.

import { useState } from "react";
import { useScene } from "@/hooks/useScene";
import { useAudio } from "@/hooks/useAudio";
import CafeButton from "@/components/ui/CafeButton";
import styles from "./EntryScene.module.css";

export default function EntryScene() {
  const { navigateTo } = useScene();
  const { handleFirstGesture, playSfx } = useAudio();
  const [opening, setOpening] = useState(false);

  const handleEnter = () => {
    handleFirstGesture();
    setOpening(true);
    playSfx("sfx-door-enter");

    setTimeout(() => {
      navigateTo("interior");
    }, 800);
  };

  return (
    <div className={styles.entryContainer}>
      {/* Background atmosphere texture */}
      <div className={styles.bgShutter} />

      {/* Central Welcome Box */}
      <div className={`${styles.welcomeBox} ${opening ? styles.boxOpening : ""}`}>
        <h1 className={styles.title}>CYBER INTERNET CAFE</h1>
        <p className={styles.subtitle}>SAIDEEP CYBER SOLUTIONS · ESTD 2014</p>
        
        <div className={styles.statusBadge}>
          <div className={styles.dot} />
          <span>OPEN</span>
        </div>

        <p className={styles.tagline}>
          Step inside a neighborhood cyber café from the mid-2010s.
        </p>

        <CafeButton size="lg" onClick={handleEnter}>
          ENTER CYBER CAFE
        </CafeButton>
      </div>

      <footer className={styles.entryFooter}>
        <p>© 2017 SAIDEEP CYBER SOLUTIONS · NO SMOKING · NO PENDRIVES</p>
      </footer>
    </div>
  );
}
