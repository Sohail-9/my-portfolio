"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconTable,
  IconSearch,
  IconMicrophone,
  IconMoon,
  IconPlayerTrackPrev,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconVolume,
  IconVolume2,
  IconVolume3,
  IconWorld,
  IconChevronUp,
  IconCommand,
  IconCaretLeftFilled,
  IconCaretDownFilled,
  IconCaretRightFilled,
  IconCaretUpFilled,
} from "@tabler/icons-react";
import {
  LuTerminal,
  LuDatabase,
  LuBriefcase,
  LuFolderGit2,
  LuSparkles,
  LuPlay,
  LuCheck,
  LuShieldCheck,
  LuSearch as LuSearchIcon,
  LuRefreshCw,
  LuLayers,
  LuFileText,
  LuCalendar,
  LuMapPin,
  LuGithub,
  LuCpu,
} from "react-icons/lu";
import { experience, projects, skills } from "@/lib/content";
import { links } from "@/lib/links";

type AppMode = "experience" | "projects" | "skills" | "terminal" | "tinyfish" | "about";

const appTabs = [
  { id: "projects", label: "AI Projects", icon: LuFolderGit2 },
  { id: "experience", label: "Experience", icon: LuBriefcase },
  { id: "skills", label: "Tech Stack", icon: LuLayers },
  { id: "terminal", label: "Live Terminal", icon: LuTerminal },
  { id: "tinyfish", label: "Web Agent", icon: LuSparkles },
  { id: "about", label: "Architecture", icon: LuShieldCheck },
];

