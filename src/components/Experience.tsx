"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";

const jobs = [
  {
    company: "miniOrange",
    role: "Software Engineer",
    stack: "Java · PHP · Spring Boot",
    period: "Jul 2024 — Present",
    location: "Pune, Maharashtra",
    current: true,
    url: "https://miniorange.com",
    highlights: [
      { metric: "20+ releases", text: "Took end-to-end ownership of an enterprise authentication platform — LDAP, 2FA, Session Management, and Privacy Compliance — shipping 20+ production releases and closing 131+ issues across 2 performance cycles." },
      { metric: "Architected", text: "Launched Privacy Compliance Suite from scratch (GDPR, DPDP Act 2023, HIPAA, CCPA) with consent management, user rights workflows, audit logging, breach notification, and data mapping." },
      { metric: "30% faster", text: "Diagnosed and resolved critical production issues end-to-end including NTLM Windows Authentication integration via LDAP — eliminating 90% of legacy auth vulnerabilities and boosting authentication performance by 30%." },
      { metric: "CI quality", text: "Introduced Playwright JS E2E automation framework and CI quality gates, establishing consistent automated checks across all production releases and improving release reliability." },
      { metric: "Production AI", text: "Built RAG-based PR review pipeline and AI-assisted release workflows that run on every authentication module PR, catching security risks before human review." },
    ],
    tech: ["Java", "PHP", "JavaScript", "LDAP", "NTLM", "OAuth 2.0", "SAML", "2FA", "Spring Boot", "Docker", "Playwright", "CI/CD", "RAG"],
  },
  {
    company: "Celebal Technology",
    role: "Web Development Intern",
    stack: "React · Node.js · Express",
    period: "Jun 2023 — Jul 2023",
    location: "Jaipur (Remote)",
    current: false,
    url: "#",
    highlights: [
      { metric: "25% faster", text: "Optimized React UI components, reducing bundle size and improving application performance." },
      { metric: "+18% engagement", text: "Improved user engagement through component-level state management and UX improvements." },
      { metric: "28% efficiency", text: "Designed RESTful APIs with Node.js/Express serving a 10-member Agile team." },
    ],
    tech: ["React.js", "Node.js", "Express.js", "REST APIs"],
  },
];

const education = {
  institution: "MBM University",
  degree: "BE — Information Technology",
  period: "2020 – 2024",
  location: "Jodhpur, Rajasthan",
  result: "8.47 / 10",
};

type Job = typeof jobs[0];

function JobCard({ job, index, isLast }: { job: Job; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${job.company} website`}
              className="text-white font-black text-xl tracking-tight hover:text-[#4f8eff] transition-colors inline-flex items-center gap-1"
            >
              {job.company}
              <ArrowUpRight className="w-4 h-4 opacity-40" aria-hidden="true" />
            </a>
            {job.current && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span className="sr-only">Current position</span>
                Now
              </span>
            )}
          </div>
          <p className="text-slate-500 text-sm">{job.role} · <span className="font-mono text-xs">{job.stack}</span></p>
        </div>
        <div className="text-right space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <Calendar className="w-3 h-3" />
            {job.period}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <MapPin className="w-3 h-3" />
            {job.location}
          </div>
        </div>
      </div>
      <div className="space-y-3 mb-5">
        {job.highlights.map((h, j) => (
          <div key={j} className="flex gap-4 group">
            <span className="text-xs font-mono font-bold text-[#ffd166] flex-shrink-0 mt-0.5 w-20 text-right">{h.metric}</span>
            <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">{h.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {job.tech.map((t) => (
          <span key={t} className="px-2 py-0.5 text-xs rounded font-mono border border-white/[0.06] text-slate-600">{t}</span>
        ))}
      </div>
      {!isLast && <div className="mt-10 h-px bg-gradient-to-r from-white/[0.06] to-transparent" />}
    </motion.div>
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
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <FadeIn>
          <span className="text-[#ffd166] text-xs font-mono uppercase tracking-[0.2em]">Experience</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-14 tracking-tight">
            Where I&apos;ve
            <br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
              Shipped.
            </span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Jobs */}
          <div className="lg:col-span-2 space-y-10">
            {jobs.map((job, i) => (
              <JobCard key={job.company} job={job} index={i} isLast={i === jobs.length - 1} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Education */}
            <FadeIn delay={0.15}>
              <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <p className="text-[#ffd166] text-xs font-mono uppercase tracking-widest mb-4">Education</p>
                <p className="text-white font-bold">{education.institution}</p>
                <p className="text-slate-500 text-sm mt-1">{education.degree}</p>
                <p className="text-emerald-400 font-bold text-sm mt-2">CGPA {education.result}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                  <Calendar className="w-3 h-3" />
                  {education.period}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 mt-1">
                  <MapPin className="w-3 h-3" />
                  {education.location}
                </div>
              </div>
            </FadeIn>

            {/* Impact numbers */}
            <FadeIn delay={0.2}>
              <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <p className="text-[#ffd166] text-xs font-mono uppercase tracking-widest mb-5">Impact</p>
                <div className="space-y-4">
                  {[
                    { n: "20+", label: "Production releases shipped" },
                    { n: "131+", label: "Issues resolved" },
                    { n: "30%", label: "Auth performance boost" },
                    { n: "90%", label: "Vulnerabilities eliminated" },
                  ].map(({ n, label }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs">{label}</span>
                      <span className="text-white font-black text-base">{n}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Coding */}
            <FadeIn delay={0.25}>
              <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <p className="text-[#ffd166] text-xs font-mono uppercase tracking-widest mb-5">DSA</p>
                <div className="space-y-3">
                  {[
                    { platform: "GeeksForGeeks", count: "400+", color: "text-green-400" },
                    { platform: "LeetCode", count: "200+", color: "text-orange-400" },
                  ].map(({ platform, count, color }) => (
                    <div key={platform} className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs font-mono">{platform}</span>
                      <span className={`font-black text-sm ${color}`}>{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
