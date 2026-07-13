export interface PaperMeta {
  title: string;
  titleZh: string;
  journal: string;
  year: number;
  doi: string;
  doiUrl: string;
  publishedDate: string;
  authors: string[];
  correspondingAuthor?: string;
}

export interface Highlight {
  value: string;
  unit?: string;
  label: string;
  description?: string;
}

export interface FindingRow {
  metric: string;
  timing: string;
  comparison: string;
  effect: string;
  significance: string;
}

export interface StrainLevel {
  level: string;
  shRZS: string;
  example: string;
  intensityExample: string;
  percentage: string;
}

export interface ChartPoint {
  hoursBeforeSleep: number;
  light: number;
  moderate: number;
  high: number;
  maximal: number;
}

export interface PaperContent {
  meta: PaperMeta;
  highlights: Highlight[];
  background: string[];
  design: {
    sample: string[];
    strainLevels: StrainLevel[];
    timing: string[];
    metrics: string[];
    analysis: string[];
  };
  findings: FindingRow[];
  chartData: {
    sleepOnsetDelay: ChartPoint[];
    sleepDurationReduction: ChartPoint[];
  };
  mechanism: string[];
  guidelinesComparison: { guideline: string; detail: string }[];
  limitations: string[];
  recommendations: { audience: string; items: string[] }[];
  references: { label: string; url?: string }[];
}

