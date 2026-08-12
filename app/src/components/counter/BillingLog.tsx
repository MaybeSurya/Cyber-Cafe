"use client";
// src/components/counter/BillingLog.tsx
// Billing ledger log table displaying session logs and payment status.

import { billingEntries } from "@/data/stories";
import styles from "./BillingLog.module.css";

export default function BillingLog() {
  return (
    <div className={styles.logWrapper}>
      <div className={styles.logHeader}>
        <span className="material-symbols-outlined">receipt_long</span>
        <h3>Billing Log</h3>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Term</th>
            <th>Type</th>
            <th>Amt</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {billingEntries.map((row, idx) => (
            <tr key={idx} className={row.status === "pending" ? styles.rowPending : ""}>
              <td>{row.time}</td>
              <td>{row.terminal}</td>
              <td>{row.type}</td>
              <td>₹{row.amount}</td>
              <td>
                <span className={styles.statusBadge}>{row.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
