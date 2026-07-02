"use client";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Linkedin, Instagram, ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-28 pb-16 overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_36%),linear-gradient(135deg,#ffffff_0%,#f0f9ff_52%,#ecfeff_100%)] dark:bg-[linear-gradient(135deg,#020617_0%,#0f172a_55%,#083344_100%)]"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:72px_72px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />

      {/* Profile avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-6"
      >
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-2xl bg-gradient-to-br from-slate-950 via-blue-800 to-cyan-600 p-[3px] shadow-xl shadow-cyan-900/15">
          <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-950 flex items-center justify-center">
            <span className="font-display font-bold text-4xl text-cyan-700 dark:text-cyan-300">PS</span>
          </div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:ring-emerald-800">Open to internships</span>
        </div>
      </motion.div>

      {/* Location badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 mb-4 bg-white/85 dark:bg-slate-900/70 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <MapPin size={12} className="text-cyan-700 dark:text-cyan-300" />
        <span>{siteConfig.location}</span>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-slate-950 dark:text-white mb-3 leading-tight"
      >
        {siteConfig.name.split(" ")[0]}{" "}
        <span className="gradient-text">{siteConfig.name.split(" ")[1]}</span>
      </motion.h1>

      {/* Headline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="font-display font-semibold text-lg sm:text-2xl text-slate-700 dark:text-slate-200 mb-4 max-w-2xl"
      >
        {siteConfig.title}
      </motion.p>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-slate-600 dark:text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed mb-8"
      >
        B.Com (Hons) student passionate about Digital Marketing, Meta Ads, Business & Entrepreneurship.
        Building brands, driving growth, and creating impact — one campaign at a time.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-center gap-3 mb-10 w-full sm:w-auto"
      >
        <a
          href="/Prakarnit_Srivastava_Resume.pdf"
          download
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-950 hover:bg-cyan-700 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-slate-900/15 hover:-translate-y-0.5"
        >
          <Download size={16} />
          Download Resume
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-300 bg-white/80 text-slate-700 hover:border-cyan-600 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
        >
          <Mail size={16} />
          Contact Me
        </a>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        {[
          { icon: <Linkedin size={18} />, href: siteConfig.linkedin, label: "LinkedIn" },
          { icon: <Instagram size={18} />, href: siteConfig.instagram, label: "Instagram" },
          { icon: <Mail size={18} />, href: "mailto:" + siteConfig.email, label: "Email" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="p-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-slate-900 transition-all duration-200 shadow-sm"
          >
            {s.icon}
          </a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex flex-col items-center gap-1 text-xs text-slate-500 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-300 transition-colors"
      >
        <span>Scroll down</span>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  );
}
