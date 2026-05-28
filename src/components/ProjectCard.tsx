"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/data";
import TaskSubmissionLinks from "@/components/TaskSubmissionLinks";

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-premium p-8 rounded-[2rem] flex flex-col h-full group relative overflow-hidden border border-white/5 hover:border-[#00838d]/30 transition-all duration-500"
    >
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
        <ArrowUpRight className="w-6 h-6 text-[#00838d]" />
      </div>

      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className="p-4 bg-gradient-to-br from-[#00838d] to-[#004d54] rounded-2xl shadow-xl shadow-[#00838d]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="flex items-center gap-1.5 px-4 py-1.5 bg-[#00838d]/10 border border-[#00838d]/20 rounded-full">
          <div className="w-1.5 h-1.5 bg-[#00838d] rounded-full animate-pulse" />
          <span className="text-[10px] font-black text-[#00f2fe] uppercase tracking-[0.2em]">
            {project.status}
          </span>
        </div>
      </div>

      <div className="relative z-10 flex-grow">
        <h3 className="text-2xl font-black mb-4 text-white group-hover:text-[#00f2fe] transition-colors tracking-tight leading-tight">
          {project.name}
        </h3>
        <p className="text-gray-400 mb-8 leading-relaxed font-medium line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-bold px-3 py-1 glass border border-white/5 rounded-lg text-gray-300 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <TaskSubmissionLinks projectId={project.id} taskNumber={project.id} />

      {/* Decorative background element */}
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#00838d]/10 blur-[100px] rounded-full group-hover:bg-[#00838d]/20 transition-all duration-700" />
    </motion.div>
  );
}
