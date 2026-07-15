import type { PaperBrief } from "./types";

export const exerciseInjuryPrevention: PaperBrief = {
  slug: "exercise-injury-prevention",
  category: "training",
  title:
    "The effectiveness of exercise interventions to prevent sports injuries: a systematic review and meta-analysis of randomised controlled trials",
  journal: "British Journal of Sports Medicine",
  year: 2014,
  doi: "10.1136/bjsports-2013-092538",
  doiUrl: "https://doi.org/10.1136/bjsports-2013-092538",
  reference: "Lauersen et al., Br J Sports Med, 2014.",
  zh: {
    titleQuestion: "只拉伸对防止运动损伤真的有用吗？",
    titleDisplay: "运动干预预防运动损伤：哪种训练最有效？",
    studyBlurb:
      "这项研究发表在 British Journal of Sports Medicine，系统回顾了 25 项随机对照试验，覆盖约 2.6 万人、3464 例损伤，专门回答一个问题：如何有效预防运动损伤？",
    conclusions: [
      "力量训练：损伤风险降到约 1/3 以下",
      "本体感觉 / 平衡训练：大约降低 45%",
      "综合方案（力量 + 平衡 + 拉伸等）：大约降低 35%",
      "单纯拉伸：基本无效",
    ],
    mechanism:
      "肌肉是人体运动中重要的动力来源和缓冲系统。跑步落地、起跳急停时，地面会回传很大冲击力；此时肌肉通过离心收缩主动吸收和缓冲。肌肉力量够强、神经控制够快，冲击传到关节前就被大幅卸掉，损伤风险自然更低。",
    advice: [
      "别再把拉伸当防伤主菜，适当结合力量训练。",
      "给关键部位专门练力量，尤其是腘绳肌、髋、核心、小腿和肩胛稳定相关肌群。",
    ],
    disclaimer: "科普内容，不构成个体化训练处方。",
    summary:
      "25 项 RCT、约 2.6 万人：力量训练可将运动损伤降到约 1/3 以下；平衡与综合方案也有效；单纯拉伸几乎无效。",
    keyPoints: [
      "力量训练防伤效应最强（RR ≈ 0.32）",
      "本体感觉 / 平衡训练约降伤 45%",
      "多成分方案有效，但可能被稀释",
      "单纯拉伸不是可靠的防伤策略",
    ],
    tags: ["防伤", "力量训练", "BJSM"],
  },
  en: {
    titleQuestion: "Does stretching alone really prevent sports injuries?",
    titleDisplay: "Which exercise best prevents sports injuries?",
    studyBlurb:
      "Published in the British Journal of Sports Medicine, this systematic review and meta-analysis pooled 25 randomised controlled trials covering about 26,610 people and 3,464 injuries, asking one question: which exercise approaches best prevent sports injuries?",
    conclusions: [
      "Strength training: injury risk cut to roughly one-third or less",
      "Proprioception / balance training: about a 45% reduction",
      "Multi-component programmes (strength + balance + stretching, etc.): about a 35% reduction",
      "Stretching alone: essentially no benefit",
    ],
    mechanism:
      "Muscle is a key source of force and shock absorption in sport. When you land, cut, or stop hard, large ground-reaction forces come back through the limb. Muscles handle much of that load through eccentric work. Stronger muscles and faster neuromuscular control unload joints earlier — and injury risk falls.",
    advice: [
      "Stop treating stretching as your main injury-prevention tool; pair it with real strength work.",
      "Train key regions deliberately: hamstrings, hips, core, calves, and scapular stabilisers.",
    ],
    disclaimer: "Educational content only — not individual training or medical advice.",
    summary:
      "25 RCTs in ~26,600 people: strength training can cut sports injuries to roughly one-third; balance and mixed programmes help; stretching alone does not.",
    keyPoints: [
      "Strength training shows the strongest effect (RR ≈ 0.32)",
      "Proprioception / balance training cuts injuries by ~45%",
      "Multi-component programmes work but may dilute key exposures",
      "Stretching alone is not a reliable prevention strategy",
    ],
    tags: ["Injury prevention", "Strength", "BJSM"],
  },
};
