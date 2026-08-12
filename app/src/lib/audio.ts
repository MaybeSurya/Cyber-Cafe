// src/lib/audio.ts
// Howler.js singleton factory for the audio system.
// Loaded lazily — only after first user gesture on /experience.

import type { AudioTrack } from "@/data/types";

// We dynamically import Howler to avoid SSR issues
let howlInstances: Map<string, Howl> = new Map();
let howlerLoaded = false;

async function ensureHowler() {
  if (typeof window === "undefined") return;
  if (!howlerLoaded) {
    await import("howler");
    howlerLoaded = true;
  }
}

export async function createTrack(track: AudioTrack): Promise<void> {
  await ensureHowler();
  if (howlInstances.has(track.id)) return;

  const { Howl } = await import("howler");
  const howl = new Howl({
    src: [track.src],
    loop: track.loop,
    volume: track.volume,
    preload: true,
    html5: track.category === "ambience" || track.category === "music",
  });

  howlInstances.set(track.id, howl);
}

export function playTrack(id: string): void {
  howlInstances.get(id)?.play();
}

export function stopTrack(id: string): void {
  howlInstances.get(id)?.stop();
}

export function pauseTrack(id: string): void {
  howlInstances.get(id)?.pause();
}

export function setTrackVolume(id: string, volume: number): void {
  howlInstances.get(id)?.volume(Math.max(0, Math.min(1, volume)));
}

export function stopAll(): void {
  howlInstances.forEach((howl) => howl.stop());
}

export function disposeAll(): void {
  howlInstances.forEach((howl) => howl.unload());
  howlInstances.clear();
}
