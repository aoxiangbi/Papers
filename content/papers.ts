import type { PaperCategory } from "@/content/briefs/types";
import { briefs } from "@/content/briefs";
import type { PaperBrief } from "@/content/briefs/types";

export type { PaperCategory };

export const categoryOrder: PaperCategory[] = ["sleep", "nutrition", "training"];

/** @deprecated Prefer uiCopy[locale].categories — kept for any legacy imports */
export const categoryLabels: Record<PaperCategory, string> = {
  sleep: "睡眠",
  nutrition: "营养与长寿",
  training: "训练与恢复",
};

export interface PaperSummary {
  slug: string;
  category: PaperCategory;
  titleZh: string;
  title: string;
  journal: string;
  year: number;
  doi?: string;
  doiUrl?: string;
  summary: string;
  keyPoints: string[];
  tags: string[];
  hasDetailPage?: boolean;
}

function toSummary(brief: PaperBrief): PaperSummary {
  return {
    slug: brief.slug,
    category: brief.category,
    titleZh: brief.zh.titleDisplay,
    title: brief.title,
    journal: brief.journal,
    year: brief.year,
    doi: brief.doi,
    doiUrl: brief.doiUrl,
    summary: brief.zh.summary,
    keyPoints: brief.zh.keyPoints,
    tags: brief.zh.tags,
    hasDetailPage: true,
  };
}

export const papers: PaperSummary[] = briefs.map(toSummary);

export function getPapersByCategory(category: PaperCategory): PaperSummary[] {
  return papers.filter((p) => p.category === category);
}

export function getPaperBySlug(slug: string): PaperSummary | undefined {
  return papers.find((p) => p.slug === slug);
}
