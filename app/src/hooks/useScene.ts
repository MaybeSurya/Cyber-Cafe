"use client";
// src/hooks/useScene.ts

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useCafeStore } from "@/store/cafeStore";
import type { SceneName } from "@/data/types";

const SCENE_ROUTES: Record<SceneName, string> = {
  entry: "/",
  interior: "/experience",
  computer: "/experience/computer",
  memories: "/memories",
  about: "/about",
};

export function useScene() {
  const router = useRouter();
  const currentScene = useCafeStore((s) => s.currentScene);
  const setScene = useCafeStore((s) => s.setScene);
  const setTransitioning = useCafeStore((s) => s.setTransitioning);

  const navigateTo = useCallback(
    (scene: SceneName) => {
      setTransitioning(true);
      setScene(scene);
      router.push(SCENE_ROUTES[scene]);
      // Clear transition flag after animation duration
      setTimeout(() => setTransitioning(false), 500);
    },
    [router, setScene, setTransitioning]
  );

  return { currentScene, navigateTo };
}