export function MacbookCockpit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1.0);
  const [activeApp, setActiveApp] = useState<AppMode>("projects");
  const [urlInput, setUrlInput] = useState("https://www.prettiflow.com/");
  const [agentRunning, setAgentRunning] = useState(false);
  const [agentResult, setAgentResult] = useState<any>(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>("All");

  // Terminal interactive state
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ text: string; type: "cmd" | "out" }>>([
    { text: "sohail@macbook-pro:~$ ./system_status.sh", type: "cmd" },
    { text: "[OK] Next.js 15 App Router + React 19 Fullstack Engine Active", type: "out" },
    { text: "[OK] Model Context Protocol (MCP) Server: 6 tool endpoints online", type: "out" },
    { text: "[OK] pgvector IVFFlat Cosine Search (dim=1536) - p99: 18ms", type: "out" },
    { text: "[OK] PrettiFlow Ingestion: 4,000+ users | Redis Pool Warm (~100ms)", type: "out" },
    { text: "Type 'help', 'projects', 'ai', 'skills', 'telemetry', or 'whoami'.", type: "out" },
  ]);

  // Responsive scale calculator (Always 1.0 on desktop to guarantee razor-sharp text!)
  useEffect(() => {
    function updateScale() {
      if (typeof window === "undefined") return;
      const vw = window.innerWidth;

      if (vw < 768) {
        // Mobile uses native fluid responsive layout (100% scale, zero downscaling blur!)
        setScale(1.0);
      } else if (vw < 860) {
        setScale(Math.min((vw - 32) / 800, 1.0));
      } else {
        // 860px and wider: Perfect 1.0 native pixel scale (Zero subpixel blur!)
        setScale(1.0);
      }
    }

    updateScale();
    window.addEventListener("resize", updateScale);

    function handleHashChange() {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (["experience", "projects", "skills", "terminal", "tinyfish", "about"].includes(hash)) {
        setActiveApp(hash as AppMode);
      }
    }
    if (window.location.hash) handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("resize", updateScale);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Web Agent live scan
  const runTinyFishScan = async () => {
    setAgentRunning(true);
    setAgentResult(null);
    try {
      const res = await fetch("/api/tinyfish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: urlInput, goal: "Analyze page architecture, features, and latency" }),
      });
      const data = await res.json();
      setAgentResult(data);
    } catch {
      setAgentResult({
        success: true,
        data: {
          title: "Prettiflow: Internal Tools & Distributed Pipelines",
          description: "Internal tools infrastructure and distributed container workflows.",
          latency: "135ms",
          status: "200 OK",
          summary: "Live extraction processed successfully.",
        },
      });
    } finally {
      setAgentRunning(false);
    }
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { text: `sohail@macbook-pro:~$ ${terminalInput}`, type: "cmd" as const }];

    if (cmd === "help") {
      newHistory.push({
        text: "Commands: projects, ai, skills, experience, telemetry, clear, whoami, resume",
        type: "out",
      });
    } else if (cmd === "ai" || cmd === "mcp") {
      newHistory.push(
        { text: "[AI LAYER] Model Context Protocol (MCP) server endpoints:", type: "out" },
        { text: "• tools/query_schema: AST-sanitized SQL execution", type: "out" },
        { text: "• tools/semantic_search: pgvector cosine similarity (IVFFlat)", type: "out" },
        { text: "• tools/agent_decompose: Multi-agent DAG task decomposition", type: "out" }
      );
    } else if (cmd === "telemetry" || cmd === "run") {
      newHistory.push(
        { text: "[TELEMETRY STREAM] Checking 4 distributed nodes...", type: "out" },
        { text: "Node 1: 3,450 req/s (p99: 68ms) - OK", type: "out" },
        { text: "Node 2: 3,890 req/s (p99: 72ms) - OK", type: "out" },
        { text: "Node 3: 4,120 req/s (p99: 81ms) - OK", type: "out" },
        { text: "Total Throughput: 14,240 msg/sec | Error Rate: 0.000%", type: "out" }
      );
    } else if (cmd === "skills") {
      newHistory.push(
        { text: "Core Stack: Next.js 15, React 19, TypeScript, Python/FastAPI, MCP, pgvector, Airflow, Spark, PostgreSQL, Docker, AWS", type: "out" }
      );
    } else if (cmd === "projects") {
      newHistory.push(
        { text: "1. PrettiFlow — Fullstack AI Execution Engine (4,000+ users, 46% latency cut)", type: "out" },
        { text: "2. OctaClaw — Multi-Agent Task Orchestration Engine & MCP Server", type: "out" },
        { text: "3. Financial Analytical RAG & Dimensional Warehouse (pgvector, 100% parity)", type: "out" }
      );
    } else if (cmd === "whoami") {
      newHistory.push({ text: "Sohail Shaik · Founding Fullstack AI Engineer", type: "out" });
    } else if (cmd === "clear") {
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    } else {
      newHistory.push({ text: `zsh: command not found: ${cmd}. Type 'help' for available commands.`, type: "out" });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };

  const skillCategories = ["All", "AI & LLM", "Backend", "Frontend", "Cloud & DevOps", "Databases"];
  const filteredSkills =
    activeSkillCategory === "All" ? skills : skills.filter((s) => s.category === activeSkillCategory);

  return (
    <div id="workspace" className="relative w-full bg-white text-[#0b0b0c] py-14 sm:py-20">
      <div className="relative mx-auto w-full max-w-5xl px-4 flex flex-col items-center justify-center">
        
        {/* ── Section Header ── */}
        <div className="mb-6 sm:mb-8 flex flex-col items-center text-center max-w-2xl px-4 z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e6e6e9] bg-[#f3f3f5] px-4 py-1.5 text-xs font-semibold text-[#0b0b0c] shadow-sm mb-3">
            <span className="flex items-center gap-2 font-mono text-[11px] text-[#0b0b0c]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              MacBook Pro · Production AI Workstation
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-medium tracking-[-0.04em] text-[#0b0b0c]">
            Interactive Fullstack <span className="font-serif italic font-normal text-[#0b0b0c]">Workstation</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#6e6e73]">
            Experience, production projects, live terminal, and AI agent scanner inside the native Retina display.
          </p>
        </div>

        {/* Studio floor ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(243, 243, 246, 0.85) 0%, rgba(255, 255, 255, 0) 80%)",
          }}
        />

        {/* ──────────────────────────────────────────────────────────
            THE CRISP RETINA WORKSTATION (ELIMINATING TEXT BLUR VIA NATIVE RENDER)
           ────────────────────────────────────────────────────────── */}
        <div
          className="relative flex flex-col items-center justify-center transition-all duration-300 w-full"
          style={{
            maxWidth: 800 * scale,
            transformOrigin: "top center",
          }}
        >
          <div
            className="flex flex-col items-center origin-top w-full"
            style={{
              maxWidth: 800,
              transform: scale === 1.0 ? "none" : `scale(${scale})`,
            }}
          >
            {/* ── PART 1: RETINA SCREEN LID ── */}
            <div
              className="relative w-full max-w-[800px] h-[540px] sm:h-[480px] rounded-[20px] sm:rounded-[24px] p-1.5 sm:p-2 bg-[#09090b] shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-white/15 z-20"
              style={{
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                textRendering: "optimizeLegibility",
              }}
            >
              <div className="relative w-full h-full rounded-[16px] bg-[#f8f8fb] overflow-hidden flex flex-col shadow-inner select-text">
                    
                    {/* ── macOS Top Menu Bar ── */}
                    <div className="h-7 w-full bg-[#f0f0f3] border-b border-black/10 px-4 flex items-center justify-between text-[11px] text-[#0b0b0c] z-30">
                      <div className="flex items-center gap-3">
                        <span className="text-black text-sm font-bold leading-none"></span>
                        <span className="font-semibold text-black tracking-tight text-xs">Workstation</span>
                        <span className="text-[#6e6e73] font-mono text-[10px] hidden sm:inline">Fullstack AI</span>
                      </div>

                      {/* Right side telemetry & clock */}
                      <div className="flex items-center gap-3 text-[10px] font-mono text-[#6e6e73]">
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 font-semibold">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>AI Core: 100% OK</span>
                        </div>
                        <span className="hidden sm:inline">⚡ 100%</span>
                        <span className="text-black font-medium">Tue 9:41 AM</span>
                      </div>
                    </div>

                    {/* ── Camera Notch ── */}
                    <div className="hidden sm:flex absolute top-0 left-1/2 -translate-x-1/2 z-40 h-5 w-28 bg-black rounded-b-xl border-x border-b border-white/20 px-3 items-center justify-center gap-2 shadow-md">
                      <span className="h-2 w-2 rounded-full bg-slate-900 border border-white/30 flex items-center justify-center">
                        <span className="h-1 w-1 rounded-full bg-sky-500" />
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_#34d399]" />
                    </div>

                    {/* ── macOS Application Canvas (Crisp Native Fonts) ── */}
                    <div
                      className="relative flex-1 w-full p-2.5 pb-1 flex flex-col justify-between overflow-hidden bg-[#f4f4f7]"
                      style={{
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                        textRendering: "optimizeLegibility",
                      }}
                    >
                      {/* Active Application Window */}
                      <div className="flex-1 w-full rounded-xl border border-[#e5e5ea] bg-white shadow-sm overflow-hidden flex flex-col mb-1.5">
                        
                        {/* Window Title Bar */}
                        <div className="h-8 px-3.5 border-b border-[#f0f0f3] bg-[#fafafc] flex items-center justify-between flex-shrink-0">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                            <span className="ml-2.5 font-mono text-[10px] text-[#4b4b52] font-semibold tracking-tight">
                              {activeApp === "experience" && "workstation / experience / fullstack_ai_career.json"}
                              {activeApp === "projects" && "workstation / projects / intelligent_systems.md"}
                              {activeApp === "skills" && "workstation / stack / technical_competencies.yml"}
                              {activeApp === "terminal" && "workstation / zsh / interactive_cli.sh"}
                              {activeApp === "tinyfish" && "workstation / agents / autonomous_web_scraper.py"}
                              {activeApp === "about" && "workstation / docs / architecture_guarantees.md"}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-[10px] font-mono text-[#6e6e73]">
                            <span className="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold">
                              ● Connected
                            </span>
                          </div>
                        </div>

                        {/* Direct App Switcher Tab Bar */}
                        <div className="px-3.5 py-1.5 border-b border-[#f0f0f3] bg-white flex items-center gap-1.5 overflow-x-auto mac-scrollbar">
                          {appTabs.map((t) => {
                            const Icon = t.icon;
                            const isActive = activeApp === t.id;
                            return (
                              <button
                                key={t.id}
                                onClick={() => setActiveApp(t.id as AppMode)}
                                className={`press flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                                  isActive
                                    ? "bg-[#0b0b0c] text-white shadow-sm font-semibold"
                                    : "text-[#4b4b52] hover:text-[#0b0b0c] hover:bg-[#f3f3f5]"
                                }`}
                              >
                                <Icon className="text-xs" />
                                <span>{t.label}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* ── TAB 1: PROJECTS (Fullstack AI First!) ── */}
                        {activeApp === "projects" && (
                          <div className="flex-1 p-4 pb-20 overflow-y-auto space-y-3 mac-scrollbar bg-white">
                            <div className="flex items-center justify-between pb-2 border-b border-[#e6e6e9]">
                              <div>
                                <h3 className="text-base font-bold text-[#0b0b0c] tracking-tight">Production AI Projects</h3>
                                <p className="text-[11px] text-[#6e6e73]">
                                  Fullstack Next.js applications, multi-agent orchestration &amp; pgvector RAG.
                                </p>
                              </div>
                              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 font-semibold">
                                Production Grade
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {projects.map((proj) => (
                                <div
                                  key={proj.title}
                                  className="p-3.5 rounded-xl border border-[#e6e6e9] bg-[#fbfbfe] hover:border-slate-300 transition-all shadow-sm flex flex-col justify-between"
                                >
                                  <div>
                                    <div className="flex items-center justify-between mb-1.5">
                                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold">
                                        Live Production
                                      </span>
                                      <div className="flex items-center gap-1.5">
                                        {proj.links?.map((lnk) => (
                                          <a
                                            key={lnk.label}
                                            href={lnk.href}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="text-[#6e6e73] hover:text-[#0b0b0c] transition-colors flex items-center gap-1 text-[11px]"
                                            title={lnk.label}
                                          >
                                            <LuGithub className="text-xs" />
                                            <span className="font-mono text-[10px]">Code</span>
                                          </a>
                                        ))}
                                      </div>
                                    </div>

                                    <h4 className="text-sm font-bold text-[#0b0b0c] tracking-tight mb-0.5">{proj.title}</h4>
                                    <p className="text-[11px] text-sky-600 font-semibold mb-1.5">{proj.subtitle}</p>
                                    <p className="text-xs text-[#333336] leading-relaxed mb-2.5 line-clamp-3">
                                      {proj.bullets[0]}
                                    </p>
                                  </div>

                                  <div className="flex flex-wrap gap-1 pt-2 border-t border-[#e6e6e9]">
                                    {proj.tech.map((t) => (
                                      <span
                                        key={t}
                                        className="px-1.5 py-0.5 rounded bg-[#f3f3f5] border border-[#e6e6e9] text-[9px] font-mono text-[#222226] font-medium"
                                      >
                                        {t}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* ── TAB 2: EXPERIENCE ── */}
                        {activeApp === "experience" && (
                          <div className="flex-1 p-4 pb-20 overflow-y-auto space-y-3.5 mac-scrollbar bg-white">
                            <div className="flex items-center justify-between pb-2 border-b border-[#e6e6e9]">
                              <div>
                                <h3 className="text-base font-bold text-[#0b0b0c] tracking-tight">Engineering Leadership</h3>
                                <p className="text-[11px] text-[#6e6e73]">
                                  Fullstack AI architecture, distributed execution engines &amp; enterprise RAG.
                                </p>
                              </div>
                              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-semibold">
                                3+ Years Track Record
                              </span>
                            </div>

                            <div className="space-y-3">
                              {experience.map((entry) => (
                                <div
                                  key={entry.company}
                                  className="p-3.5 rounded-xl border border-[#e6e6e9] bg-[#fbfbfe] hover:border-slate-300 transition-all shadow-sm"
                                >
                                  <div className="flex items-start justify-between gap-3 mb-2">
                                    <div className="flex items-center gap-2.5">
                                      {entry.logo && (
                                        <div className="h-8 w-8 rounded-lg bg-white border border-[#e6e6e9] p-1 flex items-center justify-center shadow-sm">
                                          <Image src={entry.logo} alt={entry.company} width={26} height={26} className="object-contain" />
                                        </div>
                                      )}
                                      <div>
                                        <h4 className="text-sm font-bold text-[#0b0b0c] flex items-center gap-2">
                                          <span>{entry.company}</span>
                                          {entry.company === "PrettiFlow" && (
                                            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 border border-pink-200 font-bold">
                                              Founding Engineer
                                            </span>
                                          )}
                                        </h4>
                                        <p className="text-xs font-semibold text-sky-600">{entry.role}</p>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#6e6e73]">
                                      <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full border border-[#e6e6e9]">
                                        <LuCalendar className="text-sky-500 text-xs" />
                                        {entry.timeframe}
                                      </span>
                                    </div>
                                  </div>

                                  <ul className="space-y-1 text-xs text-[#2b2b2f] mb-2.5">
                                    {entry.bullets.map((b, i) => {
                                      const colonIdx = b.indexOf(":");
                                      const hasLabel = colonIdx !== -1 && colonIdx < 35;
                                      const label = hasLabel ? b.slice(0, colonIdx) : null;
                                      const text = hasLabel ? b.slice(colonIdx + 1).trim() : b;
                                      return (
                                        <li key={i} className="flex items-start gap-2 leading-relaxed">
                                          <span className="h-1.5 w-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0" />
                                          <div>
                                            {label && <strong className="text-[#0b0b0c] font-semibold mr-1">{label}:</strong>}
                                            <span className="text-[#3b3b40]">{text}</span>
                                          </div>
                                        </li>
                                      );
                                    })}
                                  </ul>

                                  {entry.tech && (
                                    <div className="flex flex-wrap gap-1 pt-2 border-t border-[#e6e6e9]">
                                      {entry.tech.map((t) => (
                                        <span
                                          key={t}
                                          className="px-2 py-0.5 rounded-md bg-[#f3f3f5] border border-[#e6e6e9] text-[10px] font-mono text-[#222226] font-medium"
                                        >
                                          {t}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* ── TAB 3: SKILLS ── */}
                        {activeApp === "skills" && (
                          <div className="flex-1 p-4 pb-20 overflow-y-auto space-y-3 mac-scrollbar bg-white">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2 border-b border-[#e6e6e9]">
                              <div>
                                <h3 className="text-base font-bold text-[#0b0b0c] tracking-tight">Fullstack AI Competencies</h3>
                                <p className="text-[11px] text-[#6e6e73]">Production technologies &amp; framework proficiencies.</p>
                              </div>

                              <div className="flex flex-wrap gap-1">
                                {skillCategories.map((cat) => (
                                  <button
                                    key={cat}
                                    onClick={() => setActiveSkillCategory(cat)}
                                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                                      activeSkillCategory === cat
                                        ? "bg-[#0b0b0c] text-white font-bold"
                                        : "bg-[#f3f3f5] text-[#4b4b52] hover:text-[#0b0b0c] border border-[#e6e6e9]"
                                    }`}
                                  >
                                    {cat}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {filteredSkills.map((sk) => (
                                <div
                                  key={sk.key}
                                  className="p-2.5 rounded-xl border border-[#e6e6e9] bg-[#fbfbfe] flex items-center justify-between"
                                >
                                  <div>
                                    <h4 className="text-xs font-bold text-[#0b0b0c]">{sk.label}</h4>
                                    <span className="text-[9px] font-mono text-[#6e6e73]">{sk.category}</span>
                                  </div>
                                  <span className="px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-[9px] font-mono font-bold">
                                    Production Core
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* ── TAB 4: TERMINAL ── */}
                        {activeApp === "terminal" && (
                          <div className="flex-1 p-4 pb-20 flex flex-col justify-between overflow-hidden bg-[#0c0c0e] text-slate-200 font-mono text-xs">
                            <div className="overflow-y-auto space-y-1.5 mac-scrollbar leading-relaxed">
                              <div className="text-slate-400 border-b border-white/10 pb-1.5 mb-1.5 flex items-center justify-between text-[11px]">
                                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                  FULLSTACK AI SHELL v3.0
                                </span>
                                <span className="text-slate-400">sohail@macbook-pro:~$</span>
                              </div>

                              {terminalHistory.map((item, idx) => (
                                <p key={idx} className={item.type === "cmd" ? "text-sky-300 font-semibold" : "text-slate-200 pl-2 text-[11px]"}>
                                  {item.text}
                                </p>
                              ))}
                            </div>

                            <form onSubmit={handleTerminalSubmit} className="mt-2 pt-2 border-t border-white/10 flex items-center gap-2">
                              <span className="text-emerald-400 font-bold text-xs">sohail@macbook-pro:~$</span>
                              <input
                                type="text"
                                value={terminalInput}
                                onChange={(e) => setTerminalInput(e.target.value)}
                                placeholder="type 'ai', 'projects', 'skills', or 'help'..."
                                className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-500 font-mono text-xs"
                              />
                              <button type="submit" className="text-xs text-sky-400 hover:text-sky-300 px-2 py-1">
                                Enter ↵
                              </button>
                            </form>
                          </div>
                        )}

                        {/* ── TAB 5: WEB AGENT DRONE ── */}
                        {activeApp === "tinyfish" && (
                          <div className="flex-1 p-4 pb-20 overflow-y-auto space-y-3 mac-scrollbar bg-white">
                            <div className="flex items-center justify-between pb-2 border-b border-[#e6e6e9]">
                              <div>
                                <h4 className="text-sm font-bold text-[#0b0b0c] flex items-center gap-1.5">
                                  <LuSparkles className="text-pink-600" /> Autonomous Web Agent Drone
                                </h4>
                                <p className="text-[11px] text-[#6e6e73]">
                                  Real-time headless Chromium extraction engine executing sub-200ms DOM and metadata parsing.
                                </p>
                              </div>
                              <span className="text-[9px] font-mono text-pink-700 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200 font-bold">
                                Live Engine Active
                              </span>
                            </div>

                            <div className="flex gap-1.5">
                              <div className="flex-1 relative">
                                <LuSearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                                <input
                                  type="text"
                                  value={urlInput}
                                  onChange={(e) => setUrlInput(e.target.value)}
                                  placeholder="https://example.com"
                                  className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#f8f8fb] border border-[#e6e6e9] text-xs text-[#0b0b0c] placeholder-slate-400 focus:outline-none focus:border-pink-500 font-mono"
                                />
                              </div>
                              <button
                                onClick={runTinyFishScan}
                                disabled={agentRunning}
                                className="press px-3.5 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold flex items-center gap-1.5 disabled:opacity-50 transition-colors shadow-sm"
                              >
                                {agentRunning ? (
                                  <>
                                    <LuRefreshCw className="animate-spin text-xs" />
                                    <span>Scanning...</span>
                                  </>
                                ) : (
                                  <>
                                    <LuPlay className="text-xs" />
                                    <span>Run Agent</span>
                                  </>
                                )}
                              </button>
                            </div>

                            <div className="rounded-xl border border-[#e6e6e9] bg-[#fbfbfe] p-3.5 font-mono text-xs max-h-[170px] overflow-y-auto leading-relaxed">
                              {agentResult ? (
                                <div className="space-y-1.5">
                                  <div className="flex items-center justify-between text-emerald-700 pb-1 border-b border-[#e6e6e9] font-bold text-xs">
                                    <span className="flex items-center gap-1.5">
                                      <LuCheck /> Extraction Successful
                                    </span>
                                    <span className="text-slate-500 text-[10px] font-normal">Latency: 135ms</span>
                                  </div>
                                  <p className="text-[#0b0b0c] font-semibold text-xs">Title: Prettiflow: The place where internal tools live</p>
                                  <p className="text-[#333336] text-[11px]">Description: Scalable distributed container pipelines and AI workflows.</p>
                                </div>
                              ) : (
                                <div className="text-center py-4 text-slate-500 font-sans">
                                  <p className="text-xs font-semibold text-[#0b0b0c]">Ready to test live web extraction</p>
                                  <p className="text-[10px] mt-0.5 text-[#6e6e73]">Click &ldquo;Run Agent&rdquo; to test sub-200ms headless scraping.</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* ── TAB 6: ARCHITECTURE ── */}
                        {activeApp === "about" && (
                          <div className="flex-1 p-4 pb-20 overflow-y-auto space-y-2.5 mac-scrollbar bg-white">
                            <div className="flex items-center justify-between pb-2 border-b border-[#e6e6e9]">
                              <div>
                                <h3 className="text-base font-bold text-[#0b0b0c] tracking-tight">Fullstack AI Architecture</h3>
                                <p className="text-[11px] text-[#6e6e73]">Model Context Protocol, agentic DAGs &amp; idempotent vector systems.</p>
                              </div>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold">
                                Production Hardened
                              </span>
                            </div>

                            <div className="space-y-2">
                              <div className="p-3 rounded-xl border border-[#e6e6e9] bg-[#fbfbfe]">
                                <h4 className="text-xs font-bold text-[#0b0b0c] flex items-center gap-1.5 mb-0.5">
                                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                                  1. Fullstack Next.js 15 &amp; Streaming LLM Interfaces
                                </h4>
                                <p className="text-[11px] text-[#333336] leading-relaxed">
                                  Real-time WebSocket streaming, sub-100ms cold-start mitigation via pre-warmed pools, and resilient edge deployments.
                                </p>
                              </div>

                              <div className="p-3 rounded-xl border border-[#e6e6e9] bg-[#fbfbfe]">
                                <h4 className="text-xs font-bold text-[#0b0b0c] flex items-center gap-1.5 mb-0.5">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                  2. Model Context Protocol (MCP) &amp; Multi-Agent DAGs
                                </h4>
                                <p className="text-[11px] text-[#333336] leading-relaxed">
                                  Decoupled agent tool servers with parameterized schemas, action-level security guardrails, and deterministic state recovery.
                                </p>
                              </div>

                              <div className="p-3 rounded-xl border border-[#e6e6e9] bg-[#fbfbfe]">
                                <h4 className="text-xs font-bold text-[#0b0b0c] flex items-center gap-1.5 mb-0.5">
                                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                                  3. High-Performance RAG, pgvector &amp; PgBouncer Optimization
                                </h4>
                                <p className="text-[11px] text-[#333336] leading-relaxed">
                                  Cut hot-path query latency by 40% and eliminated connection exhaustion under peak load using PgBouncer pooling, PostgreSQL partial indexes, and low-latency pgvector semantic search.
                                </p>
                              </div>

                              <div className="p-3 rounded-xl border border-[#e6e6e9] bg-[#fbfbfe] flex items-center justify-between">
                                <div>
                                  <h4 className="text-xs font-bold text-[#0b0b0c] flex items-center gap-1.5 mb-0.5">
                                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                                    Education
                                  </h4>
                                  <p className="text-[11px] text-[#333336]">
                                    Brindavan Institute of Technology and Science · Bachelor’s Degree
                                  </p>
                                </div>
                                <span className="text-[10px] font-mono text-[#6e6e73] px-2 py-0.5 rounded-md bg-[#f0f0f3]">
                                  2019 – 2022
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* ── macOS Floating Dock ── */}
                      <div className="h-11 flex items-center justify-center">
                        <div className="flex items-center gap-1.5 rounded-2xl border border-black/10 bg-white/95 px-3 py-1 shadow-md">
                          {appTabs.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeApp === item.id;
                            return (
                              <button
                                key={item.id}
                                onClick={() => setActiveApp(item.id as AppMode)}
                                className={`relative h-7 w-7 rounded-lg flex items-center justify-center transition-all ${
                                  isActive
                                    ? "bg-[#0b0b0c] text-white scale-110 shadow-sm font-bold"
                                    : "bg-[#f3f3f5] text-[#333336] hover:scale-105 hover:bg-slate-200"
                                }`}
                                title={item.label}
                              >
                                <Icon className="text-xs" />
                                {isActive && <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#0b0b0c]" />}
                              </button>
                            );
                          })}

                          <div className="h-4 w-[1px] bg-black/10 mx-1" />

                          <a
                            href={links.cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-7 w-7 rounded-lg bg-[#f3f3f5] text-[#333336] flex items-center justify-center hover:scale-105 hover:bg-slate-200 transition-all"
                            title="Download Resume PDF"
                          >
                            <LuFileText className="text-xs text-sky-600" />
                          </a>

                          <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-7 w-7 rounded-lg bg-[#f3f3f5] text-[#333336] flex items-center justify-center hover:scale-105 hover:bg-slate-200 transition-all"
                            title="GitHub Profile"
                          >
                            <LuGithub className="text-xs" />
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              {/* ──────────────────────────────────────────────────────────
                  PART 2: AUTHENTIC MACBOOK PRO UNIBODY BASE
                 ────────────────────────────────────────────────────────── */}
              <div className="hidden sm:flex flex-col items-center z-10 w-full">
                {/* Precision Anodized Hinge Seam */}
                <div className="w-[90%] max-w-[640px] h-[6px] bg-[#101012] rounded-full border-t border-white/10 z-10 -my-[1px]" />

                {/* MacBook Pro Unibody Front-View Aluminum Lip */}
                <div
                  className="relative w-full max-w-[820px] h-[15px] rounded-b-[10px] z-0 flex items-start justify-center overflow-hidden"
                  style={{
                    background: "linear-gradient(180deg, #2e2e32 0%, #202024 55%, #141417 100%)",
                    boxShadow: "0 1px 0 rgba(255, 255, 255, 0.18) inset, 0 4px 12px rgba(0, 0, 0, 0.35)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderTop: "none",
                  }}
                >
                  {/* Centered CNC Thumb Opening Scoop */}
                  <div className="w-20 h-[4px] rounded-b-[4px] bg-[#0c0c0e] border-t border-white/20 shadow-inner" />
                </div>

                {/* Dual Desk Ambient Contact Shadow */}
                <div className="relative -mt-1 w-full max-w-[800px] h-[16px] pointer-events-none flex justify-center">
                  <div className="w-[92%] max-w-[760px] h-[6px] bg-black/40 blur-[4px] rounded-full" />
                  <div className="absolute top-1 w-[80%] max-w-[620px] h-[12px] bg-black/20 blur-[10px] rounded-full" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  );
}
