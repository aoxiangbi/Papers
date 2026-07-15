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
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-xs font-medium text-accent bg-accent-light px-2 py-0.5 rounded">
          {paper.journal} · {paper.year}
        </span>
        {copy.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-muted bg-stone-100 px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-foreground leading-snug mb-1">
        {copy.titleDisplay}
      </h3>
      <p className="text-xs text-muted italic mb-3 line-clamp-2">{paper.title}</p>

      <p className="text-sm text-stone-600 mb-4 leading-relaxed">{copy.summary}</p>

      <ul className="space-y-1.5 mb-4">
        {copy.keyPoints.map((point) => (
          <li key={point} className="text-sm text-stone-600 flex gap-2">
            <span className="text-accent shrink-0">·</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-border">
        {paper.doiUrl && (
          <a
            href={paper.doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent hover:underline"
          >
            {ui.doi}
          </a>
        )}
        <Link
          href={`/papers/${paper.slug}`}
          className="text-xs font-medium text-foreground hover:text-accent transition-colors ml-auto"
        >
          {ui.detail}
        </Link>
      </div>
    </article>
  );
}
