"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { ChartPoint } from "@/content/evening-exercise-sleep";

interface DoseResponseChartProps {
  title: string;
  yAxisLabel: string;
  data: ChartPoint[];
}

const STRAIN_COLORS = {
  light: "#0d9488",
  moderate: "#0891b2",
  high: "#d97706",
  maximal: "#dc2626",
};

const STRAIN_LABELS: Record<keyof Omit<ChartPoint, "hoursBeforeSleep">, string> = {
  light: "轻度",
  moderate: "中度",
  high: "高强度",
  maximal: "最大",
};

function formatXAxis(value: number) {
  if (value > 0) return `-${value}h`;
  if (value === 0) return "入睡";
  return `+${Math.abs(value)}h`;
}

export function DoseResponseChart({ title, yAxisLabel, data }: DoseResponseChartProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 mb-6">
      <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-xs text-muted mb-4">
        横轴：运动结束相对于习惯性入睡时间（负值 = 入睡前）
      </p>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
            <XAxis
              dataKey="hoursBeforeSleep"
              tickFormatter={formatXAxis}
              tick={{ fontSize: 11 }}
              stroke="#78716c"
            />
            <YAxis
              tick={{ fontSize: 11 }}
              stroke="#78716c"
              label={{
                value: yAxisLabel,
                angle: -90,
                position: "insideLeft",
                style: { fontSize: 11, fill: "#78716c" },
              }}
            />
            <Tooltip
              formatter={(value: number, name: string) => [
                `${value} ${yAxisLabel.includes("分钟") ? "分钟" : ""}`,
                STRAIN_LABELS[name as keyof typeof STRAIN_LABELS] ?? name,
              ]}
              labelFormatter={(label) => `相对入睡：${formatXAxis(Number(label))}`}
            />
            <Legend
              formatter={(value) =>
                STRAIN_LABELS[value as keyof typeof STRAIN_LABELS] ?? value
              }
            />
            {(Object.keys(STRAIN_COLORS) as Array<keyof typeof STRAIN_COLORS>).map(
              (key) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={STRAIN_COLORS[key]}
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
              )
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-muted mt-2">
        示意图基于论文报告的趋势方向与关键对比值，用于辅助理解剂量-反应关系，非原始 GAMM 拟合曲线。
      </p>
    </div>
  );
}
