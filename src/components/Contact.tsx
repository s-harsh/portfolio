"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Download, ExternalLink, Send, MapPin, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send");
      }
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "harshvardhansonihv@gmail.com",
      href: "mailto:harshvardhansonihv@gmail.com",
      color: "text-blue-400",
      bg: "from-blue-500/15 to-blue-600/10 border-blue-500/20",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/harshvardhansonihv",
      href: "https://linkedin.com/in/harshvardhansonihv",
      color: "text-sky-400",
      bg: "from-sky-500/15 to-sky-600/10 border-sky-500/20",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "github.com/s-harsh",
      href: "https://github.com/s-harsh",
      color: "text-slate-300",
      bg: "from-slate-500/15 to-slate-600/10 border-slate-500/20",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/8 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Let&apos;s{" "}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Open to SDE-2 backend roles, interesting technical problems, and conversations about distributed systems or identity infrastructure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">Get in touch</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I&apos;m actively looking for roles where I can take on more architectural ownership in backend systems — specifically distributed systems, large-scale API design, or identity/security infrastructure.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Pune, Maharashtra, India — open to remote / hybrid</span>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactLinks.map(({ icon: Icon, label, value, href, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl glass border bg-gradient-to-r ${bg} hover:scale-[1.01] transition-all duration-200 group`}
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-4 h-4 ${color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-slate-500 text-xs">{label}</p>
                    <p className={`text-sm font-medium truncate ${color}`}>{value}</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 flex-shrink-0 transition-colors" />
                </a>
              ))}
            </div>

            {/* Resume download */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 w-full p-4 rounded-xl gradient-border text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
            >
              <Download className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              Download Resume (PDF)
              <span className="ml-auto text-slate-500 text-xs">PDF · Updated 2025</span>
            </motion.a>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass rounded-2xl border border-white/[0.08] p-6">
              <h3 className="text-white font-semibold mb-5">Send a message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-3 py-12 text-center"
                >
                  <CheckCircle className="w-10 h-10 text-emerald-400" />
                  <p className="text-white font-semibold">Message sent!</p>
                  <p className="text-slate-400 text-sm">I&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5 font-medium uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5 font-medium uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5 font-medium uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="What would you like to discuss?"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={loading ? {} : { scale: 1.02 }}
                    whileTap={loading ? {} : { scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
