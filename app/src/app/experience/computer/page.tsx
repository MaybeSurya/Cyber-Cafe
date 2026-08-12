// src/app/experience/computer/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ComputerPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new PC experience page
    router.push("/experience/pc-experience");
  }, [router]);

  return null; // Render nothing during redirect
}