"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-gray-900/50">
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
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Accent bar */}
              <div className={"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r " + cert.color} />

              <div className={"w-14 h-14 rounded-2xl bg-gradient-to-br " + cert.color + " flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300"}>
                {cert.badge}
              </div>

              <h3 className="font-display font-bold text-gray-900 dark:text-white text-sm leading-snug mb-1">
                {cert.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{cert.issuer}</p>

              <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
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
