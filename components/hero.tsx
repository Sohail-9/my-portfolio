"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuFileText,
  LuMail,
  LuArrowUpRight,
  LuCopy,
  LuCheck,
  LuSparkles,
  LuCpu,
  LuWorkflow,
  LuDatabase,
  LuActivity,
  LuLayers,
  LuSlidersHorizontal,
  LuShieldCheck,
  LuZap,
} from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { links } from "@/lib/links";
import { CommandMenuTrigger } from "./command-menu";
import { soundEffects } from "@/lib/audio";

const prettiflowPipeline = [
  {
    step: "01",
    name: "Intent Intake",
    metric: "<150ms parsing",
    tech: "Next.js / TypeScript / Zod",
    guard: "Zod Schema Typecheck",
    detail: "Parses conversational requirements into strict, structured JSON specification contracts.",
  },
  {
    step: "02",
    name: "AST Validation",
    metric: "100% Type-checked",
    tech: "Claude 3.5 / Babel AST",
    guard: "Loop Fault Prevention",
    detail: "Generates typed React/Node.js code with strict AST syntax validation and infinite-loop detection.",
  },
  {
    step: "03",
    name: "Sandbox Attachment",
    metric: "~100ms cold start",
    tech: "Docker / Linux cgroups v2",
    guard: "cgroup Resource Limit",
    detail: "Instantly attaches runtime processes to pre-warmed, pre-forked worker containers in ~100ms.",
  },
  {
    step: "04",
    name: "Redis Pub/Sub Bus",
    metric: "Sub-15ms stream",
    tech: "Redis / WebSockets",
    guard: "Buffered Channel Throttle",
    detail: "Multiplexed stream broadcasting container build logs, test status, and execution telemetry to UI.",
  },
  {
    step: "05",
    name: "Production Ingress",
    metric: "8m build (15m prior)",
    tech: "AWS ECS / Nginx SSL",
    guard: "Automated Health Checks",
    detail: "Auto-provisioned container sandbox with SSL ingress and instant live hot-reload preview.",
  },
];

