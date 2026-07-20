import type { PaperBrief } from "./types";
import { calorieRestrictionLongevity } from "./calorie-restriction-longevity";
import { draganskiGreyMatterTraining } from "./draganski-grey-matter-training";
import { eveningExerciseSleep } from "./evening-exercise-sleep";
import { exerciseInjuryPrevention } from "./exercise-injury-prevention";
import { interheartMiRiskFactors } from "./interheart-mi-risk-factors";
import { lancetOralHealthGlobalBurden } from "./lancet-oral-health-global-burden";
import { mediterraneanDietCvdPrevention } from "./mediterranean-diet-cvd-prevention";
import { psychologicalStressCommonCold } from "./psychological-stress-common-cold";

export const briefs: PaperBrief[] = [
  eveningExerciseSleep,
  calorieRestrictionLongevity,
  mediterraneanDietCvdPrevention,
  interheartMiRiskFactors,
  lancetOralHealthGlobalBurden,
  draganskiGreyMatterTraining,
  exerciseInjuryPrevention,
  psychologicalStressCommonCold,
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
