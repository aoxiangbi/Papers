"use client";

import { getBriefsByCategory } from "@/content/briefs";
import type { PaperCategory } from "@/content/briefs/types";
import { uiCopy } from "@/content/briefs/types";
import { PaperCard } from "@/components/PaperCard";
import { useLanguage } from "@/components/LanguageProvider";

interface CategorySectionProps {
  category: PaperCategory;
}

export function CategorySection({ category }: CategorySectionProps) {
  const { locale } = useLanguage();
  const items = getBriefsByCategory(category);
  if (items.length === 0) return null;

  return (
    <section>
      <h2 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
        {uiCopy[locale].categories[category]}
      </h2>
      <div className="grid gap-4">
        {items.map((paper) => (
          <PaperCard key={paper.slug} paper={paper} />
        ))}
      </div>
    </section>
  );
}
