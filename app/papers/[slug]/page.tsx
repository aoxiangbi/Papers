import Link from "next/link";
import { notFound } from "next/navigation";
import { getBriefBySlug, getAllBriefSlugs } from "@/content/briefs";
import { Section } from "@/components/Section";

export function generateStaticParams() {
  return getAllBriefSlugs().map((slug) => ({ slug }));
}

export default async function BriefPaperPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brief = getBriefBySlug(slug);
  if (!brief) notFound();

  return (
    <article className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
      <Link
        href="/"
        className="inline-block text-sm text-muted hover:text-accent mb-6 transition-colors"
      >
        ← 返回首页
      </Link>

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-medium text-accent bg-accent-light px-2 py-0.5 rounded">
            {brief.journal} · {brief.year}
          </span>
          {brief.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted bg-stone-100 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight leading-snug mb-2">
          {brief.titleQuestion}
        </h1>
        <p className="text-sm text-muted italic leading-relaxed">{brief.title}</p>
      </header>

      <Section id="study" title="研究是什么">
        <p>{brief.studyBlurb}</p>
      </Section>

      <Section id="conclusions" title="结论很直接">
        <ul>
          {brief.conclusions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="mechanism" title="本质原因">
        <p>{brief.mechanism}</p>
      </Section>

      <Section id="advice" title="对普通人的建议">
        <ul>
          {brief.advice.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <div className="mt-10 pt-6 border-t border-border text-sm text-muted space-y-2">
        <p>
          参考文献：{brief.reference}
          {brief.doiUrl ? (
            <>
              {" "}
              <a
                href={brief.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                原文 DOI
              </a>
            </>
          ) : null}
        </p>
        <p>{brief.disclaimer ?? "科普内容，不构成个体化训练处方。"}</p>
      </div>
    </article>
  );
}
