"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-lg bg-slate-950 hover:bg-cyan-700 text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  ) : null;
}
