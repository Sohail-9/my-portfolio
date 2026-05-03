import { links } from "./links";

export type ExperienceEntry = {
  company: string;
  role: string;
  timeframe: string;
  bullets: string[];
  logo?: string;
};

export type Skill = {
  key: string;
  label: string;
  category: "Languages" | "AI & LLM" | "Backend" | "Infra";
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
};

export const hero = {
  title: "Hello, I’m Sohail Shaik",
  subtitle: "I’m a Software Engineer",
  ctaText: "View my CV"
};

export const about = {
  heading: "About me",
  body:
    "I’m a Software Engineer focused on architecting autonomous agent platforms and full-stack AI generation systems. I specialize in building multi-agent orchestration layers, secure sandboxed execution environments, and scalable cloud infrastructure. Recently, I've been leading the core architecture at Prettiflow, designing foundational systems for autonomous workflows and one-click application deployment."
};

export const skills: Skill[] = [
  { key: "python", label: "Python", category: "Languages" },
  { key: "typescript", label: "TypeScript", category: "Languages" },
  { key: "cpp", label: "C++", category: "Languages" },
  { key: "node", label: "Node.js", category: "Backend" },
  { key: "fastapi", label: "FastAPI", category: "Backend" },
  { key: "nextjs", label: "Next.js", category: "Backend" },
  { key: "postgres", label: "PostgreSQL", category: "Backend" },
  { key: "mongo", label: "MongoDB", category: "Backend" },
  { key: "redis", label: "Redis", category: "Backend" },
  { key: "kafka", label: "Kafka", category: "Backend" },
  { key: "rabbitmq", label: "RabbitMQ", category: "Backend" },
  { key: "grpc", label: "gRPC", category: "Backend" },
  { key: "neo4j", label: "Neo4j", category: "Backend" },
  { key: "llm", label: "LLMs", category: "AI & LLM" },
  { key: "rag", label: "RAG", category: "AI & LLM" },
  { key: "agenticai", label: "Agentic AI", category: "AI & LLM" },
  { key: "orchestration", label: "Agent Orchestration", category: "AI & LLM" },
  { key: "mcp", label: "MCP", category: "AI & LLM" },
  { key: "aws", label: "AWS", category: "Infra" },
  { key: "docker", label: "Docker", category: "Infra" },
  { key: "kubernetes", label: "Kubernetes", category: "Infra" },
  { key: "terraform", label: "Terraform", category: "Infra" },
  { key: "githubactions", label: "GitHub Actions", category: "Infra" },
  { key: "prometheus", label: "Prometheus", category: "Infra" },
  { key: "grafana", label: "Grafana", category: "Infra" },
  { key: "linux", label: "Linux", category: "Infra" },
  { key: "nginx", label: "Nginx", category: "Infra" },
  { key: "git", label: "Git/GitHub", category: "Infra" }
];

export const experience: ExperienceEntry[] = [
  {
    company: "Prettiflow",
    role: "Founding Engineer",
    timeframe: "February 2026 – Present",
    logo: "/pretti.png",
    bullets: [
      "Architected the core platform for AI-generated full-stack applications and one-click deployment.",
      "Built the multi-agent orchestration and multi-model routing layer powering autonomous execution.",
      "Designed the platform for secure sandboxed code execution and isolated multi-tenant workspaces.",
      "Led development of scalable deployment infrastructure across AWS and automated app provisioning.",
      "Built foundational systems for skill-based agents, workspace databases, and real-time platform runtime.",
      "Owned platform reliability, DevOps, and core architecture for scalable production systems.",
      "Architected extensible skill systems for structured planning and complex autonomous workflows."
    ]
  },
  {
    company: "OmniqAI",
    role: "Software Engineer",
    timeframe: "January 2025 – December 2025",
    logo: "/Omniqai.png",
    bullets: [
      "Architected high-concurrency async APIs (FastAPI) and real-time WebSocket services for distributed workloads.",
      "Built RAG + semantic pipelines and vector search to power intelligent decision support.",
      "Developed autonomous interview agents: resume parsing, behavioral analysis, code evaluation, multi-step reasoning with memory.",
      "Optimized PostgreSQL/MongoDB/Redis (pooling, caching, schema migrations) with zero-downtime deploys.",
      "Migrated infra to Kubernetes on AWS; Dockerized workloads; Helm; HPA; secured VPC.",
      "Implemented queues and async workflows (Redis/RabbitMQ).",
      "CI/CD with GitHub Actions (zero-downtime releases, automated tests/migrations), cutting deploy time ~40%.",
      "IaC with CloudFormation across EKS/EC2/VPC/IAM/S3/Secrets Manager.",
      "Full observability: Prometheus, Grafana, central logging, distributed tracing.",
      "Reduced infra costs ~20% while improving resilience; led incident response & performance tuning."
    ]
  },
  {
    company: "OmniqAI",
    role: "Software Engineer Intern",
    timeframe: "August 2024 – December 2024",
    logo: "/Omniqai.png",
    bullets: [
      "Built/maintained Python microservices and production REST APIs.",
      "Shipped monitoring/alerting with Prometheus/Grafana, cutting MTTD ~30% and improving response times."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Octaclaw",
    subtitle: "Multi-Agent Orchestration Platform",
    bullets: [
      "Built a multi-agent orchestration engine that decomposes goals into DAGs and executes subtasks in parallel with a worker pool.",
      "Implemented specialist agent routing (Researcher, Builder, Tester, CodeReviewer) with role-specific prompts and tool-augmented workflows.",
      "Delivered local-first semantic + episodic memory with vector search and automated reflexion to improve task outcomes over time.",
      "Added durable checkpointing so long-running graph executions can resume after interruption without data loss.",
      "Shipped multi-channel interfaces (CLI, Discord, Telegram) via a unified channel router and daemon runtime."
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "LLMs",
      "Vector Search",
      "CLI",
      "Discord API",
      "Telegram API"
    ],
    links: [
      { label: "View repo", href: "" }
    ]
  },
  {
    title: "TraceFox AI",
    subtitle: "AI-Powered Code Review & Test Platform",
    bullets: [
      "End-to-end quality workflow orchestrated with FastAPI: webhooks, modular services, pipeline eventing for PR analysis, test generation, RCA, compliance, drift detection.",
      "API gateway + dynamic service registry; retries/circuit breakers; structured event bus for decoupling.",
      "Automated GitHub repo onboarding (clone/index), async task tracking, persistent state.",
      "AI review & test generation with DeepSeek R1 and Gemma-3 27B-IT; deterministic JSON parsing; fallbacks; intelligent caching.",
      "Next.js dashboard: real-time review data, test artifacts, RCA correlation, drift/compliance views.",
      "Multi-cloud deploy with Docker Compose + Terraform; secure token/session; end-to-end logging."
    ],
    tech: [
      "Python",
      "FastAPI",
      "Node.js",
      "Next.js",
      "Redis",
      "PostgreSQL",
      "SQLite",
      "Terraform",
      "Docker",
      "GitHub API",
      "LLMs"
    ],
    links: [
      { label: "View repo", href: links.tracefoxRepo }
    ]
  }
];

export const footer = {
  text: "Made with ❤️ by Sohail Shaik"
};
