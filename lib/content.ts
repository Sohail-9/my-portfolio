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

export type SkillCategory = "AI / LLM" | "Backend" | "Frontend" | "Cloud / DevOps" | "Databases";

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
  role: "Full-Stack AI Engineer",
  subtitle: "Full-stack AI engineer with 3+ years building production systems. Specializing in React / Next.js, Node.js, Python, PostgreSQL, LLM orchestration, and RAG pipelines."
};

export const about = {
  heading: "About Me",
  specializations: [
    {
      title: "AI & Agentic Systems",
      description: "Multi-agent orchestration, LangChain RAG pipelines, pgvector semantic search, and internal MCP servers."
    },
    {
      title: "Full-Stack Platforms",
      description: "Production 0→1 web applications with React, Next.js, Python, and Node.js microservices streaming live state via WebSockets."
    },
    {
      title: "Scale & Infrastructure",
      description: "Pre-warmed sandboxed execution environments (<100ms), PgBouncer connection pooling, and AWS EKS zero-downtime deployments."
    }
  ]
};

export const skills: Skill[] = [
  // AI / LLM
  { key: "rag", label: "RAG", category: "AI / LLM" },
  { key: "multiagent", label: "Multi-Agent Systems", category: "AI / LLM" },
  { key: "llmorchestration", label: "LLM Orchestration", category: "AI / LLM" },
  { key: "mcp", label: "MCP", category: "AI / LLM" },
  { key: "openai", label: "OpenAI", category: "AI / LLM" },
  { key: "anthropic", label: "Anthropic", category: "AI / LLM" },
  { key: "gemini", label: "Gemini", category: "AI / LLM" },

  // Backend
  { key: "typescript", label: "TypeScript", category: "Backend" },
  { key: "nodejs", label: "Node.js", category: "Backend" },
  { key: "python", label: "Python", category: "Backend" },
  { key: "restapi", label: "REST APIs", category: "Backend" },
  { key: "websockets", label: "WebSockets", category: "Backend" },
  { key: "microservices", label: "Microservices", category: "Backend" },

  // Frontend
  { key: "react", label: "React", category: "Frontend" },
  { key: "nextjs", label: "Next.js", category: "Frontend" },

  // Cloud / DevOps
  { key: "aws", label: "AWS", category: "Cloud / DevOps" },
  { key: "docker", label: "Docker", category: "Cloud / DevOps" },
  { key: "kubernetes", label: "Kubernetes", category: "Cloud / DevOps" },
  { key: "cicd", label: "CI/CD", category: "Cloud / DevOps" },

  // Databases
  { key: "postgres", label: "PostgreSQL", category: "Databases" },
  { key: "redis", label: "Redis", category: "Databases" },
  { key: "mongodb", label: "MongoDB", category: "Databases" },
  { key: "pgvector", label: "pgvector", category: "Databases" }
];

export const experience: ExperienceEntry[] = [
  {
    company: "PrettiFlow",
    role: "Founding Engineer",
    timeframe: "Jan 2026 – Present",
    location: "Remote — San Francisco, USA",
    logo: "/pretti.png",
    tech: ["React", "Next.js", "Node.js", "Python", "Redis", "WebSockets", "Docker", "AWS", "CLI"],
    bullets: [
      "Built a full-stack AI platform that turns natural-language prompts into deployed applications, scaling to 4,000+ beta users and 500+ daily active users.",
      "Cut full-stack build time from 15 minutes to 8 minutes by redesigning the pipeline from prompt intake, code generation, provisioning, to live deployment.",
      "Reduced cold-start latency from ~3 seconds to ~100ms by building a pre-warmed sandboxed code execution environment, streaming results to frontend using Redis Pub/Sub and WebSockets.",
      "Built a cross-platform CLI covering infrastructure provisioning, deployment automation, and AI-assisted development workflows.",
      "Added safety guardrails directly into the execution layer: input/output sanitization, action-level blocking, and loop detection."
    ]
  },
  {
    company: "OmniqAI",
    role: "Software Engineer",
    timeframe: "Jan 2023 – Dec 2025",
    location: "Bengaluru, India",
    logo: "/Omniqai.png",
    tech: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "pgvector", "LangChain", "MCP", "Redis", "WebSockets", "Docker", "Kubernetes", "AWS", "Razorpay"],
    bullets: [
      "Designed backend from the ground up for an AI workflow platform, building services, PostgreSQL schemas, and REST APIs powering automated multi-step reporting using LangChain-based RAG pipelines.",
      "Built the Next.js frontend and implemented real-time workflow status using WebSockets, directly tied to backend job state.",
      "Built a Confluence-style collaborative documentation platform using RAG, pgvector semantic search, and document sharing.",
      "Built internal MCP servers allowing AI agents to securely call internal tools.",
      "Reduced perceived API response time by 30% by moving LLM job handling to Redis queues and WebSocket-based status updates.",
      "Reduced hot-path query latency by 40% and eliminated connection exhaustion under peak load using PgBouncer pooling and PostgreSQL partial indexes.",
      "Integrated Razorpay with signature-verified webhooks and idempotent transaction processing.",
      "Helped migrate infrastructure from on-prem to AWS using Docker and Kubernetes / EKS, enabling zero-downtime deployments."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "OctaClaw",
    subtitle: "Multi-Agent Orchestration Platform",
    bullets: [
      "Built a multi-agent system that splits complex goals into a dependency graph and runs subtasks in parallel across specialist agents for research, code generation, review, and testing.",
      "Built tool integrations for filesystem, HTTP, email, databases, and Jira, allowing agents to act directly on external systems."
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "Multi-Agent Systems",
      "LLM Orchestration",
      "MCP",
      "Tool Integrations"
    ],
    links: [
      { label: "View GitHub", href: "https://github.com/Sohail-9" }
    ]
  }
];
