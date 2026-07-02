"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        "fixed top-3 left-0 right-0 z-40 mx-4 sm:mx-8 transition-all duration-300 rounded-lg " +
        (scrolled
          ? "bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl shadow-lg shadow-slate-900/10 border border-slate-200/80 dark:border-slate-800"
          : "bg-white/70 dark:bg-slate-950/45 backdrop-blur-md border border-white/70 dark:border-white/10")
      }
    >
      <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
        <a href="#" className="font-display font-bold text-xl text-slate-950 dark:text-white">
          P<span className="text-cyan-600">.</span>
        </a>
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-slate-950 hover:bg-cyan-700 text-white text-sm font-semibold transition-colors shadow-sm"
          >
            Hire Me
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-3 border-t border-slate-200/70 dark:border-slate-800 mt-1 pt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-700 py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
