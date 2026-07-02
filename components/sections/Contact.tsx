"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Send, CheckCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email.";
    if (!form.message.trim() || form.message.length < 10) errs.message = "Message must be at least 10 characters.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xzdldbjo", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactItems = [
    { icon: <Mail size={18} />, label: "Email", value: siteConfig.email, href: "mailto:" + siteConfig.email },
    { icon: <Phone size={18} />, label: "Phone", value: siteConfig.phone, href: "tel:" + siteConfig.phone.replace(/\s/g, "") },
    { icon: <MapPin size={18} />, label: "Location", value: siteConfig.location, href: "#" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/prakarnitsrivastava", href: siteConfig.linkedin },
    { icon: <Instagram size={18} />, label: "Instagram", value: "@prakarnit_15", href: siteConfig.instagram },
  ];

  return (
    <section id="contact" className="section-padding soft-section">
      <div className="container-max">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Me"
          subtitle="Open to internships, collaborations, and marketing projects. Let's talk."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              Whether you have an internship opportunity, a collaboration idea, or just want to connect — I&apos;d love to hear from you.
              I typically respond within 24 hours.
            </p>

            {contactItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="professional-card flex items-center gap-4 p-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-cyan-950/50 flex items-center justify-center text-cyan-700 dark:text-cyan-300 shrink-0 group-hover:-translate-y-0.5 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.label}</p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
          >
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center p-10 rounded-lg bg-white dark:bg-slate-900 border border-green-200 dark:border-green-800 text-center gap-4">
                <CheckCircle size={48} className="text-green-500" />
                <h3 className="font-display font-bold text-xl text-slate-950 dark:text-white">Message Sent!</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="text-sm text-cyan-700 dark:text-cyan-300 hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/60 dark:shadow-none">

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Rahul Sharma"
                    className={"w-full px-4 py-3 rounded-lg text-sm border transition-colors bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 " + (errors.name ? "border-red-400" : "border-slate-200 dark:border-slate-700")}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={10} />{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="rahul@example.com"
                    className={"w-full px-4 py-3 rounded-lg text-sm border transition-colors bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 " + (errors.email ? "border-red-400" : "border-slate-200 dark:border-slate-700")}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={10} />{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Hi Prakarnit, I have an internship opportunity..."
                    className={"w-full px-4 py-3 rounded-lg text-sm border transition-colors bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 resize-none " + (errors.message ? "border-red-400" : "border-slate-200 dark:border-slate-700")}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={10} />{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-950 hover:bg-cyan-700 disabled:opacity-60 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-slate-900/15 hover:-translate-y-0.5"
                >
                  {status === "sending" ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                  ) : (
                    <><Send size={16} />Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
