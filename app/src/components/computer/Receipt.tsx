"use client";
// src/components/computer/Receipt.tsx
// Printed receipt paper component with jagged edges.

import styles from "./Receipt.module.css";

interface ReceiptProps {
  stationId?: string;
  duration?: string;
  amount?: number;
  date?: string;
  onClose?: () => void;
}

export default function Receipt({
  stationId = "STATION_04",
  duration = "1 HOUR",
  amount = 30,
  date = "14/08/2014",
  onClose,
}: ReceiptProps) {
  return (
    <div className={styles.receiptPaper}>
      <div className={styles.header}>
        <h3>SAIDEEP CYBER</h3>
        <p>{stationId} RECEIPT</p>
      </div>

      <div className={styles.details}>
        <div className={styles.row}>
          <span>DATE:</span>
          <span>{date}</span>
        </div>
        <div className={styles.row}>
          <span>DURATION:</span>
          <span>{duration}</span>
        </div>
        <div className={styles.totalRow}>
          <span>TOTAL:</span>
          <span>₹{amount}.00</span>
        </div>
      </div>

      <div className={styles.footer}>
        <p>THANK YOU FOR VISITING</p>
        <p>NO SMOKING · NO PENDRIVES</p>
      </div>

      {onClose && (
        <button className={styles.closeBtn} onClick={onClose}>
          CLOSE RECEIPT
        </button>
      )}
    </div>
  );
}
