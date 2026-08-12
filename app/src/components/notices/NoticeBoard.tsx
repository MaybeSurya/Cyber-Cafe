"use client";
// src/components/notices/NoticeBoard.tsx
// Notice board container rendering notices list.

import Notice from "./Notice";
import RateChart from "./RateChart";
import { notices } from "@/data/notices";
import styles from "./NoticeBoard.module.css";

export default function NoticeBoard() {
  return (
    <div className={styles.board} role="region" aria-label="Café Notice Board">
      <div className={styles.boardHeader}>
        <h2>NOTICES & RATES</h2>
      </div>
      <div className={styles.noticesGrid}>
        <RateChart />
        {notices.map((n) => (
          <Notice key={n.id} notice={n} />
        ))}
      </div>
    </div>
  );
}
