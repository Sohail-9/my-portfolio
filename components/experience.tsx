"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/lib/content";
import {
  LuCalendar,
  LuMapPin,
  LuActivity,
  LuCheck,
  LuSparkles,
  LuCpu,
  LuWorkflow,
  LuDatabase,
  LuTrendingUp,
  LuSlidersHorizontal,
  LuPlay,
  LuRotateCcw,
  LuArrowUpRight,
} from "react-icons/lu";
import { TiltCard } from "./tilt-card";
import { soundEffects } from "@/lib/audio";

/* ─────────────────────────────────────────────────────────────
   1. PRETTIFLOW INTERACTIVE SANDBOX COCKPIT
───────────────────────────────────────────────────────────── */
function PrettiFlowInteractiveSandbox({ isDark }: { isDark?: boolean }) {
  const [activeContainers, setActiveContainers] = useState(12);
  const [selectedPod, setSelectedPod] = useState<number | null>(null);

  const coldStart = Math.max(90, Math.round(3000 / (activeContainers * 2.5)));

  return (
    <div
      className={`p-5 rounded-3xl border space-y-4 ${
        isDark ? "bg-black/50 border-white/10" : "neo-inset border-white/80"
      }`}
    >
      {/* Slider Controller */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-mono">
          <span className={`font-bold flex items-center gap-1.5 ${isDark ? "text-violet-300" : "text-zinc-800"}`}>
            <LuSlidersHorizontal className="text-violet-500" />
            Active Pre-warmed Container Pool Size:
          </span>
          <span className={`font-bold px-2.5 py-0.5 rounded-full text-[11px] ${
            isDark ? "bg-violet-500/20 text-violet-300 border border-violet-500/30" : "clay-violet text-white"
          }`}>
            {activeContainers} Standby Containers
          </span>
        </div>

        <input
          type="range"
          min="4"
          max="24"
          step="2"
          value={activeContainers}
          onChange={(e) => {
            setActiveContainers(Number(e.target.value));
            soundEffects.playSwitch();
          }}
          className="w-full accent-violet-500 cursor-pointer h-2 bg-zinc-200/40 rounded-lg appearance-none"
        />

        <div className="flex justify-between text-[10px] font-mono text-zinc-400">
          <span>Min: 4 containers (~350ms)</span>
          <span className="font-bold text-emerald-500">Live Cold-Start: ~{coldStart}ms</span>
          <span>Max: 24 containers (~90ms)</span>
        </div>
      </div>

      {/* 24-Pod Topology Grid */}
      <div className="space-y-2 pt-2 border-t border-white/10">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className={isDark ? "text-zinc-300 font-semibold" : "text-zinc-700 font-semibold"}>
            Container Instance Topology (Click to inspect):
          </span>
          <span className="text-[10px] text-emerald-400 font-bold">
            {activeContainers} Ready / 24 Standby
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {Array.from({ length: 24 }).map((_, i) => {
            const isWarm = i < activeContainers;
            const isSelected = selectedPod === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setSelectedPod(isSelected ? null : i);
                  soundEffects.playPop();
                }}
                className={`h-6 px-2 rounded-lg text-[10px] font-mono font-bold transition-all duration-150 flex items-center gap-1 cursor-pointer ${
                  isSelected
                    ? "ring-2 ring-violet-400 bg-violet-600 text-white shadow-xs"
                    : isWarm
                    ? isDark
                      ? "bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/30"
                      : "bg-emerald-500/20 border border-emerald-500/40 text-emerald-800 hover:bg-emerald-500/30"
                    : isDark
                    ? "bg-white/5 border border-white/10 text-zinc-500 opacity-50"
                    : "bg-zinc-200/60 border border-zinc-300 text-zinc-400 opacity-60"
                }`}
                title={`Container Pod #${i + 1} (${isWarm ? "Warm / Ready" : "Standby"})`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${isWarm ? "bg-emerald-400" : "bg-zinc-400"}`} />
                <span>p{i + 1}</span>
              </button>
            );
          })}
        </div>

        {selectedPod !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className={`p-3 rounded-2xl text-xs font-mono flex items-center justify-between border ${
              isDark
                ? "bg-violet-950/40 border-violet-500/30 text-violet-200"
                : "bg-white/90 border-zinc-300 text-zinc-900 shadow-xs"
            }`}
          >
            <div className="space-y-0.5">
              <span className="font-bold">Container Instance #{selectedPod + 1}</span>
              <p className={`text-[11px] ${isDark ? "text-violet-300/80" : "text-zinc-600"}`}>
                Linux cgroup v2 sandbox · Node.js/Python micro-worker · ~{coldStart}ms cold-start attachment
              </p>
            </div>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-md border border-emerald-400/30">
              HEALTHY
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. OMNIQAI INTERACTIVE SEMANTIC RETRIEVAL RADAR
───────────────────────────────────────────────────────────── */
function OmniqAIInteractiveRadar() {
  const [selectedQueryIdx, setSelectedQueryIdx] = useState(0);

  const sampleQueries = [
    {
      query: "PgBouncer pool tuning for peak connection concurrency",
      matchScore: "0.962 (96.2% match)",
      vectorDist: "Cosine dist: 0.038",
      chunk: "PgBouncer transaction pooling configuration preventing PostgreSQL connection exhaustion under traffic spikes...",
      latency: { lookup: "12ms", rerank: "15ms", total: "27ms" },
    },
    {
      query: "How does LangChain RAG ground responses with pgvector?",
      matchScore: "0.941 (94.1% match)",
      vectorDist: "Cosine dist: 0.059",
      chunk: "Grounded document retrieval utilizing pgvector HNSW index with recursive text chunking and metadata tags...",
      latency: { lookup: "14ms", rerank: "18ms", total: "32ms" },
    },
    {
      query: "Zero-downtime AWS EKS Kubernetes rolling deployments",
      matchScore: "0.915 (91.5% match)",
      vectorDist: "Cosine dist: 0.085",
      chunk: "Production AWS EKS cluster migration using Docker multi-stage builds and zero-downtime rolling updates...",
      latency: { lookup: "11ms", rerank: "13ms", total: "24ms" },
    },
  ];

  const current = sampleQueries[selectedQueryIdx];

  const handleSelectQuery = (idx: number) => {
    setSelectedQueryIdx(idx);
    soundEffects.playPop();
  };

  return (
    <div className="p-5 rounded-3xl neo-inset border border-white/80 space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-sky-300/40">
        <div>
          <span className="text-xs font-mono font-bold text-zinc-950 flex items-center gap-1.5">
            <LuDatabase className="text-sky-700" />
            pgvector Semantic Retrieval Radar (Click Query to Inspect)
          </span>
          <p className="text-[11px] text-zinc-600 mt-0.5">
            Select a sample query to inspect real-time cosine similarity ranking &amp; retrieval latency
          </p>
        </div>

        <span className="glass-pill-sky px-3 py-1 rounded-full text-xs font-mono font-bold text-sky-800">
          PostgreSQL / pgvector HNSW
        </span>
      </div>

      {/* Clickable Sample Queries */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block font-semibold">
          Select Knowledge Base Query:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {sampleQueries.map((q, idx) => {
            const isSelected = idx === selectedQueryIdx;
            return (
              <button
                key={q.query}
                type="button"
                onClick={() => handleSelectQuery(idx)}
                className={`p-3 rounded-2xl text-left text-xs font-mono transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? "clay-sky text-white shadow-md scale-[1.02]"
                    : "neo-surface text-zinc-800 hover:border-sky-300 hover:bg-sky-50/50"
                }`}
              >
                <span className="block truncate font-semibold">&ldquo;{q.query}&rdquo;</span>
                <span className={`text-[10px] mt-1 block ${isSelected ? "text-sky-100" : "text-sky-700 font-bold"}`}>
                  {q.matchScore}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Retrieved Chunk Inspection & Latency Waterfall */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
        <div className="sm:col-span-2 p-3.5 rounded-2xl neo-surface space-y-1.5">
          <div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase font-semibold">
            <span>Retrieved Grounded Vector Chunk</span>
            <span className="text-sky-700 font-bold">{current.vectorDist}</span>
          </div>
          <p className="text-zinc-800 text-xs leading-relaxed italic">
            &ldquo;{current.chunk}&rdquo;
          </p>
        </div>

        <div className="p-3.5 rounded-2xl neo-surface space-y-2">
          <span className="text-[10px] text-zinc-500 uppercase block font-semibold">
            Latency Breakdown
          </span>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-zinc-500">Vector Lookup:</span>
              <span className="font-bold text-zinc-800">{current.latency.lookup}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Re-ranking:</span>
              <span className="font-bold text-zinc-800">{current.latency.rerank}</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-zinc-200 font-bold text-sky-700">
              <span>Total Response:</span>
              <span>{current.latency.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN EXPERIENCE SECTION WITH BENTO & 3D TILT EFFECTS
───────────────────────────────────────────────────────────── */
export function Experience() {
  const [activeTab0, setActiveTab0] = useState<"simulator" | "benchmarks" | "highlights">("simulator");
  const [activeTab1, setActiveTab1] = useState<"simulator" | "benchmarks" | "highlights">("simulator");

  const prettiflow = experience[0];
  const omniqai = experience[1];

  return (
    <section id="experience" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Top Hairline Divider */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(124,58,237,0.15), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-700 mb-6 glass-pill-violet cursor-default"
          >
            Track Record &amp; Trajectory
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-zinc-950 tracking-tight leading-[1.08] mb-5"
          >
            Engineering leadership,
            <br className="hidden sm:block" />
            <span className="text-gradient">from 0 to 100k+ users.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-base sm:text-lg text-zinc-500 max-w-xl leading-relaxed"
          >
            Production track record as a Founding Engineer and Full-Stack AI Engineer—building resilient pre-warmed sandbox infrastructure, multi-agent pipelines, and distributed vector systems.
          </motion.p>
        </div>

        {/* ── CARD 1: PRETTIFLOW (FULL-WIDTH FLAGSHIP BENTO-DARK CARD WITH 3D TILT) ── */}
        <div className="mb-8">
          <TiltCard glowColor="rgba(124, 58, 237, 0.32)" className="w-full rounded-[2.5rem]">
            <article className="bento-dark text-white group relative overflow-hidden rounded-[2.5rem] flex flex-col cursor-default shadow-2xl border border-white/10">
              <div className="card-noise" />

              {/* Ambient Top Glow Line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(167,139,250,0.8), transparent)",
                  filter: "blur(2px)",
                }}
              />

              {/* Card Header Strip */}
              <div className="p-6 sm:p-8 border-b border-white/10 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="clay-violet text-white inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full px-3.5 py-1.5 shadow-md">
                    <LuCpu className="text-xs" />
                    <span>01 · FOUNDING ENGINEER</span>
                  </span>

                  <div className="glass-pill-violet inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold text-zinc-900">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>SCALED TO 100K+ USERS</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  {prettiflow.logo && (
                    <div className="w-14 h-14 rounded-2xl p-2 bg-white/10 border border-white/20 shadow-md flex items-center justify-center flex-shrink-0">
                      <Image
                        src={prettiflow.logo}
                        alt={prettiflow.company}
                        width={44}
                        height={44}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight leading-snug">
                      {prettiflow.role} · {prettiflow.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-400 font-mono mt-1">
                      <span className="inline-flex items-center gap-1 text-zinc-300">
                        <LuCalendar className="text-violet-400" />
                        {prettiflow.timeframe}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <LuMapPin className="text-emerald-400" />
                        {prettiflow.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col gap-6 relative z-10">
                {/* 4 Quantitative Metric Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "Cold Start Latency", value: "~100ms", desc: "was ~3s (Pre-warmed)" },
                    { label: "Platform Scale", value: "100k+", desc: "Active Community" },
                    { label: "Build Speedup", value: "15m → 8m", desc: "-47% Optimization" },
                    { label: "Daily Active Users", value: "8k+", desc: "Verified Production DAU" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl p-3 sm:p-3.5 text-center bg-white/5 border border-white/10"
                    >
                      <span className="block text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight">
                        {m.value}
                      </span>
                      <span className="block text-[11px] font-bold text-zinc-200 mt-0.5">
                        {m.label}
                      </span>
                      <span className="block text-[10px] font-mono text-zinc-400 mt-0.5 truncate">
                        {m.desc}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Interactive Tab Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="inline-flex items-center p-1 rounded-2xl bg-black/40 border border-white/10">
                    {[
                      { id: "simulator" as const, label: "Interactive Sandbox Cockpit", icon: LuSlidersHorizontal },
                      { id: "benchmarks" as const, label: "Empirical Benchmarks", icon: LuTrendingUp },
                      { id: "highlights" as const, label: "Engineering Feats", icon: LuCheck },
                    ].map((tab) => {
                      const TabIcon = tab.icon;
                      const isActive = activeTab0 === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => {
                            setActiveTab0(tab.id);
                            soundEffects.playPop();
                          }}
                          type="button"
                          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "clay-violet text-white shadow-md scale-[1.02]"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          <TabIcon className="text-xs" />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline-block">
                    Verified Production Telemetry
                  </span>
                </div>

                {/* Dynamic Tab Content */}
                <div className="min-h-[170px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {activeTab0 === "simulator" && (
                      <motion.div
                        key="sim0"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <PrettiFlowInteractiveSandbox isDark={true} />
                      </motion.div>
                    )}

                    {activeTab0 === "benchmarks" && (
                      <motion.div
                        key="bench0"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="p-5 rounded-3xl bg-black/40 border border-white/10 space-y-4"
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="font-bold uppercase tracking-wider text-white">
                            Empirical Production Benchmarks
                          </span>
                          <span className="text-zinc-400">Measured on AWS ECS / Fargate</span>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                              <span>Sandbox Cold Start: 3,000ms → 100ms</span>
                              <span className="font-bold text-emerald-400">96.7% Latency Reduction</span>
                            </div>
                            <div className="h-2 w-full rounded-full overflow-hidden bg-white/10">
                              <div className="h-full bg-emerald-500 rounded-full w-[96.7%]" />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                              <span>Full App Build &amp; Provisioning: 15 min → 8 min</span>
                              <span className="font-bold text-sky-400">46.7% Faster Compilation</span>
                            </div>
                            <div className="h-2 w-full rounded-full overflow-hidden bg-white/10">
                              <div className="h-full bg-sky-500 rounded-full w-[46.7%]" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab0 === "highlights" && (
                      <motion.div
                        key="high0"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="p-5 rounded-3xl bg-black/40 border border-white/10 space-y-2.5"
                      >
                        {prettiflow.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 clay-violet">
                              <LuCheck className="w-2.5 h-2.5 text-white" />
                            </div>
                            <span>{b}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tech Pills & Direct Links */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {prettiflow.tech?.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold text-zinc-300 bg-white/5 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Sohail-9"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundEffects.playPop()}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-mono font-bold text-violet-300 bg-violet-950/60 hover:bg-violet-900 border border-violet-500/30 transition-colors cursor-pointer"
                  >
                    <span>View GitHub</span>
                    <LuArrowUpRight className="text-xs" />
                  </a>
                </div>
              </div>
            </article>
          </TiltCard>
        </div>

        {/* ── CARD 2: OMNIQAI (FULL-WIDTH FLAGSHIP BENTO-EMERALD CARD WITH 3D TILT) ── */}
        <div>
          <TiltCard glowColor="rgba(5, 150, 105, 0.28)" className="w-full rounded-[2.5rem]">
            <article className="bento-emerald text-zinc-950 group relative overflow-hidden rounded-[2.5rem] flex flex-col cursor-default shadow-xl border border-emerald-300/60">
              <div className="card-noise" />

              {/* Card Header Strip */}
              <div className="p-6 sm:p-8 border-b border-black/5 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="clay-emerald text-white inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full px-3.5 py-1.5 shadow-md">
                    <LuDatabase className="text-xs" />
                    <span>02 · FULL-STACK AI &amp; RAG</span>
                  </span>

                  <div className="glass-pill-emerald inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold text-zinc-900">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>PGVECTOR SEMANTIC RETRIEVAL</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  {omniqai.logo && (
                    <div className="w-14 h-14 rounded-2xl p-2 bg-white/80 border border-white/80 shadow-md flex items-center justify-center flex-shrink-0">
                      <Image
                        src={omniqai.logo}
                        alt={omniqai.company}
                        width={44}
                        height={44}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-zinc-950 tracking-tight leading-snug">
                      {omniqai.role} · {omniqai.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-600 font-mono mt-1">
                      <span className="inline-flex items-center gap-1 text-zinc-800 font-semibold">
                        <LuCalendar className="text-emerald-700" />
                        {omniqai.timeframe}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <LuMapPin className="text-emerald-600" />
                        {omniqai.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col gap-6 relative z-10">
                {/* 4 Quantitative Metric Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "Vector Search", value: "<12ms", desc: "pgvector HNSW index" },
                    { label: "Query Speedup", value: "+40%", desc: "PgBouncer pool tuning" },
                    { label: "Perceived Delay", value: "-30%", desc: "Redis async queues" },
                    { label: "Availability", value: "99.99%", desc: "AWS EKS rolling deploys" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl p-3 sm:p-3.5 text-center neo-surface"
                    >
                      <span className="block text-xl sm:text-2xl font-extrabold font-heading text-zinc-950 tracking-tight">
                        {m.value}
                      </span>
                      <span className="block text-[11px] font-bold text-zinc-800 mt-0.5">
                        {m.label}
                      </span>
                      <span className="block text-[10px] font-mono text-zinc-500 mt-0.5 truncate">
                        {m.desc}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Interactive Tab Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="inline-flex items-center p-1 rounded-2xl neo-inset border border-white/60">
                    {[
                      { id: "simulator" as const, label: "Semantic Retrieval Radar", icon: LuDatabase },
                      { id: "benchmarks" as const, label: "Database Benchmarks", icon: LuTrendingUp },
                      { id: "highlights" as const, label: "Engineering Feats", icon: LuCheck },
                    ].map((tab) => {
                      const TabIcon = tab.icon;
                      const isActive = activeTab1 === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => {
                            setActiveTab1(tab.id);
                            soundEffects.playPop();
                          }}
                          type="button"
                          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "clay-emerald text-white shadow-md scale-[1.02]"
                              : "text-zinc-600 hover:text-zinc-950"
                          }`}
                        >
                          <TabIcon className="text-xs" />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline-block">
                    Verified Production Telemetry
                  </span>
                </div>

                {/* Dynamic Tab Content */}
                <div className="min-h-[170px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {activeTab1 === "simulator" && (
                      <motion.div
                        key="sim1"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <OmniqAIInteractiveRadar />
                      </motion.div>
                    )}

                    {activeTab1 === "benchmarks" && (
                      <motion.div
                        key="bench1"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="p-5 rounded-3xl neo-inset border border-white/80 space-y-4"
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="font-bold uppercase tracking-wider text-zinc-950">
                            Database &amp; Pipeline Optimization Benchmarks
                          </span>
                          <span className="text-zinc-500">PostgreSQL / pgvector &amp; PgBouncer</span>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-xs font-mono mb-1 text-zinc-700">
                              <span>Hot-Path Query Latency (PgBouncer Pooling + Indexes)</span>
                              <span className="font-bold text-sky-700">-40% Query Latency</span>
                            </div>
                            <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                              <div className="h-full bg-sky-500 rounded-full w-[75%]" />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-xs font-mono mb-1 text-zinc-700">
                              <span>Perceived User Streaming Latency (Redis Async Queues)</span>
                              <span className="font-bold text-teal-700">-30% Perceived Delay</span>
                            </div>
                            <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                              <div className="h-full bg-teal-500 rounded-full w-[70%]" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab1 === "highlights" && (
                      <motion.div
                        key="high1"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="p-5 rounded-3xl neo-inset border border-white/80 space-y-2.5"
                      >
                        {omniqai.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-zinc-700 leading-relaxed">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 clay-emerald">
                              <LuCheck className="w-2.5 h-2.5 text-white" />
                            </div>
                            <span>{b}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tech Pills & Direct Links */}
                <div className="pt-4 border-t border-zinc-200/50 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {omniqai.tech?.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold text-zinc-700 bg-white/80 border border-white shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Sohail-9"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundEffects.playPop()}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors cursor-pointer"
                  >
                    <span>View GitHub</span>
                    <LuArrowUpRight className="text-xs" />
                  </a>
                </div>
              </div>
            </article>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