/* ─────────────────────────────────────────────────────────────
   HERO BESPOKE ARCHITECTURE DECK (Unique Pipeline & Workflows)
───────────────────────────────────────────────────────────── */
function HeroArchitectureDeck() {
  const [activeTab, setActiveTab] = useState<"prettiflow" | "octaclaw" | "omniqai">("prettiflow");
  const [selectedStageIdx, setSelectedStageIdx] = useState(0);

  const tabs = [
    {
      id: "prettiflow" as const,
      label: "PrettiFlow Sandbox",
      tag: "Founding Engineer",
      clayClass: "clay-violet",
      pillClass: "glass-pill-violet",
    },
    {
      id: "octaclaw" as const,
      label: "OctaClaw Multi-Agent DAG",
      tag: "Autonomous Orchestrator",
      clayClass: "clay-emerald",
      pillClass: "glass-pill-emerald",
    },
    {
      id: "omniqai" as const,
      label: "OmniqAI Vector RAG",
      tag: "Enterprise Knowledge",
      clayClass: "clay-sky",
      pillClass: "glass-pill-sky",
    },
  ];

  const currentStage = prettiflowPipeline[selectedStageIdx];

  const scrollToExperience = (e: React.MouseEvent) => {
    e.preventDefault();
    soundEffects.playPop();
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-4xl mx-auto mt-14 text-left"
    >
      {/* Ambient glow underlayer */}
      <div
        className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(124, 58, 237, 0.14) 0%, rgba(52, 211, 153, 0.08) 50%, transparent 70%)",
        }}
      />

      {/* Main Glass Deck Container */}
      <div className="relative rounded-3xl overflow-hidden glass-card p-6 sm:p-8 shadow-xl border border-white/80">
        <div className="card-noise" />

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-zinc-200/70 relative z-10">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    soundEffects.playPop();
                  }}
                  type="button"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? `${tab.clayClass} text-white shadow-md scale-[1.02]`
                      : "neo-surface text-zinc-700 hover:text-zinc-950 hover:bg-white"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? "bg-white" : "bg-zinc-400"
                    }`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold text-zinc-600 bg-white/70 border border-white/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Live Architecture Preview</span>
          </div>
        </div>

        {/* Dynamic Interactive Visual Content */}
        <div className="pt-6 relative z-10">
          <AnimatePresence mode="wait">
            {/* ── PRETTIFLOW: INTERACTIVE PIPELINE COMPILER (Distinct from pod slider in Experience) ── */}
            {activeTab === "prettiflow" && (
              <motion.div
                key="prettiflow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-heading font-bold text-xl text-zinc-950 tracking-tight flex items-center gap-2">
                      <LuCpu className="text-violet-600" />
                      PrettiFlow Real-Time Requirement Compiler
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1">
                      Translates natural language into production applications in 8 minutes with sub-100ms container attachment.
                    </p>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-100 text-violet-800 border border-violet-200">
                    Seed Stage · 100k+ Users
                  </span>
                </div>

                {/* 5-Stage Compilation Pipeline Visualizer (Interactive) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-zinc-700 flex items-center gap-1.5">
                      <LuActivity className="text-violet-600" />
                      End-to-End Pipeline Stages (Click stage to inspect):
                    </span>
                    <span className="text-emerald-700 font-bold">100% HEALTHY</span>
                  </div>

                  {/* Horizontal Stage Selectors */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {prettiflowPipeline.map((p, idx) => {
                      const isSelected = idx === selectedStageIdx;
                      return (
                        <button
                          key={p.step}
                          type="button"
                          onClick={() => {
                            setSelectedStageIdx(idx);
                            soundEffects.playPop();
                          }}
                          className={`p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? "clay-violet text-white shadow-md scale-[1.03]"
                              : "neo-surface text-zinc-800 hover:bg-white"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-1">
                            <span className={`text-[10px] font-mono font-bold ${isSelected ? "text-violet-200" : "text-violet-700"}`}>
                              {p.step}
                            </span>
                            <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white" : "bg-emerald-500"}`} />
                          </div>
                          <span className="font-heading font-bold text-xs truncate">
                            {p.name}
                          </span>
                          <span className={`text-[9px] font-mono mt-1 ${isSelected ? "text-violet-100" : "text-zinc-500"}`}>
                            {p.metric}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Stage Inspection Chassis */}
                  <motion.div
                    key={currentStage.step}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl neo-inset border border-white/70 space-y-2.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-violet-600 text-white font-bold text-[10px]">
                          STAGE {currentStage.step}
                        </span>
                        <span className="font-bold text-zinc-900">{currentStage.name}</span>
                        <span className="text-zinc-400">•</span>
                        <span className="text-zinc-600">{currentStage.tech}</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                        <LuShieldCheck className="text-xs text-emerald-600" />
                        {currentStage.guard}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {currentStage.detail}
                    </p>
                  </motion.div>
                </div>

                {/* Footer Action to Experience Section */}
                <div className="pt-2 flex items-center justify-between">
                  <a
                    href="#experience"
                    onClick={scrollToExperience}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-violet-700 hover:text-violet-950 transition-colors cursor-pointer"
                  >
                    <span>Inspect PrettiFlow Sandbox Pod Slider &amp; Benchmarks in Experience</span>
                    <LuArrowUpRight className="text-sm" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* ── OCTACLAW MULTI-AGENT DAG ── */}
            {activeTab === "octaclaw" && (
              <motion.div
                key="octaclaw"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-heading font-bold text-xl text-zinc-950 tracking-tight flex items-center gap-2">
                      <LuWorkflow className="text-emerald-600" />
                      OctaClaw Autonomous Multi-Agent DAG Orchestrator
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1">
                      Deterministic directed acyclic graph execution engine with Model Context Protocol (MCP) tool integration and transaction rollbacks.
                    </p>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    4x Concurrency · MCP Tool Server
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "Agent Concurrency", value: "4x Parallel", note: "independent lanes" },
                    { label: "Deterministic DAG", value: "100%", note: "graph replay support" },
                    { label: "Recovery Rate", value: "99.4%", note: "checkpointed state" },
                    { label: "Tool Standard", value: "MCP", note: "Model Context Protocol" },
                  ].map((m, i) => (
                    <div key={i} className="p-3.5 rounded-2xl neo-surface text-center">
                      <span className="font-heading font-bold text-xl text-zinc-950 block">
                        {m.value}
                      </span>
                      <span className="text-[11px] font-bold text-zinc-700 block uppercase tracking-tight">
                        {m.label}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 block mt-0.5">
                        {m.note}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Visual Workflow Steps (Visual flow, NO terminal) */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                  {[
                    { step: "01", title: "Goal Decomposer", detail: "Parses prompt into DAG tasks" },
                    { step: "02", title: "Specialist Swarm", detail: "Parallel research & code lanes" },
                    { step: "03", title: "MCP Tool Executor", detail: "Sandboxed filesystem & DB calls" },
                    { step: "04", title: "Safety Verifier", detail: "Automated AST test validation" },
                  ].map((node) => (
                    <div
                      key={node.step}
                      className="p-3.5 rounded-2xl neo-surface border border-white/80 hover:border-emerald-300 transition-all cursor-default"
                    >
                      <span className="w-6 h-6 rounded-lg clay-emerald text-white text-[10px] font-bold flex items-center justify-center mb-2">
                        {node.step}
                      </span>
                      <h5 className="font-heading font-bold text-sm text-zinc-900">
                        {node.title}
                      </h5>
                      <p className="text-[11px] text-zinc-500 mt-1 leading-snug">
                        {node.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="pt-2 flex items-center justify-between">
                  <a
                    href="#skills"
                    onClick={(e) => {
                      e.preventDefault();
                      soundEffects.playPop();
                      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 hover:text-emerald-950 transition-colors cursor-pointer"
                  >
                    <span>Explore Multi-Agent DAG Architecture &amp; MCP in Technical Stack</span>
                    <LuArrowUpRight className="text-sm" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* ── OMNIQAI VECTOR RAG ── */}
            {activeTab === "omniqai" && (
              <motion.div
                key="omniqai"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-heading font-bold text-xl text-zinc-950 tracking-tight flex items-center gap-2">
                      <LuDatabase className="text-sky-600" />
                      OmniqAI Enterprise Knowledge &amp; pgvector RAG
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1">
                      Multi-tenant pgvector semantic similarity search with PgBouncer connection pooling, Redis async queueing, and sub-15ms retrieval.
                    </p>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-100 text-sky-800 border border-sky-200">
                    PostgreSQL · PgBouncer · Redis
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "Vector Search", value: "<12ms", note: "pgvector HNSW index" },
                    { label: "Query Speedup", value: "+40%", note: "PgBouncer pool tuning" },
                    { label: "Perceived Latency", value: "-30%", note: "Redis async streams" },
                    { label: "Cache Hit Rate", value: "94.2%", note: "semantic cache layer" },
                  ].map((m, i) => (
                    <div key={i} className="p-3.5 rounded-2xl neo-surface text-center">
                      <span className="font-heading font-bold text-xl text-zinc-950 block">
                        {m.value}
                      </span>
                      <span className="text-[11px] font-bold text-zinc-700 block uppercase tracking-tight">
                        {m.label}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 block mt-0.5">
                        {m.note}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Clean Retrieval Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    {
                      title: "Hierarchical Vector Search",
                      desc: "1536-dimensional OpenAI embeddings indexed with pgvector HNSW for millisecond similarity lookup.",
                    },
                    {
                      title: "PgBouncer Connection Pooling",
                      desc: "Eliminated PostgreSQL connection exhaustion under traffic spikes, slashing hot-path query latency by 40%.",
                    },
                    {
                      title: "Zero-Downtime EKS Deployment",
                      desc: "Containerized microservices migrated to AWS EKS with Kubernetes rolling deployments and health checks.",
                    },
                  ].map((h, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl neo-surface border border-white/80 hover:border-sky-300 transition-all cursor-default"
                    >
                      <h5 className="font-heading font-bold text-xs text-zinc-900 mb-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        {h.title}
                      </h5>
                      <p className="text-[11px] text-zinc-600 leading-relaxed">
                        {h.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="pt-2 flex items-center justify-between">
                  <a
                    href="#experience"
                    onClick={scrollToExperience}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-700 hover:text-sky-950 transition-colors cursor-pointer"
                  >
                    <span>Inspect OmniqAI Interactive Query Radar &amp; Benchmarks in Experience</span>
                    <LuArrowUpRight className="text-sm" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

const rotatingFocus = [
  "Building Autonomous Multi-Agent DAGs & MCP Servers",
  "Scaling Sandboxed App Compilers (~100ms Cold Start)",
  "Engineering Production pgvector RAG & PgBouncer Pipelines",
  "Designing Reactive Next.js 15, Node.js & Python Architecture",
];

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [focusIdx, setFocusIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFocusIdx((prev) => (prev + 1) % rotatingFocus.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(links.email);
    setCopied(true);
    soundEffects.playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden text-zinc-950 pt-32 pb-14 sm:pt-40 sm:pb-20 flex flex-col items-center justify-center">
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 text-center">
        
        {/* Avatar Portrait with Specular Glass Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-violet-500 via-emerald-400 to-sky-400 shadow-[0_12px_40px_rgba(124,58,237,0.28)]"
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
          className="flex flex-wrap items-center justify-center gap-2.5 mb-5"
        >
          <div className="glass-pill-violet inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="text-xs font-mono font-bold text-zinc-800 tracking-tight flex items-center gap-1.5">
              Founding Engineer at PrettiFlow · 100k+ Users · 8k+ DAU
            </span>
          </div>

          <CommandMenuTrigger />
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.6rem] font-bold font-heading tracking-tight text-zinc-950 leading-[1.05]">
            Sohail Shaik
            <br />
            <span className="text-gradient">Full-Stack AI Engineer</span>
          </h1>

          {/* Dynamic Rotating Specialization Pill */}
          <div className="h-8 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={focusIdx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-mono font-bold bg-violet-500/10 text-violet-900 border border-violet-300/60 shadow-2xs"
              >
                <LuSparkles className="text-xs text-violet-600 animate-spin" />
                <span>{rotatingFocus[focusIdx]}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 leading-relaxed font-normal text-pretty"
        >
          Full-stack AI engineer with <span className="text-zinc-950 font-bold">3+ years</span> building production systems across{" "}
          <span className="text-zinc-950 font-bold">React/Next.js, Node.js, Python, and PostgreSQL</span>, with a focus on{" "}
          <span className="text-zinc-950 font-bold">LLM orchestration, Multi-Agent DAGs, and RAG pipelines</span>. As a founding engineer, built an AI platform from scratch that scaled to 100,000+ users and 8,000+ daily active users (8k+ DAU).
        </motion.p>

        {/* Action Buttons: Claymorphism, Copy Email & Light Glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
        >
          {/* Primary Mail CTA with Copy Option */}
          <div className="inline-flex items-center rounded-full shadow-lg">
            <a
              href={`mailto:${links.email}`}
              onClick={() => soundEffects.playPop()}
              className="clay-violet inline-flex items-center gap-2 rounded-l-full px-6 py-3.5 text-sm font-bold border-r border-violet-400/40 cursor-pointer"
            >
              <LuMail className="text-base text-white" />
              <span>Get in Touch</span>
            </a>
            <button
              onClick={copyEmail}
              type="button"
              className="clay-violet inline-flex items-center gap-1.5 rounded-r-full px-4 py-3.5 text-xs font-semibold text-white/90 hover:text-white transition-colors cursor-pointer"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <LuCheck className="text-emerald-300 text-sm" />
                  <span className="text-emerald-200">Copied!</span>
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
            onClick={() => soundEffects.playSuccess()}
            className="glass-pill inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-zinc-800 shadow-md hover:bg-white cursor-pointer"
          >
            <LuFileText className="text-base text-violet-600" />
            <span>Download Resume</span>
            <LuArrowUpRight className="text-xs text-zinc-500" />
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEffects.playPop()}
            className="neo-surface inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold text-zinc-800 shadow-2xs hover:bg-white cursor-pointer"
            title="GitHub Profile"
          >
            <FaGithub className="text-base text-zinc-800" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEffects.playPop()}
            className="neo-surface inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold text-zinc-800 shadow-2xs hover:bg-white cursor-pointer"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="text-base text-blue-600" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </motion.div>

        {/* Hero Interactive Architecture Deck (NO terminal, distinct pipeline visualizer) */}
        <HeroArchitectureDeck />
      </div>
    </section>
  );
}
