export type PaperCategory = "sleep" | "nutrition" | "training";

export const categoryLabels: Record<PaperCategory, string> = {
  sleep: "睡眠",
  nutrition: "营养与长寿",
  training: "训练与恢复",
};

export const categoryOrder: PaperCategory[] = ["sleep", "nutrition", "training"];

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

export const papers: PaperSummary[] = [
  {
    slug: "evening-exercise-sleep",
    category: "sleep",
    titleZh: "晚间运动与睡眠的剂量-反应关系",
    title: "Dose-response relationship between evening exercise and sleep",
    journal: "Nature Communications",
    year: 2025,
    doi: "10.1038/s41467-025-58271-x",
    doiUrl: "https://doi.org/10.1038/s41467-025-58271-x",
    summary:
      "14,689 名活跃成年人、408 万+ 人夜可穿戴数据：运动结束越晚、负荷越高，入睡越晚、睡得越短；睡前 4 小时以上结束则影响可忽略。",
    keyPoints: [
      "运动结束 ≥4 小时前入睡 → 睡眠几乎不受影响",
      "睡前 2h 最大负荷 vs 轻度：入睡延迟约 80 分钟",
      "夜间心率升高、HRV 下降，提示交感神经过晚恢复",
      "睡前只能练 → 选轻度负荷（快走、轻松慢跑）",
    ],
    tags: ["晚间训练", "HRV", "WHOOP"],
    hasDetailPage: true,
  },
  {
    slug: "calorie-restriction-longevity",
    category: "nutrition",
    titleZh: "热量限制与长寿：肥胖环境中的新型饮食策略",
    title:
      "Calorie restriction for enhanced longevity: The role of novel dietary strategies in the present obesogenic environment",
    journal: "Ageing Research Reviews",
    year: 2020,
    doi: "10.1016/j.arr.2020.101038",
    doiUrl: "https://doi.org/10.1016/j.arr.2020.101038",
    summary:
      "叙述性综述：传统热量限制（CR）是有效的非药物延寿干预，但长期依从性差；间歇性禁食、蛋白质限制等新型策略可能是更易坚持的选择。",
    keyPoints: [
      "CALERIE 2 试验：2 年约 12% 热量限制，改善代谢与衰老生物标志物",
      "间歇性禁食（5:2、限时进食等）可能在不大幅减重时带来类似益处",
      "蛋白质限制被认为是哺乳动物衰老减缓的潜在关键机制之一",
      "肥胖环境中，新型策略比每日持续 CR 更易长期坚持",
    ],
    tags: ["热量限制", "间歇性禁食", "健康寿命"],
  },
  {
    slug: "exercise-injury-prevention",
    category: "training",
    titleZh: "运动干预预防运动损伤：哪种训练最有效？",
    title:
      "The effectiveness of exercise interventions to prevent sports injuries: a systematic review and meta-analysis of randomised controlled trials",
    journal: "British Journal of Sports Medicine",
    year: 2014,
    doi: "10.1136/bjsports-2013-092538",
    doiUrl: "https://doi.org/10.1136/bjsports-2013-092538",
    summary:
      "25 项 RCT、约 2.6 万人：力量训练可将运动损伤降到约 1/3 以下；平衡与综合方案也有效；单纯拉伸几乎无效。",
    keyPoints: [
      "力量训练防伤效应最强（RR ≈ 0.32）",
      "本体感觉 / 平衡训练约降伤 45%",
      "多成分方案有效，但可能被稀释",
      "单纯拉伸不是可靠的防伤策略",
    ],
    tags: ["防伤", "力量训练", "BJSM"],
    hasDetailPage: true,
  },
];

export function getPapersByCategory(category: PaperCategory): PaperSummary[] {
  return papers.filter((p) => p.category === category);
}

export function getPaperBySlug(slug: string): PaperSummary | undefined {
  return papers.find((p) => p.slug === slug);
}
