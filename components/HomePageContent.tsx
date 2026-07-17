"use client";

import { categoryOrder } from "@/content/papers";
import { getBriefsByCategory } from "@/content/briefs";
import { uiCopy } from "@/content/briefs/types";
import { CategorySection } from "@/components/CategorySection";
import { useLanguage } from "@/components/LanguageProvider";

export function HomePageContent() {
  const { locale } = useLanguage();
  const ui = uiCopy[locale];
  const visibleCategories = categoryOrder.filter(
    (category) => getBriefsByCategory(category).length > 0,
  );

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-foreground tracking-tight mb-2">
          {ui.siteTitle}
        </h1>
        <p className="text-sm text-muted leading-relaxed">{ui.siteSubtitle}</p>
      </header>

      <nav
        aria-label={ui.topicsNav}
        className="mb-10 flex flex-wrap gap-2"
      >
        {visibleCategories.map((category) => {
          const count = getBriefsByCategory(category).length;
          return (
            <a
              key={category}
              href={`#${category}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              <span>{ui.categories[category]}</span>
              <span className="text-xs text-muted tabular-nums">{count}</span>
            </a>
          );
        })}
      </nav>

      <div className="space-y-12">
        {visibleCategories.map((category) => (
          <CategorySection key={category} category={category} />
        ))}
      </div>
    </div>
  );
}
