// src/lib/accessibility.ts
// Accessibility utilities: focus management, ARIA helpers, contrast checks, keyboard event handlers.

/**
 * Traps focus within a given container element.
 * Useful for modal dialogs and overlays.
 */
export function trapFocus(container: HTMLElement, event: KeyboardEvent): void {
  if (event.key !== "Tab") return;

  const focusables = container.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );

  if (focusables.length === 0) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (event.shiftKey) {
    if (document.activeElement === first) {
      last.focus();
      event.preventDefault();
    }
  } else {
    if (document.activeElement === last) {
      first.focus();
      event.preventDefault();
    }
  }
}

/**
 * Standard keyboard activation handler for accessible non-button interactive elements.
 * Triggers callback on Enter or Space press.
 */
export function handleKeyActivate(
  event: React.KeyboardEvent,
  onActivate: () => void
): void {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    onActivate();
  }
}

/**
 * Formats ARIA announcement string for screen readers.
 */
export function formatAriaAnnouncement(action: string, label: string): string {
  return `${action}: ${label}`;
}

/**
 * Screen reader live region announcer helper.
 */
export function announceLive(message: string, priority: "polite" | "assertive" = "polite"): void {
  if (typeof document === "undefined") return;

  let region = document.getElementById("sr-live-region");
  if (!region) {
    region = document.createElement("div");
    region.id = "sr-live-region";
    region.setAttribute("aria-live", priority);
    region.setAttribute("aria-atomic", "true");
    region.className = "sr-only";
    document.body.appendChild(region);
  }

  region.textContent = message;
}
