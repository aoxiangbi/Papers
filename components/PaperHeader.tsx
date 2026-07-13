import type { PaperMeta } from "@/content/evening-exercise-sleep";

interface PaperHeaderProps {
  meta: PaperMeta;
}

export function PaperHeader({ meta }: PaperHeaderProps) {
  return (
    <header className="mb-10">
      <p className="text-sm font-medium text-accent mb-3">
        {meta.journal} · {meta.year}
      </p>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-snug mb-2">
        {meta.titleZh}
      </h1>
      <p className="text-base text-muted italic mb-6">{meta.title}</p>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm border border-border rounded-xl p-4 bg-card">
        <div>
          <dt className="text-muted">发表日期</dt>
          <dd className="font-medium">{meta.publishedDate}</dd>
        </div>
        <div>
          <dt className="text-muted">DOI</dt>
          <dd>
            <a
              href={meta.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:underline"
            >
              {meta.doi}
            </a>
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-muted">作者</dt>
          <dd className="font-medium">{meta.authors.join(", ")}</dd>
        </div>
        {meta.correspondingAuthor && (
          <div className="sm:col-span-2">
            <dt className="text-muted">通讯作者</dt>
            <dd className="font-medium">{meta.correspondingAuthor}</dd>
          </div>
        )}
      </dl>
    </header>
  );
}
