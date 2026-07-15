"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { uiCopy } from "@/content/briefs/types";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const ui = uiCopy[locale];

  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-2xl px-4 py-3 flex items-center justify-between gap-3">
          <Link href="/" className="font-semibold text-foreground tracking-tight">
            Sports Eng
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted hidden sm:inline">{ui.brandSub}</span>
            <LanguageToggle />
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-border mt-16">
        <div className="mx-auto max-w-2xl px-4 py-6 text-xs text-muted">
          <p>{ui.footer}</p>
        </div>
      </footer>
    </div>
  );
}
