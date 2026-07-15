"use client";

import Link from "next/link";
import type { PaperBrief } from "@/content/briefs/types";
import { uiCopy } from "@/content/briefs/types";
import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";

export function BriefArticle({ brief }: { brief: PaperBrief }) {
  const { locale } = useLanguage();
  const copy = brief[locale];
  const ui = uiCopy[locale];

  return (
    <article className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
      <Link
        href="/"
        className="inline-block text-sm text-muted hover:text-accent mb-6 transition-colors"
      >
        {ui.backHome}
      </Link>

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-medium text-accent bg-accent-light px-2 py-0.5 rounded">
            {brief.journal} · {brief.year}
          </span>
          {copy.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted bg-stone-100 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight leading-snug mb-2">
          {copy.titleQuestion}
        </h1>
        <p className="text-sm text-muted italic leading-relaxed">{brief.title}</p>
      </header>

      <Section id="study" title={ui.study}>
        <p>{copy.studyBlurb}</p>
      </Section>

      <Section id="conclusions" title={ui.conclusions}>
        <ul>
          {copy.conclusions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="mechanism" title={ui.mechanism}>
        <p>{copy.mechanism}</p>
      </Section>

      <Section id="advice" title={ui.advice}>
        <ul>
          {copy.advice.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <div className="mt-10 pt-6 border-t border-border text-sm text-muted space-y-2">
        <p>
          {ui.reference}{locale === "zh" ? "：" : ": "}
          {brief.reference}
          {brief.doiUrl ? (
            <>
              {" "}
              <a
                href={brief.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {ui.doi}
              </a>
            </>
          ) : null}
        </p>
        <p>{copy.disclaimer}</p>
      </div>
    </article>
  );
}
