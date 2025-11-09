import { links } from "./links";

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  timeframe: string;
  bullets: string[];
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
  subtitle: "I’m a Backend Engineer",
  ctaText: "View my CV"
};

export const about = {
  heading: "About me",
  body:
    "I’m a backend engineer focused on building scalable, resilient systems and AI-powered developer platforms. I’ve designed high-concurrency APIs, real-time WebSocket services, and RAG pipelines, and I enjoy solving hard problems across infra, data, and developer experience. Recently I’ve been architecting agents for resume/code analysis, tightening CI/CD, and pushing observability to ship faster and safer."
};

export const present = {
  heading: "Present",
  body:
    "I’m currently a Backend Engineer at OmniqAI (Jan 2025–Present), working on Python/FastAPI, async, RAG, agents, and Kubernetes on AWS. I’m open to collaborations and interesting backend/AI infra problems—let’s build.",
  ctaText: "Contact me"
};

export const skills: SkillGroup[] = [
  {
    category: "Backend & APIs",
    items: ["Python (FastAPI, Flask, asyncio)", "Node.js", "REST", "WebSockets"]
  },
  {
    category: "Systems & Architecture",
    items: ["Distributed Systems", "Microservices", "System Design"]
  },
  {
    category: "Datastores",
    items: [
      "PostgreSQL (read replicas, pooling)",
      "MongoDB",
      "Redis (cache, pub/sub)",
      "RabbitMQ",
      "Neo4j"
    ]
  },
  {
    category: "Cloud & Infra",
    items: ["AWS (EKS, EC2, VPC, IAM, S3, CloudWatch, Secrets Manager)"]
  },
  {
    category: "Containers & Orchestration",
    items: ["Docker", "Kubernetes (Helm, HPA, probes)"]
  },
  {
    category: "DevOps & CI/CD",
    items: ["GitHub Actions", "GitOps", "IaC (Terraform, CloudFormation)", "Prometheus", "Grafana"]
  },
  {
    category: "Languages & Tools",
    items: ["Python", "TypeScript", "C++", "Shell", "SQL", "Linux", "Git/GitHub"]
  }
];

export const experience: ExperienceEntry[] = [
  {
    company: "OmniqAI",
    role: "Backend Engineer",
    timeframe: "January 2025 – Present",
    bullets: [
      "Architected high-concurrency async APIs (FastAPI) and real-time WebSocket services for distributed workloads.",
      "Built RAG + semantic pipelines and vector search to power intelligent decision support.",
      "Developed autonomous interview agents: resume parsing, behavioral analysis, code evaluation, multi-step reasoning with memory.",
      "Optimized PostgreSQL/MongoDB/Redis (pooling, caching, schema migrations) with zero-downtime deploys.",
      "Migrated infra to Kubernetes on AWS; Dockerized workloads; Helm; HPA; secured VPC.",
      "Implemented queues and async workflows (Redis/RabbitMQ + Celery).",
      "CI/CD with GitHub Actions (zero-downtime releases, automated tests/migrations), cutting deploy time ~40%.",
      "IaC with Terraform/CloudFormation across EKS/EC2/VPC/IAM/S3/Secrets Manager.",
      "Full observability: Prometheus, Grafana, central logging, distributed tracing.",
      "Reduced infra costs ~20% while improving resilience; led incident response & performance tuning."
    ]
  },
  {
    company: "OmniqAI",
    role: "Backend Engineer Intern",
    timeframe: "August 2024 – December 2024",
    bullets: [
      "Built/maintained Python microservices and production REST APIs.",
      "Shipped monitoring/alerting with Prometheus/Grafana, cutting MTTD ~30% and improving response times."
    ]
  }
];

export const projects: Project[] = [
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
      "Neo4j",
      "SQLite",
      "Terraform",
      "Docker",
      "GitHub API",
      "LLMs"
    ],
    links: [
      { label: "Watch demo", href: links.tracefoxDemo },
      { label: "View repo", href: links.tracefoxRepo }
    ]
  }
];

export const footer = {
  text: "Made with ❤️ by Sohail Shaik"
};
