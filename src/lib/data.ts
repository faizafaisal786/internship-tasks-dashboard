import { Globe, Layout, ShoppingCart, User, MessageSquare, Cpu } from "lucide-react";

export interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  status: "Completed" | "In Progress";
  icon: any;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Portfolio Website with Contact Backend",
    description: "A high-performance personal brand architecture featuring a serverless contact backend, automated email notifications, and real-time database synchronization.",
    techStack: ["Next.js 15", "MongoDB", "Framer Motion", "Resend API"],
    status: "Completed",
    icon: User,
  },
  {
    id: 2,
    name: "Authentication-Based To-Do App",
    description: "Secure task orchestration platform utilizing JWT-based stateless authentication, complex CRUD operations, and persistent state management for seamless productivity.",
    techStack: ["React", "Express.js", "JWT", "PostgreSQL", "Tailwind"],
    status: "Completed",
    icon: Layout,
  },
  {
    id: 3,
    name: "Blog Platform with Admin Panel",
    description: "Sophisticated content management system featuring a custom Rich Text Editor, dynamic SEO-optimized routing, and a multi-role administrative dashboard.",
    techStack: ["Next.js", "Prisma ORM", "TipTap", "Shadcn UI"],
    status: "Completed",
    icon: MessageSquare,
  },
  {
    id: 4,
    name: "E-Commerce Website",
    description: "Scalable e-commerce engine integrated with Stripe for secure global transactions, featuring real-time inventory tracking and customer order analytics.",
    techStack: ["Next.js", "Stripe SDK", "Redux Toolkit", "Cloudinary"],
    status: "Completed",
    icon: ShoppingCart,
  },
  {
    id: 5,
    name: "SaaS Dashboard",
    description: "Role-based intelligence dashboard with high-fidelity data visualizations, interactive activity logs, and granular permission management for SaaS environments.",
    techStack: ["Next.js", "Recharts", "NextAuth.js", "Zustand"],
    status: "Completed",
    icon: Globe,
  },
  {
    id: 6,
    name: "AI-Integrated Web App",
    description: "Advanced AI application leveraging LLMs to perform deep semantic analysis of PDF resumes, providing data-driven scores and improvement recommendations.",
    techStack: ["Next.js", "OpenAI GPT-4", "PDF-parse", "Tailwind"],
    status: "Completed",
    icon: Cpu,
  },
];
