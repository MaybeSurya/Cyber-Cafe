"use client";
// src/components/ui/ErrorState.tsx
// Café-world error framing — errors stay inside the experience.

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = "Connection Problem",
  message = "The internet café server is having a little trouble.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-4)",
        padding: "var(--space-8)",
        fontFamily: "var(--font-courier-prime)",
        textAlign: "center",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <span
        className="material-symbols-outlined"
        style={{
          fontSize: "48px",
          color: "var(--color-ink-red)",
          fontVariationSettings: "'FILL' 0",
        }}
        aria-hidden="true"
      >
        wifi_off
      </span>

      <h2
        style={{
          fontSize: "var(--text-xl)",
          fontWeight: 700,
          color: "var(--color-on-surface)",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: "var(--text-md)",
          color: "var(--color-on-surface-variant)",
          lineHeight: 1.6,
        }}
      >
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            fontFamily: "var(--font-courier-prime)",
            fontSize: "var(--text-sm)",
            fontWeight: 700,
            textTransform: "uppercase",
            padding: "var(--space-2) var(--space-6)",
            backgroundColor: "var(--color-surface-container-highest)",
            color: "var(--color-on-surface)",
            borderTop: "1px solid rgba(255,255,255,0.8)",
            borderLeft: "1px solid rgba(255,255,255,0.8)",
            borderBottom: "2px solid rgba(0,0,0,0.5)",
            borderRight: "2px solid rgba(0,0,0,0.5)",
            cursor: "pointer",
          }}
        >
          [ TRY AGAIN ]
        </button>
      )}
    </div>
  );
}
