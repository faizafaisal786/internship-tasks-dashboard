"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, UserCheck, Download, Copy, CheckCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

import Image from "next/image";

export default function Header() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("faizafaysalgenda@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden mesh-gradient">
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border border-white/10 glass-premium p-1 group">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#00838d] to-[#004d54] flex items-center justify-center shadow-inner relative overflow-hidden">
               <Image 
                src="/laptop girl.png" 
                alt="Faiza" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-4 -right-4 bg-[#00838d] p-4 rounded-2xl shadow-2xl border border-white/20"
          >
            <UserCheck className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>

        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-center md:justify-start mb-6">
              <span className="px-4 py-1.5 glass border border-[#00838d]/20 rounded-full text-[#00f2fe] text-[10px] font-black uppercase tracking-[0.3em] inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00838d] rounded-full animate-pulse" />
                Nexe-Agent Internship • May 2026
              </span>
            </div>
            
            <h1 className="text-5xl md:text-9xl font-black mb-4 text-gradient-primary tracking-tighter leading-none">
              Faiza
            </h1>
            
            <p className="text-gray-400 text-base md:text-xl mb-10 max-w-2xl leading-relaxed font-medium">
              Student ID: <span className="text-[#00f2fe] font-mono font-bold">NXAB100197</span>
              <br />
              <span className="text-white">Full-Stack Web Developer Intern</span> at Nexe-Agent. 
              Engineering high-performance digital architectures with a focus on modern user experiences and scalable backend systems.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
              <button 
                onClick={copyEmail}
                className="flex items-center gap-3 px-4 md:px-6 py-3 glass-premium rounded-2xl text-[10px] md:text-sm text-gray-300 hover:text-white transition-all group border border-white/5"
              >
                <Mail className="w-4 h-4 text-[#00838d]" />
                <span className="hidden sm:inline">faizafaysalgenda@gmail.com</span>
                <span className="sm:hidden">Copy Email</span>
                {copied ? <CheckCircle className="w-4 h-4 text-green-500 ml-1" /> : <Copy className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />}
              </button>
              <div className="flex items-center gap-3 px-4 md:px-6 py-3 glass-premium rounded-2xl text-[10px] md:text-sm text-gray-300 border border-white/5">
                <MapPin className="w-4 h-4 text-[#00838d]" />
                Karachi, Pak
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5">
              <a 
                href="/resume.pdf" 
                className="flex items-center gap-3 px-6 md:px-10 py-4 md:py-5 bg-[#00838d] hover:bg-[#007b85] text-white rounded-[1.5rem] md:rounded-[2rem] font-bold text-xs md:text-sm transition-all transform hover:scale-105 shadow-2xl shadow-[#00838d]/20 group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </a>
              <a 
                href="#projects" 
                className="flex items-center gap-3 px-6 md:px-10 py-4 md:py-5 glass-premium border border-white/10 hover:border-white/20 text-white rounded-[1.5rem] md:rounded-[2rem] font-bold text-xs md:text-sm transition-all"
              >
                Explore Tasks
                <ExternalLink className="w-4 h-4 opacity-50" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
