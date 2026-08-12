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

const terraformLogs: Omit<LogEntry, "timestamp">[] = [
  { text: "Initializing Terraform Engine v1.5.7...", type: "system" },
  { text: "Selected workspace: production-us-east-1", type: "info" },
  { text: "Refreshing Terraform state...", type: "info" },
  { text: "Plan: 18 resources to add, 0 to change, 0 to destroy.", type: "info" },
  { text: "Executing terraform apply -auto-approve...", type: "system" },
  { text: "Creating aws_vpc.production (10.0.0.0/16)...", type: "info" },
  { text: "Creating aws_subnet.private_us_east_1a & 1b...", type: "info" },
  { text: "Creating aws_eks_cluster.production_eks...", type: "info" },
  { text: "Provisioning Amazon EKS Node Groups (m5.xlarge instances)...", type: "info" },
  { text: "Setting up IAM OIDC provider for Service Accounts (IRSA)...", type: "success" },
  { text: "Terraform Apply completed successfully! 18 resources added.", type: "success" }
];

const cicdLogs: Omit<LogEntry, "timestamp">[] = [
  { text: "GitHub Actions Runner #832 triggered by push to main...", type: "system" },
  { text: "Step 1: Checking out repository code...", type: "info" },
  { text: "Step 2: Authenticating with AWS CLI & ECR Docker Registry...", type: "info" },
  { text: "Step 3: Building multi-stage Docker image from Dockerfile...", type: "info" },
  { text: "Image tagged as 9642639515.dkr.ecr.us-east-1.amazonaws.com/api-service:v2.1.0", type: "info" },
  { text: "Docker Push: Uploading image layers to Amazon ECR...", type: "info" },
  { text: "ECR upload complete. Scanning image for vulnerability CVEs...", type: "success" },
  { text: "Scan results: 0 critical, 2 low vulnerabilities. Proceeding.", type: "success" },
  { text: "Step 4: Upgrading Helm release 'api-service' in namespace 'prod'...", type: "info" },
  { text: "Configuring readiness and liveness probes in Helm values...", type: "info" },
  { text: "Rolling update: Spawning new pods & terminating outdated pods...", type: "info" },
  { text: "Deployment verified. Ingress routing traffic via Traefik.", type: "success" },
  { text: "Pipeline run succeeded in 4.8 seconds.", type: "success" }
];

const alertmanagerLogs: Omit<LogEntry, "timestamp">[] = [
  { text: "Initializing Prometheus Alerts Listener daemon...", type: "system" },
  { text: "Listening to Alertmanager endpoints in cluster production_eks...", type: "info" },
  { text: "[Alert Active] Target: api-service. Namespace: prod. Alert: HTTP5xxRateHigh", type: "warn" },
  { text: "Checking pod status: api-service-7f6d98c-8kw92 is in CrashLoopBackOff", type: "warn" },
  { text: "Analyzing pod events: Liveness probe failed 3 times consecutively.", type: "warn" },
  { text: "Executing cluster self-healing action daemon...", type: "system" },
  { text: "HPA Trigger: Scaling out api-service replicas from 3 to 6 pods...", type: "info" },
  { text: "Auto-diagnosing failure: Pod database pool exhausted. Recovering DB connections...", type: "info" },
  { text: "Restarting failed pods & executing connection pool release...", type: "info" },
  { text: "Pod api-service-7f6d98c-8kw92 transitioned back to Running status.", type: "success" },
  { text: "All 6 replicas reporting healthy (200 OK). Traffic restored.", type: "success" },
  { text: "Cluster state fully restored. Alert 'HTTP5xxRateHigh' cleared.", type: "success" }
];

const scenarios = [
  { id: "terraform", label: "Terraform Orchestrator", logs: terraformLogs },
  { id: "cicd", label: "CI/CD Pipeline", logs: cicdLogs },
  { id: "alertmanager", label: "Auto-Healing Daemon", logs: alertmanagerLogs }
];

export function AgentSandbox() {
  const [activeScenario, setActiveScenario] = useState("terraform");
  const [logs, setLogs] = useState<LogEntry[]>(() => {
    return terraformLogs.map(l => ({
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
            <span>sandbox@devops-node:~/{activeScenario}</span>
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
