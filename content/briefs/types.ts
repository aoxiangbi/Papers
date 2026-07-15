import type { PaperCategory } from "@/content/papers";

export interface PaperBrief {
  slug: string;
  category: PaperCategory;
  /** 疑问式标题，出现在详情页与文案开头 */
  titleQuestion: string;
  titleZh: string;
  title: string;
  journal: string;
  year: number;
  doi?: string;
  doiUrl?: string;
  /** 「这项研究发表在…专门回答一个问题：…」整段 */
  studyBlurb: string;
  /** 「结论很直接」下列条目 */
  conclusions: string[];
  /** 「本质原因」 */
  mechanism: string;
  /** 「对普通人的建议」 */
  advice: string[];
  /** 短引用 */
  reference: string;
  disclaimer?: string;
  /** 首页卡片摘要 */
  summary: string;
  /** 首页要点 */
  keyPoints: string[];
  tags: string[];
}
