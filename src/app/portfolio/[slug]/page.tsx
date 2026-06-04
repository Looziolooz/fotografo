import { notFound } from "next/navigation";
import { WEDDINGS, getWedding, getAdjacentWedding } from "@/lib/weddings";
import WeddingDetail from "./WeddingDetail";

export function generateStaticParams() {
  return WEDDINGS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = getWedding(slug);
  if (!w) return { title: "Atelier Solari" };
  return {
    title: `${w.couple} · ${w.location} — Atelier Solari`,
    description: w.descriptionIt,
    openGraph: {
      title: `${w.couple} · ${w.location}`,
      description: w.descriptionIt,
      images: [w.cover],
    },
  };
}

export default async function WeddingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const wedding = getWedding(slug);
  if (!wedding) notFound();
  const next = getAdjacentWedding(slug);
  return <WeddingDetail wedding={wedding} next={next} />;
}
