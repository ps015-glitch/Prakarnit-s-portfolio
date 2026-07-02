import { siteConfig, navLinks } from "@/lib/data";
import { Mail, Phone, MapPin, Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-display font-bold text-2xl text-white mb-3">
              Prakarnit<span className="text-indigo-500">.</span>
            </p>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Aspiring Digital Marketer & Business Professional from Lucknow, India. Let&apos;s build something great together.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Linkedin size={16} />, href: siteConfig.linkedin, label: "LinkedIn" },
                { icon: <Instagram size={16} />, href: siteConfig.instagram, label: "Instagram" },
                { icon: <Github size={16} />, href: siteConfig.github, label: "GitHub" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-xl bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Quick Links</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-indigo-400 shrink-0" />
                <a href={"mailto:" + siteConfig.email} className="hover:text-indigo-400 transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-indigo-400 shrink-0" />
                <a href={"tel:" + siteConfig.phone.replace(/\s/g, "")} className="hover:text-indigo-400 transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Prakarnit Srivastava. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
