import type { PaperBrief } from "./types";

export const draganskiGreyMatterTraining: PaperBrief = {
  slug: "draganski-grey-matter-training",
  category: "training",
  title: "Neuroplasticity: changes in grey matter induced by training",
  journal: "Nature",
  year: 2004,
  doi: "10.1038/427311a",
  doiUrl: "https://doi.org/10.1038/427311a",
  reference: "Draganski et al., Nature, 2004.",
  zh: {
    titleQuestion: "学会新技能，大脑灰质真的会变厚吗？",
    titleDisplay: "杂耍训练与灰质结构可塑性",
    studyBlurb:
      "这项研究发表在 *Nature*，把 24 名年轻志愿者（21 女 3 男，平均约 22 岁）分成杂耍组与对照组，用全脑结构 MRI + 体素形态学（VBM）跟踪三次扫描，专门回答一个问题：学会并练习复杂视觉运动技能，会不会改变健康成人大脑的宏观灰质结构？",
    conclusions: [
      "基线时两组灰质无显著区域差异；练成三球杂耍后，杂耍组在双侧中颞视觉运动区（hMT/V5）与左侧后顶内沟灰质显著扩张",
      "停练约 3 个月后再扫，上述扩张回落——结构改变是一过性的，与技能保持同向起伏",
      "变化落在处理与储存复杂视觉运动的区域，而非传统强调的初级运动皮层或小脑主导区",
      "直接挑战旧观点：成人皮层可塑性不只是“功能改接线”，宏观解剖结构也可被训练改写",
    ],
    mechanism:
      "大脑不是成年后就定型的雕像。学杂耍要持续追踪、预判飞行中的球，高度依赖视觉运动回路（尤其 hMT/V5）与空间注意相关顶叶区域。反复练习推高这些回路的使用负荷，MRI 上就出现局部灰质“扩容”；停练后负荷下降，扩容又回落。微观机制论文未直接测到（突触、胶质、血管等都可能参与），但宏观信息很清楚：结构跟着功能需求走——练什么，相关脑区就临时“加配资源”；不练，资源又撤回去。",
    advice: [
      "想“提升大脑”，优先选需要持续注意与复杂协调的新技能（乐器、球类技巧、舞蹈、新语言），并保持练习频率，而不是只靠被动补剂。",
      "可塑性有“用进废退”：学会后仍要练，结构收益才更可能维持；三天打鱼两天晒网，改变往往短暂。",
      "这是小样本青年人短期训练证据；年龄、病损与个体差异很大，不能外推成“练杂耍就能防痴呆”的处方。",
    ],
    disclaimer: "科普内容，不构成个体化医疗或训练处方。",
    summary:
      "经典 Nature：年轻人练三球杂耍约 3 个月后，视觉运动相关灰质短暂增厚；停练后又回落，证明成人大脑结构可被训练改写。",
    keyPoints: [
      "24 人，杂耍组 vs 对照，三次结构 MRI",
      "学会后 hMT/V5 与左后顶内沟灰质↑",
      "停练约 3 个月，扩张回落",
      "成人宏观结构可塑性的里程碑证据",
    ],
    tags: ["神经可塑性", "灰质", "技能学习"],
  },
  en: {
    titleQuestion: "Can learning a new skill thicken grey matter?",
    titleDisplay: "Juggling training and grey-matter plasticity",
    studyBlurb:
      "This Nature brief communication assigned 24 young volunteers (21 women, 3 men; mean age ~22) to juggling or control groups and tracked three whole-brain structural MRI scans with voxel-based morphometry, asking one question: does learning a complex visuomotor skill change macroscopic grey-matter structure in the healthy adult brain?",
    conclusions: [
      "No regional grey-matter differences at baseline; after mastering a three-ball cascade, jugglers showed significant expansion in bilateral mid-temporal motion areas (hMT/V5) and the left posterior intraparietal sulcus",
      "About 3 months after practice stopped, the expansion decreased — the structural change was transient and tracked skill retention",
      "Changes landed in regions that process and store complex visual motion, not the classic primary motor or cerebellar hubs often assumed first",
      "Directly challenges the old view that adult cortical plasticity is functional rewiring only — macroscopic anatomy can be rewritten by training",
    ],
    mechanism:
      "Adult brains are not fixed statues. Juggling demands continuous tracking and prediction of flying objects, heavily loading visuomotor circuits (especially hMT/V5) and parietal spatial-attention regions. Repeated practice raises demand; MRI shows local grey-matter expansion; stopping practice lowers demand and the expansion recedes. Microscopic drivers were not measured here (synapses, glia, vasculature all could contribute), but the macroscopic message is clear: structure follows functional demand — train a circuit and it temporarily “adds capacity”; stop training and capacity rolls back.",
    advice: [
      "To “upgrade” the brain, prioritise new skills that demand sustained attention and complex coordination (music, ball skills, dance, languages) and keep practicing — not passive supplements alone.",
      "Plasticity is use-it-or-lose-it: keep training after mastery if you want structural gains to stick; intermittent dabbling often yields only transient change.",
      "This is small-sample evidence in young adults over months — do not over-read it as “juggling prevents dementia.”",
    ],
    disclaimer: "Educational content only — not an individualized medical or training prescription.",
    summary:
      "Classic Nature: ~3 months of three-ball juggling transiently expanded visuomotor grey matter in young adults; the expansion receded after practice stopped — landmark evidence that adult brain structure is trainable.",
    keyPoints: [
      "24 adults, jugglers vs controls, three structural MRI scans",
      "After learning: grey matter ↑ in hMT/V5 and left IPS",
      "~3 months off practice: expansion decreased",
      "Landmark evidence for adult macroscopic structural plasticity",
    ],
    tags: ["Neuroplasticity", "Grey matter", "Skill learning"],
  },
};
