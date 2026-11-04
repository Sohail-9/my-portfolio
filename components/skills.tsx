"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { soundEffects } from "@/lib/audio";
import {
  LuBrain,
  LuLayers,
  LuCpu,
  LuCheck,
  LuServer,
  LuDatabase,
  LuCloud,
  LuCode,
  LuSparkles,
  LuWorkflow,
  LuActivity,
  LuSlidersHorizontal,
} from "react-icons/lu";
import { FaAws } from "react-icons/fa";
import {
  SiPython,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiOpenai,
  SiKubernetes,
  SiGithubactions,
  SiMongodb,
  SiGraphql,
} from "react-icons/si";

type CategoryKey = "all" | "ai" | "backend" | "frontend" | "cloud" | "data";

interface TechItem {
  name: string;
  category: CategoryKey;
  icon: React.ElementType;
  role: string;
  metric: string;
  clayClass: string;
}

const techItems: TechItem[] = [
  // AI & LLM
  {
    name: "LangChain & LangGraph",
    category: "ai",
    icon: LuWorkflow,
    role: "Multi-Agent DAG Execution",
    metric: "4x Parallel Concurrency",
    clayClass: "clay-violet",
  },
  {
    name: "Model Context Protocol (MCP)",
    category: "ai",
    icon: LuCpu,
    role: "Standardized Tool Invocation",
    metric: "Open Protocol",
    clayClass: "clay-violet",
  },
  {
    name: "Anthropic Claude 3.5 & GPT-4o",
    category: "ai",
    icon: SiOpenai,
    role: "State-of-the-Art Model Integration",
    metric: "Zero Hallucination Loops",
    clayClass: "clay-violet",
  },
  {
    name: "pgvector Semantic Search",
    category: "ai",
    icon: LuDatabase,
    role: "Enterprise RAG Retrieval",
    metric: "<12ms HNSW Query",
    clayClass: "clay-violet",
  },

  // Backend Systems
  {
    name: "TypeScript",
    category: "backend",
    icon: SiTypescript,
    role: "End-to-End Typed Contracts",
    metric: "100% Strict Type Safety",
    clayClass: "clay-emerald",
  },
  {
    name: "Node.js (v20+ LTS)",
    category: "backend",
    icon: SiNodedotjs,
    role: "High-Throughput Microservices",
    metric: "Sub-millisecond Loop",
    clayClass: "clay-emerald",
  },
  {
    name: "Python 3.12 & FastAPI",
    category: "backend",
    icon: SiPython,
    role: "High-Performance AI Backends",
    metric: "Async I/O Concurrency",
    clayClass: "clay-emerald",
  },
  {
    name: "WebSockets & Streaming",
    category: "backend",
    icon: LuActivity,
    role: "Live Bidirectional State Bus",
    metric: "Real-Time Telemetry",
    clayClass: "clay-emerald",
  },

  // Frontend UI
  {
    name: "Next.js 15 (App Router)",
    category: "frontend",
    icon: SiNextdotjs,
    role: "Server Components & Routing",
    metric: "Optimized SSR / SSG",
    clayClass: "clay-sky",
  },
  {
    name: "React 19",
    category: "frontend",
    icon: SiReact,
    role: "Modern Hooks & Server Actions",
    metric: "60fps Reactive UI",
    clayClass: "clay-sky",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    role: "Multi-Morphic Design System",
    metric: "Zero Runtime Overhead",
    clayClass: "clay-sky",
  },
  {
    name: "Framer Motion",
    category: "frontend",
    icon: LuLayers,
    role: "Spring Physics & Shaders",
    metric: "Smooth Gestures",
    clayClass: "clay-sky",
  },

  // Cloud & DevOps
  {
    name: "AWS (ECS, EKS, Lambda, S3)",
    category: "cloud",
    icon: FaAws,
    role: "Scalable Cloud Infrastructure",
    metric: "99.99% Availability",
    clayClass: "clay-amber",
  },
  {
    name: "Docker & Linux cgroups",
    category: "cloud",
    icon: SiDocker,
    role: "Pre-warmed Container Sandboxing",
    metric: "~100ms Cold Start",
    clayClass: "clay-amber",
  },
  {
    name: "Kubernetes (EKS)",
    category: "cloud",
    icon: SiKubernetes,
    role: "Zero-Downtime Cluster Deploys",
    metric: "Rolling Releases",
    clayClass: "clay-amber",
  },
  {
    name: "GitHub Actions CI/CD",
    category: "cloud",
    icon: SiGithubactions,
    role: "Automated Build & Test Pipeline",
    metric: "15m → 8m Build Time",
    clayClass: "clay-amber",
  },

  // Databases & Caching
  {
    name: "PostgreSQL & PgBouncer",
    category: "data",
    icon: SiPostgresql,
    role: "Connection Pooling & Sharding",
    metric: "+40% Query Speedup",
    clayClass: "clay-violet",
  },
  {
    name: "Redis Pub/Sub & Queues",
    category: "data",
    icon: SiRedis,
    role: "In-Memory Caching & Message Bus",
    metric: "-30% Perceived Delay",
    clayClass: "clay-emerald",
  },
  {
    name: "MongoDB",
    category: "data",
    icon: SiMongodb,
    role: "Document Storage & JSON Schema",
    metric: "High Ingestion Rate",
    clayClass: "clay-sky",
  },
];

