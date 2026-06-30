"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";

const projects = [
  {
    id: "mab-jewels",
    number: "01",
    title: "MAB Jewels",
    subtitle: "Full-Stack E-Commerce Platform",
    tagline: "1,500+ SKUs. Sub-second load. One admin dashboard.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    accent: "#ffd166",
    liveLink: "#",
    githubLink: "https://github.com/s-harsh",
    metrics: [
      { label: "Load reduction", value: "96%" },
      { label: "SKU count", value: "1,500+" },
      { label: "Page load", value: "<1s" },
    ],
    problem: "A jewellery business needed a digital storefront capable of managing a large inventory with fast page loads and a reliable admin workflow — without expensive infrastructure.",
    solution: "Built a full-stack e-commerce platform with MongoDB for flexible inventory modeling. Implemented code-split pagination + infinite scroll to reduce initial payload by 96%, and delivered an admin dashboard with real-time inventory analytics.",
    architecture: "React SPA → Express REST API → MongoDB Atlas\nAdmin: JWT-auth dashboard + aggregation pipeline analytics",
    challenges: [
      "Managing 1,500+ dynamic product pages without performance degradation",
      "Implementing efficient pagination + infinite scroll to slash initial payload",
      "Building a responsive admin dashboard with live inventory tracking",
    ],
  },
  {
    id: "securescan",
    number: "02",
    title: "SecureScan",
    subtitle: "AI-Powered Security Scanner",
    tagline: "8+ OWASP types. 40% less review effort. AI-driven fixes.",
    tech: ["Next.js", "Express.js", "TypeScript", "Tailwind", "LLM"],
    accent: "#4f8eff",
    liveLink: "https://ai-security-scanner1.vercel.app/",
    githubLink: "https://github.com/s-harsh",
    metrics: [
      { label: "OWASP types detected", value: "8+" },
      { label: "Review effort saved", value: "40%" },
      { label: "Fix adoption rate", value: "+30%" },
    ],
    problem: "Developers pushing plugins lack security expertise to catch OWASP vulnerabilities before merge — SQL injection, XSS, command injection slip through without detection.",
    solution: "Static AST analysis + LLM remediation pipeline: scans repo code, maps against OWASP patterns, generates actionable code-specific fix suggestions rather than generic guidance.",
    architecture: "Next.js frontend → Express scanner API\nAST analysis + LLM remediation → structured PDF report",
    challenges: [
      "Detecting context-dependent vulnerabilities like XSS in mixed codebases",
      "Making AI suggestions code-specific enough to be actionable (not generic advice)",
      "Keeping scan latency low enough for CI gate use",
    ],
  },
  {
    id: "ai-pr-review",
    number: "03",
    title: "AI PR Pipeline",
    subtitle: "RAG-Based Code Quality Gate",
    tagline: "Every auth PR reviewed by AI before human eyes see it.",
    tech: ["Python", "RAG", "LLM", "Vector DB", "Git"],
    accent: "#b490ff",
    liveLink: null,
    githubLink: "https://github.com/s-harsh",
    metrics: [
      { label: "Coverage", value: "100% PRs" },
      { label: "Risk detection", value: "Pre-merge" },
      { label: "Architecture", value: "RAG" },
    ],
    problem: "Authentication module PRs at miniOrange carry high risk — a subtle LDAP injection or NTLM protocol deviation could compromise enterprise clients. Manual code review at scale wasn't sustainable.",
    solution: "RAG pipeline: ingests Git diffs, retrieves relevant codebase context via vector similarity, sends to LLM for protocol-aware security analysis. Runs on every PR as a first-pass reviewer.",
    architecture: "Git diff → chunk + embed → vector DB retrieval\n→ LLM analysis → structured report → PR comment",
    challenges: [
      "Feeding the right codebase context without overwhelming the LLM context window",
      "Reducing false positives that would erode developer trust",
      "Non-intrusive integration into existing PR workflow",
    ],
  },
  {
    id: "url-shortener",
    number: "04",
    title: "URL Shortener",
    subtitle: "Production-Grade Link Shortener",
    tagline: "Sub-5ms redirects. 3.5T codes. Three.js 3D homepage.",
    tech: ["Spring Boot 3", "Java 21", "Redis", "PostgreSQL", "Three.js", "Docker"],
    accent: "#38bdf8",
    liveLink: null,
    githubLink: "https://github.com/s-harsh/url-shortener",
    metrics: [
      { label: "Redirect latency", value: "<5ms" },
      { label: "Unique codes", value: "3.5T" },
      { label: "Cache strategy", value: "L1 Redis" },
    ],
    problem: "Building a URL shortener sounds simple — until you need sub-millisecond redirects at scale without hitting the database on every request, while tracking click analytics without adding any latency to the user.",
    solution: "Constructed high-throughput REST APIs with Redis-backed caching for sub-millisecond redirect performance. Enforced JWT-based authentication, rate limiting, and abuse-prevention middleware. Instrumented an analytics pipeline tracking clicks, referrer data, and geographic distribution via a real-time dashboard.",
    architecture: "POST /shorten → validation → custom slug / Base62 → MongoDB + Redis\nGET /{code}  → Redis HIT  → 302 redirect  (<5ms)\n             → Redis MISS → MongoDB → cache → redirect\nAnalytics    → async pipeline → click_events → dashboard",
    challenges: [
      "Ensuring Redis outages never break redirects — graceful degradation to MongoDB",
      "Async analytics that add zero latency to the hot redirect path",
      "JWT auth + rate limiting protecting endpoints under concurrent load",
    ],
  },
];

function TiltCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setTilt({ x: x * 6, y: y * -6 });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: tilt.x === 0 ? "transform 0.6s ease" : "transform 0.1s ease",
        }}
        className="rounded-2xl border border-white/[0.08] bg-[#0c0c14] overflow-hidden group"
      >
        {/* Top bar */}
        <div
          className="h-px w-full"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}50, transparent)` }}
        />

        <div className="p-6 sm:p-8">
          {/* Number + links */}
          <div className="flex items-start justify-between mb-6">
            <span
              className="text-5xl font-black leading-none select-none"
              style={{ color: `${project.accent}15`, WebkitTextStroke: `1px ${project.accent}25` }}
            >
              {project.number}
            </span>
            <div className="flex items-center gap-2 mt-1">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-white font-black text-2xl mb-1 tracking-tight">{project.title}</h3>
          <p className="text-slate-500 text-sm mb-4">{project.subtitle}</p>

          {/* Tagline */}
          <p
            className="text-sm font-medium mb-6 pb-6 border-b border-white/[0.06]"
            style={{ color: project.accent }}
          >
            {project.tagline}
          </p>

          {/* Metrics */}
          <div className="flex gap-4 mb-6">
            {project.metrics.map(({ label, value }) => (
              <div key={label}>
                <div className="text-white font-black text-lg leading-tight">{value}</div>
                <div className="text-slate-600 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs rounded-lg font-mono border border-white/[0.07] text-slate-500"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Problem (always visible) */}
          <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>

          {/* Expanded */}
          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="pt-5 space-y-5 border-t border-white/[0.06] mt-5">
              <div>
                <h4 className="text-white font-semibold text-sm mb-2">Solution</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-2">Architecture</h4>
                <pre className="text-xs text-blue-300/80 bg-blue-950/20 rounded-lg p-3 border border-blue-500/10 font-mono whitespace-pre-wrap leading-relaxed">
                  {project.architecture}
                </pre>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-2">Key Challenges</h4>
                <ul className="space-y-1.5">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                      <ArrowUpRight
                        className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                        style={{ color: project.accent }}
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-5 flex items-center gap-1.5 text-xs font-mono text-slate-600 hover:text-slate-300 transition-colors cursor-pointer"
          >
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            {expanded ? "collapse" : "// architecture + challenges"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <span className="text-[#ffd166] text-xs font-mono uppercase tracking-[0.2em]">Projects</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Selected
            <br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
              Work
            </span>
          </h2>
          <p className="text-slate-500 text-sm mt-4 max-w-md">
            Hover cards to see 3D depth. Click &ldquo;// architecture&rdquo; to go deeper into the implementation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <TiltCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <a
            href="https://github.com/s-harsh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white text-sm font-mono transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            github.com/s-harsh
            <ExternalLink className="w-3 h-3 opacity-50" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
