"use client";
// src/components/furniture/CafeCounter.tsx
// Front main counter surface holding Printer, CafeRadio, Register, RateChart, and Toffee bowl.

import Printer from "@/components/hardware/Printer";
import CafeRadio from "@/components/hardware/CafeRadio";
import RateChart from "@/components/notices/RateChart";
import Register from "@/components/counter/Register";
import styles from "./CafeCounter.module.css";

export default function CafeCounter() {
  return (
    <div className={styles.counterWrapper} role="region" aria-label="Café Front Counter">
      <div className={`${styles.countertop} texture-mdf`}>
        <div className={styles.itemSlot}>
          <RateChart />
        </div>

        <div className={styles.itemSlot}>
          <Register />
        </div>

        <div className={styles.itemSlot}>
          <Printer />
        </div>

        <div className={styles.itemSlot}>
          <CafeRadio />
        </div>

        {/* Candy / Toffee bowl detail */}
        <div className={styles.toffeeBowl} title="Toffee bowl" aria-hidden="true">
          <div className={styles.candy} style={{ backgroundColor: "#ef4444" }} />
          <div className={styles.candy} style={{ backgroundColor: "#3b82f6" }} />
          <div className={styles.candy} style={{ backgroundColor: "#eab308" }} />
        </div>
      </div>
    </div>
  );
}
