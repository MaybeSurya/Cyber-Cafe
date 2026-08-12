// src/data/memories.ts
// All memory content. Add entries here — no component changes required.

import type { Memory } from "./types";

export const memories: Memory[] = [
  {
    id: "mem-01",
    slug: "wired-mouse",
    title: "The Wired Mouse",
    category: "object",
    description:
      "Before wireless, the cable was part of the desk. You learned to manage the slack.",
    longDescription:
      "Every session started the same way — untangle the mouse cable from around the keyboard, pull it toward you, find enough slack to actually use it. The ball mouse was already old. The optical one with the red glow underneath felt futuristic. You dragged it across a bare desk, a mousepad with a faded logo, or sometimes just your sleeve.",
    image: "objects/mouse-wired-grey.webp",
    audio: "sfx/sfx-mouse-click-01.wav",
    interactiveHint: "Drag the mouse",
  },
  {
    id: "mem-02",
    slug: "membrane-keyboard",
    title: "The Keyboard",
    category: "object",
    description:
      "Keys worn smooth at W, A, S, D. The space bar had a subtle rattle.",
    longDescription:
      "Shared by every person who sat at this station. The letters were fading on the most-used keys. Some keys needed a firm press. The spacebar made a slightly different sound than the rest — a hollow thunk. You typed carefully because mistakes meant using the backspace that was also slightly sticky.",
    image: "objects/keyboard-wired-black.webp",
    audio: "sfx/sfx-keyboard-typing-01.wav",
    interactiveHint: "Type something",
  },
  {
    id: "mem-03",
    slug: "ceiling-fan",
    title: "The Ceiling Fan",
    category: "places",
    description:
      "Always on. The speed determined how bearable the afternoon was.",
    longDescription:
      "Three speeds: off (never used in summer), slow (pointless), and full (the only real option from March to June). The hum blended into everything. You stopped hearing it the moment you sat down. You only noticed it again when the power cut happened and suddenly — silence.",
    interactiveHint: "Click to change speed",
  },
  {
    id: "mem-04",
    slug: "result-day",
    title: "Result Day",
    category: "internet",
    description:
      "The website loaded slowly. The whole café went quiet at that moment.",
    longDescription:
      "Board results. Entrance exams. University admissions. The government education portal barely held under the traffic. You kept refreshing. The operator knew not to charge extra time on result day. Sometimes three people crowded behind the same chair, watching the same screen load.",
    image: "screens/result-page.webp",
    interactiveHint: "Enter your roll number",
  },
  {
    id: "mem-05",
    slug: "the-printout",
    title: "The ₹2 Printout",
    category: "culture",
    description:
      "B&W. Two rupees a page. You tried to fit everything onto fewer pages.",
    longDescription:
      "Assignment submissions, government forms, admit cards, resume for walk-in interviews, xerox of marksheets. The printer was always slightly low on ink by the third page. The paper tray jammed once a day. The operator fixed it without looking, by feel alone.",
    image: "paper/receipt-print-01.webp",
    audio: "sfx/sfx-printer-paper.wav",
    interactiveHint: "Print a document",
  },
  {
    id: "mem-06",
    slug: "lan-gaming",
    title: "LAN Gaming",
    category: "gaming",
    description:
      "₹20 per hour. Four players. The session always went over time.",
    longDescription:
      "Counter-Strike 1.6. Age of Empires. NFS Most Wanted. The LAN section was at the back — darker, louder, more chaotic. Someone was always arguing about lag. The headphones were shared and the foam was always missing. The operator occasionally shouted from the counter about the time.",
    image: "environment/cafe-gaming.webp",
    interactiveHint: "Join the LAN game",
  },
  {
    id: "mem-07",
    slug: "no-pendrives",
    title: "No Pendrives!!",
    category: "culture",
    description:
      "The sticky note was there from the beginning. The warning was real.",
    longDescription:
      "Viruses spread through USB drives faster than through the internet. The café had been through several — the kind that filled your screen with advertisements, or locked the desktop, or silently slowed everything down. The operator had developed a strict policy after one particularly bad week.",
    interactiveHint: "Read the notice",
  },
  {
    id: "mem-08",
    slug: "orkut-facebook",
    title: "The Social Network",
    category: "internet",
    description:
      "Before everyone had a smartphone. This was how you kept in touch.",
    longDescription:
      "Orkut scraps. Facebook messages typed slowly on a shared computer. Profile pictures uploaded from a pen drive — if the operator wasn't watching. You logged out carefully every time. Your session history was cleared. Someone always forgot to log out.",
    image: "screens/social-page.webp",
    interactiveHint: "Open the browser",
  },
  {
    id: "mem-09",
    slug: "bollywood-songs",
    title: "Café FM",
    category: "culture",
    description:
      "The radio in the corner. Songs you knew without choosing them.",
    longDescription:
      "The operator kept a small radio or sometimes a phone connected to a speaker. Hindi pop from 2013–2016. Sometimes someone's personal playlist through Winamp. The music was always slightly too loud or slightly too quiet, never quite right, but entirely familiar.",
    audio: "music/music-cafe-fm-01.mp3",
    interactiveHint: "Listen to the radio",
  },
  {
    id: "mem-10",
    slug: "hourly-rate",
    title: "₹20 per Hour",
    category: "culture",
    description: "The rate was on the wall. The math was always in your head.",
    longDescription:
      "You came in with ₹20 and planned to stay one hour. Then the game started. Then your friend logged on. Then the result website finally opened. Then the printer jammed and you had to wait. Then the power went and the timer reset. And somehow it was dark outside.",
    interactiveHint: "Check the rate chart",
  },
  {
    id: "mem-11",
    slug: "the-operator",
    title: "The Operator",
    category: "people",
    description: "He knew every machine, every problem, every customer.",
    longDescription:
      "He fixed paper jams without standing up. He knew which PC was slow and which one had the best connection. He answered questions without looking away from his screen. Sometimes he brought tea from the shop next door. Sometimes he had to say the internet was down even when it wasn't — because the server was overloaded.",
    interactiveHint: "Talk to the operator",
  },
  {
    id: "mem-12",
    slug: "computer-classes",
    title: "Computer Classes",
    category: "culture",
    description: "ADMISSION OPEN. MS Office. Tally. DTP. ₹500/month.",
    longDescription:
      "The notice was always there. Basic computer course. MS Office, Paint, Notepad, Internet browsing. Later: Tally for accounts, DTP for graphic design. The certificate was printed in-house on slightly thick paper. It looked official enough for a resume.",
    interactiveHint: "Read the notice",
  },
];

export const getMemoryBySlug = (slug: string): Memory | undefined =>
  memories.find((m) => m.slug === slug);

export const getMemoriesByCategory = (category: Memory["category"]): Memory[] =>
  memories.filter((m) => m.category === category);
