"use client";

import { useMemo } from "react";
import CablePath from "./CablePath";
import { cableDefinitions } from "@/data/cableDefinitions";
import styles from "./CableLayer.module.css";

export function CableLayer() {
  // Filter cables that should have subtle animation
  const animatedCables = useMemo(() => 
    cableDefinitions.filter(c => c.subtleAnimation === true), 
    []
  );

  return (
    <div className={styles.layer} aria-hidden="true">
      {/* All cables */}
      {cableDefinitions.map(cable => (
        <CablePath 
          key={cable.id} 
          definition={cable} 
          isAnimated={animatedCables.some(ac => ac.id === cable.id)}
        />
      ))}
    </div>
  );
}

export default CableLayer;