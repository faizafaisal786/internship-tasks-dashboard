"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import About from "@/components/About";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Header />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Grid Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-[#00838d] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Internship Tasks</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Project Deliverables</h2>
          <div className="w-20 h-1.5 bg-[#00838d] rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
