"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { skills } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Skill } from "@/types";

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(skill.level), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level, delay]);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
        <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-300">{inView ? skill.level : 0}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

const categories = [
  { label: "Marketing", emoji: "🎯", color: "from-blue-700 to-cyan-600", data: skills.marketing },
  { label: "Business", emoji: "💼", color: "from-slate-800 to-blue-700", data: skills.business },
  { label: "Technical", emoji: "⚙️", color: "from-cyan-700 to-teal-500", data: skills.technical },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-max">
        <SectionHeading
          eyebrow="What I Bring"
          title="Skills & Expertise"
          subtitle="A blend of marketing creativity, business acumen, and technical proficiency."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.12, duration: 0.45, ease: "easeOut" }}
              className="professional-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={"p-2.5 rounded-lg bg-gradient-to-br " + cat.color + " text-white text-lg shadow-sm"}>
                  {cat.emoji}
                </div>
                <h3 className="font-display font-bold text-slate-950 dark:text-white">{cat.label}</h3>
              </div>
              <div className="space-y-4">
                {cat.data.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={ci * 0.15 + i * 0.1 + 0.3} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 p-6 rounded-lg bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-center"
        >
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-widest">Tools & Platforms</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Meta Business Suite", "Google Analytics", "Canva", "ChatGPT", "Claude AI", "MS Excel", "PowerPoint", "LinkedIn Ads", "Instagram", "Internshala"].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-cyan-400 hover:text-cyan-700 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
