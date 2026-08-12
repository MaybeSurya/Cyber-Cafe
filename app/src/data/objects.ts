// src/data/objects.ts
import type { SceneObject } from "./types";

export const sceneObjects: SceneObject[] = [
  {
    id: "pc-station-04",
    name: "Computer Station 04",
    interactionPriority: "P0",
    ariaLabel: "Open the cyber café computer at Station 04",
    onInteract: "openComputer",
    memoryId: "mem-02",
  },
  {
    id: "printer",
    name: "Counter Printer",
    interactionPriority: "P1",
    ariaLabel: "Use the printer — print a document",
    onInteract: "openPrinter",
    memoryId: "mem-05",
  },
  {
    id: "notice-board",
    name: "Notice Board",
    interactionPriority: "P1",
    ariaLabel: "Read the notice board",
    onInteract: "openNotice",
  },
  {
    id: "gaming-station",
    name: "LAN Gaming Section",
    interactionPriority: "P1",
    ariaLabel: "Go to the LAN gaming section",
    onInteract: "openGaming",
    memoryId: "mem-06",
  },
  {
    id: "cafe-radio",
    name: "Café FM Radio",
    interactionPriority: "P2",
    ariaLabel: "The café radio — playing FM",
    onInteract: "playSound",
    memoryId: "mem-09",
  },
  {
    id: "ceiling-fan",
    name: "Ceiling Fan",
    interactionPriority: "P2",
    ariaLabel: "The ceiling fan — click to change speed",
    onInteract: "cycleFanSpeed",
    memoryId: "mem-03",
  },
  {
    id: "keyboard",
    name: "Keyboard",
    interactionPriority: "P2",
    ariaLabel: "The shared keyboard",
    onInteract: "playSound",
    memoryId: "mem-02",
  },
  {
    id: "mouse",
    name: "Wired Mouse",
    interactionPriority: "P2",
    ariaLabel: "The wired optical mouse",
    onInteract: "openMemory",
    memoryId: "mem-01",
  },
  {
    id: "operator",
    name: "Café Operator",
    interactionPriority: "P1",
    ariaLabel: "Talk to the café operator",
    onInteract: "triggerDialogue",
    memoryId: "mem-11",
  },
  {
    id: "sticky-note",
    name: "Sticky Note — No Pendrives",
    interactionPriority: "P2",
    ariaLabel: "Read the sticky note on the monitor",
    onInteract: "openMemory",
    memoryId: "mem-07",
  },
  {
    id: "rate-chart",
    name: "Rate Chart",
    interactionPriority: "P2",
    ariaLabel: "Read the rate chart",
    onInteract: "openNotice",
    memoryId: "mem-10",
  },
  {
    id: "ledger",
    name: "Billing Ledger",
    interactionPriority: "P3",
    ariaLabel: "The operator's handwritten billing ledger",
    onInteract: "openMemory",
  },
];

export const getObjectById = (id: string): SceneObject | undefined =>
  sceneObjects.find((o) => o.id === id);

export const getP0Objects = () =>
  sceneObjects.filter((o) => o.interactionPriority === "P0");
export const getP1Objects = () =>
  sceneObjects.filter((o) => o.interactionPriority === "P1");
