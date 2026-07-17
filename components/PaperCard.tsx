"use client";

import Link from "next/link";
import type { PaperBrief } from "@/content/briefs/types";
import { uiCopy } from "@/content/briefs/types";
import { useLanguage } from "@/components/LanguageProvider";

interface PaperCardProps {
  paper: PaperBrief;
}

export function PaperCard({ paper }: PaperCardProps) {
  const { locale } = useLanguage();
  const copy = paper[locale];
  const ui = uiCopy[locale];

  return (
    <Link
      href={`/papers/${paper.slug}`}
      className="group block py-4 first:pt-0 last:pb-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 rounded-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs text-muted mb-1.5">
            {paper.journal} · {paper.year}
          </p>
          <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
            {copy.titleDisplay}
          </h3>
          <p className="mt-1.5 text-sm text-stone-600 leading-relaxed line-clamp-2">
            {copy.summary}
          </p>
        </div>
        <span className="shrink-0 text-xs font-medium text-muted group-hover:text-accent transition-colors pt-5">
          {ui.detail}
        </span>
      </div>
    </Link>
  );
}
