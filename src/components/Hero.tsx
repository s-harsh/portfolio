"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { useEffect, useState, useRef, lazy, Suspense } from "react";

const ThreeScene = lazy(() => import("./ThreeScene"));

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.08 } } },
  item: { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } } },
};

const words = ["Authentication", "Scale", "Identity", "Security", "Impact"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
    const t = setInterval(() => setWordIndex((p) => (p + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030308]" ref={scrollRef}>
      {/* Three.js background */}
      {isClient && (
        <Suspense fallback={null}>
          <ThreeScene />
        </Suspense>
      )}

      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Left dark vignette to improve text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030308]/90 via-[#030308]/50 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-[#030308]/30 pointer-events-none z-10" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-[#ffd166]" />
            <span className="text-[#ffd166] text-xs font-mono uppercase tracking-[0.2em]">
              Backend Engineer · Pune, India
            </span>
          </motion.div>

          {/* Name — editorial scale */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            animate="show"
            className="mb-4"
          >
            <motion.h1
              variants={stagger.item}
              className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tight text-white"
            >
              Harsh
            </motion.h1>
            <motion.h1
              variants={stagger.item}
              className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tight"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", color: "transparent" }}
            >
              vardhan
            </motion.h1>
            <motion.h1
              variants={stagger.item}
              className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tight text-[#4f8eff]"
            >
              Soni
            </motion.h1>
          </motion.div>

          {/* Rotating keyword line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-3 mb-8 h-8"
          >
            <span className="text-slate-500 text-base font-light">Building systems for</span>
            <div className="overflow-hidden h-8 flex items-center">
              <motion.span
                key={wordIndex}
                initial={{ y: 32, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -32, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-base font-semibold text-[#ffd166] inline-block"
              >
                {words[wordIndex]}
              </motion.span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="text-slate-400 text-base leading-relaxed max-w-xl mb-10"
          >
            I architect authentication infrastructure enterprises run on —{" "}
            <span className="text-white">LDAP, 2FA, Session Management</span>, and
            {" "}<span className="text-white">privacy compliance platforms</span> that ship to production and stay there. Based in Pune, India.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative px-8 py-3.5 font-semibold text-sm overflow-hidden rounded-full cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#4f8eff] transition-all duration-300 group-hover:bg-[#3a7aff]" />
              <span className="relative text-white">View Work</span>
            </button>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 font-semibold text-sm rounded-full border border-white/15 text-slate-300 hover:border-white/30 hover:text-white transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social + resume */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex items-center gap-5"
          >
            {[
              { href: "https://github.com/s-harsh", icon: GithubIcon, label: "GitHub" },
              { href: "https://linkedin.com/in/harshvardhansonihv", icon: LinkedinIcon, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/25 transition-all duration-200"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
            <div className="w-px h-5 bg-white/10" />
            <a
              href="/resume.pdf"
              download
              aria-label="Download resume PDF"
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-white transition-colors font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Stats — bottom right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="absolute bottom-16 right-6 hidden lg:flex flex-col gap-5"
        >
          {[
            { value: "20+", label: "Prod releases" },
            { value: "30%", label: "Auth speedup" },
            { value: "600+", label: "DSA solved" },
          ].map(({ value, label }) => (
            <div key={label} className="text-right">
              <div className="text-2xl font-black text-white">{value}</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <ArrowDown className="w-4 h-4 text-slate-600" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
