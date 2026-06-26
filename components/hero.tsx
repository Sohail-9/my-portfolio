"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuGithub, LuLinkedin, LuMail, LuArrowUpRight, LuStar } from "react-icons/lu";
import { hero } from "@/lib/content";
import { links } from "@/lib/links";

const socials = [
  { label: "GitHub",   href: links.github,                icon: LuGithub },
  { label: "LinkedIn", href: links.linkedin,              icon: LuLinkedin },
  { label: "Email",    href: `mailto:${links.email}`,     icon: LuMail },
];

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      {/* ── Aurora background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-blob aurora-1" />
        <div className="aurora-blob aurora-2" />
        <div className="aurora-blob aurora-3" />
        <div className="absolute inset-0 bg-grid-white/[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between w-full py-24">

          {/* ── Left: text ── */}
          <div className="flex-1 space-y-8 text-center md:text-left">

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="mb-3 text-base font-medium text-slate-500 tracking-wide">Hello, I&apos;m</p>
              <h1 className="text-6xl font-black tracking-tight leading-[0.92] sm:text-7xl">
                <span className="text-white">Sohail</span>
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 55%, #f472b6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Shaik
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-md mx-auto md:mx-0 text-lg text-slate-400 leading-relaxed"
            >
              Software Engineer crafting{" "}
              <span className="text-accent font-semibold">autonomous AI agents</span>,{" "}
              RAG pipelines, and{" "}
              <span className="text-violet-400 font-semibold">cloud-native infrastructure</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              <a
                href={links.cvUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl px-7 py-3.5 text-sm font-bold text-slate-950 transition-all hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)",
                  boxShadow: "0 0 32px rgba(56,189,248,0.45), 0 4px 20px rgba(0,0,0,0.4)",
                }}
              >
                <span className="relative z-10">{hero.ctaText}</span>
                <LuArrowUpRight className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              </a>

              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    title={s.label}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 text-lg backdrop-blur-sm transition-all hover:border-accent/35 hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                  >
                    <s.icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: photo ── */}
          <motion.div
            className="flex justify-center md:justify-end flex-shrink-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, type: "spring", bounce: 0.25 }}
          >
            <div className="relative">
              {/* Spinning conic ring */}
              <div
                className="absolute -inset-3 rounded-[2.75rem] opacity-55 animate-spin-slow pointer-events-none"
                style={{
                  background: "conic-gradient(from 0deg, #38bdf8, #818cf8, #f472b6, #34d399, #38bdf8)",
                  filter: "blur(14px)",
                }}
              />
              {/* Ambient halo */}
              <div
                className="absolute -inset-8 rounded-[3rem] opacity-35 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(56,189,248,0.38) 0%, rgba(139,92,246,0.22) 50%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />

              {/* Liquid glass frame */}
              <div
                className="relative rounded-[2.5rem] p-[2px]"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05), rgba(139,92,246,0.12))",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.18)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Glass shine */}
                <div
                  className="absolute inset-0 rounded-[2.5rem] pointer-events-none z-10"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 40%, transparent 60%)",
                  }}
                />
                <div className="rounded-[2.35rem] overflow-hidden">
                  <Image
                    src="/sohail.jpeg"
                    alt="Sohail Shaik"
                    width={320}
                    height={320}
                    priority
                    className="h-72 w-72 sm:h-80 sm:w-80 object-cover"
                  />
                </div>
              </div>

              {/* Floating role badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-8 flex items-center gap-2.5 rounded-2xl border border-white/10 px-4 py-2.5 backdrop-blur-xl"
                style={{
                  background: "rgba(2,6,23,0.88)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <LuStar className="text-amber-400 text-sm flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 leading-none uppercase tracking-wider">Current Role</p>
                  <p className="text-xs font-bold text-white leading-tight mt-0.5">Founding Engineer</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
