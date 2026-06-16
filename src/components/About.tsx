"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const values = [
  {
    symbol: "01",
    title: "Protocol-Level Depth",
    description: "I debug NTLM handshakes, LDAP failover scenarios, and AD replication lag in production — not just conceptually. Real enterprise edge cases are my daily.",
  },
  {
    symbol: "02",
    title: "End-to-End Ownership",
    description: "From designing the feature to coordinating rollouts and monitoring reliability, I own outcomes — not just tickets. I ship things that stay shipped.",
  },
  {
    symbol: "03",
    title: "AI-Augmented Workflow",
    description: "I built a RAG-based PR reviewer that runs in production. AI isn't a buzzword on my resume — it's running on every authentication module PR.",
  },
  {
    symbol: "04",
    title: "Systems Thinking",
    description: "Multi-AD support was a first-of-its-kind architectural problem. I designed it from scratch, unblocking enterprise clients no prior solution could handle.",
  },
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

export default function About() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 relative">
      {/* Subtle horizontal rule */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — story */}
          <div>
            <FadeIn>
              <span className="text-[#ffd166] text-xs font-mono uppercase tracking-[0.2em]">About</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-8 tracking-tight leading-tight">
                Engineering
                <br />
                <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
                  with depth.
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-slate-300 text-base leading-relaxed mb-5">
                I&apos;m a Backend Software Engineer at{" "}
                <a
                  href="https://miniorange.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all inline-flex items-center gap-0.5"
                >
                  miniOrange<ArrowUpRight className="w-3 h-3" />
                </a>
                {" "}building identity infrastructure that enterprises depend on.
                My work sits at the intersection of backend engineering, security protocols, and distributed systems.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-slate-500 leading-relaxed mb-5">
                My most significant contribution is designing{" "}
                <span className="text-slate-300 font-medium">Multi-Active Directory support</span> —
                a first-of-its-kind feature that enables enterprises to manage identities across multiple
                AD instances simultaneously. This unblocked large enterprise onboarding cases that were
                previously impossible.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-slate-500 leading-relaxed mb-8">
                Beyond production code, I built an{" "}
                <span className="text-slate-300 font-medium">AI-powered PR review pipeline</span> using
                RAG architecture — a live system that runs on every authentication module PR at miniOrange,
                catching security risks and protocol violations before human review begins.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "LDAP/NTLM", "Node.js", "Python", "Docker", "AWS", "RAG"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full border border-white/[0.07] text-slate-500 font-mono hover:text-slate-300 hover:border-white/15 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 pt-8 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-400 text-sm font-medium">Currently open to</span>
                </div>
                <p className="text-slate-600 text-sm pl-4">
                  SDE-2 roles in distributed systems, large-scale API design, or identity/security infrastructure.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right — values grid */}
          <div ref={gridRef} className="space-y-px">
            {values.map(({ symbol, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="group p-6 rounded-xl hover:bg-white/[0.03] transition-all duration-300 border border-transparent hover:border-white/[0.06]"
              >
                <div className="flex items-start gap-5">
                  <span
                    className="text-2xl font-black flex-shrink-0 mt-0.5 select-none"
                    style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,209,102,0.25)" }}
                  >
                    {symbol}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1.5 group-hover:text-white transition-colors">
                      {title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
