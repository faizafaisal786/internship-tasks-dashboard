"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Database, Globe, Layout, Smartphone } from "lucide-react";

const skills = [
  { name: "Frontend", icon: Layout, level: "95%", color: "bg-[#00838d]" },
  { name: "Backend", icon: Database, level: "90%", color: "bg-[#007b85]" },
  { name: "React/Next.js", icon: Code2, level: "98%", color: "bg-[#00f2fe]" },
  { name: "TypeScript", icon: Cpu, level: "92%", color: "bg-[#00838d]" },
  { name: "API Integration", icon: Globe, level: "94%", color: "bg-[#00f2fe]" },
  { name: "Mobile Design", icon: Smartphone, level: "88%", color: "bg-[#007b85]" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center md:text-left"
      >
        <h2 className="text-3xl font-bold text-white mb-2">Technical Expertise</h2>
        <div className="w-20 h-1.5 bg-[#00838d] rounded-full mb-4 mx-auto md:mx-0" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-2xl flex items-center gap-6 border border-white/5 hover:border-[#00838d]/30 transition-all"
          >
            <div className={`p-4 rounded-xl bg-white/5`}>
              <skill.icon className="w-6 h-6 text-[#00f2fe]" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-sm text-white/90">{skill.name}</span>
                <span className="text-[10px] text-gray-500">{skill.level}</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`h-full ${skill.color}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
