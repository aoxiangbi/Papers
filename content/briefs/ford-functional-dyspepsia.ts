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
    titleQuestion: "总觉得胃不好，吃辣吃油就胀、烧、难受，到底怎么回事？",
    titleDisplay: "功能性消化不良：餐后不适的科学解释",
    studyBlurb:
      "这项研究发表在 *The Lancet*，是功能性消化不良（FD）的权威综述，专门回答一个问题：很多人查不出溃疡、癌症，却老觉得上腹胀、烧、早饱——这到底是什么病，吃刺激食物为什么容易触发，又该怎么科学应对？",
    conclusions: [
      "社区里消化不良约 20%；其中约 80% 胃镜找不到结构病变，叫功能性消化不良，约占健康人群 16%",
      "典型表现：上腹痛/烧灼感、餐后饱胀、早饱；最多约 80% 患者症状会被吃饭诱发",
      "高脂餐更易引出早饱、腹胀；亚洲研究里，大量吃辣椒与 FD 相关——辣椒素激活 TRPV1 痛觉通道，让内脏更“过敏”",
      "机制常是脑—肠对话紊乱：胃容受舒张不好、内脏过敏、十二指肠对酸更敏感，而不一定是胃酸特别多",
      "证据较明确的干预：有幽门螺杆菌先根除；抑酸药（PPI/H2）、促动力药、部分中枢神经调节药可能帮助；单纯改生活方式的 RCT 证据很少，但避开个人触发食物仍实用",
    ],
    mechanism:
      "消化系统要干三件事：胃先放松以容纳食物、再磨碎推进、并把疼痛信号传给大脑。功能性消化不良时，胃餐后往往舒张不够，食物更容易积在胃下部，人就觉得胀、早饱；同时内脏神经对酸、扩张和辣椒素更敏感，同样刺激更容易疼、烧、恶心。所以吃辣、吃油、吃撑，多半不是胃被腐蚀出了器质性损伤，而是胃容纳能力变差、痛觉更敏感。急性猛吃辣常加重；长期极低剂量辣椒素有时反而脱敏——说明关键在神经敏感性，不在神秘毒素。",
    advice: [
      "少吃撑、少一次高脂大餐；记下自己的触发食物（辣、油炸、咖啡、酒精、NSAID 止痛药等），先避开最明显的那几样。",
      "有烧心或上腹痛，可在医生指导下短期试用抑酸；别把所有不适都当成“胃炎要天天养”，也别自行长期乱吃止痛药伤胃。",
      "持续消瘦、反复呕吐、黑便、贫血或 55 岁以上新发症状，要就医排查；多数人是慢性波动病程，目标是减发作、提高生活质量，而不是“一次根治”。",
    ],
    disclaimer: "科普内容，不构成个体化医疗建议。",
    summary:
      "Lancet 2020：多数“胃不好”是功能性消化不良——胃镜常正常，却对餐后扩张与辣、酸更敏感；防护靠避开触发食物、必要时抑酸/根除幽门螺杆菌，别神话养胃偏方。",
    keyPoints: [
      "约 80% 消化不良无结构病变（功能性）",
      "餐后胀、早饱、上腹烧最常见",
      "辣与高脂常触发：内脏过敏 + 胃容受差",
      "科学应对：避触发、抑酸、查幽门螺杆菌",
    ],
    tags: ["消化不良", "胃胀", "辣椒素"],
  },
  en: {
    titleQuestion: "Why does spicy or heavy food leave your stomach sore and bloated?",
    titleDisplay: "Functional dyspepsia: why meals trigger discomfort",
    studyBlurb:
      "This Lancet seminar on functional dyspepsia (FD) asks one question: why do so many people feel upper-gut pain, burning, or fullness with no ulcer on endoscopy — and why do spicy or rich meals set it off?",
    conclusions: [
      "Community dyspepsia is about 20%; roughly 80% have no structural finding at endoscopy and are labelled FD — about 16% of healthy people",
      "Core symptoms: epigastric pain/burning, postprandial fullness, early satiety; up to ~80% report meal-induced symptoms",
      "High-fat meals more often provoke early satiety and bloating; in Asia, heavy chilli intake predicted FD — capsaicin activates TRPV1 pathways that heighten visceral sensitivity",
      "Mechanisms often involve gut–brain miscommunication: impaired gastric accommodation, visceral hypersensitivity, and duodenal acid sensitivity — not simply “too much acid”",
      "Therapies with clearer evidence: eradicate H. pylori if present; PPIs/H2 blockers, prokinetics, and some neuromodulators may help; lifestyle RCTs are scarce, but avoiding personal triggers remains practical",
    ],
    mechanism:
      "The gut has three jobs: the stomach relaxes to hold a meal, then grinds and moves it, and sends pain signals to the brain. In functional dyspepsia, the stomach often fails to relax enough after eating, so food pools lower in the stomach and you feel full early; visceral nerves also react more strongly to acid, stretch, and capsaicin, so the same stimulus more easily causes pain, burning, or nausea. Spicy, oily, or oversized meals usually do not mean the stomach has been chemically burned into structural damage — they mean poorer accommodation and higher pain sensitivity. Acute chilli often worsens symptoms; prolonged low-dose capsaicin can sometimes desensitise — pointing to nerve sensitivity, not a mystery toxin.",
    advice: [
      "Avoid mega-meals and big high-fat hits; log personal triggers (spice, fried food, coffee, alcohol, NSAIDs) and cut the worst offenders first.",
      "For burning or epigastric pain, a short clinician-guided acid-suppression trial may help; do not assume every ache needs lifelong “stomach tonics,” and do not self-medicate long-term with NSAIDs.",
      "See a doctor for weight loss, recurrent vomiting, black stools, anaemia, or new symptoms after age 55; for most people FD fluctuates — the goal is fewer flares and better life quality, not a one-shot cure.",
    ],
    disclaimer: "Educational content only — not individualized medical advice.",
    summary:
      "Lancet 2020: most “bad stomach” without ulcers is functional dyspepsia — meal stretch and spice/acid sensitivity drive symptoms; protect by cutting triggers, considering acid suppression and H. pylori testing.",
    keyPoints: [
      "~80% of dyspepsia has no structural lesion (functional)",
      "Post-meal fullness, early satiety, epigastric burning are typical",
      "Spice and fat often trigger: visceral hypersensitivity + poor accommodation",
      "Science-based steps: avoid triggers, acid suppression, check H. pylori",
    ],
    tags: ["Dyspepsia", "Bloating", "Capsaicin"],
  },
};
