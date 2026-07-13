import Link from "next/link";
import type { PaperSummary } from "@/content/papers";

interface PaperCardProps {
  paper: PaperSummary;
}

export function PaperCard({ paper }: PaperCardProps) {
  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-xs font-medium text-accent bg-accent-light px-2 py-0.5 rounded">
          {paper.journal} · {paper.year}
        </span>
        {paper.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-muted bg-stone-100 px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-foreground leading-snug mb-1">
        {paper.titleZh}
      </h3>
      <p className="text-xs text-muted italic mb-3 line-clamp-2">{paper.title}</p>

      <p className="text-sm text-stone-600 mb-4 leading-relaxed">{paper.summary}</p>

      <ul className="space-y-1.5 mb-4">
        {paper.keyPoints.map((point) => (
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
            原文 DOI
          </a>
        )}
        {paper.hasDetailPage && (
          <Link
            href={`/papers/${paper.slug}`}
            className="text-xs font-medium text-foreground hover:text-accent transition-colors ml-auto"
          >
            深度解读 →
          </Link>
        )}
      </div>
    </article>
  );
}
