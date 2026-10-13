"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  LuGithub, 
  LuLinkedin, 
  LuMail, 
  LuFileText 
} from "react-icons/lu";
import { links } from "@/lib/links";
import { hero } from "@/lib/content";

const socials = [
  { label: "Email",       href: `mailto:${links.email}`,     icon: LuMail },
  { label: "GitHub",      href: links.github,                icon: LuGithub },
  { label: "LinkedIn",    href: links.linkedin,              icon: LuLinkedin },
  { label: "CV / Resume", href: links.cvUrl,                 icon: LuFileText },
];

const highlights = [
  { value: "Zero-Loss",   label: "Idempotent ETL" },
  { value: "SCD Type 1/2", label: "Immutable Audit History" },
  { value: "p99 < 100ms", label: "Real-time Telemetry" },
  { value: "3+ Yrs",      label: "Production Systems" },
];

export function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 pt-28 pb-20 sm:pt-36 sm:pb-28 flex items-center justify-center">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="aurora-blob aurora-1 opacity-25" />
        <div className="aurora-blob aurora-2 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 text-center">
        
        {/* Avatar Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[2.5px] bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 shadow-[0_0_35px_rgba(56,189,248,0.25)]"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
            <Image
              src="/profile.png"
              alt="Sohail Shaik"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Live Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 backdrop-blur-md mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs font-semibold text-sky-300 tracking-wide">
            Founding Data & AI Engineer
          </span>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Sohail Shaik
          </h1>
          <p className="text-base sm:text-lg uppercase tracking-[0.25em] text-sky-400 font-bold">
            {hero.role}
          </p>
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-light"
        >
          I design <span className="text-white font-medium">high-throughput data pipelines</span> and dimensional warehouses that don&apos;t fall over at 3 AM. Specializing in <span className="text-sky-300 font-medium">deep SQL, idempotent Airflow DAGs, Spark</span>, Star Schema (SCD Type 1/2), and <span className="text-violet-300 font-medium">low-latency pgvector RAG systems</span>.
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
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 text-xl transition-all hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:scale-105"
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
          className="mt-14 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <p className="text-xl sm:text-2xl font-black font-mono text-white">
                {h.value}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {h.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
