/* src/components/environment/OperatorAnimations.ts */

export const OPERATOR_ANIMATIONS = {
  idle: {
    sway: { duration: 4000, delay: 0, distance: 2 },
    blink: { duration: 3000, delay: 0, probability: 0.1 },
    breath: { duration: 6000, delay: 0, scale: 1.02 }
  },
  typing: {
    keyPress: { duration: 100, distance: 3 },
    pause: { duration: 800, probability: 0.3 }
  },
  helping: {
    gesture: { duration: 1500, distance: 15 },
    lookUp: { duration: 2000, distance: 15 }
  }
} as const;

export type OperatorAnimationState = "idle" | "typing" | "helping";