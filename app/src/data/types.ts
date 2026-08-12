// src/data/types.ts
// Core TypeScript interfaces for the Cyber Cafe experience.
// Keep data shapes separate from presentation logic.

export type MemoryCategory =
  | "object"
  | "internet"
  | "gaming"
  | "culture"
  | "people"
  | "places";

export interface Memory {
  id: string;
  slug: string;
  title: string;
  category: MemoryCategory;
  description: string;
  longDescription?: string;
  /** Path relative to /public/images/ */
  image?: string;
  /** Path relative to /public/audio/ */
  audio?: string;
  interactiveHint?: string;
  relatedIds?: string[];
}

export type NoticeType = "laminated" | "handwritten" | "printed" | "sticky";
export type NoticeLanguage = "en" | "hi" | "hinglish";

export interface Notice {
  id: string;
  type: NoticeType;
  /** Main notice text (may include \n) */
  content: string;
  subtext?: string;
  /** CSS rotate degrees for slight tilt */
  rotation?: number;
  language: NoticeLanguage;
}

export type InteractionPriority = "P0" | "P1" | "P2" | "P3";
export type InteractionAction =
  | "openComputer"
  | "openPrinter"
  | "openNotice"
  | "playSound"
  | "triggerDialogue"
  | "cycleFanSpeed"
  | "openGaming"
  | "openMemory";

export interface SceneObject {
  id: string;
  name: string;
  interactionPriority: InteractionPriority;
  ariaLabel: string;
  memoryId?: string;
  onInteract?: InteractionAction;
}

export type AudioCategory = "ambience" | "music" | "sfx";

export interface AudioTrack {
  id: string;
  src: string;
  loop: boolean;
  volume: number;
  category: AudioCategory;
  autoPlay: boolean;
}

export interface DesktopIcon {
  id: string;
  label: string;
  /** Material Symbol name */
  icon: string;
  action:
    | "openBrowser"
    | "openGame"
    | "openResults"
    | "openMusic"
    | "openPrint"
    | "openMyComputer"
    | "openRecycleBin";
  position?: { x: number; y: number };
}

export interface BillingEntry {
  time: string;
  terminal: string;
  type: string;
  amount: number;
  status: "paid" | "pending" | "void";
}

export interface OperatorDialogue {
  id: string;
  text: string;
  /** Hindi / Hinglish */
  subtext?: string;
  triggerOn?: string;
}

export type SceneName =
  | "entry"
  | "interior"
  | "computer"
  | "memories"
  | "about";

export type FanSpeed = 0 | 1 | 2 | 3;

export interface PrintJob {
  pages: number;
  copies: number;
  colour: boolean;
}
