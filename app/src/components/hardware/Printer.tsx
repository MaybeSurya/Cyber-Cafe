"use client";
// src/components/hardware/Printer.tsx
// Counter laser/inkjet printer with animated paper tray and printing audio trigger.

import { useState } from "react";
import { useInteraction } from "@/hooks/useInteraction";
import { useAudio } from "@/hooks/useAudio";
import { useCafeStore } from "@/store/cafeStore";
import styles from "./Printer.module.css";

export default function Printer() {
  const [printing, setPrinting] = useState(false);
  const [printedReceipt, setPrintedReceipt] = useState(false);
  const { onMouseEnter, onMouseLeave, onFocus, onBlur, onActivate } =
    useInteraction("printer");
  const { playSfx } = useAudio();
  const unlockMemory = useCafeStore((s) => s.unlockMemory);

  const handlePrint = () => {
    onActivate(() => {
      if (printing) return;
      setPrinting(true);
      playSfx("sfx-printer-start");

      setTimeout(() => {
        playSfx("sfx-printer-paper");
        setPrintedReceipt(true);
        setPrinting(false);
        unlockMemory("the-printout");
      }, 1800);
    });
  };

  return (
    <div
      className={styles.printerContainer}
      role="button"
      tabIndex={0}
      aria-label="Laser printer EPS-9000. Click to print test receipt."
      onClick={handlePrint}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handlePrint();
        }
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {/* Emerging Receipt / Paper */}
      {(printing || printedReceipt) && (
        <div className={`${styles.paper} ${printing ? styles.paperPrinting : ""}`}>
          <div className={styles.receiptContent}>
            <p className={styles.receiptHeader}>SAIDEEP CYBER</p>
            <p>-- PRINT TEST --</p>
            <p>Pages: 1 | B&W</p>
            <p>Rate: ₹2</p>
          </div>
        </div>
      )}

      {/* Printer Box */}
      <div className={styles.printerBody}>
        {/* Paper Feed Slot */}
        <div className={styles.paperSlot} />

        {/* Status Indicators */}
        <div className={styles.indicators}>
          <div className={`${styles.led} ${styles.ledGreen} ${printing ? styles.ledBlink : ""}`} />
          <div className={`${styles.led} ${styles.ledDim}`} />
        </div>

        <p className={styles.modelName}>EPS-9000</p>
      </div>
    </div>
  );
}
