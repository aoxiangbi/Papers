import Link from "next/link";
import { PaperHeader } from "@/components/PaperHeader";
import { Section } from "@/components/Section";
import { DataHighlight } from "@/components/DataHighlight";
import { FindingsTable } from "@/components/FindingsTable";
import { DoseResponseChart } from "@/components/DoseResponseChart";
import { eveningExerciseSleep as paper } from "@/content/evening-exercise-sleep";

const navItems = [
  { id: "background", label: "背景" },
  { id: "design", label: "设计" },
  { id: "findings", label: "结果" },
  { id: "mechanism", label: "机制" },
  { id: "recommendations", label: "建议" },
];

export default function EveningExerciseSleepPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
      <Link
        href="/"
        className="inline-block text-sm text-muted hover:text-accent mb-6 transition-colors"
      >
        ← 返回首页
      </Link>

      <PaperHeader meta={paper.meta} />

      <p className="text-base text-foreground leading-relaxed mb-6 border-l-4 border-accent pl-4">
        答案取决于<strong>运动结束距入睡的时间</strong>与<strong>运动负荷（强度 × 时长）</strong>的联合作用。
      </p>

      <DataHighlight items={paper.highlights} />

      <nav className="mb-8 flex flex-wrap gap-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-foreground hover:bg-accent-light hover:text-accent transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <Section id="background" title="研究背景">
        {paper.background.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </Section>

      <Section id="design" title="研究设计">
        <h3>样本</h3>
        <ul>
          {paper.design.sample.map((item) => (
            <li key={item.slice(0, 30)}>{item}</li>
          ))}
        </ul>
        <h3>运动负荷分级</h3>
        <div className="overflow-x-auto rounded-xl border border-border mb-4 not-prose">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-stone-100 text-left">
                <th className="px-3 py-2 font-semibold">等级</th>
                <th className="px-3 py-2 font-semibold">SHRZS</th>
                <th className="px-3 py-2 font-semibold">示例</th>
              </tr>
            </thead>
            <tbody>
              {paper.design.strainLevels.map((level, i) => (
                <tr key={level.level} className={i % 2 === 0 ? "bg-card" : "bg-stone-50"}>
                  <td className="px-3 py-2 font-medium">{level.level}</td>
                  <td className="px-3 py-2">{level.shRZS}</td>
                  <td className="px-3 py-2 text-muted">{level.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="findings" title="核心结果">
        <p>运动在入睡前 <strong>≥4 小时</strong>结束，睡眠指标无显著变化。</p>
        <DoseResponseChart
          title="入睡延迟（示意）"
          yAxisLabel="延迟（分钟）"
          data={paper.chartData.sleepOnsetDelay}
        />
        <FindingsTable rows={paper.findings} />
      </Section>

      <Section id="mechanism" title="机制解读">
        {paper.mechanism.slice(0, 2).map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </Section>

      <Section id="recommendations" title="实践建议">
        {paper.recommendations.map((group) => (
          <div key={group.audience} className="mb-4 not-prose">
            <h3 className="text-sm font-semibold mb-1">{group.audience}</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
              {group.items.map((item) => (
                <li key={item.slice(0, 30)}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <div className="mt-8 text-center">
        <a
          href={paper.meta.doiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent font-medium hover:underline"
        >
          阅读原文 →
        </a>
      </div>
    </article>
  );
}
