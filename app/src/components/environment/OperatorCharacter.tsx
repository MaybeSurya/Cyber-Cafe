"use client";

import Image from "next/image";
import { useScene } from "@/components/environment/SceneProvider";
import styles from "./OperatorCharacter.module.css";

interface OperatorCharacterProps {
  state?: "idle" | "typing" | "helping";
}

export default function OperatorCharacter({ state = "idle" }: OperatorCharacterProps = {}) {
  const { viewport } = useScene();

  // Select appropriate image based on state
  const imagePath = `/images/people/operator/operator-${state}.webp`;
  const imagePathAvif = `/images/people/operator/operator-${state}.avif`;

  // Only show operator on desktop and tablet, not on mobile (too crowded)
  if (viewport.isMobile) {
    return null;
  }

  return (
    <div className={styles.container} aria-hidden="true">
      {/* AVIF for modern browsers */}
      <Image
        src={imagePathAvif}
        alt=""
        fill
        priority={false}
        className={`${styles.image} ${styles.avif}`}
        quality={85}
      />
      
      {/* WebP fallback */}
      <Image
        src={imagePath}
        alt=""
        fill
        priority={false}
        className={`${styles.image} ${styles.webp}`}
        quality={85}
      />
    </div>
  );
}