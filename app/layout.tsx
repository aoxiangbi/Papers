import type { Metadata } from "next";
import Link from "next/link";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "运动科学论文解读 | Sports Eng",
  description:
    "基于同行评议研究的深度解读：晚间运动与睡眠的剂量-反应关系（Nature Communications, 2025）",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSansSC.variable} antialiased`}>
        <div className="min-h-screen">
          <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
            <div className="mx-auto max-w-3xl px-4 py-4 flex items-center justify-between">
              <Link href="/" className="font-semibold text-foreground tracking-tight">
                Sports Eng
              </Link>
              <span className="text-sm text-muted">论文深度解读</span>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t border-border mt-16">
            <div className="mx-auto max-w-3xl px-4 py-8 text-sm text-muted">
              <p>内容基于公开发表的学术研究，仅供科普参考，不构成医疗建议。</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