const pillars = [
  {
    title: "LLM Orchestration & Autonomous Agents",
    tag: "LangChain · MCP · Multi-Agent DAGs",
    badge: "PRODUCTION CORE",
    clayClass: "clay-violet",
    bentoClass: "bento-violet",
    icon: LuBrain,
    description:
      "Deterministic multi-agent execution graphs with Model Context Protocol (MCP), structured AST verification, runtime safety guardrails, and deterministic replay.",
    points: [
      "Topological task decomposition across parallel specialist agents",
      "Model Context Protocol tool servers (filesystem, DB, APIs)",
      "Strict runtime safety: loop prevention, AST validation, input sanitization",
    ],
  },
  {
    title: "Distributed Backends & Streaming",
    tag: "TypeScript · Python · Node.js · Redis",
    badge: "LOW-LATENCY CORE",
    clayClass: "clay-emerald",
    bentoClass: "bento-emerald",
    icon: LuServer,
    description:
      "High-throughput microservices, real-time WebSocket multiplexing, Redis pub/sub queue infrastructure, and connection-pooled PostgreSQL architectures.",
    points: [
      "Real-time event streaming over Redis Pub/Sub and WebSockets",
      "PgBouncer connection pooling eliminating connection exhaustion",
      "Async task workers slashing perceived user latency by 30%",
    ],
  },
  {
    title: "Reactive Frontend & Design Systems",
    tag: "Next.js 15 · React 19 · Tailwind · Motion",
    badge: "60FPS REACTIVE",
    clayClass: "clay-sky",
    bentoClass: "bento-sky",
    icon: LuLayers,
    description:
      "Modern Next.js 15 App Router frontends with multi-morphic glass and clay design systems, live state hydration, and Web Audio API haptic synthesizers.",
    points: [
      "Multi-morphic design systems (bento, claymorphic, glassmorphic)",
      "Instant client state synchronization with backend worker state",
      "Polished micro-interactions and audio haptic synthesizer feedback",
    ],
  },
  {
    title: "Cloud Infrastructure & Sandboxing",
    tag: "AWS · Docker · Linux cgroups · K8s",
    badge: "SUB-100MS ISOLATION",
    clayClass: "clay-amber",
    bentoClass: "bento-amber",
    icon: LuCloud,
    description:
      "Pre-warmed container pools delivering sub-100ms cold starts, Linux cgroups v2 resource boundaries, AWS ECS/EKS deployment automation, and zero-downtime releases.",
    points: [
      "Pre-warmed sandbox pool slashing cold starts from ~3s to ~100ms",
      "Automated CI/CD pipelines reducing build times from 15 to 8 minutes",
      "AWS EKS rolling updates enabling zero-downtime migrations",
    ],
  },
];

