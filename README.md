# Sports Eng — 运动科学论文深度解读

基于同行评议研究的结构化解读网站。当前收录第一篇：

**晚间运动与睡眠的剂量-反应关系**（Nature Communications, 2025）

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)

## 构建

```bash
npm run build
npm start
```

## 部署到 Vercel

1. 将仓库推送到 GitHub
2. 登录 [vercel.com](https://vercel.com)，点击 **Add New Project**
3. 导入 GitHub 仓库，Vercel 会自动检测 Next.js 配置
4. 点击 **Deploy**，完成后获得 `*.vercel.app` 域名

每次 `git push` 到主分支后，Vercel 会自动重新构建部署。

## 添加新论文

1. 在 `content/` 下新建结构化内容文件（参考 `evening-exercise-sleep.ts`）
2. 第二篇起可启用 `app/papers/[slug]/page.tsx` 动态路由
3. 将首页改为论文列表页

## 技术栈

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Recharts

## 免责声明

内容仅供科普参考，不构成医疗或训练建议。请结合个人情况并咨询专业人士。
