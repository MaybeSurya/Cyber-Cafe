"use client";
// src/hooks/useReducedMotion.ts
// Syncs with prefers-reduced-motion and updates the Zustand store.

import { useEffect } from "react";
import { useCafeStore } from "@/store/cafeStore";

export function useReducedMotion(): boolean {
  const reducedMotion = useCafeStore((s) => s.reducedMotion);
  const setReducedMotion = useCafeStore((s) => s.setReducedMotion);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [setReducedMotion]);

  return reducedMotion;
}