export const eveningExerciseSleep: PaperContent = {
  meta: {
    title: "Dose-response relationship between evening exercise and sleep",
    titleZh: "晚间运动与睡眠的剂量-反应关系",
    journal: "Nature Communications",
    year: 2025,
    doi: "10.1038/s41467-025-58271-x",
    doiUrl: "https://doi.org/10.1038/s41467-025-58271-x",
    publishedDate: "2025年4月15日",
    authors: [
      "Josh Leota",
      "David M. Presby",
      "Flora Le",
      "Mark É. Czeisler",
      "Luis Mascaro",
      "Emily R. Capodilupo",
      "Joshua F. Wiley",
      "Sean P. A. Drummond",
      "Shantha M. W. Rajaratnam",
      "Elise R. Facer-Childs",
    ],
    correspondingAuthor: "Josh Leota (Monash University)",
  },
  highlights: [
    {
      value: "14,689",
      label: "活跃成年人",
      description: "平均年龄 37.9 岁，73.8% 为男性",
    },
    {
      value: "408",
      unit: "万+",
      label: "人夜数据",
      description: "跨越 1 年真实生活环境",
    },
    {
      value: "4",
      unit: "小时",
      label: "安全窗口",
      description: "运动结束距入睡 ≥4h 时睡眠无显著变化",
    },
    {
      value: "80",
      unit: "分钟",
      label: "最大入睡延迟",
      description: "最大负荷运动在入睡后 2h 结束 vs 轻度运动",
    },
  ],
  background: [
    "公共卫生指南普遍推荐运动以促进健康睡眠，但高强度晚间运动可能通过交感神经过度激活而干扰睡眠。既往传统睡眠卫生建议常劝阻睡前剧烈运动。",
    "近年多项 meta 分析却显示：晚间运动总体上、甚至高强度晚间运动，与睡眠时长或质量下降并无显著关联。然而，这些研究大多仅单独考察运动强度或时长，未将二者结合为「运动负荷（exercise strain）」。",
    "高强度且持续时间长的晚间运动代谢需求大，可能在睡前留下不足的自主神经恢复窗口，使身心难以回到适合入睡的生理状态。本研究旨在填补「运动时机 × 运动负荷」交互作用的大样本证据空白。",
  ],
  design: {
    sample: [
      "回顾性队列研究，数据来自 WHOOP 手环订阅用户（版本 3.0/4.0），2021年9月至2022年8月，共 1 年。",
      "纳入标准：≥18 岁；佩戴 ≥350 天（95.6% 佩戴率）；在习惯性入睡前 10 小时至后 2 小时窗口内记录 ≥50 次运动。",
      "最终样本 14,689 人，4,084,354 人夜；人均记录 122.98 次运动（SD = 53.74）。",
      "设备经验证：心率与心电图一致性 99%；二阶段睡眠分类与多导睡眠图一致性 86–89%。",
    ],
    strainLevels: [
      {
        level: "轻度 (Light)",
        shRZS: "< 116",
        example: "快走、慢跑",
        intensityExample: "30 分钟 @ 65% HRmax（zone 2）",
        percentage: "46.5%",
      },
      {
        level: "中度 (Moderate)",
        shRZS: "116–214",
        example: "健身课、5 英里跑",
        intensityExample: "45 分钟 @ 85% HRmax（zone 4）",
        percentage: "35.8%",
      },
      {
        level: "高强度 (High)",
        shRZS: "214–461",
        example: "曲棍球训练、10 英里跑",
        intensityExample: "90 分钟 @ 85% HRmax（zone 4）",
        percentage: "15.3%",
      },
      {
        level: "最大 (Maximal)",
        shRZS: "> 461",
        example: "曲棍球比赛、半程马拉松",
        intensityExample: "120 分钟 @ 85% HRmax（zone 4）",
        percentage: "2.4%",
      },
    ],
    timing: [
      "主要分析：运动结束时间相对于个人「习惯性入睡时间」——按日历月份及工作日/周末分别计算均值，以控制社会性时差与季节性变化。",
      "次要分析：相对于当晚「实际入睡时间」，结果与主要分析一致。",
      "运动负荷采用 SHRZS（Summated Heart Rate Zones Score）：各心率区间停留分钟数 × 区间权重后求和，并按个人最大心率校准。",
    ],
    metrics: [
      "睡眠：入睡时间、总睡眠时长、睡眠质量（睡眠效率百分比）",
      "夜间自主神经：睡眠期加权平均静息心率（RHR）、心率变异性（HRV, RMSSD）",
      "HRV/RHR 在慢波睡眠期赋予更高权重，以反映副交感优势期的生理状态",
    ],
    analysis: [
      "广义可加混合模型（GAMM）拟合运动时机与睡眠/自主神经指标的非线性剂量-反应关系。",
      "协变量：工作日/周末、前夜结局变量、整体体能水平、性别、年龄（平滑项）。",
      "大样本采用 p < 0.005 作为显著性阈值；多重比较采用多元 t 分布校正。",
    ],
  },
  findings: [
    {
      metric: "入睡时间",
      timing: "运动结束在入睡前 2h",
      comparison: "最大负荷 vs 轻度",
      effect: "延迟约 36 分钟",
      significance: "p < 0.005",
    },
    {
      metric: "入睡时间",
      timing: "运动结束在入睡后 2h",
      comparison: "最大负荷 vs 轻度",
      effect: "延迟约 80 分钟",
      significance: "p < 0.005",
    },
    {
      metric: "睡眠时长",
      timing: "运动结束在入睡前 2h",
      comparison: "最大负荷 vs 轻度",
      effect: "缩短 22.2 分钟（-5.4%）",
      significance: "p < 0.005",
    },
    {
      metric: "睡眠时长",
      timing: "运动结束在入睡后 2h",
      comparison: "最大负荷 vs 轻度",
      effect: "缩短 42.6 分钟（-13.9%）",
      significance: "p < 0.005",
    },
    {
      metric: "睡眠质量",
      timing: "运动结束在入睡前 2h",
      comparison: "最大负荷 vs 轻度",
      effect: "下降 0.87 个百分点",
      significance: "p < 0.005",
    },
    {
      metric: "睡眠质量",
      timing: "运动结束在入睡后 2h",
      comparison: "最大负荷 vs 轻度",
      effect: "下降 5.6 个百分点",
      significance: "p < 0.005",
    },
    {
      metric: "夜间 RHR",
      timing: "运动结束在入睡前 2h",
      comparison: "最大负荷 vs 轻度",
      effect: "升高 3.9 bpm（+6.8%）",
      significance: "p < 0.005",
    },
    {
      metric: "夜间 HRV",
      timing: "运动结束在入睡前 2h",
      comparison: "最大负荷 vs 轻度",
      effect: "降低 8.3 单位（-14.1%）",
      significance: "p < 0.005",
    },
    {
      metric: "4 小时阈值",
      timing: "运动结束 ≥4h 前入睡",
      comparison: "各负荷水平",
      effect: "睡眠指标无显著变化",
      significance: "与无运动夜相当",
    },
    {
      metric: "6–10h 前结束",
      timing: "高强度运动",
      comparison: "vs 无运动夜",
      effect: "HRV 仅轻微下降（1.56–4.52 单位）",
      significance: "临床意义极小",
    },
  ],
  chartData: {
    sleepOnsetDelay: [
      { hoursBeforeSleep: 8, light: 0, moderate: 0, high: -5, maximal: -10 },
      { hoursBeforeSleep: 6, light: 0, moderate: 0, high: 0, maximal: -15 },
      { hoursBeforeSleep: 4, light: 5, moderate: 10, high: 15, maximal: 20 },
      { hoursBeforeSleep: 2, light: 15, moderate: 25, high: 30, maximal: 36 },
      { hoursBeforeSleep: 0, light: 30, moderate: 45, high: 60, maximal: 70 },
      { hoursBeforeSleep: -2, light: 50, moderate: 65, high: 75, maximal: 80 },
    ],
    sleepDurationReduction: [
      { hoursBeforeSleep: 8, light: 0, moderate: 0, high: 0, maximal: 0 },
      { hoursBeforeSleep: 6, light: 0, moderate: 0, high: 0, maximal: 0 },
      { hoursBeforeSleep: 4, light: 0, moderate: 5, high: 8, maximal: 10 },
      { hoursBeforeSleep: 2, light: 10, moderate: 15, high: 18, maximal: 22 },
      { hoursBeforeSleep: 0, light: 20, moderate: 28, high: 35, maximal: 38 },
      { hoursBeforeSleep: -2, light: 30, moderate: 36, high: 40, maximal: 43 },
    ],
  },
  mechanism: [
    "运动后自主神经恢复时长与运动所致稳态应激水平成正比。高负荷运动减缓交感撤退与副交感再激活，而健康睡眠的启动与维持恰恰依赖副交感优势（RHR 下降、HRV 上升、核心体温下降）。",
    "本研究发现：即使运动已结束数小时，更高负荷仍与夜间 RHR 升高、HRV 降低相关，提示自主神经尚未完全恢复至静息稳态。",
    "除生理机制外，晚间运动还可能伴随行为性干扰因素：运动前后摄入咖啡因、高 GI 碳水、酒精；在明亮环境（24 小时健身房、夜间赛事）训练会抑制褪黑素、延迟昼夜节律。",
    "值得注意的是，在习惯性入睡前 >2h 结束的中低负荷运动，入睡时间与睡眠质量与无运动夜相近——这与既往 meta 分析（82% 研究为轻中度负荷）的零效应结论一致，本研究将其推广至高负荷情境。",
  ],
  guidelinesComparison: [
    {
      guideline: "传统睡眠卫生建议",
      detail: "普遍劝阻睡前剧烈运动，基于交感激活可能延迟入睡的生理模型。",
    },
    {
      guideline: "近年 meta 分析",
      detail: "晚间运动及高强度晚间运动总体上不损害睡眠，但多数研究未量化「强度 × 时长」的综合负荷。",
    },
    {
      guideline: "Sleep Foundation 等（约 90 分钟规则）",
      detail: "中等强度运动在睡前 90 分钟结束通常不干扰睡眠，但未规定允许的持续时间，因而未涵盖「中等强度但长时间」所致的高负荷。",
    },
    {
      guideline: "本研究建议",
      detail: "为优化睡眠，尽量在计划入睡前 ≥4 小时结束运动；若必须在 4 小时窗口内训练，应选择轻度负荷运动。",
    },
  ],
  limitations: [
    "样本仅包含身体活跃人群（每周约 ≥1 次运动），不代表低活动水平人群；研究者预测低训练频率者在高强度晚间运动后睡眠受损可能更严重。",
    "手环无法检测「尝试入睡」时间，故无法估计入睡潜伏期（SOL）。",
    "SHRZS 对极短时间高努力的力量训练（如奥林匹克举重）可能低估相对代谢负荷。",
    "未控制光照暴露、咖啡因、饮食等已知睡眠干扰因素（尽管剂量-反应关系在晚间时段一致出现）。",
    "数据来自 WHOOP 商业平台用户，存在选择偏倚；无法获取地理位置等更多协变量。",
  ],
  recommendations: [
    {
      audience: "普通健身者",
      items: [
        "将高强度或长时间训练安排在计划入睡前 4 小时以上完成。",
        "若只能在晚间训练，选择轻度负荷（如 30 分钟快走/轻松慢跑，SHRZS < 116）。",
        "关注运动结束后的主观恢复感与次日晨起状态，结合手环 HRV/RHR 趋势做个体化调整。",
        "避免运动后摄入咖啡因或大量高 GI 食物，并尽量减少明亮光照暴露。",
      ],
    },
    {
      audience: "竞技运动员 / 夜班训练者",
      items: [
        "晚间高强度比赛或训练（如转播安排的赛事）可能严重损害当晚睡眠与恢复——需在周期化训练中预留补偿性睡眠策略。",
        "高强度晚间训练后，即使主观已「累到能睡」，客观 HRV 仍可能偏低，不宜以此作为恢复充分的唯一依据。",
        "团队应重新评估晚间赛程对次日训练质量与伤病风险的影响，而非仅关注竞技表现时段。",
      ],
    },
  ],
  references: [
    {
      label:
        "Leota J, et al. Dose-response relationship between evening exercise and sleep. Nat Commun. 2025;16:2297.",
      url: "https://doi.org/10.1038/s41467-025-58271-x",
    },
    {
      label:
        "Stutz J, et al. Effects of evening exercise on sleep in healthy participants: a systematic review and meta-analysis. Sports Med. 2019.",
    },
    {
      label:
        "Frimpong E, et al. The effects of evening high-intensity exercise on sleep in healthy adults. Sleep Med Rev. 2021.",
    },
    {
      label:
        "Walsh NP, et al. Sleep and the athlete: narrative review and 2021 expert consensus recommendations. Br J Sports Med. 2021.",
    },
  ],
};
