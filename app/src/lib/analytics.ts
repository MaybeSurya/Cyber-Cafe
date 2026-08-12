// src/lib/analytics.ts
// Privacy-conscious event tracking.
// Tracks meaningful interaction events only — no PII.

type CafeEvent =
  | "experience_started"
  | "computer_opened"
  | "computer_closed"
  | "notice_opened"
  | "printer_used"
  | "gaming_area_opened"
  | "memory_opened"
  | "audio_toggled"
  | "fan_speed_changed"
  | "result_checked"
  | "experience_completed";

interface EventPayload {
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(event: CafeEvent, payload?: EventPayload): void {
  if (typeof window === "undefined") return;

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Café Analytics] ${event}`, payload ?? "");
  }

  // Hook into your analytics provider here (Plausible, Fathom, etc.)
  // e.g. window.plausible?.(event, { props: payload });
}
