"use client";
// src/components/computer/StatusPanel.tsx
// Screen status panel showing active session, station ID, and network state.

import styles from "./StatusPanel.module.css";

interface StatusPanelProps {
  stationId?: string;
  connectedSpeed?: string;
}

export default function StatusPanel({
  stationId = "STATION_04",
  connectedSpeed = "CONNECTED / 100Mbps",
}: StatusPanelProps) {
  return (
    <div className={styles.loginScreen}>
      <div className={styles.badgeRow}>
        <div className={styles.pulseDot} />
        <span className={styles.onlineBadge}>ONLINE</span>
      </div>

      <div className={styles.loginBox}>
        <h2 className={styles.stationTitle}>{stationId}</h2>
        <p className={styles.speedLabel}>{connectedSpeed}</p>

        <div className={styles.avatarBox}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "64px", fontVariationSettings: "'FILL' 1" }}
          >
            account_box
          </span>
        </div>

        <p className={styles.instruction}>Click icon or screen to begin session</p>
        
        <div className={styles.rateNotice}>
          CURRENT RATE: ₹30 / 1 HOUR
        </div>
      </div>
    </div>
  );
}
