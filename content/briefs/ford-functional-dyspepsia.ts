import type { PaperBrief } from "./types";

export const fordFunctionalDyspepsia: PaperBrief = {
  slug: "ford-functional-dyspepsia",
  category: "nutrition",
  title: "Functional dyspepsia",
  journal: "The Lancet",
  year: 2020,
  doi: "10.1016/S0140-6736(20)30469-4",
  doiUrl: "https://doi.org/10.1016/S0140-6736(20)30469-4",
  reference: "Ford et al., Lancet, 2020.",
  zh: {
    titleQuestion: "吃辣吃油就胀、烧，是胃坏了吗？",
    titleDisplay: "功能性消化不良",
    studyBlurb:
      "这项研究发表在 *The Lancet*，综述功能性消化不良（FD），专门回答：胃镜常正常，为什么吃饭仍易胀、烧、难受？",
    conclusions: [
      "约 80% 的消化不良，胃镜找不到溃疡等结构病变，叫功能性消化不良",
      "核心症状：上腹胀、早饱、上腹痛/烧；多数会被吃饭诱发",
      "高脂、大量辣椒更容易触发",
    ],
    mechanism:
      "本质就两点：胃餐后舒张不够，容易胀、早饱；内脏神经对酸、扩张、辣椒素更敏感，同样刺激更容易疼和烧。多半不是胃被腐蚀坏了。",
    advice: [
      "少吃撑、少高脂大餐；避开自己的触发食物（辣、油炸等）。",
      "有幽门螺杆菌先根除；烧痛可遵医嘱短期抑酸。",
      "消瘦、反复呕吐、黑便或 55 岁后新发症状，尽快就医。",
    ],
    disclaimer: "科普内容，不构成个体化医疗建议。",
    summary:
      "多数“胃不好”是功能性消化不良：胃舒张差、痛觉更敏感；避开触发食物，必要时抑酸、查幽门螺杆菌。",
    keyPoints: [
      "约 80% 无结构病变",
      "餐后胀、早饱、上腹烧",
      "本质：胃舒张差 + 神经更敏感",
      "避触发、抑酸、查幽门螺杆菌",
    ],
    tags: ["消化不良", "胃胀", "辣椒素"],
  },
  en: {
    titleQuestion: "Is spicy or oily food wrecking your stomach?",
    titleDisplay: "Functional dyspepsia",
    studyBlurb:
      "This Lancet review of functional dyspepsia (FD) asks: if endoscopy is often normal, why do meals still cause fullness, burning, or pain?",
    conclusions: [
      "About 80% of dyspepsia has no structural lesion at endoscopy — that is functional dyspepsia",
      "Core symptoms: fullness, early satiety, epigastric pain/burning; most flares are meal-triggered",
      "High-fat meals and heavy chilli are common triggers",
    ],
    mechanism:
      "Two essentials: the stomach often fails to relax enough after eating, causing fullness; visceral nerves are more sensitive to acid, stretch, and capsaicin, so the same stimulus hurts more. Usually not corrosive damage to the stomach.",
    advice: [
      "Eat smaller meals, cut big high-fat hits, and avoid your personal triggers (spice, fried food).",
      "Eradicate H. pylori if present; a short clinician-guided acid-suppression trial may help burning pain.",
      "See a doctor for weight loss, recurrent vomiting, black stools, or new symptoms after age 55.",
    ],
    disclaimer: "Educational content only — not individualized medical advice.",
    summary:
      "Most “bad stomach” without ulcers is FD: poor gastric relaxation plus heightened gut sensitivity — cut triggers, consider acid suppression and H. pylori testing.",
    keyPoints: [
      "~80% has no structural lesion",
      "Post-meal fullness, early satiety, burning",
      "Core: poor relaxation + nerve hypersensitivity",
      "Avoid triggers, acid suppression, check H. pylori",
    ],
    tags: ["Dyspepsia", "Bloating", "Capsaicin"],
  },
};
