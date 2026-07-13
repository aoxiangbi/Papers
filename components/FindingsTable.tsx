import type { FindingRow } from "@/content/evening-exercise-sleep";

interface FindingsTableProps {
  rows: FindingRow[];
}

export function FindingsTable({ rows }: FindingsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-stone-100 text-left">
            <th className="px-4 py-3 font-semibold text-foreground">指标</th>
            <th className="px-4 py-3 font-semibold text-foreground">运动时机</th>
            <th className="px-4 py-3 font-semibold text-foreground">对比</th>
            <th className="px-4 py-3 font-semibold text-foreground">效应量</th>
            <th className="px-4 py-3 font-semibold text-foreground">显著性</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={`${row.metric}-${row.timing}-${i}`}
              className={i % 2 === 0 ? "bg-card" : "bg-stone-50"}
            >
              <td className="px-4 py-3 font-medium whitespace-nowrap">{row.metric}</td>
              <td className="px-4 py-3 text-muted">{row.timing}</td>
              <td className="px-4 py-3 text-muted">{row.comparison}</td>
              <td className="px-4 py-3 font-medium text-foreground">{row.effect}</td>
              <td className="px-4 py-3 text-muted text-xs">{row.significance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
