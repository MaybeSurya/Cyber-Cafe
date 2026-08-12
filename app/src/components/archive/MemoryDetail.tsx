"use client";
// src/components/archive/MemoryDetail.tsx
// Single memory item deep view card.

import Link from "next/link";
import type { Memory } from "@/data/types";
import CafeButton from "@/components/ui/CafeButton";
import styles from "./MemoryDetail.module.css";

export default function MemoryDetail({ memory }: { memory: Memory }) {
  return (
    <article className={styles.container}>
      <Link href="/memories" className={styles.backLink}>
        ← BACK TO ARCHIVE
      </Link>

      <div className={styles.card}>
        <div className={styles.categoryBadge}>{memory.category}</div>
        <h1 className={styles.title}>{memory.title}</h1>
        
        <p className={styles.summary}>{memory.description}</p>
        
        {memory.longDescription && (
          <div className={styles.bodyText}>
            <p>{memory.longDescription}</p>
          </div>
        )}

        {memory.interactiveHint && (
          <div className={styles.hintBox}>
            <p>💡 Interactive detail: {memory.interactiveHint}</p>
          </div>
        )}

        <div className={styles.actions}>
          <Link href="/experience">
            <CafeButton>RETURN TO CAFÉ INTERIOR</CafeButton>
          </Link>
        </div>
      </div>
    </article>
  );
}
