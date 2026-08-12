"use client";
// src/components/archive/MemoryCard.tsx
// Memory card item in the archive grid.

import Link from "next/link";
import type { Memory } from "@/data/types";
import styles from "./MemoryCard.module.css";

export default function MemoryCard({ memory }: { memory: Memory }) {
  return (
    <Link href={`/memories/${memory.slug}`} className={styles.card}>
      <div className={styles.categoryBadge}>{memory.category}</div>
      <h3 className={styles.title}>{memory.title}</h3>
      <p className={styles.desc}>{memory.description}</p>
      {memory.interactiveHint && (
        <span className={styles.hint}>💡 {memory.interactiveHint}</span>
      )}
    </Link>
  );
}
