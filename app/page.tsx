import { PaperHeader } from "@/components/PaperHeader";
import { Section } from "@/components/Section";
import { DataHighlight } from "@/components/DataHighlight";
import { FindingsTable } from "@/components/FindingsTable";
import { DoseResponseChart } from "@/components/DoseResponseChart";
import { eveningExerciseSleep as paper } from "@/content/evening-exercise-sleep";

const navItems = [
  { id: "background", label: "研究背景" },
  { id: "design", label: "研究设计" },
  { id: "findings", label: "核心结果" },
  { id: "mechanism", label: "机制解读" },
  { id: "guidelines", label: "指南对比" },
  { id: "limitations", label: "局限性" },
  { id: "recommendations", label: "实践建议" },
  { id: "references", label: "参考文献" },
];

export default function HomePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <PaperHeader meta={paper.meta} />

      <p className="text-lg text-foreground leading-relaxed mb-8 border-l-4 border-accent pl-4">
        晚间运动究竟会不会影响睡眠？这篇 Nature Communications 研究给出的答案不是简单的「会」或「不会」，而是取决于
        <strong>运动结束距入睡的时间</strong>与<strong>运动负荷（强度 × 时长）</strong>的联合作用。
      </p>

      <DataHighlight items={paper.highlights} />

      <nav className="mb-10 rounded-xl border border-border bg-card p-4">
        <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
          目录
        </p>
        <ul className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="inline-block text-sm px-3 py-1 rounded-full bg-stone-100 text-foreground hover:bg-accent-light hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Section id="background" title="研究背景">
        {paper.background.map((paragraph) => (
          <p key={paragraph.slice(0, 20)}>{paragraph}</p>
        ))}
      </Section>

      <Section id="design" title="研究设计">
        <h3>样本与数据</h3>
        <ul>
          {paper.design.sample.map((item) => (
            <li key={item.slice(0, 30)}>{item}</li>
          ))}
        </ul>

        <h3>运动负荷分级（SHRZS）</h3>
        <div className="overflow-x-auto rounded-xl border border-border mb-4 not-prose">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-stone-100 text-left">
                <th className="px-4 py-3 font-semibold">等级</th>
                <th className="px-4 py-3 font-semibold">SHRZS</th>
                <th className="px-4 py-3 font-semibold">示例</th>
                <th className="px-4 py-3 font-semibold">强度×时长示例</th>
                <th className="px-4 py-3 font-semibold">占比</th>
              </tr>
            </thead>
            <tbody>
              {paper.design.strainLevels.map((level, i) => (
                <tr key={level.level} className={i % 2 === 0 ? "bg-card" : "bg-stone-50"}>
                  <td className="px-4 py-3 font-medium">{level.level}</td>
                  <td className="px-4 py-3">{level.shRZS}</td>
                  <td className="px-4 py-3">{level.example}</td>
                  <td className="px-4 py-3 text-muted">{level.intensityExample}</td>
                  <td className="px-4 py-3">{level.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>运动时机定义</h3>
        <ul>
          {paper.design.timing.map((item) => (
            <li key={item.slice(0, 30)}>{item}</li>
          ))}
        </ul>

        <h3>结局指标</h3>
        <ul>
          {paper.design.metrics.map((item) => (
            <li key={item.slice(0, 30)}>{item}</li>
          ))}
        </ul>

        <h3>统计方法</h3>
        <ul>
          {paper.design.analysis.map((item) => (
            <li key={item.slice(0, 30)}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="findings" title="核心结果">
        <p>
          更高运动负荷与更晚的运动结束时间，与睡眠及夜间自主神经指标呈<strong>剂量依赖性</strong>恶化相关。
          无论负荷高低，运动在习惯性入睡前 <strong>≥4 小时</strong>结束，均未见睡眠指标的显著变化。
        </p>

        <DoseResponseChart
          title="入睡延迟：最大负荷 vs 轻度运动（示意趋势）"
          yAxisLabel="延迟（分钟）"
          data={paper.chartData.sleepOnsetDelay}
        />
        <DoseResponseChart
          title="睡眠时长缩短：最大负荷 vs 轻度运动（示意趋势）"
          yAxisLabel="缩短（分钟）"
          data={paper.chartData.sleepDurationReduction}
        />

        <FindingsTable rows={paper.findings} />

        <p className="mt-4 text-sm text-muted">
          探索性分析显示：上述关联在性别、年龄、BMI 分层中未见显著差异。
        </p>
      </Section>

      <Section id="mechanism" title="机制解读">
        {paper.mechanism.map((paragraph) => (
          <p key={paragraph.slice(0, 20)}>{paragraph}</p>
        ))}
      </Section>

      <Section id="guidelines" title="与既往指南对比">
        <div className="space-y-4 not-prose">
          {paper.guidelinesComparison.map((item) => (
            <div
              key={item.guideline}
              className="rounded-lg border border-border p-4 bg-stone-50"
            >
              <p className="font-semibold text-foreground mb-1">{item.guideline}</p>
              <p className="text-sm text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="limitations" title="局限性">
        <ul>
          {paper.limitations.map((item) => (
            <li key={item.slice(0, 30)}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="recommendations" title="实践建议">
        {paper.recommendations.map((group) => (
          <div key={group.audience} className="mb-6 not-prose">
            <h3 className="text-base font-semibold text-foreground mb-2">
              {group.audience}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
              {group.items.map((item) => (
                <li key={item.slice(0, 30)}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section id="references" title="参考文献">
        <ol className="list-decimal pl-5 space-y-2 text-sm">
          {paper.references.map((ref) => (
            <li key={ref.label.slice(0, 40)}>
              {ref.url ? (
                <a href={ref.url} target="_blank" rel="noopener noreferrer">
                  {ref.label}
                </a>
              ) : (
                ref.label
              )}
            </li>
          ))}
        </ol>
      </Section>

      <div className="mt-12 rounded-xl bg-accent-light border border-teal-200 p-6 text-center">
        <p className="text-sm text-teal-900 mb-2">阅读原文</p>
        <a
          href={paper.meta.doiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
        >
          在 Nature Communications 查看完整论文 →
        </a>
      </div>
    </article>
  );
}
