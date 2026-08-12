"use client";
// src/components/ui/LoadingState.tsx
// Period-appropriate loading states — no generic spinners.

interface LoadingStateProps {
  message?: string;
  submessage?: string;
}

export default function LoadingState({
  message = "CONNECTING...",
  submessage = "Please wait.",
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-4)",
        padding: "var(--space-8)",
        fontFamily: "var(--font-courier-prime)",
      }}
    >
      <p
        style={{
          fontSize: "var(--text-lg)",
          fontWeight: 700,
          color: "var(--color-on-surface)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {message}
      </p>
      <p
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--color-on-surface-variant)",
        }}
      >
        {submessage}
      </p>
      {/* Simple progress bar — no spinning */}
      <div
        style={{
          width: "200px",
          height: "4px",
          backgroundColor: "var(--color-surface-container-high)",
          border: "1px solid var(--color-outline-variant)",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <div
          style={{
            height: "100%",
            width: "40%",
            backgroundColor: "var(--color-secondary)",
            animation: "loading-slide 1.2s ease-in-out infinite",
          }}
        />
      </div>
      <style>{`
        @keyframes loading-slide {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(500%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .loading-bar { animation: none; width: 60%; }
        }
      `}</style>
    </div>
  );
}
