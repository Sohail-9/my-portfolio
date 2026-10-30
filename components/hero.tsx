"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  LuGithub, 
  LuLinkedin, 
  LuMail, 
  LuFileText,
  LuPhone
} from "react-icons/lu";
import { links } from "@/lib/links";
import { hero } from "@/lib/content";

const socials = [
  { label: "Email",       href: `mailto:${links.email}`,     icon: LuMail },
  { label: "Phone",       href: `tel:${links.phone}`,        icon: LuPhone },
  { label: "GitHub",      href: links.github,                icon: LuGithub },
  { label: "LinkedIn",    href: links.linkedin,              icon: LuLinkedin },
  { label: "CV / Resume", href: links.cvUrl,                 icon: LuFileText },
];

const highlights = [
  { value: "4,000+ Beta",     label: "PrettiFlow Platform" },
  { value: "15m → 8m",        label: "Build Optimization" },
  { value: "~100ms Cold Start", label: "Pre-warmed Sandbox" },
  { value: "MCP & Multi-Agent", label: "OctaClaw Engine" },
];

export function Hero() {
  return (
    <section className="relative min-h-[82vh] w-full overflow-hidden bg-white pt-28 pb-20 sm:pt-36 sm:pb-28 flex items-center justify-center">
      {/* Subtle studio gradient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px]"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(243, 243, 245, 0.9) 0%, rgba(255, 255, 255, 0) 70%)"
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 text-center">
        
        {/* Avatar Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[2px] bg-gradient-to-tr from-slate-200 via-slate-300 to-slate-400 shadow-md shadow-slate-200"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
            <Image
              src="/profile.png"
              alt="Sohail Shaik"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Refined Live Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="press inline-flex items-center gap-2.5 rounded-full border border-[#e6e6e9] bg-[#f3f3f5] px-4 py-1.5 backdrop-blur-md mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-medium text-[#0b0b0c] tracking-tight flex items-center gap-1.5">
            Founding Engineer at PrettiFlow · 4,000+ Beta Users
          </span>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.055em] text-[#0b0b0c]">
            Sohail Shaik
          </h1>
          <p className="text-base sm:text-xl text-[#6e6e73] font-light">
            Full-Stack AI Engineer <span className="text-[#e6e6e9] font-normal">·</span> <span className="font-serif italic text-[#0b0b0c]">React/Next.js, Node.js, Python &amp; LLM Orchestration</span>
          </p>
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[#6e6e73] leading-relaxed font-light text-pretty"
        >
          Full-stack AI engineer with <span className="text-[#0b0b0c] font-medium">3+ years</span> building production systems across <span className="text-[#0b0b0c] font-medium">React/Next.js, Node.js, Python, and PostgreSQL</span>, with a focus on <span className="text-[#0b0b0c] font-medium">LLM orchestration and RAG pipelines</span>. As a founding engineer, built an AI platform from scratch (sandboxed code execution &amp; deployment infrastructure) that scaled to 4,000+ beta users and 500+ daily active users.
        </motion.p>

        {/* Social / Contact Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              title={s.label}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
              className="press flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e6e6e9] bg-[#f8f8fa] text-[#0b0b0c] text-lg transition-all hover:bg-[#0b0b0c] hover:text-white hover:border-[#0b0b0c] shadow-sm"
            >
              <s.icon />
            </a>
          ))}
        </motion.div>

        {/* Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-[#e6e6e9] grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <p className="text-xl sm:text-2xl font-bold font-mono text-[#0b0b0c]">
                {h.value}
              </p>
              <p className="text-xs text-[#6e6e73] mt-0.5">
                {h.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
