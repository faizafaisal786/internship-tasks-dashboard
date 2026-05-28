"use client";
import { motion } from "framer-motion";
import { LayoutDashboard, Github, Mail, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-premium px-6 py-3 rounded-2xl flex items-center gap-8 border border-white/5"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00838d] rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-sm hidden md:block tracking-tighter">FAIZA</span>
        </div>

        <div className="h-4 w-[1px] bg-white/10" />

        <div className="flex items-center gap-6">
          <a href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="#projects" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Tasks</a>
          <a href="#contact" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>

        <div className="h-4 w-[1px] bg-white/10" />

        <div className="flex items-center gap-4">
          <a href="https://github.com/faizafaisal786" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 text-gray-400 hover:text-[#00f2fe] cursor-pointer transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/faiza-faisal-1303942b6?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4 text-gray-400 hover:text-[#00f2fe] cursor-pointer transition-colors" />
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
