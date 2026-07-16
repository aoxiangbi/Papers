import type { PaperBrief } from "./types";

export const psychologicalStressCommonCold: PaperBrief = {
  slug: "psychological-stress-common-cold",
  category: "emotion",
  title: "Psychological Stress and Susceptibility to the Common Cold",
  journal: "New England Journal of Medicine",
  year: 1991,
  doi: "10.1056/NEJM199108293250903",
  doiUrl: "https://doi.org/10.1056/nejm199108293250903",
  reference: "Cohen et al., N Engl J Med, 1991.",
  zh: {
    titleQuestion: "压力大会更容易感冒吗？",
    titleDisplay: "心理压力与感冒易感性",
    studyBlurb:
      "这项研究发表在 New England Journal of Medicine：健康志愿者先评估心理压力，再故意接种五种感冒病毒之一（394 人）或安慰剂（26 人），专门回答一个问题：心理压力会不会让人更容易被感染、更容易感冒？",
    conclusions: [
      "压力越高，呼吸道感染率和临床感冒率都越高，呈剂量—反应关系",
      "感染率约从 74% 升到 90%；临床感冒约从 27% 升到 47%",
      "关键是「更容易被感染」，而不只是感染后症状报得更重",
      "五种挑战病毒结果相似；吸烟、饮酒、运动、睡眠、白细胞与抗体水平等，解释不了这层关系",
    ],
    mechanism:
      "心理压力会调动应激系统，改变自主神经与内分泌环境，进而削弱宿主对呼吸道病毒的抵抗力。这项实验把「压力」和「病毒暴露」拆开控制，说明情绪压力不只是主观难受，而是能切实抬高被感染的概率。",
    advice: [
      "高压阶段更要重视睡眠、恢复与基本防护，别只靠「扛一下」。",
      "长期高压时，把减压当成健康管理的一部分，而不是可有可无的情绪问题。",
    ],
    disclaimer: "科普内容，不构成个体化医疗建议。",
    summary:
      "经典 NEJM 实验：压力越大，接种感冒病毒后越容易感染、越容易感冒；呈剂量—反应，且是真正感染率升高。",
    keyPoints: [
      "压力与感冒风险呈剂量—反应关系",
      "感染率约 74%→90%，临床感冒约 27%→47%",
      "主要是易感性升高，不只是症状报告偏差",
      "健康行为与人格变量未能解释该关联",
    ],
    tags: ["压力", "免疫", "感冒"],
  },
  en: {
    titleQuestion: "Does stress really make you more likely to catch a cold?",
    titleDisplay: "Psychological stress and susceptibility to the common cold",
    studyBlurb:
      "Published in the New England Journal of Medicine, this prospective experiment measured psychological stress in healthy volunteers, then exposed them to one of five cold viruses (394 people) or placebo (26), asking one question: does stress raise the chance of infection and clinical colds?",
    conclusions: [
      "Higher stress predicted higher rates of respiratory infection and clinical colds in a dose-response pattern",
      "Infection rates rose from about 74% to about 90%; clinical colds from about 27% to 47%",
      "The key effect was greater susceptibility to infection — not merely reporting more symptoms after infection",
      "Findings were similar across five challenge viruses; smoking, alcohol, exercise, sleep, white-cell counts, and antibody levels did not explain the link",
    ],
    mechanism:
      "Psychological stress engages stress-response systems that reshape autonomic and endocrine milieu and can weaken host resistance to respiratory viruses. By experimentally controlling both stress assessment and viral exposure, this study showed that stress is not just subjective misery — it can raise the real probability of getting infected.",
    advice: [
      "During high-stress periods, protect sleep, recovery, and basic infection hygiene instead of simply «pushing through».",
      "Treat chronic stress management as part of health care, not an optional soft issue.",
    ],
    disclaimer: "Educational content only — not individual medical advice.",
    summary:
      "Landmark NEJM experiment: higher stress → higher chance of infection and clinical colds after viral challenge, in a dose-response pattern.",
    keyPoints: [
      "Dose-response link between stress and cold risk",
      "Infection ~74%→90%; clinical colds ~27%→47%",
      "Mainly increased susceptibility, not symptom reporting bias",
      "Health behaviors and personality did not explain the association",
    ],
    tags: ["Stress", "Immunity", "Common cold"],
  },
};
