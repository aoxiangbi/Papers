import type { PaperBrief } from "./types";

export const interheartMiRiskFactors: PaperBrief = {
  slug: "interheart-mi-risk-factors",
  category: "nutrition",
  title:
    "Effect of potentially modifiable risk factors associated with myocardial infarction in 52 countries (the INTERHEART study): case-control study",
  journal: "The Lancet",
  year: 2004,
  doi: "10.1016/S0140-6736(04)17018-9",
  doiUrl: "https://doi.org/10.1016/S0140-6736(04)17018-9",
  reference: "Yusuf et al., Lancet, 2004.",
  zh: {
    titleQuestion: "九成心梗，真的都跟生活方式有关吗？",
    titleDisplay: "INTERHEART：九大可改风险因素与心梗",
    studyBlurb:
      "这项研究发表在 *The Lancet*，覆盖 52 国、约 1.5 万例急性心梗患者与约 1.5 万名对照的标准化病例对照研究（INTERHEART），专门回答一个问题：在全球不同地区与族群里，哪些可改变的风险因素，能解释大部分首次心梗？",
    conclusions: [
      "九大因素——血脂异常（ApoB/ApoA1）、吸烟、高血压、糖尿病、腹型肥胖、心理社会因素、少吃蔬果、缺乏规律运动、饮酒模式——与急性心梗显著相关",
      "九因素合计约解释男性 90%、女性 94% 的人群归因风险（PAR）；仅吸烟+血脂异常就约占三分之二",
      "吸烟（现吸 vs 从不 OR 约 2.87，PAR 约 36%）、血脂异常（最高 vs 最低五分位 OR 约 3.25，PAR 约 49%）是最强两项；心理社会因素 PAR 约 32.5%",
      "关联在男女、老少、各洲与主要族群中大体一致——预防原则全球通用",
    ],
    mechanism:
      "心梗很少“凭空降临”：血脂异常推动动脉粥样硬化，吸烟损伤血管内皮并促血栓，高血压与糖尿病加速血管老化，腹型肥胖常伴随代谢紊乱，长期压力与情绪负荷叠加炎症与行为风险；反过来，每日蔬果、规律活动、合理饮酒模式则偏保护。INTERHEART 的关键不在于发现新病因，而在于用统一方法证明：这些日常可改因素，在全球几乎能拼出心梗风险的大半图景——所以预防不必等“神秘基因答案”，先管住可改的那几件事。",
    advice: [
      "优先盯两件最大头：不吸烟（或尽快戒），并定期查血脂/血压/血糖，而不是只等胸痛才就医。",
      "腰围比单纯体重更能提示风险；日常多蔬果、每周规律中高强度活动，比短期“节食冲刺”更重要。",
      "压力、抑郁与重大生活事件也计入风险账；把睡眠、社交与减压当成心血管管理的一部分，而不只是“心情问题”。",
    ],
    disclaimer: "科普内容，不构成个体化医疗或训练处方。",
    summary:
      "INTERHEART：52 国、约 3 万人；九大可改因素合计约解释九成心梗人群归因风险，吸烟与血脂异常贡献最大，结论全球大体一致。",
    keyPoints: [
      "52 国病例对照，约 1.5 万例心梗 + 1.5 万对照",
      "九因素合计 PAR：男性约 90%，女性约 94%",
      "吸烟与血脂异常是最强单项",
      "预防原则在各区域与族群大体通用",
    ],
    tags: ["心梗", "风险因素", "一级预防"],
  },
  en: {
    titleQuestion: "Do lifestyle factors really explain most heart attacks?",
    titleDisplay: "INTERHEART: nine modifiable MI risk factors",
    studyBlurb:
      "This Lancet report of INTERHEART — a standardised case-control study across 52 countries with about 15,000 first acute myocardial infarction cases and 15,000 controls — asks one question: which modifiable risk factors explain most of the risk of first MI worldwide, across regions and ethnic groups?",
    conclusions: [
      "Nine factors — abnormal lipids (ApoB/ApoA1), smoking, hypertension, diabetes, abdominal obesity, psychosocial stress, low fruit/vegetable intake, physical inactivity, and alcohol pattern — were all linked to acute MI",
      "Together they accounted for about 90% of population attributable risk in men and 94% in women; smoking plus lipids alone covered roughly two-thirds",
      "Strongest singles: smoking (current vs never OR ~2.87, PAR ~36%) and lipids (top vs lowest ApoB/ApoA1 quintile OR ~3.25, PAR ~49%); psychosocial PAR ~32.5%",
      "Associations held in both sexes, younger and older adults, and across world regions — prevention can follow similar principles globally",
    ],
    mechanism:
      "Most MIs are not mysterious: atherogenic lipids drive plaque, smoking injures endothelium and promotes thrombosis, hypertension and diabetes accelerate vascular ageing, abdominal obesity tracks metabolic strain, and chronic psychosocial load adds inflammatory and behavioural risk — while daily produce, regular activity, and moderate alcohol patterns tilt protective. INTERHEART’s punchline is not a new cause, but a global map: everyday modifiable factors explain the bulk of first-MI risk almost everywhere, so prevention starts with what people can change.",
    advice: [
      "Prioritise the two biggest levers: do not smoke (or quit), and check lipids, blood pressure, and glucose regularly — do not wait for chest pain.",
      "Waist-to-hip ratio often beats BMI as a risk signal; daily fruit/vegetables and weekly moderate-to-vigorous activity beat short crash diets.",
      "Stress, depression, and major life events count in the risk ledger; treat sleep, social support, and stress relief as part of heart care, not “just mood.”",
    ],
    disclaimer: "Educational content only — not an individualized medical or training prescription.",
    summary:
      "INTERHEART: 52 countries, ~30,000 people; nine modifiable factors explain ~90% of MI population attributable risk, with smoking and lipids the largest single contributors — consistent worldwide.",
    keyPoints: [
      "52-country case-control; ~15k MI cases + ~15k controls",
      "Nine-factor PAR: ~90% men, ~94% women",
      "Smoking and abnormal lipids dominate",
      "Prevention principles are broadly global",
    ],
    tags: ["Myocardial infarction", "Risk factors", "Primary prevention"],
  },
};
