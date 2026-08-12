// src/data/cableDefinitions.ts

export type CableLayer = "background" | "foreground";

export interface CableDefinition {
  id: string;
  path: string;
  strokeWidth: number;
  opacity: number;
  layer: CableLayer;
  subtleAnimation?: boolean;
}

export const cableDefinitions: CableDefinition[] = [
  // Power strip to wall outlet
  {
    id: "power-strip-to-wall",
    path: "M 120 200 Q 140 180 180 180 H 220",
    strokeWidth: 2,
    opacity: 0.25,
    layer: "background",
    subtleAnimation: true,
  },
  
  // Monitor to PC tower (VGA/DVI cable)
  {
    id: "monitor-to-tower",
    path: "M 180 120 Q 200 100 220 80",
    strokeWidth: 1.5,
    opacity: 0.2,
    layer: "foreground",
    subtleAnimation: false,
  },
  
  // PC tower to power strip
  {
    id: "tower-to-power",
    path: "M 20 180 Q 40 160 80 150",
    strokeWidth: 2,
    opacity: 0.2,
    layer: "background",
    subtleAnimation: false,
  },
  
  // Keyboard to tower (USB cable)
  {
    id: "keyboard-to-tower",
    path: "M 140 180 Q 160 160 180 140",
    strokeWidth: 1.5,
    opacity: 0.18,
    layer: "foreground",
    subtleAnimation: true,
  },
  
  // Mouse to tower (USB cable)
  {
    id: "mouse-to-tower",
    path: "M 180 180 Q 200 160 220 140",
    strokeWidth: 1.5,
    opacity: 0.18,
    layer: "foreground",
    subtleAnimation: true,
  },
  
  // Ethernet cable to partition
  {
    id: "ethernet-to-partition",
    path: "M 260 120 Q 280 100 320 80",
    strokeWidth: 1.5,
    opacity: 0.22,
    layer: "background",
    subtleAnimation: false,
  },
  
  // Power cable from wall to power strip (vertical)
  {
    id: "wall-to-power-strip",
    path: "M 120 40 Q 120 80 120 120",
    strokeWidth: 2,
    opacity: 0.2,
    layer: "background",
    subtleAnimation: false,
  },
  
  // Subtle background cable (decoration only)
  {
    id: "background-decoration",
    path: "M 50 200 Q 100 150 180 100 Q 260 50 320 150",
    strokeWidth: 1,
    opacity: 0.12,
    layer: "background",
    subtleAnimation: true,
  }
];