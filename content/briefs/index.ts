import type { PaperBrief } from "./types";
import { calorieRestrictionLongevity } from "./calorie-restriction-longevity";
import { eveningExerciseSleep } from "./evening-exercise-sleep";
import { exerciseInjuryPrevention } from "./exercise-injury-prevention";

export const briefs: PaperBrief[] = [
  eveningExerciseSleep,
  calorieRestrictionLongevity,
  exerciseInjuryPrevention,
];

export function getBriefBySlug(slug: string): PaperBrief | undefined {
  return briefs.find((brief) => brief.slug === slug);
}

export function getAllBriefSlugs(): string[] {
  return briefs.map((brief) => brief.slug);
}

export function getBriefsByCategory(category: PaperBrief["category"]): PaperBrief[] {
  return briefs.filter((brief) => brief.category === category);
}
