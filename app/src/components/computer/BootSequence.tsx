"use client";
// src/components/computer/BootSequence.tsx
// POST boot sequence animation simulating mid-2010s PC boot.

import { useEffect, useState } from "react";
import { useCafeStore } from "@/store/cafeStore";
import styles from "./BootSequence.module.css";

const BOOT_LOGS = [
  "AWARD BIOS v6.00PG, An Energy Star Ally",
  "Copyright (C) 1984-2014, Award Software, Inc.",
  "",
  "Intel(R) Core(TM) i3 CPU @ 3.10GHz",
  "Memory Test: 4096K OK",
  "",
  "Detecting Primary Master ... ST3500418AS",
  "Detecting Primary Slave  ... None",
  "Detecting Secondary Master ... DVD-RW",
  "",
  "Initializing Network Interface (100Mbps)... OK",
  "Loading SURYA CYBER SYSTEM v2.1 ...",
];

export default function BootSequence({ onComplete }: { onComplete?: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const completeBootSequence = useCafeStore((s) => s.completeBootSequence);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < BOOT_LOGS.length) {
        setLines((prev) => [...prev, BOOT_LOGS[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          completeBootSequence();
          onComplete?.();
        }, 600);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [completeBootSequence, onComplete]);

  return (
    <div className={styles.bootContainer} role="status" aria-live="polite">
      <div className={styles.logBox}>
        {lines.map((line, idx) => (
          <p key={idx} className={styles.line}>
            {line}
          </p>
        ))}
        <span className={styles.cursor} aria-hidden="true">_</span>
      </div>
    </div>
  );
}
