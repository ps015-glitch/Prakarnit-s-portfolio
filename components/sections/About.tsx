"use client";
import { motion } from "framer-motion";
import { GraduationCap, Target, Zap, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const strengths = [
  { icon: <Zap size={20} />, title: "Energetic Communicator", desc: "Clear, confident, and impactful in every interaction." },
  { icon: <Target size={20} />, title: "Strategic Thinker", desc: "Data-driven decisions rooted in real market insight." },
  { icon: <TrendingUp size={20} />, title: "Growth-Minded", desc: "Always learning, always pushing the boundary." },
  { icon: <GraduationCap size={20} />, title: "Academic Foundation", desc: "Strong B.Com (Hons) base in Finance and Marketing." },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <SectionHeading
          eyebrow="Who I Am"
          title="About Me"
          subtitle="A driven B.Com student turning classroom theory into real-world marketing wins."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Hey, I&apos;m <strong className="text-gray-900 dark:text-white">Prakarnit Srivastava</strong> — a B.Com (Hons)
              Marketing student at Lucknow Public College of Professional Studies, graduating in 2027. I don&apos;t just
              study marketing — I live it.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              From raising ₹7,000+ through NGO crowdfunding campaigns to representing IIM Lucknow as a Campus
              Ambassador, and now executing live marketing campaigns at a micro-finance institution — I&apos;ve been
              building real experience while still in college.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My career interests span <strong className="text-indigo-500">Digital Marketing, Meta Ads, Business
              Development, Finance, Sales,</strong> and <strong className="text-indigo-500">Entrepreneurship</strong>. I
              believe great marketing is part science, part storytelling — and I&apos;m here to master both.
            </p>

            {/* Education card */}
            <div className="mt-6 p-5 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap size={20} />
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">Education</p>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">B.Com (Hons) — Marketing</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Lucknow Public College of Professional Studies · 2024–2027</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">ISC / ICSE</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">St. Mary&apos;s Convent Inter College · Completed 2022</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Strengths grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="p-5 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 w-fit mb-3 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{s.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="sm:col-span-2 grid grid-cols-3 gap-3"
            >
              {[
                { num: "3+", label: "Internships" },
                { num: "₹7K+", label: "Funds Raised" },
                { num: "2027", label: "Graduation" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-100 dark:border-indigo-900/50"
                >
                  <p className="font-display font-bold text-2xl text-indigo-600 dark:text-indigo-400">{stat.num}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
