"use client";

import styles from "./EnvironmentTextures.module.css";

export function EnvironmentTextures() {
  return (
    <>
      {/* Wall noise texture - subtle fractal noise */}
      <div className={styles.wallNoise} aria-hidden="true" />

      {/* Floor tile grid */}
      <div className={styles.floorGrid} aria-hidden="true" />

      {/* Subtle cable tray lines on floor */}
      <div className={styles.cableTrays} aria-hidden="true" />

      {/* Partition gap lines */}
      <div className={styles.partitionGaps} aria-hidden="true" />
    </>
  );
}

export default EnvironmentTextures;