export function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<CategoryKey>("all");

  const filterTabs: { key: CategoryKey; label: string; count: number }[] = [
    { key: "all", label: "All Stack", count: techItems.length },
    { key: "ai", label: "AI & Agents", count: techItems.filter((t) => t.category === "ai").length },
    { key: "backend", label: "Backend Systems", count: techItems.filter((t) => t.category === "backend").length },
    { key: "frontend", label: "Frontend UI", count: techItems.filter((t) => t.category === "frontend").length },
    { key: "cloud", label: "Cloud & DevOps", count: techItems.filter((t) => t.category === "cloud").length },
    { key: "data", label: "Databases & Cache", count: techItems.filter((t) => t.category === "data").length },
  ];

  const filteredItems =
    selectedFilter === "all"
      ? techItems
      : techItems.filter((t) => t.category === selectedFilter);

  return (
    <section id="skills" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Top Hairline Divider */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(124,58,237,0.12), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-700 mb-6 glass-pill-violet cursor-default"
          >
            Technical Stack &amp; Architecture
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-zinc-950 tracking-tight leading-[1.05] mb-5"
          >
            Engineered for reliability,
            <br className="hidden sm:block" />
            <span className="text-gradient">proven at production scale.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-base sm:text-lg text-zinc-500 max-w-xl leading-relaxed"
          >
            Deep full-stack specialization spanning autonomous agent orchestration, pre-warmed sandbox clusters, pgvector semantic retrieval, and high-performance reactive frontends.
          </motion.p>
        </div>

        {/* ── 4 CORE ENGINEERING PILLARS (BENTO + CLAY) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-7 sm:p-8 overflow-hidden flex flex-col justify-between ${pillar.bentoClass} shadow-xl`}
              >
                <div className="card-noise" />

                <div className="relative z-10 mb-6">
                  {/* Pillar Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${pillar.clayClass} shadow-md`}
                    >
                      <PillarIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-white/80 text-zinc-700 shadow-2xs border border-white">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-zinc-950 tracking-tight mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  {/* Bullet points with clay checkmarks */}
                  <div className="space-y-2.5">
                    {pillar.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2.5 text-xs text-zinc-700 leading-normal"
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${pillar.clayClass}`}
                        >
                          <LuCheck className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-zinc-200/50">
                  <span className="text-[11px] font-mono font-semibold text-zinc-500">
                    {pillar.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── INTERACTIVE TECH STACK MATRIX (NO TERMINAL) ── */}
        <div className="rounded-[2.5rem] p-8 sm:p-10 glass-card relative overflow-hidden shadow-xl border border-white/80">
          <div className="card-noise" />

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200/70 relative z-10">
            <div>
              <h4 className="font-heading font-bold text-xl text-zinc-950 tracking-tight flex items-center gap-2">
                <LuSlidersHorizontal className="text-violet-600" />
                Production Technology Inventory
              </h4>
              <p className="text-xs text-zinc-500 mt-0.5">
                Click any category filter to inspect verified production tooling and scale metrics
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {filterTabs.map((tab) => {
                const isActive = selectedFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setSelectedFilter(tab.key);
                      soundEffects.playPop();
                    }}
                    type="button"
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "clay-violet text-white shadow-md scale-[1.02]"
                        : "neo-surface text-zinc-600 hover:text-zinc-950 hover:bg-white"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className="ml-1.5 opacity-70">({tab.count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of Tactile Neo-Surface Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-6 relative z-10"
          >
            <AnimatePresence>
              {filteredItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    layout
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-2xl neo-surface border border-white/80 hover:border-violet-300 transition-all cursor-default flex items-center gap-3.5 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white ${item.clayClass} shadow-md group-hover:scale-105 transition-transform`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h5 className="font-heading font-bold text-sm text-zinc-900 truncate">
                          {item.name}
                        </h5>
                      </div>
                      <p className="text-[11px] text-zinc-500 truncate">
                        {item.role}
                      </p>
                      <div className="mt-1">
                        <span className="inline-block text-[9px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/90 text-zinc-700 shadow-2xs border border-white">
                          {item.metric}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
