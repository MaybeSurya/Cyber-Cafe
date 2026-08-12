"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { useViewport, Breakpoint } from "@/hooks/useViewport";
import type { SceneName } from "@/data/types";

interface StationConfig {
  id: string;
  role: "hero" | "background";
  screenState: "idle" | "browsing" | "gaming" | "music" | "login";
  interactive: boolean;
}

const STATION_LAYOUTS: Record<Breakpoint, StationConfig[]> = {
  xl: [
    { id: "STATION_01", role: "background", screenState: "idle", interactive: false },
    { id: "STATION_02", role: "background", screenState: "browsing", interactive: false },
    { id: "STATION_03", role: "background", screenState: "gaming", interactive: false },
    { id: "STATION_04", role: "hero", screenState: "login", interactive: true },
    { id: "STATION_05", role: "background", screenState: "music", interactive: false },
    { id: "STATION_06", role: "background", screenState: "idle", interactive: false },
  ],
  lg: [
    { id: "STATION_01", role: "background", screenState: "idle", interactive: false },
    { id: "STATION_02", role: "background", screenState: "browsing", interactive: false },
    { id: "STATION_03", role: "background", screenState: "gaming", interactive: false },
    { id: "STATION_04", role: "hero", screenState: "login", interactive: true },
  ],
  md: [
    { id: "STATION_03", role: "background", screenState: "gaming", interactive: false },
    { id: "STATION_04", role: "hero", screenState: "login", interactive: true },
  ],
  sm: [
    { id: "STATION_04", role: "hero", screenState: "login", interactive: true },
  ],
  xs: [
    { id: "STATION_04", role: "hero", screenState: "login", interactive: true },
  ],
};

export type ViewName = "terminals" | "counter";

interface SceneContextValue {
  currentView: ViewName;
  setCurrentView: (view: ViewName) => void;
  selectedStation: string | null;
  setSelectedStation: (station: string | null) => void;
  stations: StationConfig[];
  heroStation: StationConfig;
  backgroundStations: StationConfig[];
  viewport: ReturnType<typeof useViewport>;
  isTransitioning: boolean;
  setIsTransitioning: (v: boolean) => void;
}

const SceneContext = createContext<SceneContextValue | null>(null);

export function SceneProvider({ children }: { children: ReactNode }) {
  const viewport = useViewport();
  const [currentView, setCurrentView] = useState<ViewName>("terminals");
  const [selectedStation, setSelectedStation] = useState<string | null>("STATION_04");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const stations = useMemo(() => STATION_LAYOUTS[viewport.breakpoint], [viewport.breakpoint]);
  const heroStation = useMemo(() => stations.find(s => s.role === "hero") || stations[0], [stations]);
  const backgroundStations = useMemo(() => stations.filter(s => s.role === "background"), [stations]);

  // Reset view when switching to mobile (counter view not needed on mobile)
  useEffect(() => {
    if (viewport.isMobile && currentView === "counter") {
      setCurrentView("terminals");
    }
  }, [viewport.isMobile, currentView]);

  const value = useMemo(() => ({
    currentView,
    setCurrentView,
    selectedStation,
    setSelectedStation,
    stations,
    heroStation,
    backgroundStations,
    viewport,
    isTransitioning,
    setIsTransitioning,
  }), [currentView, selectedStation, stations, heroStation, backgroundStations, viewport, isTransitioning]);

  return (
    <SceneContext.Provider value={value}>
      {children}
    </SceneContext.Provider>
  );
}

export function useScene() {
  const context = useContext(SceneContext);
  if (!context) {
    throw new Error("useScene must be used within a SceneProvider");
  }
  return context;
}