import { links } from "./links";

export type ExperienceEntry = {
  company: string;
  role: string;
  timeframe: string;
  bullets: string[];
  logo?: string;
  tech?: string[];
};

export type SkillCategory = "Backend" | "AI & LLM" | "Databases" | "Cloud & DevOps" | "Frontend";

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
  bullets: string[];
  tech: string[];
  links: ProjectLink[];
  image?: string;
};

export const hero = {
  title: "Hello, I’m Sohail Shaik",
  subtitle: "Backend Engineer – Python/FastAPI, Distributed Systems & Agentic AI"
};

export const about = {
  heading: "About me",
  body:
    "Backend Engineer with 4+ years of experience building and scaling production backend systems powering AI platforms. Specializing in Python/FastAPI microservices, PostgreSQL architectures, LLM orchestration, pgvector RAG pipelines, and multi-agent systems. Founding Engineer at PrettiFlow, delivering 0→1 infrastructure that scaled to 4,000+ users.",
  specializations: [
    {
      title: "Backend & Distributed Systems",
      description: "Python/FastAPI and Node.js microservices, PostgreSQL schemas, PgBouncer pooling, Redis job queues, and WebSocket streaming."
    },
    {
      title: "Agentic AI & LLM Orchestration",
      description: "Autonomous multi-agent DAGs, LangChain RAG pipelines, pgvector semantic search, sandboxed execution, and MCP servers."
    },
    {
      title: "Cloud & Infrastructure Scale",
      description: "Kubernetes (EKS) orchestration, Docker containers, automated CI/CD pipelines, zero-downtime migrations, and payment gateways."
    }
  ]
};

export const skills: Skill[] = [
  // Backend
  { key: "fastapi", label: "Python (FastAPI)", category: "Backend" },
  { key: "typescript", label: "TypeScript", category: "Backend" },
  { key: "nodejs", label: "Node.js", category: "Backend" },
  { key: "restapi", label: "REST APIs", category: "Backend" },
  { key: "websockets", label: "WebSockets", category: "Backend" },
  { key: "microservices", label: "Microservices", category: "Backend" },

  // AI & LLM
  { key: "rag", label: "RAG Pipelines", category: "AI & LLM" },
  { key: "agenticai", label: "Agentic AI", category: "AI & LLM" },
  { key: "multiagent", label: "Multi-Agent Systems", category: "AI & LLM" },
  { key: "llmorchestration", label: "LLM Orchestration", category: "AI & LLM" },
  { key: "mcp", label: "MCP (Model Context Protocol)", category: "AI & LLM" },
  { key: "langchain", label: "LangChain", category: "AI & LLM" },
  { key: "models", label: "OpenAI / Claude / Gemini", category: "AI & LLM" },

  // Databases
  { key: "postgres", label: "PostgreSQL", category: "Databases" },
  { key: "redis", label: "Redis", category: "Databases" },
  { key: "mongodb", label: "MongoDB", category: "Databases" },
  { key: "vectorsearch", label: "Vector Search", category: "Databases" },
  { key: "pgvector", label: "pgvector", category: "Databases" },

  // Cloud & DevOps
  { key: "aws", label: "AWS", category: "Cloud & DevOps" },
  { key: "azure", label: "Azure", category: "Cloud & DevOps" },
  { key: "docker", label: "Docker", category: "Cloud & DevOps" },
  { key: "kubernetes", label: "Kubernetes", category: "Cloud & DevOps" },
  { key: "cicd", label: "CI/CD Pipelines", category: "Cloud & DevOps" },
  { key: "prometheus", label: "Prometheus", category: "Cloud & DevOps" },
  { key: "grafana", label: "Grafana", category: "Cloud & DevOps" },

  // Frontend
  { key: "react", label: "React", category: "Frontend" },
  { key: "nextjs", label: "Next.js", category: "Frontend" }
];

