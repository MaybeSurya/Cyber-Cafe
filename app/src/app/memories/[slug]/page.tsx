// src/app/memories/[slug]/page.tsx
// Route: /memories/[slug] (Individual memory card detail route)

import { notFound } from "next/navigation";
import MemoryDetail from "@/components/archive/MemoryDetail";
import { getMemoryBySlug, memories } from "@/data/memories";

export function generateStaticParams() {
  return memories.map((m) => ({ slug: m.slug }));
}

interface MemoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function SingleMemoryPage({ params }: MemoryPageProps) {
  const { slug } = await params;
  const memory = getMemoryBySlug(slug);

  if (!memory) {
    notFound();
  }

  return <MemoryDetail memory={memory} />;
}
