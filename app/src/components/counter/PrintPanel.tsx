"use client";
// src/components/counter/PrintPanel.tsx
// Print settings panel for selecting page count, color vs B&W, and generating receipt slips.

import { useState } from "react";
import CafeInput from "@/components/ui/CafeInput";
import CafeButton from "@/components/ui/CafeButton";
import { useAudio } from "@/hooks/useAudio";
import styles from "./PrintPanel.module.css";

export default function PrintPanel({ onPrint }: { onPrint?: () => void }) {
  const [pages, setPages] = useState("2");
  const [colour, setColour] = useState(false);
  const { playSfx } = useAudio();

  const numPages = parseInt(pages, 10) || 1;
  const ratePerPage = colour ? 10 : 2;
  const totalCost = numPages * ratePerPage;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSfx("sfx-printer-start");
    onPrint?.();
  };

  return (
    <div className={styles.printBox}>
      <h3 className={styles.title}>PRINT JOB CALCULATOR</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <CafeInput
          label="NUMBER OF PAGES"
          type="number"
          min="1"
          max="100"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
        <div className={styles.toggleRow}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="mode"
              checked={!colour}
              onChange={() => setColour(false)}
            />
            B&W (₹2/pg)
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="mode"
              checked={colour}
              onChange={() => setColour(true)}
            />
            Colour (₹10/pg)
          </label>
        </div>
        <div className={styles.totalDisplay}>
          ESTIMATED TOTAL: ₹{totalCost}
        </div>
        <CafeButton type="submit">SEND TO PRINTER</CafeButton>
      </form>
    </div>
  );
}
