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

export type SkillCategory = "Data Engineering" | "AI & LLM" | "Databases" | "Cloud & Infrastructure";

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
  role: "Data & AI Engineer",
  subtitle: "I design high-throughput data pipelines and dimensional warehouses that don't fall over at 3 AM. Deep SQL, idempotent Airflow DAGs, Apache Spark, strict SCD Type 2 modeling, and low-latency pgvector RAG systems."
};

export const about = {
  heading: "About Me",
  specializations: [
    {
      title: "Deterministic Pipelines & Distributed ETL",
      description: "Pipelines must be idempotent by default. If a DAG fails halfway through 50M records, rerunning it should never create duplicates or orphan staging tables. I orchestrate with Airflow, process with Spark/Databricks, and build self-healing backfills with stored watermarks."
    },
    {
      title: "Dimensional Warehousing & Deep SQL",
      description: "Postgres and Oracle tuning at the execution plan level. I design Star Schemas where fact tables record granular transactional truth and dimensions track history via SCD Type 1/2. No leaky abstractions: PgBouncer pooling, composite partial indexing, and sub-10ms analytic queries."
    },
    {
      title: "Governed RAG & Agent Systems",
      description: "RAG is only as good as the underlying data layer. I bridge dimensional data stores to LLMs using pgvector semantic search and Model Context Protocol (MCP) servers with strict read-only execution guardrails—so agents query verified numbers, not hallucinations."
    }
  ]
};

export const skills: Skill[] = [
  // Data Engineering
  { key: "sql", label: "SQL & PL/SQL", category: "Data Engineering" },
  { key: "informatica", label: "Informatica IICS/IDMC", category: "Data Engineering" },
  { key: "airflow", label: "Apache Airflow", category: "Data Engineering" },
  { key: "spark", label: "Apache Spark", category: "Data Engineering" },
  { key: "databricks", label: "Databricks", category: "Data Engineering" },
  { key: "starschema", label: "Star Schema Modeling", category: "Data Engineering" },
  { key: "scd2", label: "SCD Type 1/2", category: "Data Engineering" },
  { key: "etl", label: "Incremental ETL / ELT", category: "Data Engineering" },

  // AI & LLM
  { key: "rag", label: "RAG Pipelines", category: "AI & LLM" },
  { key: "llmorchestration", label: "LLM Orchestration", category: "AI & LLM" },
  { key: "pgvector", label: "pgvector", category: "AI & LLM" },
  { key: "mcp", label: "Model Context Protocol (MCP)", category: "AI & LLM" },
  { key: "langchain", label: "LangChain", category: "AI & LLM" },
  { key: "models", label: "OpenAI / Anthropic", category: "AI & LLM" },

  // Databases
  { key: "oracle", label: "Oracle Database", category: "Databases" },
  { key: "postgres", label: "PostgreSQL", category: "Databases" },
  { key: "pgbouncer", label: "PgBouncer", category: "Databases" },
  { key: "redis", label: "Redis", category: "Databases" },
  { key: "mongodb", label: "MongoDB", category: "Databases" },

  // Cloud & Infrastructure
  { key: "python", label: "Python", category: "Cloud & Infrastructure" },
  { key: "docker", label: "Docker", category: "Cloud & Infrastructure" },
  { key: "kubernetes", label: "Kubernetes / EKS", category: "Cloud & Infrastructure" },
  { key: "aws", label: "AWS", category: "Cloud & Infrastructure" },
  { key: "cicd", label: "CI/CD Pipelines", category: "Cloud & Infrastructure" },
  { key: "restapi", label: "REST APIs & WebSockets", category: "Cloud & Infrastructure" }
];

