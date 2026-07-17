export type PaperCategory = "sleep" | "nutrition" | "training" | "emotion";

export type Locale = "zh" | "en";

export interface BriefCopy {
  titleQuestion: string;
  titleDisplay: string;
  studyBlurb: string;
  conclusions: string[];
  mechanism: string;
  advice: string[];
  disclaimer: string;
  summary: string;
  keyPoints: string[];
  tags: string[];
}

export interface PaperBrief {
  slug: string;
  category: PaperCategory;
  /** Original paper title (usually English) */
  title: string;
  journal: string;
  year: number;
  doi?: string;
  doiUrl?: string;
  reference: string;
  zh: BriefCopy;
  en: BriefCopy;
}

export const uiCopy = {
  zh: {
    backHome: "← 返回首页",
    study: "研究是什么",
    conclusions: "结论很直接",
    mechanism: "本质原因",
    advice: "对普通人的建议",
    reference: "参考文献",
    doi: "原文 DOI",
    siteTitle: "论文解读",
    siteSubtitle: "先按主题浏览，再点进文章看完整解读。仅供科普参考，不构成医疗建议。",
    footer: "内容基于公开发表的学术研究，仅供科普参考，不构成医疗建议。",
    detail: "阅读解读 →",
    brandSub: "论文解读",
    topicsNav: "按主题",
    articleCount: (n: number) => `${n} 篇`,
    breadcrumbHome: "首页",
    categories: {
      sleep: "睡眠",
      nutrition: "营养与长寿",
      training: "训练与恢复",
      emotion: "情绪与健康",
    } as Record<PaperCategory, string>,
  },
  en: {
    backHome: "← Back to home",
    study: "What the study is",
    conclusions: "Key findings",
    mechanism: "Why it matters",
    advice: "Practical advice",
    reference: "Reference",
    doi: "Paper DOI",
    siteTitle: "Paper Briefs",
    siteSubtitle:
      "Browse by topic, then open a brief for the full takeaway. For education only — not medical advice.",
    footer:
      "Content is based on published research for educational purposes only and is not medical advice.",
    detail: "Read brief →",
    brandSub: "Paper briefs",
    topicsNav: "Topics",
    articleCount: (n: number) => (n === 1 ? "1 paper" : `${n} papers`),
    breadcrumbHome: "Home",
    categories: {
      sleep: "Sleep",
      nutrition: "Nutrition & longevity",
      training: "Training & recovery",
      emotion: "Emotion & health",
    } as Record<PaperCategory, string>,
  },
} as const;
