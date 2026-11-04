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

export type PipelineStepDetail = {
  step: string;
  detail: string;
  metric: string;
  tech: string;
};

export type Project = {
  title: string;
  subtitle: string;
  pipelineFlow: string[];
  pipelineSteps: PipelineStepDetail[];
  bullets: string[];
  tech: string[];
  links: ProjectLink[];
  image?: string;
};

export const hero = {
  title: "Hello, I’m Sohail Shaik",
  role: "Full-Stack AI Engineer",
  subtitle: "Architecting production LLM orchestration, pre-warmed sandbox execution, and high-throughput RAG pipelines — scaled from scratch to 100k+ users and 8k+ DAU."
};

export const about = {
  heading: "About Me",
  summary: "Architecting production LLM orchestration, pre-warmed sandbox execution, and high-throughput RAG pipelines — scaled from scratch to 100k+ users and 8k+ DAU.",
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
  // AI & LLM
  { key: "rag", label: "Production RAG Pipelines", category: "AI & LLM" },
  { key: "agents", label: "Multi-Agent Systems", category: "AI & LLM" },
  { key: "llmorchestration", label: "LLM Orchestration (LangChain)", category: "AI & LLM" },
  { key: "mcp", label: "Model Context Protocol (MCP)", category: "AI & LLM" },
  { key: "models", label: "OpenAI, Anthropic & Gemini APIs", category: "AI & LLM" },

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
      "Spearheaded full-stack platform architecture from scratch as founding engineer, scaling to 100,000+ users and 8,000+ daily active users (8k+ DAU).",
      "Cut full-stack build times from 15 to 8 minutes by redesigning the pipeline from prompt intake through code generation, provisioning, and live deployment.",
      "Reduced cold-start latency from ~3s to ~100ms by building a pre-warmed sandboxed code execution environment, streaming live results over Redis Pub/Sub and WebSockets.",
      "Built a cross-platform CLI covering infrastructure provisioning, deployment automation, and AI-assisted development workflows.",
      "Enforced runtime safety guardrails, including input/output sanitization, action-level blocking, and loop detection directly into the execution layer."
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
      "Designed the backend from the ground up for an enterprise AI workflow platform, authoring PostgreSQL schemas, microservices, and REST APIs powering LangChain-based RAG pipelines.",
      "Engineered real-time Next.js frontend with live job workflow status streamed over WebSockets, synchronized directly with backend worker states.",
      "Constructed a Confluence-style collaborative docs platform using pgvector semantic similarity search and document sharing.",
      "Built internal Model Context Protocol (MCP) servers so AI agents could safely invoke internal tools and automate multi-step reports.",
      "Cut perceived API response latency by 30% by offloading heavy LLM tasks to Redis queues with WebSocket progress updates.",
      "Cut hot-path query latency by 40% and prevented connection exhaustion under peak traffic with PgBouncer pooling and partial indexes.",
      "Integrated Razorpay payments with signature-verified webhooks and idempotent transaction processing.",
      "Helped migrate infrastructure from on-prem to AWS (Docker, Kubernetes/EKS), enabling zero-downtime rolling deployments."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "PrettiFlow — Sandboxed App Compiler",
    subtitle: "Real-Time Natural-Language Requirement Compilation into Isolated Containerized Applications",
    pipelineFlow: [
      "Prompt Intake",
      "AST Validation & Code Gen",
      "Pre-warmed Sandbox Pool",
      "Redis Pub/Sub Bus",
      "Live Production App"
    ],
    pipelineSteps: [
      {
        step: "Prompt Intake",
        detail: "Natural-language requirement parser compiling user intent into structured JSON schema specifications",
        metric: "<150ms intake latency",
        tech: "Next.js / TypeScript / Zod"
      },
      {
        step: "AST Validation & Code Gen",
        detail: "LLM pipeline generating typed React & Node.js code with strict AST syntax validation and loop detection",
        metric: "100% type-checked AST",
        tech: "OpenAI / Anthropic / Babel AST"
      },
      {
        step: "Pre-warmed Sandbox Pool",
        detail: "Pool of pre-initialized isolated Docker containers ready for instantaneous process attachment",
        metric: "~100ms cold start (~3s prior)",
        tech: "Docker / Linux cgroups"
      },
      {
        step: "Redis Pub/Sub Bus",
        detail: "Bidirectional multiplexing bus streaming container stdout, build logs, and runtime state to client sockets",
        metric: "Sub-15ms broadcast latency",
        tech: "Redis Pub/Sub / WebSockets"
      },
      {
        step: "Live Production App",
        detail: "Auto-provisioned container sandbox with SSL ingress and instant live hot-reload preview",
        metric: "8m total build (15m prior)",
        tech: "AWS / Nginx Ingress"
      }
    ],
    bullets: [
      "Engineered an automated compilation engine that transforms natural language into production-ready deployed Next.js applications in 8 minutes.",
      "Designed a pre-warmed Docker worker container pool that slashed runtime cold-start spin-up latency from ~3s to ~100ms.",
      "Implemented dual-layer security guardrails in the execution layer, including AST-level loop detection and destructive system call filtering.",
      "Streamed real-time container stdout, test status, and live container deployment states over Redis Pub/Sub channels to Next.js clients."
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
    title: "OctaClaw — Multi-Agent Orchestration Engine",
    subtitle: "Autonomous Goal Decomposition & Fault-Tolerant DAG Execution with Specialist Agents",
    pipelineFlow: [
      "Goal Decomposition",
      "Topological DAG Graph",
      "Parallel Specialist Agents",
      "MCP Tool Execution",
      "Verified Solution"
    ],
    pipelineSteps: [
      {
        step: "Goal Decomposition",
        detail: "High-level user objective analyzed and broken down into atomic, testable engineering tasks",
        metric: "Modular task decomposition",
        tech: "TypeScript / LLM Prompting"
      },
      {
        step: "Topological DAG Graph",
        detail: "Dependency graph solver calculating critical execution paths and resolving task ordering for parallelism",
        metric: "Deterministic cycle-free DAG",
        tech: "Graph Theory Engine / Node.js"
      },
      {
        step: "Parallel Specialist Agents",
        detail: "Specialized autonomous agents (Researcher, Coder, Reviewer, Tester) running concurrently",
        metric: "4x concurrent agent execution",
        tech: "Autonomous Agent Workers"
      },
      {
        step: "MCP Tool Execution",
        detail: "Standardized Model Context Protocol servers enabling agents to interact with filesystems, REST APIs, and Jira",
        metric: "Sandboxed tool execution",
        tech: "Model Context Protocol (MCP)"
      },
      {
        step: "Verified Solution",
        detail: "Automated validation harness running unit tests and state checkpointing before commit",
        metric: "Zero unverified commits",
        tech: "Jest / PostgreSQL Checkpoints"
      }
    ],
    bullets: [
      "Architected a multi-agent execution engine that splits complex software engineering goals into a dependency graph executed concurrently.",
      "Implemented Model Context Protocol (MCP) clients allowing autonomous agents to execute shell commands, query databases, and manage tickets.",
      "Built transactional state checkpointing and automatic retry recovery, preventing cascading failures across autonomous multi-agent runs.",
      "Engineered a peer-review agent circuit where generated code is scrutinized and tested against automated suites before merge."
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
    title: "OmniqAI Docs & RAG — Grounded Semantic Knowledge System",
    subtitle: "Confluence-Style Collaborative Docs with Grounded Semantic Search & Internal MCP",
    pipelineFlow: [
      "Document Chunking",
      "Embedding Pipeline",
      "pgvector Hybrid Search",
      "LangChain RAG Context",
      "Live WebSocket Sync"
    ],
    pipelineSteps: [
      {
        step: "Document Chunking",
        detail: "Dynamic semantic boundary parsing across Markdown, PDFs, and codebases with metadata preservation",
        metric: "Context-aware chunking",
        tech: "Python / LangChain"
      },
      {
        step: "Embedding Pipeline",
        detail: "Embedding generation with batch rate-limiting and metadata enrichment for document-level permissions",
        metric: "1536-dim vector indexing",
        tech: "OpenAI Embeddings / Redis Queue"
      },
      {
        step: "pgvector Hybrid Search",
        detail: "Hybrid retrieval combining pgvector cosine similarity with PostgreSQL partial indexing and B-tree filters",
        metric: "40% faster query execution",
        tech: "PostgreSQL / pgvector / PgBouncer"
      },
      {
        step: "LangChain RAG Context",
        detail: "Cross-encoder re-ranking and precise source citation attribution grounding LLM context",
        metric: "Zero-hallucination citations",
        tech: "LangChain / LLM Orchestration"
      },
      {
        step: "Live WebSocket Sync",
        detail: "Collaborative document synchronization and streaming LLM token generation to client views",
        metric: "30% cut in perceived latency",
        tech: "WebSockets / Next.js 15"
      }
    ],
    bullets: [
      "Built a Confluence-style collaborative knowledge platform featuring hybrid pgvector semantic retrieval and real-time document sharing.",
      "Cut hot-path vector search latency by 40% and prevented connection starvation under peak load via PgBouncer connection pooling and partial indexes.",
      "Constructed custom internal MCP servers granting AI agents fine-grained, secure access to internal docs and databases.",
      "Streamed token responses and document updates over WebSockets, reducing perceived response times by 30%."
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
