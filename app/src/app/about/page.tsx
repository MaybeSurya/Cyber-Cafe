// src/app/about/page.tsx
// Route: /about (Credits & Product Vision statement)

import Link from "next/link";
import CafeButton from "@/components/ui/CafeButton";

export default function AboutPage() {
  return (
    <main
      style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "var(--space-12) var(--space-4)",
        fontFamily: "var(--font-arimo)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
      }}
    >
      <header style={{ textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "var(--font-archivo-narrow)",
            fontSize: "var(--text-3xl)",
            fontWeight: 700,
            fontStyle: "italic",
            color: "var(--color-primary)",
          }}
        >
          ABOUT NET JUNCTION
        </h1>
        <p
          style={{
            fontFamily: "var(--font-courier-prime)",
            fontSize: "var(--text-sm)",
            color: "var(--color-on-surface-variant)",
            marginTop: "var(--space-2)",
          }}
        >
          An immersive Indian cyber-café nostalgia experience (circa 2014–2019)
        </p>
      </header>

      <section
        style={{
          backgroundColor: "var(--color-notice-paper)",
          border: "2px solid var(--color-outline)",
          boxShadow: "6px 6px 0 0 rgba(0,0,0,0.3)",
          padding: "var(--space-6)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-4)",
          lineHeight: 1.6,
        }}
      >
        <h2 style={{ fontFamily: "var(--font-archivo-narrow)", fontSize: "var(--text-xl)" }}>
          CORE DESIGN STATEMENT
        </h2>

        <blockquote
          style={{
            borderLeft: "4px solid var(--color-secondary)",
            paddingLeft: "var(--space-4)",
            fontStyle: "italic",
            color: "var(--color-primary)",
            fontSize: "var(--text-lg)",
          }}
        >
          "Do not design a cyberpunk website. Design a real Indian cyber café that happens to be interactive."
        </blockquote>

        <p>
          This project recreates the <strong>social memory of the place</strong> — cramped browsing booths,
          warm fluorescent lighting, membrane keyboards worn smooth at WASD, ₹2 B&W printouts, result day anxiety,
          and the hum of ceiling fans on long summer afternoons.
        </p>

        <h3 style={{ fontFamily: "var(--font-archivo-narrow)", fontSize: "var(--text-lg)" }}>
          THE EMOTIONAL NORTH STAR: "ONE MORE HOUR."
        </h3>

        <p>
          You entered after school with ₹20 in your pocket. You were supposed to stay for thirty minutes.
          Then someone started a LAN game, your friend came online, the printer jammed, the result page finally loaded,
          the operator shouted from the counter — and suddenly it was getting dark outside.
        </p>

        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            border: "1px dashed var(--color-outline)",
            padding: "var(--space-4)",
            fontSize: "var(--text-xs)",
            fontFamily: "var(--font-courier-prime)",
            color: "var(--color-on-surface-variant)",
          }}
        >
          <strong>DISCLAIMER:</strong> SURYA CYBER SOLUTIONS is a completely imaginary, fictional name created solely for artistic and nostalgic purposes. It does not resolve to or represent any real-world brand, business, trademark, or registered company. Any match or resemblance is purely coincidental.
        </div>

        <div style={{ marginTop: "var(--space-4)", display: "flex", gap: "var(--space-4)" }}>
          <Link href="/experience">
            <CafeButton size="lg">ENTER CAFÉ INTERIOR</CafeButton>
          </Link>
          <Link href="/memories">
            <CafeButton size="lg" variant="secondary">EXPLORE MEMORIES</CafeButton>
          </Link>
        </div>
      </section>
    </main>
  );
}