export const experience: ExperienceEntry[] = [
  {
    company: "PrettiFlow",
    role: "Founding Engineer",
    timeframe: "January 2026 – Present",
    logo: "/pretti.png",
    tech: ["Python", "FastAPI", "TypeScript", "Next.js", "Redis", "WebSockets", "Docker", "AWS"],
    bullets: [
      "Scaled an AI app-generation platform to 4,000+ beta users and 500+ daily active users by owning end-to-end full-stack development, from prompt intake to live deployment.",
      "Cut full-stack build time from 15 minutes to 8 minutes by architecting the AI application generation pipeline and deployment orchestration end-to-end.",
      "Reduced sandboxed AI code execution cold-start latency from ~3s to ~100ms by building a pre-warming strategy, streaming results to the frontend via Redis Pub/Sub and WebSockets.",
      "Hardened the platform's core execution layer against unsafe agent behavior by shipping input/output sanitization, action-level blocking, and loop detection from day one."
    ]
  },
  {
    company: "OmniqAI",
    role: "Software Engineer",
    timeframe: "August 2022 – December 2025",
    logo: "/Omniqai.png",
    tech: ["Python", "FastAPI", "Next.js", "PostgreSQL", "pgvector", "LangChain", "MCP", "Redis", "WebSockets", "Docker", "Kubernetes", "AWS", "Razorpay"],
    bullets: [
      "Powered automated multi-step reporting workflows for an AI workflow platform by designing the 0→1 backend architecture, including scalable Python/FastAPI services, PostgreSQL schemas, and REST APIs on top of LangChain-based RAG pipelines and vector databases.",
      "Delivered an AI-powered collaborative documentation platform (Confluence-style) by building a Python/FastAPI backend with RAG, pgvector, semantic search, document sharing, and agent-friendly indexing.",
      "Expanded platform capability for secure AI-agent/internal-tool interaction by building and integrating internal Model Context Protocol (MCP) servers on FastAPI.",
      "Cut perceived API response time by 30% by redesigning LLM job handling with Redis queues and FastAPI WebSocket status updates.",
      "Delivered real-time workflow visibility by building the Next.js frontend with WebSocket-based status updates and analytics dashboards, tightly integrated with the FastAPI backend's job state.",
      "Reduced hot-path query latency by 40% and eliminated connection exhaustion under peak load by resolving production DB bottlenecks with PgBouncer pooling and PostgreSQL partial indexes.",
      "Enabled secure, reliable payments by integrating the Razorpay payment gateway with webhook signature verification and idempotent transaction processing.",
      "Achieved zero-downtime deployments by contributing to the on-prem → AWS migration using Docker and Kubernetes/EKS."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "OctaClaw",
    subtitle: "Multi-Agent Orchestration Platform",
    bullets: [
      "Enabled parallel execution of complex goals by designing a full-stack multi-agent system that breaks goals into a dependency graph and runs subtasks across specialist agents for research, code generation, review, and testing.",
      "Extended agent capability to external systems by building tool integrations for filesystem, HTTP, email, databases, and Jira.",
      "Implemented local-first semantic and episodic memory with vector search and automated reflexion to improve execution reliability over time.",
      "Engineered durable checkpointing to allow long-running DAG tasks to resume cleanly after interruptions."
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "Multi-Agent Systems",
      "LLM Orchestration",
      "Vector Search",
      "Tool Integrations"
    ],
    links: [
      { label: "View repo", href: "https://github.com/Sohail-9" }
    ]
  },
  {
    title: "TraceFox AI",
    subtitle: "AI-Powered Code Review & Test Platform",
    bullets: [
      "Designed end-to-end automated PR analysis and test generation with FastAPI microservices, LLM orchestration, structured event buses, and drift/compliance detection.",
      "Engineered API gateway and dynamic service registry with retries, circuit breakers, and async task state management.",
      "Built real-time Next.js analytics dashboard streaming live review data, test artifacts, and root-cause analysis (RCA) correlation via WebSockets.",
      "Deployed multi-cloud infrastructure with Docker and Terraform for secure token/session isolation and end-to-end tracing."
    ],
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "Redis",
      "PostgreSQL",
      "Docker",
      "LLMs",
      "Terraform"
    ],
    links: [
      { label: "View repo", href: links.tracefoxRepo }
    ]
  }
];
