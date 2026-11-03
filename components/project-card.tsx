"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuArrowUpRight,
  LuWorkflow,
  LuDatabase,
  LuCpu,
  LuCheck,
  LuActivity,
  LuServer,
  LuLayers,
  LuTerminal,
  LuTrendingUp,
} from "react-icons/lu";
import type { Project } from "@/lib/content";
import { TiltCard } from "./tilt-card";

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface CardMeta {
  tag: string;
  badge: string;
  icon: React.ElementType;
  glowColor: string;
  borderGlow: string;
  topLine: string;
  accentColor: string;
  metrics: { label: string; value: string; desc: string }[];
  tabs: { id: "architecture" | "benchmarks" | "highlights"; label: string; icon: React.ElementType }[];
}

const cardMetaConfigs: CardMeta[] = [
  // 0: PrettiFlow
  {
    tag: "FLAGSHIP AI PLATFORM",
    badge: "FOUNDING ENGINEER · 4K+ USERS",
    icon: LuCpu,
    glowColor: "rgba(56, 189, 248, 0.25)",
    borderGlow: "border-sky-200/90 hover:border-sky-400",
    topLine: "from-sky-500 via-blue-500 to-indigo-500",
    accentColor: "text-sky-600",
    metrics: [
      { label: "Beta Scale", value: "4,000+", desc: "Active Beta Community" },
      { label: "Cold Start", value: "~100ms", desc: "was ~3s (Pre-warmed pool)" },
      { label: "Build Speed", value: "15m → 8m", desc: "-47% Pipeline Optimization" },
      { label: "Engagement", value: "500+", desc: "Daily Active Users" },
    ],
    tabs: [
      { id: "architecture", label: "Architecture Pod", icon: LuActivity },
      { id: "benchmarks", label: "Performance Telemetry", icon: LuTrendingUp },
      { id: "highlights", label: "Engineering Feats", icon: LuCheck },
    ],
  },
  // 1: OctaClaw
  {
    tag: "MULTI-AGENT ORCHESTRATION",
    badge: "AUTONOMOUS DAG ENGINE",
    icon: LuWorkflow,
    glowColor: "rgba(168, 85, 247, 0.25)",
    borderGlow: "border-purple-200/90 hover:border-purple-400",
    topLine: "from-purple-500 via-violet-500 to-pink-500",
    accentColor: "text-purple-600",
    metrics: [
      { label: "Concurrency", value: "4x Parallel", desc: "Specialist Agent Workers" },
      { label: "Graph Engine", value: "100%", desc: "Deterministic Cycle-Free DAG" },
      { label: "Protocol", value: "MCP", desc: "Model Context Protocol Tooling" },
      { label: "State Reliability", value: "Atomic", desc: "Transactional Checkpointing" },
    ],
    tabs: [
      { id: "architecture", label: "Agent Topology", icon: LuWorkflow },
      { id: "benchmarks", label: "MCP Tool Server", icon: LuTerminal },
      { id: "highlights", label: "Engineering Feats", icon: LuCheck },
    ],
  },
  // 2: OmniqAI
  {
    tag: "ENTERPRISE RAG & DOCS",
    badge: "PGVECTOR SEMANTIC RETRIEVAL",
    icon: LuDatabase,
    glowColor: "rgba(16, 185, 129, 0.25)",
    borderGlow: "border-emerald-200/90 hover:border-emerald-400",
    topLine: "from-emerald-500 via-teal-500 to-cyan-500",
    accentColor: "text-emerald-600",
    metrics: [
      { label: "Query Latency", value: "-40%", desc: "PgBouncer Connection Pooling" },
      { label: "Perceived Delay", value: "-30%", desc: "Redis Async Queues" },
      { label: "Vector Index", value: "HNSW", desc: "pgvector Semantic Search" },
      { label: "Cloud Infra", value: "AWS EKS", desc: "Zero-Downtime Deployments" },
    ],
    tabs: [
      { id: "architecture", label: "Vector Search Engine", icon: LuLayers },
      { id: "benchmarks", label: "Database & Cloud", icon: LuServer },
      { id: "highlights", label: "Engineering Feats", icon: LuCheck },
    ],
  },
];

