"use client";
// src/hooks/useDiscovery.ts

import { useCafeStore } from "@/store/cafeStore";

export function useDiscovery() {
  const visitedObjects = useCafeStore((s) => s.visitedObjects);
  const memoriesUnlocked = useCafeStore((s) => s.memoriesUnlocked);
  const totalMemories = useCafeStore((s) => s.totalMemories);

  const discoveredCount = memoriesUnlocked.length;
  const hasVisited = (objectId: string) => visitedObjects.includes(objectId);
  const hasUnlocked = (slug: string) => memoriesUnlocked.includes(slug);

  return { discoveredCount, totalMemories, hasVisited, hasUnlocked };
}
