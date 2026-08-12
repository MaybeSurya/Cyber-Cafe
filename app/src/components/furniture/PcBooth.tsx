"use client";
// src/components/furniture/PcBooth.tsx
// Physical PC booth partition frame enclosing a PcStation.

import PcStation from "@/components/hardware/PcStation";
import styles from "./PcBooth.module.css";

interface PcBoothProps {
  stationId?: string;
  connectedSpeed?: string;
}

export default function PcBooth({
  stationId = "STATION_04",
  connectedSpeed = "CONNECTED / 100Mbps",
}: PcBoothProps) {
  return (
    <div className={styles.boothFrame} role="region" aria-label={`Browsing booth for ${stationId}`}>
      <div className={styles.leftPartition} />
      <div className={styles.centerArea}>
        <PcStation stationId={stationId} connectedSpeed={connectedSpeed} />
      </div>
      <div className={styles.rightPartition} />
    </div>
  );
}
