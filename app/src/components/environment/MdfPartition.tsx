"use client";
// src/components/environment/MdfPartition.tsx
// MDF wood partition wall dividing browsing booths or counter section.

import { ReactNode } from "react";
import styles from "./MdfPartition.module.css";

interface MdfPartitionProps {
  side?: "left" | "right";
  children?: ReactNode;
}

export default function MdfPartition({ side = "left", children }: MdfPartitionProps) {
  return (
    <aside
      className={`${styles.partition} ${side === "left" ? styles.left : styles.right} texture-mdf`}
      aria-label={`${side} booth partition`}
    >
      <div className={styles.grainOverlay} aria-hidden="true" />
      <div className={styles.content}>{children}</div>
    </aside>
  );
}
