"use client";
// src/components/counter/Register.tsx
// Main counter register monitor showing billing log and print control panel.

import { useState } from "react";
import BillingLog from "./BillingLog";
import PrintPanel from "./PrintPanel";
import CafeButton from "@/components/ui/CafeButton";
import styles from "./Register.module.css";

export default function Register() {
  const [activeTab, setActiveTab] = useState<"billing" | "print">("billing");

  return (
    <div className={styles.registerFrame}>
      {/* Top Header */}
      <div className={styles.header}>
        <span className={styles.headerTitle}>COUNTER REGISTER v2.1</span>
        <div className={styles.tabs}>
          <button
            className={`${styles.tabBtn} ${activeTab === "billing" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("billing")}
          >
            Billing Log
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "print" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("print")}
          >
            Print Calculator
          </button>
        </div>
      </div>

      {/* Register Screen Content */}
      <div className={styles.body}>
        {activeTab === "billing" ? <BillingLog /> : <PrintPanel />}
      </div>

      {/* Action Footer */}
      <div className={styles.footer}>
        <CafeButton size="sm">Open Cash Drawer</CafeButton>
        <span className={styles.cashTotal}>CASH: ₹185.00</span>
      </div>
    </div>
  );
}
