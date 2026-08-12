// src/data/audio.ts — Audio manifest
import type { AudioTrack } from "./types";

export const audioTracks: AudioTrack[] = [
  {
    id: "ambience-fan",
    src: "/audio/ambience/ambience-fan-loop.mp3",
    loop: true,
    volume: 0.4,
    category: "ambience",
    autoPlay: true,
  },
  {
    id: "ambience-room",
    src: "/audio/ambience/ambience-room-loop.mp3",
    loop: true,
    volume: 0.3,
    category: "ambience",
    autoPlay: true,
  },
  {
    id: "music-cafe-fm",
    src: "/audio/music/music-cafe-fm-01.mp3",
    loop: true,
    volume: 0.2,
    category: "music",
    autoPlay: true,
  },
  {
    id: "sfx-mouse-click",
    src: "/audio/sfx/sfx-mouse-click-01.wav",
    loop: false,
    volume: 0.6,
    category: "sfx",
    autoPlay: false,
  },
  {
    id: "sfx-keyboard",
    src: "/audio/sfx/sfx-keyboard-typing-01.wav",
    loop: false,
    volume: 0.5,
    category: "sfx",
    autoPlay: false,
  },
  {
    id: "sfx-printer-start",
    src: "/audio/sfx/sfx-printer-start.wav",
    loop: false,
    volume: 0.7,
    category: "sfx",
    autoPlay: false,
  },
  {
    id: "sfx-printer-paper",
    src: "/audio/sfx/sfx-printer-paper.wav",
    loop: false,
    volume: 0.7,
    category: "sfx",
    autoPlay: false,
  },
  {
    id: "sfx-computer-power-on",
    src: "/audio/sfx/sfx-computer-power-on.wav",
    loop: false,
    volume: 0.8,
    category: "sfx",
    autoPlay: false,
  },
];

export const getTrackById = (id: string): AudioTrack | undefined =>
  audioTracks.find((t) => t.id === id);

export const getAmbienceTracks = () =>
  audioTracks.filter((t) => t.category === "ambience");
