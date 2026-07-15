import type { PaperBrief } from "./types";
import { exerciseInjuryPrevention } from "./exercise-injury-prevention";

export const briefs: PaperBrief[] = [exerciseInjuryPrevention];

export function getBriefBySlug(slug: string): PaperBrief | undefined {
  return briefs.find((brief) => brief.slug === slug);
}

export function getAllBriefSlugs(): string[] {
  return briefs.map((brief) => brief.slug);
}
