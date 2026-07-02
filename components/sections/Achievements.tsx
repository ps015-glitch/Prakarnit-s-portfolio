"use client";
import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-max">
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements"
          subtitle="Key moments and milestones that have shaped my professional journey."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-30 -translate-x-px" />

          <div className="space-y-10">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={
                  "relative flex items-start gap-6 sm:gap-0 " +
                  (i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse")
                }
              >
                {/* Card */}
                <div className={"pl-14 sm:pl-0 " + (i % 2 === 0 ? "sm:w-1/2 sm:pr-14 sm:text-right" : "sm:w-1/2 sm:pl-14")}>
                  <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-700 transition-all duration-300">
                    <span className="inline-block text-xs font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-1 rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-display font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 border-2 border-white dark:border-gray-950 shadow-md shadow-indigo-500/50 mt-5" />

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
