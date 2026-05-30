<div align="center">

# 🚀 Internship Projects Dashboard

**A premium, glassmorphism-style dashboard to showcase all 6 Nexe-Agent internship deliverables — with editable GitHub & Vercel submission links per task.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-00838d?style=for-the-badge&logo=vercel&logoColor=white)](https://dashboard-intern-lemon.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.6-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[View Live Site](https://dashboard-intern-lemon.vercel.app) · [Report Bug](https://github.com/faizafaisal786/internship-tasks-dashboard/issues) · [Request Feature](https://github.com/faizafaisal786/internship-tasks-dashboard/issues)

</div>

---

## ✨ Overview

**Internship Projects Dashboard** is a modern full-stack portfolio hub built for **Nexe-Agent** interns. It presents all six required internship tasks in a responsive card grid, with smooth animations, a professional teal glass UI, and **per-task submission fields** where you can paste your own **GitHub repository** and **Vercel live demo** URLs — saved automatically in the browser.

Perfect for internship reviews, mentor check-ins, and final submissions.

---

## 🌐 Live Preview

| | |
|---|---|
| **Production URL** | [https://dashboard-intern-lemon.vercel.app](https://dashboard-intern-lemon.vercel.app) |
| **Local Dev** | [http://localhost:3000](http://localhost:3000) |

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| 🪟 **Glassmorphism UI** | Premium translucent cards, mesh gradients, and teal accent theme |
| 🎬 **Framer Motion** | Smooth scroll reveals, hover effects, and page transitions |
| 📱 **Fully Responsive** | Optimized for mobile, tablet, and desktop |
| 🔗 **Submission Links** | GitHub + Vercel links under each task — **shared for all visitors** |
| 🌐 **Public URLs** | Links saved in `src/lib/data.ts` and deployed with the site |
| ✅ **One-Click Open** | GitHub & Vercel buttons open in a new tab for everyone |
| 🧩 **Modular Code** | Reusable components, typed data, clean folder structure |
| ⚡ **Next.js App Router** | Fast builds, static pages, SEO-friendly metadata |

---

## 📋 Internship Tasks (6 Deliverables)

| # | Task | Level |
|---|------|-------|
| 1 | Portfolio Website with Contact Backend | 🟢 Beginner |
| 2 | Authentication-Based To-Do App | 🟢 Beginner |
| 3 | Blog Platform with Admin Panel | 🟡 Intermediate |
| 4 | E-Commerce Website | 🟡 Intermediate |
| 5 | SaaS Dashboard | 🔴 Advanced |
| 6 | AI-Integrated Web App | 🔴 Advanced |

Each project card includes:
- Task description & tech stack tags
- **GitHub Repository** input
- **Vercel Deploy** input
- One-click open button when URL is valid

---

## 🛠️ Tech Stack

```
Next.js 15  ·  React 18  ·  TypeScript  ·  Tailwind CSS
Framer Motion  ·  Lucide React  ·  clsx  ·  tailwind-merge
```

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Hosting | [Vercel](https://vercel.com/) |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or later  
- **npm** (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/faizafaisal786/internship-tasks-dashboard.git
cd internship-tasks-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
dashboard-intern/
├── public/                 # Static assets (images, etc.)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles & glass utilities
│   │   ├── layout.tsx      # Root layout & metadata
│   │   └── page.tsx        # Main page (sections)
│   ├── components/
│   │   ├── Header.tsx      # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills showcase
│   │   ├── ProjectCard.tsx # Task card wrapper
│   │   ├── TaskSubmissionLinks.tsx  # GitHub + Vercel inputs
│   │   ├── Contact.tsx     # Contact section
│   │   └── ...
│   ├── hooks/
│   │   └── useProjectLinks.ts   # localStorage link persistence
│   └── lib/
│       ├── data.ts         # 6 internship tasks data
│       └── utils.ts        # Helpers
├── package.json
└── README.md
```

---

## 🔗 How Submission Links Work

Links are stored in **`src/lib/data.ts`** inside each project object as `githubUrl` and `vercelUrl`. They ship with every deploy, so **anyone** opening the dashboard can click **GitHub** or **Vercel** and open your repos.

### Update your links

1. Open `src/lib/data.ts`
2. Edit `githubUrl` and `vercelUrl` for each task
3. Push to GitHub — Vercel redeploys automatically

```ts
{
  id: 1,
  name: "Portfolio Website with Contact Backend",
  githubUrl: "https://github.com/your-username/your-repo",
  vercelUrl: "https://your-app.vercel.app",
  // ...
}
```

---

## 🚢 Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/faizafaisal786/internship-tasks-dashboard)

1. Push this repo to GitHub.
2. Import the project on [Vercel](https://vercel.com/new).
3. Vercel auto-detects Next.js — click **Deploy**.
4. Your live URL will be ready in minutes.

Or use the CLI:

```bash
npx vercel --prod
```

---

## 📸 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Profile, role, and quick actions |
| **About** | Internship & background info |
| **Skills** | Tech skills grid |
| **Projects** | 6 internship task cards with submission links |
| **Contact** | Get in touch |

---

## 👩‍💻 Author

**Faiza Faisal**  
Full-Stack Web Developer Intern · **Nexe-Agent**  
Student ID: `NXAB100197`  
Internship: May 2026

[![GitHub](https://img.shields.io/badge/GitHub-faizafaisal786-181717?style=flat-square&logo=github)](https://github.com/faizafaisal786)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/faiza-faisal-1303942b6)

---

## 📄 License

This project is open source under the **MIT License**. See [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with ❤️ for Nexe-Agent Internship Program**

⭐ Star this repo if you find it helpful!

</div>
