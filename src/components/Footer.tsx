"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-white font-black text-sm">HS<span className="text-[#ffd166]">.</span></span>
          <span className="text-slate-700 text-xs">Built with Next.js · Three.js · Framer Motion</span>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/s-harsh", icon: GithubIcon },
            { href: "https://linkedin.com/in/harshvardhansonihv", icon: LinkedinIcon },
            { href: "mailto:harshvardhansonihv@gmail.com", icon: Mail },
          ].map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center text-slate-600 hover:text-white hover:border-white/15 transition-all"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center text-slate-600 hover:text-white hover:border-white/15 transition-all ml-1"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
