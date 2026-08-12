"use client";

import Image from "next/image";
import { useScene } from "./SceneProvider";
import styles from "./BackgroundEnvironment.module.css";

export function BackgroundEnvironment() {
  const { viewport } = useScene();

  // Select appropriate background image based on viewport
  const backgroundImage = viewport.isMobile 
    ? "/images/environment/cafe-interior-hero-mobile.webp"
    : "/images/environment/cafe-interior-hero.webp";

  const backgroundImageAvif = viewport.isMobile
    ? "/images/environment/cafe-interior-hero-mobile.avif"
    : "/images/environment/cafe-interior-hero.avif";

  return (
    <div className={styles.container} aria-hidden="true">
      {/* AVIF for modern browsers */}
      <Image
        src={backgroundImageAvif}
        alt=""
        fill
        priority={!viewport.isMobile}
        sizes={viewport.isMobile ? "100vw" : "100vw"}
        className={`${styles.image} ${styles.avif}`}
        quality={85}
      />
      
      {/* WebP fallback */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority={!viewport.isMobile}
        sizes={viewport.isMobile ? "100vw" : "100vw"}
        className={`${styles.image} ${styles.webp}`}
        quality={85}
      />

      {/* Vignette overlay for depth */}
      <div className={styles.vignette} aria-hidden="true" />
    </div>
  );
}

export default BackgroundEnvironment;