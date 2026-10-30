import { links } from "./links";

export type ExperienceEntry = {
  company: string;
  role: string;
  timeframe: string;
  location?: string;
  bullets: string[];
  logo?: string;
  tech?: string[];
};

export type SkillCategory = "AI & LLM" | "Backend" | "Frontend" | "Cloud & DevOps" | "Databases";

export type Skill = {
  key: string;
  label: string;
  category: SkillCategory;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  subtitle: string;
  pipelineFlow?: string[];
  bullets: string[];
  tech: string[];
  links: ProjectLink[];
  image?: string;
};

export const hero = {
  title: "Hello, I’m Sohail Shaik",
  role: "Full-Stack AI Engineer",
  subtitle: "Full-stack AI engineer with 3+ years building production systems across React/Next.js, Node.js, Python, and PostgreSQL, with a focus on LLM orchestration and RAG pipelines. As a founding engineer, built an AI platform from scratch, including sandboxed code execution and deployment infrastructure, that grew to 4,000+ beta users and 500+ daily active users."
};

export const about = {
  heading: "About Me",
  summary: "Full-stack AI engineer with 3+ years building production systems across React/Next.js, Node.js, Python, and PostgreSQL, with a focus on LLM orchestration and RAG pipelines. As a founding engineer, built an AI platform from scratch, including sandboxed code execution and deployment infrastructure, that grew to 4,000+ beta users and 500+ daily active users.",
  specializations: [
    {
      title: "LLM Orchestration & Multi-Agent Systems",
      description: "Engineering multi-agent dependency graphs (DAGs), Model Context Protocol (MCP) servers, tool integrations (filesystem, HTTP, DB, Jira), and action-level guardrails."
    },
    {
      title: "Production RAG & Vector Systems",
      description: "Building enterprise RAG pipelines, pgvector semantic search, collaborative knowledge systems, and high-performance PostgreSQL architectures tuned with PgBouncer."
    },
    {
      title: "Full-Stack Platforms & Sandboxed Execution",
      description: "Developing modern Next.js/React frontends, real-time WebSocket state streaming, pre-warmed execution pools (~100ms cold-start), and scalable cloud infrastructure on AWS & Kubernetes."
    }
  ]
};

export const skills: Skill[] = [
  // AI/LLM
  { key: "rag", label: "RAG & Knowledge Retrieval", category: "AI & LLM" },
  { key: "agents", label: "Multi-Agent Systems & DAGs", category: "AI & LLM" },
  { key: "llmorchestration", label: "LLM Orchestration", category: "AI & LLM" },
  { key: "mcp", label: "Model Context Protocol (MCP)", category: "AI & LLM" },
  { key: "models", label: "OpenAI, Anthropic & Gemini", category: "AI & LLM" },

  // Backend
  { key: "typescript", label: "TypeScript", category: "Backend" },
  { key: "nodejs", label: "Node.js", category: "Backend" },
  { key: "python", label: "Python", category: "Backend" },
  { key: "restapi", label: "REST APIs & Microservices", category: "Backend" },
  { key: "websockets", label: "WebSockets & Streaming", category: "Backend" },

  // Frontend
  { key: "react", label: "React", category: "Frontend" },
  { key: "nextjs", label: "Next.js (App Router)", category: "Frontend" },
  { key: "tailwind", label: "Tailwind CSS", category: "Frontend" },

  // Cloud & DevOps
  { key: "aws", label: "AWS (EKS, ECS, Lambda, S3)", category: "Cloud & DevOps" },
  { key: "docker", label: "Docker & Sandboxing", category: "Cloud & DevOps" },
  { key: "kubernetes", label: "Kubernetes / EKS", category: "Cloud & DevOps" },
  { key: "cicd", label: "CI/CD Automation", category: "Cloud & DevOps" },

  // Databases
  { key: "postgres", label: "PostgreSQL & PgBouncer", category: "Databases" },
  { key: "redis", label: "Redis Pub/Sub & Queues", category: "Databases" },
  { key: "mongodb", label: "MongoDB", category: "Databases" },
  { key: "pgvector", label: "pgvector Semantic Search", category: "Databases" },
];

