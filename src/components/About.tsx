"use client";
import { motion } from "framer-motion";
import { User, Target, Rocket, Heart } from "lucide-react";
import Image from "next/image";

export default function About() {
  const highlights = [
    { icon: Target, title: "Mission", text: "To engineer scalable digital solutions that solve real-world problems with precision." },
    { icon: Rocket, title: "Vision", text: "Building the next generation of AI-integrated web architectures." },
    { icon: Heart, title: "Values", text: "Dedication, honesty, and professional integrity in every line of code." },
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#00838d]/10 rounded-xl">
              <User className="w-6 h-6 text-[#00f2fe]" />
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight italic">Who is Faiza?</h2>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            As a <span className="text-white font-bold">Full-Stack Web Developer Intern</span> at Nexe-Agent, I specialize in bridging the gap between innovative design and robust engineering. My journey is driven by a passion for clean code and high-performance architectures.
          </p>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            During my time at Nexe-Agent, I've focused on mastering the modern stack, from <span className="text-[#00f2fe] font-bold">Next.js 15</span> to <span className="text-[#00f2fe] font-bold">AI-Integrated solutions</span>, ensuring every project meets the highest industry standards.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <item.icon className="w-5 h-5 text-[#00838d]" />
                <h4 className="text-white font-bold text-sm uppercase tracking-widest">{item.title}</h4>
                <p className="text-[10px] text-gray-500 leading-tight">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-square glass-premium rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 relative overflow-hidden group shadow-2xl"
          >
            <div className="w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative">
              <Image 
                src="/laptop girl.png" 
                alt="Faiza Working" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
          {/* Accent decoration */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#00838d]/20 blur-[80px] rounded-full -z-10" />
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#00f2fe]/20 blur-[80px] rounded-full -z-10" />
        </div>
      </motion.div>
    </section>
  );
}
