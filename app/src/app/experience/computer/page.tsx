"use client";
// src/app/experience/computer/page.tsx
// Route: /experience/computer (In-monitor desktop environment)

import Link from "next/link";
import Monitor from "@/components/hardware/Monitor";
import CafeDesktop from "@/components/computer/CafeDesktop";
import { useCafeStore } from "@/store/cafeStore";

export default function ComputerPage() {
  const powerOffComputer = useCafeStore((s) => s.powerOffComputer);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "var(--color-primary)",
        padding: "var(--space-4)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top back bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--space-2) var(--space-4)",
          backgroundColor: "var(--color-primary-container)",
          color: "var(--color-secondary-container)",
          fontFamily: "var(--font-courier-prime)",
          fontSize: "12px",
          marginBottom: "var(--space-3)",
          border: "1px solid var(--color-primary)",
        }}
      >
        <span>STATION_04 — COMPUTER SCREEN VIEW</span>
        <Link
          href="/experience"
          onClick={powerOffComputer}
          style={{
            color: "var(--color-secondary-fixed)",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          [ ← BACK TO CAFÉ INTERIOR ]
        </Link>
      </div>

      {/* Monitor frame filling screen */}
      <div style={{ flex: 1, position: "relative" }}>
        <Monitor powered={true} fullscreen={true}>
          <CafeDesktop />
        </Monitor>
      </div>
    </div>
  );
}
