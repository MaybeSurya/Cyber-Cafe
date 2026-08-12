"use client";
// src/hooks/useInteraction.ts
// Manages hotspot hover + click state with keyboard support.

import { useCallback } from "react";
import { useCafeStore } from "@/store/cafeStore";

export function useInteraction(objectId: string) {
  const activateHotspot = useCafeStore((s) => s.activateHotspot);
  const setActiveObject = useCafeStore((s) => s.setActiveObject);
  const activeHotspot = useCafeStore((s) => s.activeHotspot);
  const recordVisit = useCafeStore((s) => s.recordVisit);
  const recordInteraction = useCafeStore((s) => s.recordInteraction);

  const isHovered = activeHotspot === objectId;

  const onMouseEnter = useCallback(() => {
    activateHotspot(objectId);
    recordVisit(objectId);
  }, [activateHotspot, objectId, recordVisit]);

  const onMouseLeave = useCallback(() => {
    activateHotspot(null);
  }, [activateHotspot]);

  const onFocus = useCallback(() => {
    activateHotspot(objectId);
  }, [activateHotspot, objectId]);

  const onBlur = useCallback(() => {
    activateHotspot(null);
  }, [activateHotspot]);

  const onActivate = useCallback(
    (action?: () => void) => {
      setActiveObject(objectId);
      recordInteraction(objectId);
      action?.();
    },
    [objectId, setActiveObject, recordInteraction]
  );

  return { isHovered, onMouseEnter, onMouseLeave, onFocus, onBlur, onActivate };
}
