"use client";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Linkedin, Instagram, ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-16 overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Profile avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[3px]">
          <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
            <span className="font-display font-bold text-4xl text-indigo-600 dark:text-indigo-400">PS</span>
          </div>
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-950" />
        </div>
      </motion.div>

      {/* Location badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-4 bg-gray-100 dark:bg-gray-800/60 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700"
      >
        <MapPin size={12} className="text-indigo-500" />
        <span>{siteConfig.location}</span>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-3 leading-tight"
      >
        {siteConfig.name.split(" ")[0]}{" "}
        <span className="gradient-text">{siteConfig.name.split(" ")[1]}</span>
      </motion.h1>

      {/* Headline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="font-display font-semibold text-lg sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl"
      >
        {siteConfig.title}
      </motion.p>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-gray-500 dark:text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed mb-8"
      >
        B.Com (Hons) student passionate about Digital Marketing, Meta Ads, Business & Entrepreneurship.
        Building brands, driving growth, and creating impact — one campaign at a time.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        <a
          href="/Prakarnit_Srivastava_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105"
        >
          <Download size={16} />
          Download Resume
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 font-semibold text-sm transition-all duration-200 hover:scale-105"
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
            className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-all duration-200"
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
        className="flex flex-col items-center gap-1 text-xs text-gray-400 hover:text-indigo-500 transition-colors"
      >
        <span>Scroll down</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  );
}
