import React from "react";

const stats = [
  { id: 1, label: "Multi-cloud delivery", value: "AWS · Linode · Kubernetes" },
  { id: 2, label: "Release velocity", value: "40% faster" },
  { id: 3, label: "Cost optimisation", value: "↓ 20% cloud spend" },
];

const principles = [
  {
    id: 1,
    title: "Design with intent",
    body: "Start with the user need, surface the risks, then craft the system boundaries and guardrails before writing code.",
  },
  {
    id: 2,
    title: "Own the platform",
    body: "Datastores, infra, APIs, and the UI state: treating the stack as one system keeps feedback loops fast and calm.",
  },
  {
    id: 3,
    title: "Bias for observability",
    body: "Traces, metrics, and semantic logs ensure every release is explainable, reversible, and safe to iterate on.",
  },
];

const timeline = [
  {
    id: 1,
    period: "Jan 2025 — Present",
    role: "Software Development Engineer · OmniqAI",
    points: [
      "Architected and developed scalable Python backends using ASGI (Uvicorn) and async patterns for high concurrency.",
      "Designed RESTful APIs and Socket.IO real-time services backed by Redis pub/sub for horizontal scalability.",
      "Managed PostgreSQL and Redis with pooling, read replicas, caching, and zero-downtime Alembic migrations.",
      "Implemented Celery task processing through Redis and RabbitMQ with idempotency, retries, and priority queues.",
      "Integrated Prometheus, Grafana, OpenTelemetry, and centralized logging (ELK/Loki) for end-to-end observability.",
      "Built GitHub Actions CI/CD pipelines delivering zero-downtime releases and reducing deployment time by 40%.",
      "Created Helm charts with HPA, readiness probes, and tuned container resources for production EKS clusters.",
      "Migrated on-premises workloads to AWS EKS while administering EC2, VPC, IAM, S3, CloudWatch, and Secrets Manager.",
      "Automated infrastructure provisioning with Terraform and CloudFormation for repeatable environments.",
      "Collaborated with development and operations to troubleshoot production issues, optimize performance, and drive disaster recovery drills.",
    ],
  },
  {
    id: 2,
    period: "Aug 2024 — Dec 2024",
    role: "Software Development Engineering Intern · OmniqAI",
    points: [
      "Shipped Python microservices and REST APIs supporting AI production workloads.",
      "Implemented Grafana + Prometheus monitoring that reduced incident response time by 30%.",
      "Maintained alerting, dashboards, and health reports that informed platform decisions.",
    ],
  },
];

const About = () => {
  return (
    <section id="about" name="about" className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          About
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Backend and infrastructure engineer shaping pragmatic AI platforms.
        </h2>
      </header>

      <div className="grid gap-12 md:grid-cols-[1.3fr,1fr]">
        <div className="space-y-6 text-base leading-relaxed text-slate-300 sm:text-lg">
          <p>
            I’m Sohail, a backend engineer who lives close to DevOps. I take Python services from
            idea to production, automate how they ship, and keep the run-time measured and boring.
            Recent work spans retrieval-augmented agents, multi-cloud migrations, and tooling that
            lets teams ship without stress.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map(({ id, label, value }) => (
              <div key={id} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-slate-900/40 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                  {label}
                </p>
                <p className="mt-2 text-sm font-medium text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/40 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Principles
          </p>
          <ul className="space-y-5 text-sm leading-relaxed text-slate-200">
            {principles.map(({ id, title, body }) => (
              <li key={id}>
                <p className="font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm text-slate-300">{body}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          Experience
        </p>
        <div className="relative pl-10">
          <span className="absolute left-3 top-5 h-full w-px bg-white/10" />
          {timeline.map(({ id, period, role, points }, index) => {
            const isLast = index === timeline.length - 1;
            return (
              <div key={id} className="relative pb-10 last:pb-0">
                <span
                  className={`absolute left-0 top-4 h-3 w-3 -translate-x-1/2 rounded-full border border-white/40 bg-white/20 shadow-[0_0_12px_rgba(148,163,184,0.5)] ${
                    isLast
                      ? ""
                      : "after:absolute after:left-1/2 after:top-3 after:h-[calc(100%-0.75rem)] after:w-px after:-translate-x-1/2 after:bg-white/10 after:content-['']"
                  }`}
                />
                <article className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 shadow-lg shadow-slate-900/40 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {period}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-white">{role}</h3>
                  <ul className="mt-4 space-y-2 leading-relaxed text-slate-300">
                    {points.map((point, bulletIndex) => (
                      <li key={bulletIndex}>• {point}</li>
                    ))}
                  </ul>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