export function ProjectCard({ project, index }: ProjectCardProps) {
  const meta = cardMetaConfigs[index % cardMetaConfigs.length];
  const CardIcon = meta.icon;
  const [activeTab, setActiveTab] = useState<"architecture" | "benchmarks" | "highlights">("architecture");
  const activeLinks = project.links.filter((l) => Boolean(l.href));

  return (
    <TiltCard glowColor={meta.glowColor} className="w-full rounded-[2.5rem]">
      <article
        className={`glass-card group relative overflow-hidden rounded-[2.5rem] ${meta.borderGlow} flex flex-col shadow-lg`}
      >
        {/* Specular Top Gradient Line */}
        <div className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${meta.topLine}`} />

        {/* Ambient Corner Illumination */}
        <div
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
          style={{ background: meta.glowColor }}
        />

        {/* ── CARD HEADER ── */}
        <div className="p-6 sm:p-8 border-b border-slate-200/80 relative">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold text-slate-800 uppercase tracking-wider">
              <CardIcon className={`text-xs ${meta.accentColor}`} />
              <span>{meta.tag}</span>
            </div>

            <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold text-slate-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{meta.badge}</span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-sky-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-normal mt-1.5 leading-relaxed max-w-3xl">
            {project.subtitle}
          </p>
        </div>

        {/* ── CARD BODY ── */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* Quantitative Metric Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {meta.metrics.map((m) => (
              <div
                key={m.label}
                className="glass-recessed rounded-2xl p-3 sm:p-3.5 text-center border border-slate-200/80 transition-all duration-200 hover:bg-white"
              >
                <span className="block text-xl sm:text-2xl font-extrabold font-mono text-slate-900 tracking-tight">
                  {m.value}
                </span>
                <span className="block text-[11px] font-bold text-slate-800 mt-0.5">
                  {m.label}
                </span>
                <span className="block text-[10px] font-mono text-slate-500 mt-0.5 truncate">
                  {m.desc}
                </span>
              </div>
            ))}
          </div>

          {/* ── INTERACTIVE TAB CONTROLS (Multi-Morphic Clay & Glass) ── */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="inline-flex items-center p-1 rounded-2xl glass-recessed border border-slate-200/80">
              {meta.tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "clay-btn text-white shadow-md scale-[1.02]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                    }`}
                  >
                    <TabIcon className="text-xs" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
              Interactive System Telemetry
            </span>
          </div>

          {/* ── DYNAMIC TAB CONTENT ── */}
          <div className="min-h-[170px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {/* TAB 1: ARCHITECTURE POD */}
              {activeTab === "architecture" && (
                <motion.div
                  key="architecture"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  {index === 0 && (
                    /* PrettiFlow Architecture */
                    <div className="p-4 sm:p-5 rounded-2xl glass-recessed border border-slate-200/90 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                        <span className="font-bold text-slate-800 flex items-center gap-1.5">
                          <LuActivity className="text-sky-600" /> Sandboxed Compiler Pipeline
                        </span>
                        <span className="text-emerald-600 font-semibold flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Pre-warmed Pool Active (12 Containers)
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono">
                        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-[10px] text-slate-400 uppercase block font-semibold">01. Prompt Intake</span>
                          <span className="font-bold text-slate-800">AST Code Generator</span>
                          <p className="text-[10px] text-slate-500 mt-1">Babel AST syntax validator &amp; loop protection</p>
                        </div>
                        <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-400/30 shadow-2xs">
                          <span className="text-[10px] text-sky-600 uppercase block font-semibold">02. Execution Pool</span>
                          <span className="font-bold text-sky-900">~100ms Cold Start</span>
                          <p className="text-[10px] text-sky-700/80 mt-1">Pre-warmed Linux cgroup Docker instances</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-[10px] text-slate-400 uppercase block font-semibold">03. Event Bus</span>
                          <span className="font-bold text-slate-800">Redis Pub/Sub</span>
                          <p className="text-[10px] text-slate-500 mt-1">Bidirectional multiplexing with client sockets</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-[10px] text-slate-400 uppercase block font-semibold">04. Live App</span>
                          <span className="font-bold text-slate-800">8m Full Deployment</span>
                          <p className="text-[10px] text-slate-500 mt-1">Isolated container ingress with instant hot-reload</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    /* OctaClaw Agent DAG */
                    <div className="p-4 sm:p-5 rounded-2xl glass-recessed border border-slate-200/90 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                        <span className="font-bold text-slate-800 flex items-center gap-1.5">
                          <LuWorkflow className="text-purple-600" /> Multi-Agent Execution Graph
                        </span>
                        <span className="text-purple-600 font-semibold">Cycle-Free Topological Solver</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono">
                        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-[10px] text-slate-400 uppercase block font-semibold">Planner Node</span>
                          <span className="font-bold text-slate-800">Goal Decomposer</span>
                          <p className="text-[10px] text-slate-500 mt-1">Splits engineering prompt into atomic sub-tasks</p>
                        </div>
                        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30 shadow-2xs">
                          <span className="text-[10px] text-purple-600 uppercase block font-semibold">Specialists</span>
                          <span className="font-bold text-purple-900">4x Parallel Agents</span>
                          <p className="text-[10px] text-purple-700/80 mt-1">Researcher, Coder, Reviewer, Tester running concurrently</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-[10px] text-slate-400 uppercase block font-semibold">Standard Tooling</span>
                          <span className="font-bold text-slate-800">MCP Protocol</span>
                          <p className="text-[10px] text-slate-500 mt-1">Sandboxed filesystem, HTTP requests, Jira sync</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-[10px] text-slate-400 uppercase block font-semibold">Verification</span>
                          <span className="font-bold text-slate-800">Jest &amp; Rollback</span>
                          <p className="text-[10px] text-slate-500 mt-1">Transactional PostgreSQL state checkpointing</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    /* OmniqAI RAG */
                    <div className="p-4 sm:p-5 rounded-2xl glass-recessed border border-slate-200/90 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                        <span className="font-bold text-slate-800 flex items-center gap-1.5">
                          <LuDatabase className="text-emerald-600" /> Semantic Retrieval Engine
                        </span>
                        <span className="text-emerald-600 font-semibold">HNSW Index · Cosine Similarity</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono">
                        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-[10px] text-slate-400 uppercase block font-semibold">Ingestion</span>
                          <span className="font-bold text-slate-800">Doc Chunking</span>
                          <p className="text-[10px] text-slate-500 mt-1">Recursive character splits with contextual headers</p>
                        </div>
                        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 shadow-2xs">
                          <span className="text-[10px] text-emerald-600 uppercase block font-semibold">Vector Store</span>
                          <span className="font-bold text-emerald-900">pgvector &amp; PgBouncer</span>
                          <p className="text-[10px] text-emerald-700/80 mt-1">-40% latency; zero connection exhaustion</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-[10px] text-slate-400 uppercase block font-semibold">Orchestration</span>
                          <span className="font-bold text-slate-800">LangChain Pipeline</span>
                          <p className="text-[10px] text-slate-500 mt-1">Reranking &amp; grounded LLM answer generation</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-[10px] text-slate-400 uppercase block font-semibold">Streaming</span>
                          <span className="font-bold text-slate-800">Redis &amp; WebSockets</span>
                          <p className="text-[10px] text-slate-500 mt-1">-30% perceived delay via real-time chunk streams</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* TAB 2: BENCHMARKS & TELEMETRY */}
              {activeTab === "benchmarks" && (
                <motion.div
                  key="benchmarks"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl glass-recessed border border-slate-200/90 space-y-4"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-slate-800 uppercase tracking-wider">
                      Empirical Performance Benchmarks
                    </span>
                    <span className="text-slate-500">Verified in Production</span>
                  </div>

                  <div className="space-y-3">
                    {index === 0 && (
                      <>
                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-slate-700">Sandbox Cold Start: 3,000ms → 100ms</span>
                            <span className="font-bold text-emerald-600">96.7% Latency Reduction</span>
                          </div>
                          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full w-[96%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-slate-700">Full App Build &amp; Provisioning: 15 min → 8 min</span>
                            <span className="font-bold text-sky-600">46.7% Faster Compilation</span>
                          </div>
                          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-sky-500 rounded-full w-[47%]" />
                          </div>
                        </div>
                      </>
                    )}

                    {index === 1 && (
                      <>
                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-slate-700">Parallel Agent Concurrency (vs Sequential Execution)</span>
                            <span className="font-bold text-purple-600">3.8x Speedup</span>
                          </div>
                          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 rounded-full w-[85%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-slate-700">Task Failure Recovery Rate (via Transaction Checkpoints)</span>
                            <span className="font-bold text-emerald-600">99.4% Resilient</span>
                          </div>
                          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full w-[99%]" />
                          </div>
                        </div>
                      </>
                    )}

                    {index === 2 && (
                      <>
                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-slate-700">Hot-Path Database Query Latency (PgBouncer + Indexing)</span>
                            <span className="font-bold text-emerald-600">-40% Query Latency</span>
                          </div>
                          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full w-[75%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-slate-700">Perceived User Streaming Latency (Redis Async Queues)</span>
                            <span className="font-bold text-teal-600">-30% Perceived Delay</span>
                          </div>
                          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
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
                      <li key={i} className="flex gap-2.5 items-start text-xs sm:text-sm leading-relaxed text-slate-700">
                        <LuCheck className={`text-base ${meta.accentColor} flex-shrink-0 mt-0.5 font-bold`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── FOOTER: TECH CHIPS & ACTIONS ── */}
          <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="glass-recessed rounded-xl px-2.5 py-1 text-[11px] font-mono font-semibold text-slate-700 border border-slate-200/80 hover:border-slate-300 transition-colors"
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
                    className="clay-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all"
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
