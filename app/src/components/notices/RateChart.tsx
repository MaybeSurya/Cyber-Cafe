"use client";
// src/components/notices/RateChart.tsx
// Laminated rate chart card taped to MDF partitions or counter.

import styles from "./RateChart.module.css";

export default function RateChart() {
  return (
    <div className={styles.rateChart}>
      <div className={styles.tape} />
      <h3 className={styles.title}>RATE CHART</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Browsing</span>
          <span>₹30/hr</span>
        </li>
        <li className={styles.item}>
          <span>Print (B&W)</span>
          <span>₹2/pg</span>
        </li>
        <li className={styles.item}>
          <span>Print (Col)</span>
          <span>₹10/pg</span>
        </li>
        <li className={styles.item}>
          <span>Scan</span>
          <span>₹10/doc</span>
        </li>
        <li className={styles.item}>
          <span>CV / Resume</span>
          <span>₹20</span>
        </li>
      </ul>
    </div>
  );
}
