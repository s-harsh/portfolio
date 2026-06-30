"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { icon: "🚀", value: "20+", label: "Production releases", description: "Shipped across enterprise authentication and compliance platforms across 2 performance cycles." },
  { icon: "🐛", value: "131+", label: "Issues resolved", description: "Closed across Drupal and Joomla platforms, plus 10 on-demand enterprise customer releases." },
  { icon: "⚡", value: "30%", label: "Auth performance boost", description: "Via LDAP optimization, MVC refactoring, and high-performance API layer redesign." },
  { icon: "🛡️", value: "90%", label: "Vulnerabilities eliminated", description: "Legacy auth vulnerabilities removed through NTLM integration and security hardening." },
  { icon: "🤖", value: "Live", label: "AI in production", description: "RAG-based PR reviewer runs on every authentication module PR at miniOrange." },
  { icon: "🔍", value: "40%", label: "Security review saved", description: "SecureScan reduced manual security review effort by 40% with AI-driven OWASP detection." },
];

const certifications = [
  { title: "Problem Solving", issuer: "HackerRank", color: "text-emerald-400" },
  { title: "Networking Essentials", issuer: "Cisco / NPTEL", color: "text-blue-400" },
  { title: "Managing High Potentials", issuer: "INSEAD", color: "text-violet-400" },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Achievements() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-[#ffd166] text-xs font-mono uppercase tracking-[0.2em]">Achievements</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-14 tracking-tight">
            Numbers
            <br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
              that shipped.
            </span>
          </h2>
        </FadeIn>

        {/* Highlights bento grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {highlights.map(({ icon, value, label, description }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div className="text-2xl mb-4 select-none">{icon}</div>
              <div className="text-3xl font-black text-white mb-1 tracking-tight">{value}</div>
              <div className="text-sm font-semibold text-slate-300 mb-2">{label}</div>
              <p className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-500 transition-colors">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-3">
            <span className="text-slate-600 text-xs font-mono self-center mr-2">// certified</span>
            {certifications.map(({ title, issuer, color }) => (
              <div
                key={title}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02]"
              >
                <span className={`text-xs font-bold ${color}`}>{title}</span>
                <span className="text-slate-700 text-xs">· {issuer}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
