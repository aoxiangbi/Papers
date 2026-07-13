import { categoryLabels, getPapersByCategory, type PaperCategory } from "@/content/papers";
import { PaperCard } from "@/components/PaperCard";

interface CategorySectionProps {
  category: PaperCategory;
}

export function CategorySection({ category }: CategorySectionProps) {
  const items = getPapersByCategory(category);
  if (items.length === 0) return null;

  return (
    <section>
      <h2 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
        {categoryLabels[category]}
      </h2>
      <div className="grid gap-4">
        {items.map((paper) => (
          <PaperCard key={paper.slug} paper={paper} />
        ))}
      </div>
    </section>
  );
}
