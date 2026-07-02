"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding soft-section">
      <div className="container-max">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Verified skills from recognised platforms and institutions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
              className="professional-card group relative p-6 overflow-hidden"
            >
              {/* Accent bar */}
              <div className={"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r " + cert.color} />

              <div className={"w-14 h-14 rounded-lg bg-gradient-to-br " + cert.color + " flex items-center justify-center text-2xl mb-4 group-hover:-translate-y-0.5 transition-transform duration-300"}>
                {cert.badge}
              </div>

              <h3 className="font-display font-bold text-slate-950 dark:text-white text-sm leading-snug mb-1">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{cert.issuer}</p>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                <Award size={12} />
                <span>Issued {cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