export const experience: ExperienceEntry[] = [
  {
    company: "PrettiFlow",
    role: "Founding Engineer",
    timeframe: "Jan 2026 – Present",
    location: "Remote — San Francisco, USA",
    logo: "/pretti.png",
    tech: ["Next.js", "React", "Node.js", "Python", "Redis Pub/Sub", "WebSockets", "Docker", "AWS", "CLI"],
    bullets: [
      "Built a full-stack AI platform that turns natural-language prompts into deployed applications, growing it to 4,000+ beta users and 500+ daily active users.",
      "Cut full-stack build time from 15 to 8 minutes by redesigning the pipeline from prompt intake through code generation, provisioning, and live deployment.",
      "Reduced cold-start latency from ∼3s to ∼100ms by building a pre-warmed sandboxed code execution environment, streaming results to the frontend over Redis Pub/Sub and WebSockets.",
      "Built a cross-platform CLI covering infrastructure provisioning, deployment automation, and AI-assisted development workflows.",
      "Added safety guardrails, including input/output sanitization, action-level blocking, and loop detection, directly into the execution layer."
    ]
  },
  {
    company: "OmniqAI",
    role: "Software Engineer",
    timeframe: "Jan 2023 – Dec 2025",
    location: "Bengaluru, India",
    logo: "/Omniqai.png",
    tech: ["Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "pgvector", "LangChain", "Model Context Protocol", "Redis", "Docker", "Kubernetes", "AWS"],
    bullets: [
      "Designed the backend from the ground up for an AI workflow platform, building the services, PostgreSQL schemas, and REST APIs behind automated multi-step reporting powered by LangChain-based RAG pipelines.",
      "Built the Next.js frontend with real-time workflow status over WebSockets, tied directly to backend job state.",
      "Built a Confluence-style collaborative docs platform using RAG, pgvector semantic search, and document sharing.",
      "Built internal MCP servers so AI agents could securely call internal tools, expanding what the platform’s agents could do.",
      "Cut perceived API response time by 30% by moving LLM job handling to Redis queues with WebSocket-based status updates.",
      "Cut hot-path query latency by 40% and eliminated connection exhaustion under peak load by adding PgBouncer pooling and PostgreSQL partial indexes.",
      "Integrated Razorpay with signature-verified webhooks and idempotent transaction processing.",
      "Helped migrate infrastructure from on-prem to AWS (Docker, Kubernetes/EKS), enabling zero-downtime deployments."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "PrettiFlow — Full-Stack AI Platform",
    subtitle: "Natural-Language Requirement Compilation into Sandboxed Deployed Applications",
    pipelineFlow: [
      "Prompt Intake",
      "Code Generation",
      "Pre-warmed Sandbox (~100ms)",
      "Redis Pub/Sub & WebSockets",
      "Live Production App"
    ],
    bullets: [
      "Built full-stack AI platform that turns natural-language prompts into deployed applications, scaling to 4,000+ beta users and 500+ daily active users.",
      "Cut full-stack build time from 15 to 8 minutes by redesigning the pipeline from prompt intake through code generation, provisioning, and live deployment.",
      "Reduced cold-start latency from ∼3s to ∼100ms by building a pre-warmed sandboxed code execution environment, streaming results to frontend over Redis Pub/Sub and WebSockets.",
      "Engineered cross-platform CLI and added execution safety guardrails (input/output sanitization, action blocking, loop detection)."
    ],
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Python",
      "Redis Pub/Sub",
      "WebSockets",
      "Docker",
      "AWS",
      "CLI"
    ],
    links: [
      { label: "View GitHub", href: "https://github.com/Sohail-9" }
    ]
  },
  {
    title: "OctaClaw — Multi-Agent Orchestration Platform",
    subtitle: "Autonomous Goal Decomposition & Fault-Tolerant DAG Execution with Specialist Agents",
    pipelineFlow: [
      "Goal Decomposition",
      "Topological DAG Graph",
      "Parallel Specialist Agents",
      "MCP Tool Execution",
      "Verified Solution"
    ],
    bullets: [
      "Built a multi-agent system that splits complex goals into a dependency graph and runs subtasks in parallel across specialist agents for research, code generation, review, and testing.",
      "Built tool integrations for filesystem, HTTP, email, databases, and Jira, so agents could act on external systems directly.",
      "Implemented transactional checkpointing and execution state recovery for reliable autonomous workflows."
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "Multi-Agent Systems",
      "MCP Tooling",
      "PostgreSQL",
      "REST APIs"
    ],
    links: [
      { label: "View GitHub", href: "https://github.com/Sohail-9" }
    ]
  },
  {
    title: "OmniqAI Collaborative Docs & RAG Platform",
    subtitle: "Confluence-Style Collaborative Docs with Grounded Semantic Search & Internal MCP",
    pipelineFlow: [
      "Document Ingestion",
      "pgvector Semantic Search",
      "LangChain RAG Pipeline",
      "Internal MCP Servers",
      "Real-Time WebSocket Sync"
    ],
    bullets: [
      "Built a Confluence-style collaborative docs platform using RAG, pgvector semantic search, and document sharing.",
      "Built internal MCP servers so AI agents could securely call internal tools, expanding what the platform’s agents could do.",
      "Cut hot-path query latency by 40% and eliminated connection exhaustion under peak load by adding PgBouncer pooling and PostgreSQL partial indexes."
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "pgvector",
      "LangChain",
      "Model Context Protocol",
      "Redis",
      "Docker"
    ],
    links: [
      { label: "View GitHub", href: "https://github.com/Sohail-9" }
    ]
  }
];

export const education = {
  institution: "Brindavan Institute of Technology and Science",
  degree: "Bachelor’s Degree",
  timeframe: "2019 – 2022"
};
