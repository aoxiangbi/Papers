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

  const ui = uiCopy[locale];

  return (
    <section id={category} className="scroll-mt-24">
      <div className="flex items-baseline justify-between gap-3 mb-1 pb-3 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground tracking-tight">
          {ui.categories[category]}
        </h2>
        <span className="text-xs text-muted tabular-nums">
          {ui.articleCount(items.length)}
        </span>
      </div>
      <div className="divide-y divide-border">
        {items.map((paper) => (
          <PaperCard key={paper.slug} paper={paper} />
        ))}
      </div>
    </section>
  );
}
