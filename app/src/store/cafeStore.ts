// src/store/cafeStore.ts
// Central Zustand store. Keep only truly global state here.
// Local UI state (hover, form inputs) stays inside components.

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { SceneName, FanSpeed } from "@/data/types";

// ─── Audio ────────────────────────────────────────────────────────────────────
interface AudioSlice {
  masterEnabled: boolean;
  masterVolume: number;
  ambienceVolume: number;
  musicVolume: number;
  interactionVolume: number;
  /** True after first user gesture — respects browser autoplay policy */
  audioUnlocked: boolean;
}

// ─── Scene ────────────────────────────────────────────────────────────────────
interface SceneSlice {
  currentScene: SceneName;
  previousScene: SceneName | null;
  isTransitioning: boolean;
}

// ─── Interaction ──────────────────────────────────────────────────────────────
interface InteractionSlice {
  activeHotspot: string | null;
  activeObject: string | null;
  computerPoweredOn: boolean;
  bootSequenceComplete: boolean;
  /** Currently foregrounded desktop window id */
  activeWindow: string | null;
  openWindows: string[];
  printerActive: boolean;
  fanSpeed: FanSpeed;
}

// ─── PC State ────────────────────────────────────────────────────────────────
interface PCStateSlice {
  pcState: 'OFF' | 'BOOTING' | 'LOGIN' | 'READY' | 'SESSION_ACTIVE' | 'LOADING' | 'ERROR' | 'SHUTDOWN';
  sessionTimer: number; // seconds elapsed in session
  errorMessage?: string;
}

// ─── Discovery ────────────────────────────────────────────────────────────────
interface DiscoverySlice {
  visitedObjects: string[];
  completedInteractions: string[];
  memoriesUnlocked: string[];
  totalMemories: number;
}

// ─── Accessibility ────────────────────────────────────────────────────────────
interface AccessibilitySlice {
  reducedMotion: boolean;
}

// ─── Actions ──────────────────────────────────────────────────────────────────
interface Actions {
  // Audio
  toggleAudio: () => void;
  unlockAudio: () => void;
  setMasterVolume: (v: number) => void;
  setAmbienceVolume: (v: number) => void;
  setMusicVolume: (v: number) => void;
  setInteractionVolume: (v: number) => void;

  // Scene
  setScene: (scene: SceneName) => void;
  setTransitioning: (t: boolean) => void;

  // Interaction
  activateHotspot: (id: string | null) => void;
  setActiveObject: (id: string | null) => void;
  powerOnComputer: () => void;
  completeBootSequence: () => void;
  powerOffComputer: () => void;
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  setPrinterActive: (active: boolean) => void;
  cycleFanSpeed: () => void;

  // PC State
  powerOnPC: () => void;
  completeBoot: () => void;
  showLogin: () => void;
  startSession: () => void;
  endSession: () => void;
  loadSession: (duration: number) => void;
  showError: (message: string) => void;
  clearError: () => void;
  shutdownPC: () => void;

  // Discovery
  recordVisit: (objectId: string) => void;
  recordInteraction: (id: string) => void;
  unlockMemory: (slug: string) => void;

  // Accessibility
  setReducedMotion: (v: boolean) => void;
}

type CafeStore = AudioSlice &
  SceneSlice &
  InteractionSlice &
  PCStateSlice &
  DiscoverySlice &
  AccessibilitySlice &
  Actions;

