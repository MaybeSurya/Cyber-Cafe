"use client";

import { useEffect, useState } from "react";

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export interface ViewportState {
  width: number;
  height: number;
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isWideDesktop: boolean;
}

const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

function getBreakpoint(width: number): Breakpoint {
  if (width >= BREAKPOINTS.xl) return "xl";
  if (width >= BREAKPOINTS.lg) return "lg";
  if (width >= BREAKPOINTS.md) return "md";
  if (width >= BREAKPOINTS.sm) return "sm";
  return "xs";
}

export function useViewport(): ViewportState {
  const [state, setState] = useState<ViewportState>({
    width: typeof window !== "undefined" ? window.innerWidth : 1280,
    height: typeof window !== "undefined" ? window.innerHeight : 720,
    breakpoint: "xl",
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isWideDesktop: true,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const update = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const breakpoint = getBreakpoint(width);

      setState({
        width,
        height,
        breakpoint,
        isMobile: breakpoint === "xs" || breakpoint === "sm",
        isTablet: breakpoint === "md",
        isDesktop: breakpoint === "lg" || breakpoint === "xl",
        isWideDesktop: breakpoint === "xl",
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return state;
}

export function useBreakpoint(): Breakpoint {
  const { breakpoint } = useViewport();
  return breakpoint;
}

export function useIsMobile(): boolean {
  const { isMobile } = useViewport();
  return isMobile;
}

export function useIsTablet(): boolean {
  const { isTablet } = useViewport();
  return isTablet;
}

export function useIsDesktop(): boolean {
  const { isDesktop } = useViewport();
  return isDesktop;
}