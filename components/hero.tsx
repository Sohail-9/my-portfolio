"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LuGithub, 
  LuLinkedin, 
  LuMail, 
  LuArrowUpRight, 
  LuStar, 
  LuUser, 
  LuWorkflow 
} from "react-icons/lu";
import { hero } from "@/lib/content";
import { links } from "@/lib/links";
import { AgentSandbox } from "./agent-sandbox";

const socials = [
  { label: "GitHub",   href: links.github,                icon: LuGithub },
  { label: "LinkedIn", href: links.linkedin,              icon: LuLinkedin },
  { label: "Email",    href: `mailto:${links.email}`,     icon: LuMail },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState<"profile" | "sandbox">("profile");

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 cyber-grid py-12 md:py-0">
      {/* ── Aurora background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="aurora-blob aurora-1" />
        <div className="aurora-blob aurora-2" />
        <div className="aurora-blob aurora-3" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between w-full py-16 md:py-24">

          {/* ── Left: text ── */}
          <div className="flex-1 space-y-8 text-center lg:text-left">

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-sky-400 font-bold text-cyber-glow">DevOps & Cloud Engineer</p>
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
              className="max-w-md mx-auto lg:mx-0 text-lg text-slate-400 leading-relaxed font-light"
            >
              Architecting production{" "}
              <span className="text-sky-400 font-semibold text-cyber-glow">Kubernetes clusters</span>,{" "}
              automated CI/CD pipelines, and high-availability{" "}
              <span className="text-violet-400 font-semibold">multi-cloud infrastructure</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5"
            >
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    title={s.label}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 glass-neo-button text-slate-400 text-lg transition-all hover:text-sky-400 hover:border-sky-500/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                  >
                    <s.icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: photo / Sandbox dashboard ── */}
          <div className="flex flex-col justify-center items-center w-full max-w-[480px] lg:w-[480px] mx-auto flex-shrink-0">
            {/* Toggle tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex p-1 rounded-2xl glass-neo-recessed border border-white/5 mb-6"
            >
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeTab === "profile"
                    ? "bg-gradient-to-r from-sky-400 to-indigo-500 text-slate-950 font-black shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <LuUser />
                <span>System Profile</span>
              </button>
              <button
                onClick={() => setActiveTab("sandbox")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeTab === "sandbox"
                    ? "bg-gradient-to-r from-sky-400 to-indigo-500 text-slate-950 font-black shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <LuWorkflow />
                <span>Agent Sandbox</span>
              </button>
            </motion.div>

            {/* Display tab content with animations */}
            <div className="w-full flex justify-center items-center relative min-h-[460px]">
              <AnimatePresence mode="wait">
                {activeTab === "profile" ? (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
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
                    <div className="relative rounded-[2.5rem] p-[2px] glass-neo-card">
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
                      className="absolute -bottom-5 -left-8 flex items-center gap-2.5 rounded-2xl border border-white/5 px-4 py-2.5 backdrop-blur-xl"
                      style={{
                        background: "rgba(2,6,23,0.88)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)",
                      }}
                    >
                      <LuStar className="text-amber-400 text-sm flex-shrink-0" />
                      <div>
                        <p className="text-[10px] text-slate-500 leading-none uppercase tracking-wider">Current Role</p>
                        <p className="text-xs font-bold text-white leading-tight mt-0.5">DevOps Engineer</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="sandbox"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full"
                  >
                    <AgentSandbox />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
