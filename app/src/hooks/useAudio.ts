"use client";
// src/hooks/useAudio.ts
// Thin wrapper over the audio lib + Zustand state.

import { useCallback, useEffect } from "react";
import { useCafeStore } from "@/store/cafeStore";
import { audioTracks } from "@/data/audio";
import {
  createTrack,
  playTrack,
  stopTrack,
  setTrackVolume,
  stopAll,
} from "@/lib/audio";

export function useAudio() {
  const {
    masterEnabled,
    masterVolume,
    ambienceVolume,
    musicVolume,
    interactionVolume,
    audioUnlocked,
    unlockAudio,
    toggleAudio,
    setMasterVolume,
    setAmbienceVolume,
    setMusicVolume,
    setInteractionVolume,
  } = useCafeStore();

  // Initialise ambience tracks once audio is unlocked
  useEffect(() => {
    if (!audioUnlocked) return;

    const init = async () => {
      for (const track of audioTracks) {
        await createTrack(track);
      }
      // Start ambience loops
      audioTracks
        .filter((t) => t.autoPlay && t.category !== "sfx")
        .forEach((t) => {
          setTrackVolume(
            t.id,
            t.volume *
              masterVolume *
              (t.category === "ambience" ? ambienceVolume : musicVolume)
          );
          if (masterEnabled) playTrack(t.id);
        });
    };

    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioUnlocked]);

  // Respond to master toggle
  useEffect(() => {
    if (!audioUnlocked) return;
    if (!masterEnabled) {
      stopAll();
    } else {
      audioTracks
        .filter((t) => t.autoPlay && t.category !== "sfx")
        .forEach((t) => playTrack(t.id));
    }
  }, [masterEnabled, audioUnlocked]);

  const playSfx = useCallback(
    (trackId: string) => {
      if (!audioUnlocked || !masterEnabled) return;
      setTrackVolume(trackId, interactionVolume * masterVolume);
      playTrack(trackId);
    },
    [audioUnlocked, masterEnabled, interactionVolume, masterVolume]
  );

  const handleFirstGesture = useCallback(() => {
    if (!audioUnlocked) unlockAudio();
  }, [audioUnlocked, unlockAudio]);

  return {
    masterEnabled,
    masterVolume,
    ambienceVolume,
    musicVolume,
    interactionVolume,
    audioUnlocked,
    toggleAudio,
    setMasterVolume,
    setAmbienceVolume,
    setMusicVolume,
    setInteractionVolume,
    playSfx,
    handleFirstGesture,
  };
}