export const useCafeStore = create<CafeStore>()(
  persist(
    (set, get) => ({
      // ── Audio defaults ────────────────────────────────────────────────────
      masterEnabled: true,
      masterVolume: 0.8,
      ambienceVolume: 0.6,
      musicVolume: 0.25,
      interactionVolume: 0.7,
      audioUnlocked: false,

      // ── Scene defaults ────────────────────────────────────────────────────
      currentScene: "entry",
      previousScene: null,
      isTransitioning: false,

      // ── Interaction defaults ──────────────────────────────────────────────
      activeHotspot: null,
      activeObject: null,
      computerPoweredOn: false,
      bootSequenceComplete: false,
      activeWindow: null,
      openWindows: [],
      printerActive: false,
      fanSpeed: 2,

      // ── PC State defaults ────────────────────────────────────────────────
      pcState: 'OFF',
      sessionTimer: 0,
      errorMessage: undefined,

      // ── Discovery defaults ────────────────────────────────────────────────
      visitedObjects: [],
      completedInteractions: [],
      memoriesUnlocked: [],
      totalMemories: 24,

      // ── Accessibility defaults ────────────────────────────────────────────
      reducedMotion: false,

      // ── Audio actions ─────────────────────────────────────────────────────
      toggleAudio: () =>
        set((s) => ({ masterEnabled: !s.masterEnabled })),
      unlockAudio: () => set({ audioUnlocked: true }),
      setMasterVolume: (v) => set({ masterVolume: Math.max(0, Math.min(1, v)) }),
      setAmbienceVolume: (v) => set({ ambienceVolume: Math.max(0, Math.min(1, v)) }),
      setMusicVolume: (v) => set({ musicVolume: Math.max(0, Math.min(1, v)) }),
      setInteractionVolume: (v) => set({ interactionVolume: Math.max(0, Math.min(1, v)) }),

      // ── Scene actions ─────────────────────────────────────────────────────
      setScene: (scene) =>
        set((s) => ({
          previousScene: s.currentScene,
          currentScene: scene,
        })),
      setTransitioning: (t) => set({ isTransitioning: t }),

      // ── Interaction actions ───────────────────────────────────────────────
      activateHotspot: (id) => set({ activeHotspot: id }),
      setActiveObject: (id) => set({ activeObject: id }),
      powerOnComputer: () =>
        set({ computerPoweredOn: true, bootSequenceComplete: false }),
      completeBootSequence: () => set({ bootSequenceComplete: true }),
      powerOffComputer: () =>
        set({
          computerPoweredOn: false,
          bootSequenceComplete: false,
          openWindows: [],
          activeWindow: null,
        }),
      openWindow: (id) =>
        set((s) => ({
          openWindows: s.openWindows.includes(id)
            ? s.openWindows
            : [...s.openWindows, id],
          activeWindow: id,
        })),
      closeWindow: (id) =>
        set((s) => {
          const remaining = s.openWindows.filter((w) => w !== id);
          return {
            openWindows: remaining,
            activeWindow:
              s.activeWindow === id
                ? remaining[remaining.length - 1] ?? null
                : s.activeWindow,
          };
        }),
      focusWindow: (id) => set({ activeWindow: id }),
      setPrinterActive: (active) => set({ printerActive: active }),
      cycleFanSpeed: () =>
        set((s) => ({ fanSpeed: ((s.fanSpeed + 1) % 4) as FanSpeed })),

      // ── PC State actions ───────────────────────────────────────────────
      powerOnPC: () =>
        set({ pcState: 'BOOTING', sessionTimer: 0, errorMessage: undefined }),
      completeBoot: () =>
        set({ pcState: 'LOGIN' }),
      showLogin: () =>
        set({ pcState: 'READY' }),
      startSession: () =>
        set({ pcState: 'SESSION_ACTIVE' }),
      endSession: () =>
        set({ pcState: 'OFF', sessionTimer: 0 }),
      loadSession: (duration) =>
        set({ pcState: 'LOADING', sessionTimer: duration }),
      showError: (message) =>
        set({ pcState: 'ERROR', errorMessage: message }),
      clearError: () =>
        set({ errorMessage: undefined }),
      shutdownPC: () =>
        set({ pcState: 'SHUTDOWN' }),

      // ── Discovery actions ─────────────────────────────────────────────
      recordVisit: (objectId) =>
        set((s) => ({
          visitedObjects: s.visitedObjects.includes(objectId)
            ? s.visitedObjects
            : [...s.visitedObjects, objectId],
        })),
      recordInteraction: (id) =>
        set((s) => ({
          completedInteractions: s.completedInteractions.includes(id)
            ? s.completedInteractions
            : [...s.completedInteractions, id],
        })),
      unlockMemory: (slug) =>
        set((s) => ({
          memoriesUnlocked: s.memoriesUnlocked.includes(slug)
            ? s.memoriesUnlocked
            : [...s.memoriesUnlocked, slug],
        })),

      // ── Accessibility actions ─────────────────────────────────────────
      setReducedMotion: (v) => set({ reducedMotion: v }),
    }),
    {
      name: "cyber-cafe-state",
      storage: createJSONStorage(() => sessionStorage),
      // Only persist discovery progress and audio preferences
      partialize: (state) => ({
        masterEnabled: state.masterEnabled,
        masterVolume: state.masterVolume,
        ambienceVolume: state.ambienceVolume,
        musicVolume: state.musicVolume,
        interactionVolume: state.interactionVolume,
        visitedObjects: state.visitedObjects,
        completedInteractions: state.completedInteractions,
      }),
    }
  )
);