export const experience: ExperienceEntry[] = [
  {
    company: "PrettiFlow",
    role: "Founding Data Engineer",
    timeframe: "Jan 2026 – Present",
    location: "Remote — San Francisco, USA",
    logo: "/pretti.png",
    tech: ["Python", "Airflow", "PostgreSQL", "Redis", "Docker", "AWS", "WebSockets", "CLI"],
    bullets: [
      "Engineered the distributed execution pipeline converting natural-language requirements into containerized running services, scaling from zero to 4,000+ beta users and 500+ DAU.",
      "Cut end-to-end pipeline build latency from 15m to 8m (46% improvement) by profiling task bottlenecks, parallelizing topological dependency graphs, and aggressively caching intermediate layers.",
      "Reduced container cold-start latency from ~3s to ~100ms by architecting pre-warmed pool orchestration and low-latency Redis Pub/Sub event streaming.",
      "Automated developer infrastructure provisioning workflows and designed a cross-platform CLI for rapid local-to-cloud environment replication.",
      "Implemented execution-layer data governance and safety guardrails: AST-level query sanitization, action-level blocking, and infinite loop traps to prevent runaway compute."
    ]
  },
  {
    company: "OmniqAI",
    role: "Data Engineer – ETL & Data Warehousing",
    timeframe: "Jan 2023 – Dec 2025",
    location: "Bengaluru, India",
    logo: "/Omniqai.png",
    tech: ["Informatica IICS/IDMC", "SQL & PL/SQL", "Oracle", "PostgreSQL", "pgvector", "LangChain", "MCP", "Redis", "Docker", "AWS"],
    bullets: [
      "Built and maintained mission-critical Informatica IICS/IDMC mappings and taskflows integrating high-volume transactional streams into enterprise dimensional warehouses.",
      "Authored complex Oracle PL/SQL stored procedures and source-to-target mappings, managing multi-tier staging, fact, and dimension loads with strict SCD Type 1 & 2 history preservation.",
      "Engineered automated SQL reconciliation suites comparing source-vs-target row counts, check sums, and unmatched settlement anomalies—eliminating 95% of downstream reporting discrepancies.",
      "Tuned bottleneck queries across multi-million row tables: eliminated sequential table scans via targeted partial indexing and connection pool starvation using PgBouncer, cutting hot-path latency by 40%.",
      "Engineered enterprise RAG pipelines over dimensional PostgreSQL schemas, utilizing LangChain and custom prompt-grounding workflows for automated analytical reporting.",
      "Architected internal Model Context Protocol (MCP) server endpoints allowing autonomous LLMs to safely query operational schemas with parameterized validation."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Banking Transaction Pipeline & Financial RAG",
    subtitle: "High-Throughput Financial Ingestion, SCD Type 2 Star Schema & Grounded RAG",
    pipelineFlow: [
      "Raw Transactions",
      "Spark Deduplication",
      "Airflow Batch DAG",
      "PostgreSQL Star Schema (SCD 2)",
      "pgvector RAG Layer"
    ],
    bullets: [
      "Ingested simulated high-concurrency payment feeds and clearinghouse settlement files into isolated staging schemas with schema-on-read validation.",
      "Enforced deterministic incremental processing via stored watermark tracking and atomic database upserts, guaranteeing crash recovery with zero duplicate insertions.",
      "Architected a dimensional Star Schema in PostgreSQL with fact_transactions and dim_accounts / dim_merchants, implementing SCD Type 2 history tracking (valid_from, valid_to, is_current) for complete regulatory auditability.",
      "Built automated SQL reconciliation gates that assert record count parity and financial volume balance between source and warehouse, automatically quarantining mismatched records for investigation.",
      "Orchestrated self-healing Airflow DAGs with configurable task retry policies, automated backfilling, and failure alert webhooks.",
      "Mounted a conversational RAG analytics layer over the warehouse using pgvector, enabling natural-language querying of spend anomalies and historical trends with deterministic SQL verification."
    ],
    tech: [
      "SQL & PL/SQL",
      "Apache Airflow",
      "Apache Spark",
      "PostgreSQL",
      "Star Schema",
      "SCD Type 1/2",
      "Python",
      "pgvector",
      "LangChain",
      "Docker"
    ],
    links: [
      { label: "View GitHub", href: "https://github.com/Sohail-9" }
    ]
  },
  {
    title: "OctaClaw — Multi-Agent Task Orchestration Engine",
    subtitle: "Autonomous Goal Decomposition & Fault-Tolerant DAG Execution",
    pipelineFlow: [
      "Goal Decomposition",
      "Topological DAG Graph",
      "Parallel Agent Workers",
      "MCP Tool Execution"
    ],
    bullets: [
      "Architected a distributed multi-agent engine that decomposes complex engineering goals into topological dependency graphs (DAGs) and executes subtasks in parallel across specialized agents.",
      "Implemented transactional state persistence and checkpointing in PostgreSQL, allowing long-running execution graphs to survive process crashes and safely resume from the last known state.",
      "Engineered sandboxed Model Context Protocol (MCP) integrations for filesystem, HTTP, email, relational databases, and Jira with action-level authorization and dry-run validation."
    ],
    tech: [
      "Python",
      "TypeScript",
      "Multi-Agent Systems",
      "DAG Orchestration",
      "PostgreSQL",
      "MCP Tooling"
    ],
    links: [
      { label: "View GitHub", href: "https://github.com/Sohail-9" }
    ]
  }
];
