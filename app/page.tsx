import { categoryOrder } from "@/content/papers";
import { CategorySection } from "@/components/CategorySection";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
      <header className="mb-10">
        <h1 className="text-2xl font-bold text-foreground tracking-tight mb-2">
          论文解读
        </h1>
        <p className="text-sm text-muted leading-relaxed">
          基于同行评议研究的要点提炼，按主题分类。仅供科普参考，不构成医疗建议。
        </p>
      </header>

      <div className="space-y-10">
        {categoryOrder.map((category) => (
          <CategorySection key={category} category={category} />
        ))}
      </div>
    </div>
  );
}
