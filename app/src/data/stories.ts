// src/data/stories.ts — Operator dialogue & contextual text
import type { OperatorDialogue } from "./types";

export const operatorDialogues: OperatorDialogue[] = [
  { id: "od-01", text: "Pen drive laga do.", triggerOn: "printer" },
  { id: "od-02", text: "Server slow hai.", subtext: "Server is slow." },
  { id: "od-03", text: "Result aa gaya kya?", subtext: "Did the result come out?" },
  { id: "od-04", text: "Print kitne page ka hai?", subtext: "How many pages to print?", triggerOn: "printer" },
  { id: "od-05", text: "Ek ghanta aur lagega?", subtext: "Do you need one more hour?", triggerOn: "computer" },
  { id: "od-06", text: "Internet thoda slow hai aaj.", subtext: "Internet is a bit slow today." },
  { id: "od-07", text: "Password mat bhoolna.", subtext: "Don't forget your password." },
  { id: "od-08", text: "Bhai, time ho gaya.", subtext: "Hey, time is up.", triggerOn: "session-end" },
];

export const billingEntries = [
  { time: "14:32", terminal: "PC-02", type: "Browsing (1h)", amount: 30, status: "paid" as const },
  { time: "14:45", terminal: "PRN-1", type: "Print (4p B&W)", amount: 8, status: "paid" as const },
  { time: "15:10", terminal: "PC-05", type: "Prepaid (30m)", amount: 15, status: "paid" as const },
  { time: "15:22", terminal: "PC-04", type: "Browsing (1h)", amount: 30, status: "pending" as const },
  { time: "15:41", terminal: "PRN-1", type: "Print (2p Colour)", amount: 20, status: "paid" as const },
  { time: "16:05", terminal: "PC-07", type: "Browsing (2h)", amount: 60, status: "paid" as const },
];

export const desktopIcons = [
  { id: "internet", label: "Internet\nExplorer", icon: "public", action: "openBrowser" as const, position: { x: 0, y: 0 } },
  { id: "my-computer", label: "My\nComputer", icon: "computer", action: "openMyComputer" as const, position: { x: 0, y: 1 } },
  { id: "music", label: "Music\nPlayer", icon: "headphones", action: "openMusic" as const, position: { x: 0, y: 2 } },
  { id: "games", label: "CS 1.6", icon: "sports_esports", action: "openGame" as const, position: { x: 0, y: 3 } },
  { id: "results", label: "Results", icon: "assignment_turned_in", action: "openResults" as const, position: { x: 0, y: 4 } },
  { id: "print", label: "Print\nDocuments", icon: "print", action: "openPrint" as const, position: { x: 0, y: 5 } },
  { id: "recycle-bin", label: "Recycle\nBin", icon: "delete", action: "openRecycleBin" as const, position: { x: 0, y: 6 } },
];

export const browserSearchSuggestions = [
  "exam result 2014",
  "weather today",
  "cricket score live",
  "bollywood songs download",
  "computer course near me",
  "how to make resume",
  "online form fill",
  "railway ticket booking",
];
