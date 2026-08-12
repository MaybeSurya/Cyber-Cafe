"use client";
// src/components/archive/MemoryGrid.tsx
// Memory Archive grid view with category filters.

import { useState } from "react";
import MemoryCard from "./MemoryCard";
import { memories } from "@/data/memories";
import type { MemoryCategory } from "@/data/types";
import styles from "./MemoryGrid.module.css";

const CATEGORIES: { label: string; value: MemoryCategory | "all" }[] = [
  { label: "All Memories", value: "all" },
  { label: "Objects", value: "object" },
  { label: "Internet", value: "internet" },
  { label: "Gaming", value: "gaming" },
  { label: "Culture", value: "culture" },
  { label: "People", value: "people" },
  { label: "Places", value: "places" },
];

export default function MemoryGrid() {
  const [filter, setFilter] = useState<MemoryCategory | "all">("all");

  const filteredMemories =
    filter === "all"
      ? memories
      : memories.filter((m) => m.category === filter);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>CYBER CAFÉ MEMORY ARCHIVE</h1>
        <p className={styles.subtitle}>
          Artifacts, sounds, stories, and social memories of the 2014–2019 era.
        </p>
      </header>

      {/* Filter Tabs */}
      <div className={styles.filterBar}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            className={`${styles.filterBtn} ${filter === cat.value ? styles.filterActive : ""}`}
            onClick={() => setFilter(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filteredMemories.map((mem) => (
          <MemoryCard key={mem.id} memory={mem} />
        ))}
      </div>
    </div>
  );
}
