import { notFound } from "next/navigation";
import { getBriefBySlug, getAllBriefSlugs } from "@/content/briefs";
import { BriefArticle } from "@/components/BriefArticle";

export function generateStaticParams() {
  return getAllBriefSlugs().map((slug) => ({ slug }));
}

export default async function BriefPaperPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brief = getBriefBySlug(slug);
  if (!brief) notFound();

  return <BriefArticle brief={brief} />;
}
