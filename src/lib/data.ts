import { Globe, Layout, ShoppingCart, User, MessageSquare, Cpu } from "lucide-react";

export interface Project {
  id: number;
  name: string;
  description: string;
  githubUrl: string;
  vercelUrl: string;
  techStack: string[];
  status: "Completed" | "In Progress";
  icon: any;
}

/**
 * Shared submission links — deployed with the app so everyone can open them.
 * Update githubUrl / vercelUrl here, then push to GitHub for Vercel to redeploy.
 */
export const projects: Project[] = [
  {
    id: 1,
    name: "Portfolio Website with Contact Backend",
    description:
      "A high-performance personal brand architecture featuring a serverless contact backend, automated email notifications, and real-time database synchronization.",
    githubUrl: "https://github.com/faizafaisal786/faiza-portfolio",
    vercelUrl: "https://faiza-portfolio.vercel.app",
    techStack: ["Next.js 15", "MongoDB", "Framer Motion", "Resend API"],
    status: "Completed",
    icon: User,
  },
  {
    id: 2,
    name: "Authentication-Based To-Do App",
    description:
      "Secure task orchestration platform utilizing JWT-based stateless authentication, complex CRUD operations, and persistent state management for seamless productivity.",
    githubUrl: "https://github.com/faizafaisal786/tasker-pro",
    vercelUrl: "https://tasker-pro.vercel.app",
    techStack: ["React", "Express.js", "JWT", "PostgreSQL", "Tailwind"],
    status: "Completed",
    icon: Layout,
  },
  {
    id: 3,
    name: "Blog Platform with Admin Panel",
    description:
      "Sophisticated content management system featuring a custom Rich Text Editor, dynamic SEO-optimized routing, and a multi-role administrative dashboard.",
    githubUrl: "https://github.com/faizafaisal786/nexe-blog",
    vercelUrl: "https://nexe-blog.vercel.app",
    techStack: ["Next.js", "Prisma ORM", "TipTap", "Shadcn UI"],
    status: "Completed",
    icon: MessageSquare,
  },
  {
    id: 4,
    name: "E-Commerce Website",
    description:
      "Scalable e-commerce engine integrated with Stripe for secure global transactions, featuring real-time inventory tracking and customer order analytics.",
    githubUrl: "https://github.com/faizafaisal786/faiza-shop",
    vercelUrl: "https://faiza-shop.vercel.app",
    techStack: ["Next.js", "Stripe SDK", "Redux Toolkit", "Cloudinary"],
    status: "Completed",
    icon: ShoppingCart,
  },
  {
    id: 5,
    name: "SaaS Dashboard",
    description:
      "Role-based intelligence dashboard with high-fidelity data visualizations, interactive activity logs, and granular permission management for SaaS environments.",
    githubUrl: "https://github.com/faizafaisal786/saas-hub",
    vercelUrl: "https://saas-hub.vercel.app",
    techStack: ["Next.js", "Recharts", "NextAuth.js", "Zustand"],
    status: "Completed",
    icon: Globe,
  },
  {
    id: 6,
    name: "AI-Integrated Web App",
    description:
      "Advanced AI application leveraging LLMs to perform deep semantic analysis of PDF resumes, providing data-driven scores and improvement recommendations.",
    githubUrl: "https://github.com/faizafaisal786/ai-analyzer",
    vercelUrl: "https://ai-analyzer.vercel.app",
    techStack: ["Next.js", "OpenAI GPT-4", "PDF-parse", "Tailwind"],
    status: "Completed",
    icon: Cpu,
  },
];
