"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const row1 = [
  "Java", "Spring Boot", "Node.js", "Python", "Express.js",
  "REST APIs", "Microservices", "LDAP", "NTLM", "SSO", "Active Directory",
];
const row2 = [
  "React.js", "Next.js", "TypeScript", "Docker", "AWS EC2", "AWS S3",
  "PostgreSQL", "MongoDB", "MySQL", "GitHub Actions", "Jenkins", "CI/CD",
];
const row3 = [
  "RAG Pipelines", "LLM Integration", "OWASP", "GDPR", "HIPAA", "DPDP",
  "Playwright", "System Design", "Agile", "Code Review", "Framer Motion",
];

const categories = [
  { label: "Backend", skills: ["Java", "Spring Boot", "Node.js", "Python", "REST APIs", "Microservices"], color: "bg-blue-500/10 border-blue-500/20 text-blue-300" },
  { label: "Auth & Security", skills: ["LDAP", "NTLM", "SSO", "Active Directory", "OWASP", "GDPR", "HIPAA", "DPDP"], color: "bg-red-500/10 border-red-500/20 text-red-300" },
  { label: "AI & Tools", skills: ["RAG Pipelines", "LLM Integration", "Vector DB", "AI Code Review"], color: "bg-violet-500/10 border-violet-500/20 text-violet-300" },
  { label: "Frontend", skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"], color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300" },
  { label: "Cloud & DevOps", skills: ["Docker", "AWS", "GitHub Actions", "Jenkins", "CI/CD"], color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300" },
  { label: "Databases", skills: ["PostgreSQL", "MongoDB", "MySQL"], color: "bg-amber-500/10 border-amber-500/20 text-amber-300" },
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <motion.div
        className="flex gap-3 py-1.5 flex-shrink-0"
        animate={{ x: reverse ? ["0%", "50%"] : ["-50%", "0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-4 py-2 rounded-full border border-white/[0.07] bg-white/[0.03] text-slate-400 text-sm font-mono flex-shrink-0 hover:text-white hover:border-white/15 transition-colors duration-200"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Skills() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-14">
            <span className="text-[#ffd166] text-xs font-mono uppercase tracking-[0.2em]">Stack</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
              Technical
              <br />
              <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
                Arsenal
              </span>
            </h2>
          </div>
        </FadeIn>
      </div>

      {/* Marquee rows — full width */}
      <div className="space-y-3 mb-16">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
        <MarqueeRow items={row3} />
      </div>

      {/* Category grid */}
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn delay={0.1}>
          <p className="text-slate-500 text-sm mb-8 font-mono">// grouped by domain</p>
        </FadeIn>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(({ label, skills, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <span className={`text-xs font-mono font-bold px-2 py-1 rounded-md border ${color} mb-4 inline-block`}>
                {label}
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coding profiles inline */}
        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02]">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-slate-400 text-xs font-mono">GeeksForGeeks</span>
              <span className="text-green-400 text-xs font-bold">400+</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02]">
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              <span className="text-slate-400 text-xs font-mono">LeetCode</span>
              <span className="text-orange-400 text-xs font-bold">200+</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02]">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-slate-400 text-xs font-mono">HackerRank</span>
              <span className="text-blue-400 text-xs font-bold">Certified</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
