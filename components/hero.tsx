"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  LuGithub, 
  LuLinkedin, 
  LuMail, 
  LuArrowUpRight, 
  LuStar, 
  LuZap,
  LuCopy,
  LuCheck,
  LuTrendingUp,
  LuCpu,
  LuFileText,
  LuSparkles
} from "react-icons/lu";
import { links } from "@/lib/links";

const socials = [
  { label: "GitHub",   href: links.github,                icon: LuGithub },
  { label: "LinkedIn", href: links.linkedin,              icon: LuLinkedin },
  { label: "CV / Resume", href: links.cvUrl,              icon: LuFileText },
];

const metrics = [
  { value: "4,000+", label: "Beta Users", sub: "PrettiFlow Platform", icon: LuSparkles },
  { value: "~100ms", label: "Sandbox Latency", sub: "Pre-warmed Workers", icon: LuZap },
  { value: "-40%", label: "Query Latency", sub: "PgBouncer & Indexes", icon: LuTrendingUp },
  { value: "4+ Yrs", label: "Production Exp", sub: "Backend & AI Systems", icon: LuCpu },
];

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 cyber-grid py-16 md:py-24 flex items-center justify-center">
      {/* ── Aurora glow background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="aurora-blob aurora-1" />
        <div className="aurora-blob aurora-2" />
        <div className="aurora-blob aurora-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8">

          {/* ── Left: Main Content ── */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            
            {/* Live Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-bold text-sky-300 tracking-wide">
                Founding Engineer @ PrettiFlow
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                <span className="text-white">Sohail</span>{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #f472b6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Shaik
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg uppercase tracking-[0.25em] text-slate-400 font-bold">
                Backend & AI Systems Engineer
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-300 leading-relaxed font-light"
            >
              Building and scaling production <span className="text-sky-400 font-semibold text-cyber-glow">Python/FastAPI microservices</span>, distributed architectures, pgvector semantic search, and autonomous <span className="text-violet-400 font-semibold">multi-agent AI platforms</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <a
                href={`mailto:${links.email}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 px-6 py-3.5 text-slate-950 font-black text-xs uppercase tracking-wider transition-all hover:opacity-95 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
              >
                <LuMail className="text-base" />
                <span>Get in Touch</span>
                <LuArrowUpRight className="text-sm" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-slate-300 font-bold text-xs uppercase tracking-wider transition-all hover:border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-sm"
              >
                {copied ? (
                  <>
                    <LuCheck className="text-emerald-400 text-sm" />
                    <span className="text-emerald-400">Copied Email</span>
                  </>
                ) : (
                  <>
                    <LuCopy className="text-sky-400 text-sm" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    title={s.label}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 text-lg transition-all hover:text-sky-400 hover:border-sky-500/30 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                  >
                    <s.icon />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Metrics Bento Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4"
            >
              {metrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.label}
                    className="p-3.5 rounded-2xl border border-white/5 glass-neo-recessed flex flex-col items-center lg:items-start text-center lg:text-left group hover:border-sky-500/20 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-sky-400 mb-1">
                      <Icon className="text-xs" />
                      <span className="text-base sm:text-lg font-black font-mono text-white group-hover:text-sky-300 transition-colors">
                        {m.value}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-300 leading-tight">
                      {m.label}
                    </span>
                    <span className="text-[10px] text-slate-500 mt-0.5">
                      {m.sub}
                    </span>
                  </div>
                );
              })}
            </motion.div>

          </div>

          {/* ── Right: Profile Showcase ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center items-center relative flex-shrink-0 mx-auto lg:mx-0 w-full max-w-[340px] sm:max-w-[380px]"
          >
            {/* Spinning Conic Glow Ring */}
            <div
              className="absolute -inset-3 rounded-[3rem] opacity-50 animate-spin-slow pointer-events-none"
              style={{
                background: "conic-gradient(from 0deg, #38bdf8, #818cf8, #f472b6, #34d399, #38bdf8)",
                filter: "blur(16px)",
              }}
            />

            {/* Ambient Halo */}
            <div
              className="absolute -inset-8 rounded-[3.5rem] opacity-30 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(139,92,246,0.2) 50%, transparent 70%)",
                filter: "blur(28px)",
              }}
            />

            {/* Photo Glass Card */}
            <div className="relative rounded-[2.5rem] p-[2px] glass-neo-card w-full">
              <div
                className="absolute inset-0 rounded-[2.5rem] pointer-events-none z-10"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 50%, transparent 70%)",
                }}
              />
              <div className="rounded-[2.35rem] overflow-hidden bg-slate-900/60 aspect-square relative">
                <Image
                  src="/sohail.jpeg"
                  alt="Sohail Shaik"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Role Badge (Bottom Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 sm:-left-6 flex items-center gap-2.5 rounded-2xl border border-white/10 px-4 py-2.5 backdrop-blur-xl z-20"
              style={{
                background: "rgba(2,6,23,0.92)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <LuStar className="text-amber-400 text-sm flex-shrink-0" />
              <div>
                <p className="text-[9px] text-slate-500 leading-none uppercase tracking-wider font-semibold">Current Role</p>
                <p className="text-xs font-black text-white leading-tight mt-0.5">Founding Engineer</p>
              </div>
            </motion.div>

            {/* Floating Tech Stack Pill (Top Right) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-3 -right-3 sm:-right-6 flex items-center gap-2 rounded-2xl border border-sky-500/20 px-3.5 py-2 backdrop-blur-xl z-20"
              style={{
                background: "rgba(2,6,23,0.92)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.6), 0 0 15px rgba(56,189,248,0.2)",
              }}
            >
              <LuSparkles className="text-sky-400 text-xs flex-shrink-0 animate-pulse" />
              <div>
                <p className="text-[9px] text-slate-400 leading-none uppercase tracking-wider font-bold">Stack</p>
                <p className="text-xs font-mono font-bold text-sky-300 leading-tight mt-0.5">FastAPI • pgvector • Redis</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
