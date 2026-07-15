import type { PaperBrief } from "./types";

export const eveningExerciseSleep: PaperBrief = {
  slug: "evening-exercise-sleep",
  category: "sleep",
  title: "Dose-response relationship between evening exercise and sleep",
  journal: "Nature Communications",
  year: 2025,
  doi: "10.1038/s41467-025-58271-x",
  doiUrl: "https://doi.org/10.1038/s41467-025-58271-x",
  reference: "Leota et al., Nat Commun, 2025.",
  zh: {
    titleQuestion: "睡前运动真的会毁掉睡眠吗？",
    titleDisplay: "晚间运动与睡眠的剂量-反应关系",
    studyBlurb:
      "这项研究发表在 Nature Communications，分析了 14,689 名活跃成年人、超过 408 万人夜的可穿戴数据，专门回答一个问题：晚间运动的时机和负荷，究竟如何影响睡眠？",
    conclusions: [
      "入睡前 ≥4 小时结束运动：睡眠几乎不受影响",
      "结束越晚、负荷越高：入睡更迟、睡得更短、质量更差",
      "入睡前 2 小时的最大负荷 vs 轻度：入睡可延迟约 80 分钟",
      "高强度晚训后：夜间心率升高、HRV 下降，自主神经恢复不足",
    ],
    mechanism:
      "高负荷运动会拉长交感激活、推迟副交感回稳。而顺利入睡需要副交感占优——心率下来、HRV 上去、核心体温下降。结束太晚、负荷太大时，身体还没回到“能睡”的状态，睡眠就被挤掉了。",
    advice: [
      "高强度或长时间训练，尽量安排在计划入睡前 4 小时以上结束。",
      "如果只能晚上练，选轻度负荷（如轻松快走或慢跑），并尽量少咖啡因、少强光刺激。",
    ],
    disclaimer: "科普内容，不构成个体化训练或医疗建议。",
    summary:
      "1.4 万+ 人、408 万+ 人夜数据：运动结束越晚、负荷越高，睡眠越差；睡前 4 小时以上结束则影响可忽略。",
    keyPoints: [
      "运动结束 ≥4 小时前入睡 → 睡眠几乎不受影响",
      "睡前 2h 最大负荷 vs 轻度：入睡延迟约 80 分钟",
      "夜间心率升高、HRV 下降，提示交感恢复过晚",
      "睡前只能练 → 选轻度负荷",
    ],
    tags: ["晚间训练", "HRV", "WHOOP"],
  },
  en: {
    titleQuestion: "Does evening exercise really wreck your sleep?",
    titleDisplay: "Dose-response link between evening exercise and sleep",
    studyBlurb:
      "Published in Nature Communications, this study analysed wearable data from 14,689 active adults across more than 4.08 million person-nights to ask one question: how do evening exercise timing and strain jointly affect sleep?",
    conclusions: [
      "Finish ≥4 hours before bedtime: sleep impact is negligible",
      "Later finish + higher strain: later sleep onset, shorter sleep, poorer quality",
      "Maximal strain ending ~2 hours before bed vs light strain: sleep onset delayed by ~80 minutes",
      "After hard late sessions: higher overnight heart rate and lower HRV — incomplete autonomic recovery",
    ],
    mechanism:
      "High strain prolongs sympathetic activation and delays parasympathetic recovery. Healthy sleep onset needs the opposite state — lower heart rate, higher HRV, falling core temperature. When hard training ends too close to bed, the body is not ready to switch into sleep mode.",
    advice: [
      "Finish hard or long sessions at least 4 hours before your planned bedtime.",
      "If you can only train late, keep strain light (easy walking or jogging) and limit caffeine and bright light afterward.",
    ],
    disclaimer: "Educational content only — not individual training or medical advice.",
    summary:
      "14,689 adults and 4M+ person-nights: later + harder evening exercise hurts sleep; finishing ≥4 hours before bed largely avoids the effect.",
    keyPoints: [
      "Finish ≥4h before sleep → little sleep disruption",
      "Max vs light strain ~2h before bed: ~80 min later sleep onset",
      "Higher overnight HR and lower HRV after hard late training",
      "If evenings are all you have, keep sessions light",
    ],
    tags: ["Evening training", "HRV", "WHOOP"],
  },
};
