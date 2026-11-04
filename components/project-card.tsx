"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuArrowUpRight,
  LuWorkflow,
  LuDatabase,
  LuCpu,
  LuCheck,
  LuTrendingUp,
  LuPlay,
  LuRotateCcw,
  LuSlidersHorizontal,
  LuActivity,
} from "react-icons/lu";
import type { Project } from "@/lib/content";
import { TiltCard } from "./tilt-card";
import { soundEffects } from "@/lib/audio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface CardMeta {
  tag: string;
  badge: string;
  icon: React.ElementType;
  glowColor: string;
  bentoClass: string;
  clayClass: string;
  pillClass: string;
  isDark: boolean;
  metrics: { label: string; value: string; desc: string }[];
  tabs: { id: "simulator" | "benchmarks" | "highlights"; label: string; icon: React.ElementType }[];
}

const cardMetaConfigs: CardMeta[] = [
  // 0: PrettiFlow (bento-dark full flagship)
  {
    tag: "Core Architecture · Flagship",
    badge: "FOUNDING ENGINEER · 100K+ USERS",
    icon: LuCpu,
    glowColor: "rgba(124, 58, 237, 0.28)",
    bentoClass: "bento-dark text-white",
    clayClass: "clay-violet",
    pillClass: "glass-pill-violet",
    isDark: true,
    metrics: [
      { label: "Platform Scale", value: "100k+", desc: "Active Community" },
      { label: "Cold Start", value: "~100ms", desc: "was ~3s (Pre-warmed)" },
      { label: "Build Speed", value: "15m → 8m", desc: "-47% Optimization" },
      { label: "Engagement", value: "8k+", desc: "Daily Active Users" },
    ],
    tabs: [
      { id: "simulator", label: "Interactive Sandbox Cockpit", icon: LuSlidersHorizontal },
      { id: "benchmarks", label: "Performance Telemetry", icon: LuTrendingUp },
      { id: "highlights", label: "Engineering Feats", icon: LuCheck },
    ],
  },
  // 1: OctaClaw (bento-emerald)
  {
    tag: "Multi-Agent DAG",
    badge: "AUTONOMOUS DAG ENGINE",
    icon: LuWorkflow,
    glowColor: "rgba(5, 150, 105, 0.25)",
    bentoClass: "bento-emerald text-zinc-950",
    clayClass: "clay-emerald",
    pillClass: "glass-pill-emerald",
    isDark: false,
    metrics: [
      { label: "Concurrency", value: "4x Parallel", desc: "Specialist Lanes" },
      { label: "Graph Engine", value: "100%", desc: "Deterministic DAG" },
      { label: "Standard", value: "MCP", desc: "Model Context Protocol" },
      { label: "State Reliability", value: "Atomic", desc: "Transactional Save" },
    ],
    tabs: [
      { id: "simulator", label: "Interactive DAG Simulator", icon: LuPlay },
      { id: "benchmarks", label: "Performance Benchmarks", icon: LuTrendingUp },
      { id: "highlights", label: "Engineering Feats", icon: LuCheck },
    ],
  },
  // 2: OmniqAI (bento-sky)
  {
    tag: "Enterprise RAG",
    badge: "PGVECTOR SEMANTIC RETRIEVAL",
    icon: LuDatabase,
    glowColor: "rgba(14, 165, 233, 0.25)",
    bentoClass: "bento-sky text-zinc-950",
    clayClass: "clay-sky",
    pillClass: "glass-pill-sky",
    isDark: false,
    metrics: [
      { label: "Query Latency", value: "-40%", desc: "PgBouncer Pooling" },
      { label: "Perceived Delay", value: "-30%", desc: "Redis Async Queues" },
      { label: "Vector Index", value: "HNSW", desc: "pgvector Semantic" },
      { label: "Cloud Infra", value: "AWS EKS", desc: "Zero-Downtime" },
    ],
    tabs: [
      { id: "simulator", label: "Semantic Search Radar", icon: LuDatabase },
      { id: "benchmarks", label: "Database & Cloud", icon: LuTrendingUp },
      { id: "highlights", label: "Engineering Feats", icon: LuCheck },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   1. PRETTIFLOW INTERACTIVE SANDBOX COCKPIT
───────────────────────────────────────────────────────────── */
function PrettiFlowCockpit({ isDark }: { isDark: boolean }) {
  const [concurrency, setConcurrency] = useState(1200);
  const [selectedPod, setSelectedPod] = useState<number | null>(null);

  const activeContainers = Math.min(24, Math.round(concurrency * 0.0025 + 6));
  const coldStart = Math.max(92, Math.round(95 + concurrency / 600));
  const throughput = (concurrency * 18).toLocaleString();
  const cgroupMem = Math.round(128 + concurrency / 80);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConcurrency(Number(e.target.value));
    soundEffects.playSwitch();
  };

  return (
    <div
      className={`p-5 rounded-3xl space-y-4 border ${
        isDark
          ? "bg-black/40 border-white/10"
          : "neo-inset border-white/80"
      }`}
    >
      {/* Top Controller Bar */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b ${isDark ? "border-white/10" : "border-zinc-300/60"}`}>
        <div>
          <span className={`text-xs font-mono font-bold flex items-center gap-1.5 ${isDark ? "text-white" : "text-zinc-950"}`}>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Pre-warmed Sandbox Engine Simulator
          </span>
          <p className={`text-[11px] mt-0.5 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
            Simulate real-time container pool allocation &amp; cold-start latency under traffic
          </p>
        </div>

        <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-2 ${isDark ? "bg-white/10 text-violet-300 border border-white/15" : "glass-pill text-zinc-900"}`}>
          <span>Simulated DAU:</span>
          <span className={`px-2 py-0.5 rounded-md ${isDark ? "bg-violet-500/20 text-white" : "bg-zinc-200/80 text-zinc-950"}`}>
            {concurrency.toLocaleString()} Active
          </span>
        </div>
      </div>

      {/* Interactive Slider */}
      <div className="space-y-1.5">
        <div className={`flex justify-between text-[11px] font-mono ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
          <span>500 DAU (Baseline)</span>
          <span className={`font-semibold ${isDark ? "text-white" : "text-zinc-950"}`}>{concurrency.toLocaleString()} Active DAU</span>
          <span>8,000+ DAU (Peak Scale)</span>
        </div>
        <input
          type="range"
          min={500}
          max={8000}
          step={100}
          value={concurrency}
          onChange={handleSliderChange}
          className="w-full h-2 bg-zinc-300/40 rounded-lg appearance-none cursor-pointer accent-violet-500"
        />
      </div>

      {/* Dynamic Telemetry Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
        <div className={`p-3 rounded-2xl text-center border ${isDark ? "bg-white/5 border-white/10" : "neo-surface"}`}>
          <span className="text-[10px] text-zinc-400 uppercase block font-semibold">Active Pool</span>
          <span className="text-base font-extrabold text-violet-400">{activeContainers} / 24</span>
          <span className="text-[10px] text-zinc-400 block">Pre-warmed Pods</span>
        </div>
        <div className={`p-3 rounded-2xl text-center border ${isDark ? "bg-white/5 border-white/10" : "neo-surface"}`}>
          <span className="text-[10px] text-zinc-400 uppercase block font-semibold">Cold Start</span>
          <span className="text-base font-extrabold text-emerald-400">{coldStart}ms</span>
          <span className="text-[10px] text-zinc-400 block">was ~3,000ms</span>
        </div>
        <div className={`p-3 rounded-2xl text-center border ${isDark ? "bg-white/5 border-white/10" : "neo-surface"}`}>
          <span className="text-[10px] text-zinc-400 uppercase block font-semibold">Throughput</span>
          <span className="text-base font-extrabold text-sky-400">{throughput}</span>
          <span className="text-[10px] text-zinc-400 block">Redis Msgs/sec</span>
        </div>
        <div className={`p-3 rounded-2xl text-center border ${isDark ? "bg-white/5 border-white/10" : "neo-surface"}`}>
          <span className="text-[10px] text-zinc-400 uppercase block font-semibold">Memory Pool</span>
          <span className="text-base font-extrabold text-pink-400">{cgroupMem} MB</span>
          <span className="text-[10px] text-zinc-400 block">cgroups v2</span>
        </div>
      </div>

      {/* Visual Pre-warmed Worker Container Pods */}
      <div className="space-y-1.5 pt-1">
        <div className={`flex items-center justify-between text-[11px] font-mono ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
          <span>Worker Container Pool Topology</span>
          <span className="text-[10px] opacity-75">Click container pod to inspect isolation details</span>
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
   2. OCTACLAW INTERACTIVE MULTI-AGENT DAG SIMULATOR
───────────────────────────────────────────────────────────── */
function OctaClawCockpit() {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "planner",
      label: "01. Goal Planner",
      role: "Decomposes high-level prompt into atomic task graph",
      metric: "Topological Sort",
    },
    {
      id: "parallel",
      label: "02. Specialist Agents",
      role: "Researcher, Coder, Reviewer run in concurrent threads",
      metric: "4x Concurrency",
    },
    {
      id: "mcp",
      label: "03. MCP Tool Server",
      role: "Standardized tool invocation: filesystem, DB, Jira",
      metric: "Sandboxed Boundary",
    },
    {
      id: "verifier",
      label: "04. Jest & Checkpoints",
      role: "Automated test harness & transactional rollback",
      metric: "0 Unverified Commits",
    },
  ];

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    soundEffects.playPop();

    let step = 0;
    setActiveStep(0);

    const interval = setInterval(() => {
      step++;
      if (step < steps.length) {
        setActiveStep(step);
        soundEffects.playSwitch();
      } else {
        clearInterval(interval);
        setIsRunning(false);
        soundEffects.playSuccess();
      }
    }, 900);
  };

  return (
    <div className="p-5 rounded-3xl neo-inset border border-white/80 space-y-4">
      {/* Header Controller */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-emerald-300/40">
        <div>
          <span className="text-xs font-mono font-bold text-zinc-950 flex items-center gap-1.5">
            <LuWorkflow className="text-emerald-700" />
            Autonomous Multi-Agent DAG Simulation
          </span>
          <p className="text-[11px] text-zinc-600 mt-0.5">
            Watch the topological task planner orchestrate parallel specialist agents and MCP tools
          </p>
        </div>

        <button
          onClick={runSimulation}
          disabled={isRunning}
          type="button"
          className="clay-emerald inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all disabled:opacity-50 cursor-pointer"
        >
          {isRunning ? (
            <>
              <LuRotateCcw className="text-xs animate-spin text-white" />
              <span>Executing DAG...</span>
            </>
          ) : (
            <>
              <LuPlay className="text-xs text-white" />
              <span>Run DAG Simulation</span>
            </>
          )}
        </button>
      </div>

      {/* Visual DAG Nodes Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-xs font-mono">
        {steps.map((s, idx) => {
          const isActive = idx === activeStep;
          const isDone = idx < activeStep || (!isRunning && activeStep === 3);

          return (
            <div
              key={s.id}
              className={`p-3.5 rounded-2xl border transition-all duration-300 relative ${
                isActive
                  ? "clay-emerald text-white shadow-lg scale-[1.02]"
                  : isDone
                  ? "neo-surface text-zinc-950 border-emerald-300/60"
                  : "bg-white/60 border-zinc-200 text-zinc-500 opacity-70"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] uppercase font-bold ${isActive ? "text-white" : "text-emerald-700"}`}>
                  {s.label}
                </span>
                {isDone && <LuCheck className="text-xs text-emerald-600 font-bold" />}
                {isActive && <span className="h-2 w-2 rounded-full bg-white animate-ping" />}
              </div>
              <p className={`text-[11px] leading-snug ${isActive ? "text-emerald-50" : "text-zinc-600"}`}>
                {s.role}
              </p>
              <div className="mt-2.5 pt-1.5 border-t border-black/5">
                <span className={`text-[10px] font-bold ${isActive ? "text-white" : "text-emerald-800"}`}>
                  {s.metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Telemetry Status */}
      <div className="p-3 rounded-2xl neo-surface flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-zinc-700">
            Current Stage: <strong className="text-zinc-950">{steps[activeStep]?.label}</strong>
          </span>
        </div>
        <span className="text-[11px] text-emerald-700 font-bold hidden sm:inline-block">
          Deterministic DAG · Zero Race Conditions
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. OMNIQAI INTERACTIVE SEMANTIC VECTOR RETRIEVAL RADAR
───────────────────────────────────────────────────────────── */
function OmniqAICockpit() {
  const [selectedQueryIdx, setSelectedQueryIdx] = useState(0);

  const sampleQueries = [
    {
      query: "PgBouncer pool tuning for peak connection concurrency",
      matchScore: "0.962 (96.2% match)",
      vectorDist: "Cosine dist: 0.038",
      chunk: "Chapter 4: PgBouncer transaction pooling configurations preventing connection exhaustion during traffic surges...",
      latency: { lookup: "12ms", rerank: "15ms", total: "27ms" },
    },
    {
      query: "How does LangChain RAG ground responses with pgvector?",
      matchScore: "0.941 (94.1% match)",
      vectorDist: "Cosine dist: 0.059",
      chunk: "Chapter 2: Grounded document retrieval utilizing pgvector HNSW index with recursive text chunking and metadata tags...",
      latency: { lookup: "14ms", rerank: "18ms", total: "32ms" },
    },
    {
      query: "Zero-downtime AWS EKS Kubernetes rolling deployments",
      matchScore: "0.915 (91.5% match)",
      vectorDist: "Cosine dist: 0.085",
      chunk: "Chapter 7: Production AWS EKS cluster migration using Docker multi-stage builds and zero-downtime rolling updates...",
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
            pgvector Semantic Retrieval Radar (Interactive)
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
          Select Sample Knowledge Base Query:
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
   MAIN PROJECT CARD (BENTO & CLAYMORPHISM)
───────────────────────────────────────────────────────────── */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const meta = cardMetaConfigs[index % cardMetaConfigs.length];
  const CardIcon = meta.icon;
  const [activeTab, setActiveTab] = useState<"simulator" | "benchmarks" | "highlights">("simulator");
  const activeLinks = project.links.filter((l) => Boolean(l.href));

  const handleTabSwitch = (id: "simulator" | "benchmarks" | "highlights") => {
    setActiveTab(id);
    soundEffects.playPop();
  };

  return (
    <TiltCard glowColor={meta.glowColor} className="w-full rounded-[2.5rem]">
      <article
        className={`${meta.bentoClass} group relative overflow-hidden rounded-[2.5rem] flex flex-col cursor-default`}
      >
        <div className="card-noise" />

        {/* Ambient Top Glow for Bento Dark */}
        {meta.isDark && (
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(167,139,250,0.8), transparent)",
              filter: "blur(2px)",
            }}
          />
        )}

        {/* ── CARD HEADER ── */}
        <div className={`p-6 sm:p-8 border-b relative z-10 ${meta.isDark ? "border-white/10" : "border-black/5"}`}>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full px-3 py-1.5 ${meta.clayClass} text-white`}
            >
              <CardIcon className="text-xs" />
              <span>{meta.tag}</span>
            </span>

            <div className={`${meta.pillClass} inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold text-zinc-900`}>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{meta.badge}</span>
            </div>
          </div>

          <h3 className={`text-2xl sm:text-3xl font-extrabold font-heading tracking-tight leading-snug ${meta.isDark ? "text-white" : "text-zinc-950"}`}>
            {project.title}
          </h3>
          <p className={`text-sm sm:text-base font-normal mt-1.5 leading-relaxed max-w-3xl ${meta.isDark ? "text-zinc-300" : "text-zinc-600"}`}>
            {project.subtitle}
          </p>
        </div>

        {/* ── CARD BODY ── */}
        <div className="p-6 sm:p-8 flex flex-col gap-6 relative z-10">
          {/* Quantitative Metric Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {meta.metrics.map((m) => (
              <div
                key={m.label}
                className={`rounded-2xl p-3 sm:p-3.5 text-center border transition-all duration-200 ${
                  meta.isDark
                    ? "bg-white/5 border-white/10"
                    : "neo-surface"
                }`}
              >
                <span className={`block text-xl sm:text-2xl font-extrabold font-heading tracking-tight ${meta.isDark ? "text-white" : "text-zinc-950"}`}>
                  {m.value}
                </span>
                <span className={`block text-[11px] font-bold ${meta.isDark ? "text-zinc-200" : "text-zinc-800"} mt-0.5`}>
                  {m.label}
                </span>
                <span className={`block text-[10px] font-mono ${meta.isDark ? "text-zinc-400" : "text-zinc-500"} mt-0.5 truncate`}>
                  {m.desc}
                </span>
              </div>
            ))}
          </div>

          {/* ── INTERACTIVE TAB CONTROLS ── */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className={`inline-flex items-center p-1 rounded-2xl border ${meta.isDark ? "bg-black/40 border-white/10" : "neo-inset border-white/60"}`}>
              {meta.tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabSwitch(tab.id)}
                    type="button"
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? `${meta.clayClass} text-white shadow-md scale-[1.02]`
                        : meta.isDark
                        ? "text-zinc-400 hover:text-white"
                        : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    <TabIcon className="text-xs" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <span className={`text-[11px] font-mono hidden sm:inline-block ${meta.isDark ? "text-zinc-400" : "text-zinc-500"}`}>
              Verified Production Telemetry
            </span>
          </div>

          {/* ── DYNAMIC TAB CONTENT ── */}
          <div className="min-h-[170px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {/* TAB 1: COCKPITS / SIMULATORS */}
              {activeTab === "simulator" && (
                <motion.div
                  key="simulator"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {index === 0 && <PrettiFlowCockpit isDark={meta.isDark} />}
                  {index === 1 && <OctaClawCockpit />}
                  {index === 2 && <OmniqAICockpit />}
                </motion.div>
              )}

              {/* TAB 2: BENCHMARKS */}
              {activeTab === "benchmarks" && (
                <motion.div
                  key="benchmarks"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className={`p-5 rounded-3xl border space-y-4 ${
                    meta.isDark ? "bg-black/40 border-white/10" : "neo-inset border-white/80"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className={`font-bold uppercase tracking-wider ${meta.isDark ? "text-white" : "text-zinc-950"}`}>
                      Empirical Performance Benchmarks
                    </span>
                    <span className={meta.isDark ? "text-zinc-400" : "text-zinc-500"}>Verified in Production</span>
                  </div>

                  <div className="space-y-3">
                    {index === 0 && (
                      <>
                        <div>
                          <div className={`flex justify-between text-xs font-mono mb-1 ${meta.isDark ? "text-zinc-300" : "text-zinc-700"}`}>
                            <span>Sandbox Cold Start: 3,000ms → 100ms</span>
                            <span className="font-bold text-emerald-400">96.7% Latency Reduction</span>
                          </div>
                          <div className={`h-2 w-full rounded-full overflow-hidden ${meta.isDark ? "bg-white/10" : "bg-zinc-200"}`}>
                            <div className="h-full bg-emerald-500 rounded-full w-[96%]" />
                          </div>
                        </div>

                        <div>
                          <div className={`flex justify-between text-xs font-mono mb-1 ${meta.isDark ? "text-zinc-300" : "text-zinc-700"}`}>
                            <span>Full App Build &amp; Provisioning: 15 min → 8 min</span>
                            <span className="font-bold text-sky-400">46.7% Faster Compilation</span>
                          </div>
                          <div className={`h-2 w-full rounded-full overflow-hidden ${meta.isDark ? "bg-white/10" : "bg-zinc-200"}`}>
                            <div className="h-full bg-sky-500 rounded-full w-[47%]" />
                          </div>
                        </div>
                      </>
                    )}

                    {index === 1 && (
                      <>
                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1 text-zinc-700">
                            <span>Parallel Agent Concurrency (vs Sequential Execution)</span>
                            <span className="font-bold text-emerald-700">3.8x Speedup</span>
                          </div>
                          <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1 text-zinc-700">
                            <span>Task Failure Recovery Rate (via Transaction Checkpoints)</span>
                            <span className="font-bold text-emerald-700">99.4% Resilient</span>
                          </div>
                          <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full w-[99%]" />
                          </div>
                        </div>
                      </>
                    )}

                    {index === 2 && (
                      <>
                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1 text-zinc-700">
                            <span>Hot-Path Database Query Latency (PgBouncer + Indexing)</span>
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
                      </>
                    )}
                  </div>
                </motion.div>
              )}

              {/* TAB 3: KEY ENGINEERING BULLETS */}
              {activeTab === "highlights" && (
                <motion.div
                  key="highlights"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <ul className="space-y-2.5">
                    {project.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className={`flex gap-2.5 items-start text-xs sm:text-sm leading-relaxed ${
                          meta.isDark ? "text-zinc-300" : "text-zinc-700"
                        }`}
                      >
                        <LuCheck
                          className={`text-base flex-shrink-0 mt-0.5 font-bold ${
                            meta.isDark ? "text-violet-400" : "text-emerald-700"
                          }`}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── FOOTER: TECH CHIPS & ACTIONS ── */}
          <div className={`pt-4 border-t flex flex-wrap items-center justify-between gap-4 ${meta.isDark ? "border-white/10" : "border-black/5"}`}>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className={`rounded-xl px-2.5 py-1 text-[11px] font-mono font-semibold border ${
                    meta.isDark
                      ? "bg-white/5 border-white/10 text-zinc-300"
                      : "neo-surface text-zinc-800"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            {activeLinks.length > 0 && (
              <div className="flex gap-2">
                {activeLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={() => soundEffects.playPop()}
                    className={`${meta.clayClass} inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white transition-all`}
                  >
                    <span>{link.label}</span>
                    <LuArrowUpRight className="text-xs" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
