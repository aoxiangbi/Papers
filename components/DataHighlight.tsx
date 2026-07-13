import type { Highlight } from "@/content/evening-exercise-sleep";

interface DataHighlightProps {
  items: Highlight[];
}

export function DataHighlight({ items }: DataHighlightProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-border bg-card p-4 flex flex-col"
        >
          <div className="flex items-baseline gap-0.5 mb-1">
            <span className="text-2xl sm:text-3xl font-bold text-accent">
              {item.value}
            </span>
            {item.unit && (
              <span className="text-sm font-semibold text-accent">{item.unit}</span>
            )}
          </div>
          <p className="text-sm font-semibold text-foreground">{item.label}</p>
          {item.description && (
            <p className="text-xs text-muted mt-1 leading-relaxed">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
