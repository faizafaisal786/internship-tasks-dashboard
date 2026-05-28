"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 mesh-gradient">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-12 h-12 bg-[#00838d] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#00838d]/20">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg text-white tracking-tighter">FAIZA</span>
            <span className="text-[10px] font-bold text-[#00f2fe] tracking-[0.3em]">PROFESSIONAL DASHBOARD</span>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12 mb-16">
          <a href="https://github.com/faizafaisal786" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
            <div className="w-14 h-14 glass-premium rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00838d]/10 transition-all">
              <Github className="w-6 h-6 text-gray-400 group-hover:text-[#00f2fe]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-[#00f2fe]">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/faiza-faisal-1303942b6?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
            <div className="w-14 h-14 glass-premium rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00838d]/10 transition-all">
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-[#00f2fe]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-[#00f2fe]">LinkedIn</span>
          </a>
          <a href="mailto:faizafaysalgenda@gmail.com" className="flex flex-col items-center gap-3 group">
            <div className="w-14 h-14 glass-premium rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00838d]/10 transition-all">
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-[#00f2fe]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-[#00f2fe]">Email</span>
          </a>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
          <div className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 Nexe-Agent Internship Portfolio
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            Built with <Heart className="w-3 h-3 text-[#00838d] animate-pulse" /> by Faiza
          </div>
        </div>
      </div>
    </footer>
  );
}
