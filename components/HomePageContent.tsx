"use client";

import { categoryOrder } from "@/content/papers";
import { uiCopy } from "@/content/briefs/types";
import { CategorySection } from "@/components/CategorySection";
import { useLanguage } from "@/components/LanguageProvider";

export function HomePageContent() {
  const { locale } = useLanguage();
  const ui = uiCopy[locale];

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
      <header className="mb-10">
        <h1 className="text-2xl font-bold text-foreground tracking-tight mb-2">
          {ui.siteTitle}
        </h1>
        <p className="text-sm text-muted leading-relaxed">{ui.siteSubtitle}</p>
      </header>

      <div className="space-y-10">
        {categoryOrder.map((category) => (
          <CategorySection key={category} category={category} />
        ))}
      </div>
    </div>
  );
}
