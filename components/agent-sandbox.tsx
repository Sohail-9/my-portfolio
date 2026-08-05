"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  LuPlay, 
  LuRefreshCw, 
  LuTerminal, 
  LuCpu, 
  LuShield, 
  LuActivity, 
  LuWorkflow 
} from "react-icons/lu";

interface LogEntry {
  text: string;
  type: "info" | "success" | "warn" | "error" | "system";
  timestamp: string;
}

const octaclawLogs: Omit<LogEntry, "timestamp">[] = [
  { text: "Initializing Octaclaw Orchestrator Engine v1.4.0...", type: "system" },
  { text: "Decomposing user goal: 'Synthesize Next.js app and run tests'", type: "info" },
  { text: "Goal decomposed into 4-node Directed Acyclic Graph (DAG):", type: "info" },
  { text: "  [Node-1: CodeGen] -> [Node-2: Provision] -> [Node-3: Test] -> [Node-4: Deploy]", type: "info" },
  { text: "Spawning specialist agents (Researcher, Builder, Tester)...", type: "info" },
  { text: "Worker Pool initialized with 8 isolated threads", type: "success" },
  { text: "Researcher Agent: Analyzing templates & dependencies...", type: "info" },
  { text: "Builder Agent: Generating next.config.js, tailwind.config.js & routes...", type: "info" },
  { text: "Syntax check: 1 error found in layout.tsx. Spawning Debugger Agent...", type: "warn" },
  { text: "Debugger Agent: Self-corrected syntax error (missing closing tag). Reflexion successful.", type: "success" },
  { text: "Tester Agent: Running pytest / jest suites...", type: "info" },
  { text: "Test results: 14/14 passed (100% code coverage).", type: "success" },
  { text: "Orchestration successful. DAG completed in 2410ms.", type: "success" }
];

const tracefoxLogs: Omit<LogEntry, "timestamp">[] = [
  { text: "Initializing TraceFox Code Review Hook...", type: "system" },
  { text: "Webhook received: Pull Request #24 onto branch main", type: "info" },
  { text: "Fetching repository details & diff payload...", type: "info" },
  { text: "Invoking DeepSeek-R1 & Gemma-3 for code evaluation...", type: "info" },
  { text: "Analyzing 4 modified files for GDPR data compliance...", type: "info" },
  { text: "GDPR Check: Detected plain-text API keys in dev.env. Flagging...", type: "warn" },
  { text: "Auto-remediation triggered: Moving credentials to AWS Secrets Manager...", type: "success" },
  { text: "Generating 6 integration tests in python/fastapi using mock structures...", type: "info" },
  { text: "Tests successfully written to tests/test_compliance.py.", type: "success" },
  { text: "TraceFox Status: Approve with suggestions. Review completed in 1890ms.", type: "success" }
];

const prettiflowLogs: Omit<LogEntry, "timestamp">[] = [
  { text: "Initializing Prettiflow Sandbox Runtime...", type: "system" },
  { text: "Provisioning secure sandboxed execution environment (gVisor)...", type: "info" },
  { text: "Container network isolation: Enabled (GDPR security compliant)", type: "success" },
  { text: "Deploying multi-tenant database router for workspace...", type: "info" },
  { text: "Syncing codebase volume & mounting Node/Python runtimes...", type: "info" },
  { text: "Executing container health check on port 3000...", type: "info" },
  { text: "Status: Live. Latency: 12ms. Routing production traffic...", type: "success" },
  { text: "Sandbox active & isolated. Deployment successful in 1320ms.", type: "success" }
];

const scenarios = [
  { id: "octaclaw", label: "Octaclaw Orchestrator", logs: octaclawLogs },
  { id: "tracefox", label: "TraceFox Engine", logs: tracefoxLogs },
  { id: "prettiflow", label: "Prettiflow Sandbox", logs: prettiflowLogs }
];

