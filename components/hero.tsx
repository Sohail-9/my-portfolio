"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  LuFileText,
  LuMail,
  LuArrowUpRight,
  LuZap,
  LuServer,
  LuClock,
  LuLayers,
  LuCopy,
  LuCheck,
  LuSparkles,
} from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { links } from "@/lib/links";
import { TiltCard } from "./tilt-card";
import { CommandMenuTrigger } from "./command-menu";

const highlights = [
  {
    icon: LuZap,
    value: "4,000+ Beta",
    label: "PrettiFlow Platform",
    desc: "Natural-language app generation into live containers",
    glow: "rgba(56, 189, 248, 0.25)",
    accent: "text-sky-600",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    icon: LuClock,
    value: "15m → 8m",
    label: "Build Optimization",
    desc: "Redesigned pipeline from prompt to live deployment",
    glow: "rgba(168, 85, 247, 0.25)",
    accent: "text-purple-600",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: LuServer,
    value: "~100ms Cold Start",
    label: "Pre-warmed Sandbox",
    desc: "Real-time streaming via Redis Pub/Sub & WebSockets",
    glow: "rgba(16, 185, 129, 0.25)",
    accent: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: LuLayers,
    value: "MCP & Multi-Agent",
    label: "OctaClaw Engine",
    desc: "Autonomous DAG task decomposition & agent tools",
    glow: "rgba(244, 63, 94, 0.25)",
    accent: "text-rose-600",
    gradient: "from-rose-500 to-pink-600",
  },
];

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden text-slate-900 pt-32 pb-16 sm:pt-40 sm:pb-24 flex items-center justify-center">
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 text-center">
        
        {/* Avatar Portrait with 3D Holographic Glare Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-sky-400 via-indigo-500 to-fuchsia-500 shadow-[0_10px_35px_rgba(56,189,248,0.35)]"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-white relative border-2 border-white shadow-inner">
            <Image
              src="/profile.png"
              alt="Sohail Shaik"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Live Status Pill & Command Menu Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-6"
        >
          <div className="glass-pill inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="text-xs font-mono font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
              Founding Engineer at PrettiFlow · 4,000+ Beta Users · 500+ DAU
            </span>
          </div>

          <CommandMenuTrigger />
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
            Sohail Shaik
          </h1>
          <p className="text-lg sm:text-2xl text-slate-700 font-normal max-w-3xl mx-auto">
            Full-Stack AI Engineer <span className="text-slate-300">·</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-700 font-semibold">
              React/Next.js, Node.js, Python &amp; LLM Orchestration
            </span>
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-pretty"
        >
          Full-stack AI engineer with <span className="text-slate-900 font-bold">3+ years</span> building production systems across{" "}
          <span className="text-slate-900 font-bold">React/Next.js, Node.js, Python, and PostgreSQL</span>, with a focus on{" "}
          <span className="text-slate-900 font-bold">LLM orchestration and RAG pipelines</span>. As a founding engineer, built an AI platform from scratch that grew to 4,000+ beta users and 500+ daily active users.
        </motion.p>

        {/* Action Buttons: Claymorphism, Copy Email & Light Glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
        >
          {/* Primary Mail CTA with Copy Option */}
          <div className="inline-flex items-center rounded-full shadow-xl">
            <a
              href="#contact"
              className="clay-btn inline-flex items-center gap-2 rounded-l-full px-6 py-3.5 text-sm font-bold border-r border-slate-700"
            >
              <LuMail className="text-base text-sky-400" />
              <span>Get in Touch</span>
            </a>
            <button
              onClick={copyEmail}
              type="button"
              className="clay-btn inline-flex items-center gap-1.5 rounded-r-full px-4 py-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <LuCheck className="text-emerald-400 text-sm" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <LuCopy className="text-xs" />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>
          </div>

          <a
            href={links.cvUrl}
            download={links.cvDownloadName}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow-md"
          >
            <LuFileText className="text-base text-sky-600" />
            <span>Download Resume</span>
            <LuArrowUpRight className="text-xs text-slate-500" />
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold shadow-sm"
            title="GitHub Profile"
          >
            <FaGithub className="text-base text-slate-800" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold shadow-sm"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="text-base text-blue-600" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </motion.div>

        {/* 4 Metric Highlight Cards with 3D Tilt & Specular Glare */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <TiltCard key={h.label} glowColor={h.glow} className="rounded-3xl">
                <div className="glass-card group p-5 rounded-3xl text-left relative overflow-hidden h-full shadow-sm">
                  {/* Specular hairline top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${h.gradient}`} />

                  {/* Accent glow corner */}
                  <div
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
                    style={{ background: h.glow }}
                  />

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                      {h.value}
                    </span>
                    <div className={`p-2 rounded-xl glass-recessed ${h.accent} text-sm border border-slate-200/80`}>
                      <Icon />
                    </div>
                  </div>

                  <p className="text-xs font-bold text-slate-900 tracking-wide">
                    {h.label}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1 font-normal leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
