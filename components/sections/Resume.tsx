"use client";
import { motion } from "framer-motion";
import { Download, FileText, Briefcase, GraduationCap, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  { icon: <Briefcase size={16} />, label: "3+ Internships", sub: "Real-world marketing experience" },
  { icon: <GraduationCap size={16} />, label: "B.Com (Hons)", sub: "Marketing Specialisation" },
  { icon: <Award size={16} />, label: "4 Certifications", sub: "Meta, Google & more" },
  { icon: <FileText size={16} />, label: "Live Campaigns", sub: "Micro-finance & NGO sector" },
];

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <SectionHeading
          eyebrow="My CV"
          title="Resume"
          subtitle="Download my resume or preview key highlights below."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Resume preview card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 overflow-hidden shadow-xl">
              {/* Header strip */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-10 text-white">
                <p className="text-xs font-semibold tracking-widest uppercase opacity-75 mb-1">Curriculum Vitae</p>
                <h3 className="font-display font-bold text-2xl mb-0.5">Prakarnit Srivastava</h3>
                <p className="text-sm opacity-80">Aspiring Digital Marketer & Business Professional</p>
                <p className="text-xs opacity-60 mt-2">Lucknow, Uttar Pradesh, India</p>
              </div>

              {/* Preview body */}
              <div className="px-8 py-6 space-y-4">
                {[
                  { section: "Experience", lines: ["Marketing Executive Intern — Indira Capital Finance", "Campus Ambassador — IIM Lucknow", "Crowdfunding Executive — Muskurahat Foundation"] },
                  { section: "Education", lines: ["B.Com (Hons) Marketing — LPCPS, 2024–2027", "ISC/ICSE — St. Mary's Convent, 2022"] },
                  { section: "Skills", lines: ["Meta Ads · Social Media Marketing · Market Research", "MS Excel · PowerPoint · Canva · AI Tools"] },
                ].map((block) => (
                  <div key={block.section}>
                    <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1.5">{block.section}</p>
                    {block.lines.map((line) => (
                      <p key={line} className="text-xs text-gray-600 dark:text-gray-400 py-0.5 border-b border-gray-100 dark:border-gray-700/50">{line}</p>
                    ))}
                  </div>
                ))}

                {/* Blur overlay for "preview" feel */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-800 to-transparent pointer-events-none rounded-b-2xl" />
              </div>
            </div>

            {/* Decorative shadow */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-indigo-500/10 -z-10" />
          </motion.div>

          {/* Info + download */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="p-4 rounded-xl bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 text-indigo-500 mb-2">
                    {item.icon}
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.label}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              My resume covers all internships, skills, certifications, and academic achievements. 
              Updated for 2026, ready to share with recruiters and companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/Prakarnit_Srivastava_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
              >
                <Download size={16} />
                Download Resume (PDF)
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-indigo-500 hover:text-indigo-500 font-semibold text-sm transition-all duration-200"
              >
                Request Full CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
