"use client";
// src/components/hardware/PcTower.tsx

import { useCafeStore } from "@/store/cafeStore";
import styles from "./PcTower.module.css";

export default function PcTower() {
  const computerPoweredOn = useCafeStore((s) => s.computerPoweredOn);

  return (
    <div className={styles.tower} aria-hidden="true">
      {/* Front panel */}
      <div className={styles.frontPanel}>
        {/* Power LED */}
        <div
          className={`${styles.powerLed} ${computerPoweredOn ? styles.ledOn : styles.ledOff}`}
          title={computerPoweredOn ? "Power: On" : "Power: Off"}
          aria-hidden="true"
        />

        {/* HDD Activity LED */}
        <div
          className={`${styles.hddLed} ${computerPoweredOn ? styles.ledBlink : styles.ledOff}`}
          title="HDD Activity"
          aria-hidden="true"
        />

        {/* Front USB ports */}
        <div className={styles.usbPorts}>
          <div className={styles.usbPort} />
          <div className={styles.usbPort} />
        </div>

        {/* Brand/model text */}
        <div className={styles.modelText}>
          <span className={styles.brand}>ATX Mid-Tower</span>
          <span className={styles.model}>MT-5000</span>
        </div>
      </div>

      {/* Side vents */}
      <div className={styles.sideVents} aria-hidden="true" />
    </div>
  );
}