export function AgentSandbox() {
  const [activeScenario, setActiveScenario] = useState("octaclaw");
  const [logs, setLogs] = useState<LogEntry[]>(() => {
    return octaclawLogs.map(l => ({
      ...l,
      timestamp: new Date().toLocaleTimeString().split(" ")[0]
    }));
  });
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(100);
  const [latency, setLatency] = useState(42);
  const [cpu, setCpu] = useState(12);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  // Handle simulation run
  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setProgress(0);
    setLogs([]);
    setCpu(45);
    setLatency(85);

    const currentScenario = scenarios.find(s => s.id === activeScenario);
    if (!currentScenario) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < currentScenario.logs.length) {
        const nextLog = currentScenario.logs[index];
        setLogs(prev => [
          ...prev,
          {
            ...nextLog,
            timestamp: new Date().toLocaleTimeString().split(" ")[0]
          }
        ]);
        setProgress(Math.round(((index + 1) / currentScenario.logs.length) * 100));
        setCpu(Math.round(25 + Math.random() * 55));
        setLatency(Math.round(35 + Math.random() * 25));
        index++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setCpu(8);
        setLatency(12);
        setProgress(100);
      }
    }, 450);
  };

  return (
    <div className="w-full glass-neo-card rounded-[2.5rem] p-6 sm:p-7 select-none relative overflow-hidden flex flex-col gap-6 md:min-h-[460px]">
      
      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl glass-neo-button flex items-center justify-center text-accent">
            <LuWorkflow className="animate-float" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide">Agent Sandbox Environment</h4>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className={`h-1.5 w-1.5 rounded-full ${isRunning ? "bg-amber-400 animate-pulse" : "bg-emerald-400"}`} />
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                {isRunning ? "Running Pipeline" : "Active / Secure"}
              </span>
            </div>
          </div>
        </div>

        {/* Scenario selection pills */}
        <div className="flex items-center gap-1.5 bg-slate-950/40 p-1 rounded-2xl border border-white/5">
          {scenarios.map((scen) => (
            <button
              key={scen.id}
              onClick={() => {
                if (!isRunning) {
                  setActiveScenario(scen.id);
                  setLogs(
                    scen.logs.map((l) => ({
                      ...l,
                      timestamp: new Date().toLocaleTimeString().split(" ")[0],
                    }))
                  );
                }
              }}
              disabled={isRunning}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeScenario === scen.id
                  ? "bg-gradient-to-r from-sky-400 to-indigo-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                  : "text-slate-400 hover:text-slate-200 disabled:opacity-40"
              }`}
            >
              {scen.label.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* ── Metrics Grid ── */}
      <div className="grid grid-cols-3 gap-3">
        {/* Latency */}
        <div className="glass-neo-recessed rounded-2xl p-3.5 flex flex-col gap-1 items-center text-center">
          <LuActivity className="text-sky-400 text-base" />
          <span className="text-[9px] uppercase tracking-wider font-bold text-slate-500 mt-1">API Latency</span>
          <span className="text-sm font-black text-white font-mono">{latency}ms</span>
        </div>
        {/* CPU/Workload */}
        <div className="glass-neo-recessed rounded-2xl p-3.5 flex flex-col gap-1 items-center text-center">
          <LuCpu className="text-violet-400 text-base" />
          <span className="text-[9px] uppercase tracking-wider font-bold text-slate-500 mt-1">CPU Load</span>
          <span className="text-sm font-black text-white font-mono">{cpu}%</span>
        </div>
        {/* Memory/Sandbox Isolation */}
        <div className="glass-neo-recessed rounded-2xl p-3.5 flex flex-col gap-1 items-center text-center">
          <LuShield className="text-emerald-400 text-base" />
          <span className="text-[9px] uppercase tracking-wider font-bold text-slate-500 mt-1">Sandbox status</span>
          <span className="text-sm font-black text-white font-mono">SECURED</span>
        </div>
      </div>

      {/* ── Terminal Console ── */}
      <div className="flex-grow min-h-[220px] max-h-[240px] rounded-2xl glass-neo-recessed overflow-hidden p-4 flex flex-col relative">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-2.5 flex-shrink-0">
          <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold font-mono">
            <LuTerminal />
            <span>sandbox@founding-engine:~/{activeScenario}</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono font-bold">{progress}%</span>
        </div>

        {/* Log stream */}
        <div className="flex-grow overflow-y-auto space-y-2 pr-1 font-mono text-[11px] leading-relaxed scrollbar-thin">
          {logs.map((log, i) => {
            let color = "text-slate-300";
            if (log.type === "success") color = "text-emerald-400 font-semibold";
            if (log.type === "warn") color = "text-amber-400 font-semibold";
            if (log.type === "error") color = "text-rose-500 font-bold";
            if (log.type === "system") color = "text-sky-400 font-semibold";

            return (
              <div key={i} className="flex gap-2.5 items-start">
                <span className="text-slate-600 flex-shrink-0 select-none">[{log.timestamp}]</span>
                <span className={color}>{log.text}</span>
              </div>
            );
          })}
          <div ref={terminalEndRef} />
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-950/80">
          <div 
            className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-300 shadow-[0_0_8px_rgba(56,189,248,0.5)]" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* ── Run Button ── */}
      <button
        onClick={runSimulation}
        disabled={isRunning}
        className="w-full glass-neo-button rounded-2xl py-3.5 flex items-center justify-center gap-2 text-sm font-bold text-slate-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none"
      >
        {isRunning ? (
          <>
            <LuRefreshCw className="animate-spin text-amber-400" />
            <span>Orchestrating Workflow...</span>
          </>
        ) : (
          <>
            <LuPlay className="text-sky-400" />
            <span>Deploy Workflow Simulation</span>
          </>
        )}
      </button>

    </div>
  );
}
