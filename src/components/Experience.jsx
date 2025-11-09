import React from "react";

const capabilities = [
  {
    id: 1,
    title: "Backend systems & APIs",
    description:
      "Design modular services, resilient gateways, and event-driven pipelines with retries, circuit breakers, and structured logging.",
    highlights: ["FastAPI orchestration", "Node.js service mesh", "Async workflow engines"],
  },
  {
    id: 2,
    title: "Cloud & infrastructure automation",
    description:
      "Codify multi-cloud Kubernetes, VPC security, and GitOps delivery using Terraform, Helm, and automated observability.",
    highlights: ["Helm + Terraform stacks", "GitOps & GitHub Actions", "Service mesh hardening"],
  },
  {
    id: 3,
    title: "AI platforms & data foundations",
    description:
      "Blend RAG, knowledge graphs, vector search, and model observability to deliver pragmatic, reviewable AI assistants.",
    highlights: ["RAG agents", "Qdrant + Neo4j knowledge layers", "DeepSeek & Gemma integrations"],
  },
];

const wins = [
  {
    id: 1,
    label: "Release cycles",
    detail: "↓ 40% via GitOps automation and safe rollback playbooks.",
  },
  {
    id: 2,
    label: "Cloud spend",
    detail: "↓ 20% by tuning container orchestration and resource policies.",
  },
  {
    id: 3,
    label: "Incident response",
    detail: "↓ 30% after instrumenting Grafana, Prometheus, and alerting pipelines.",
  },
];

const Experience = () => {
  return (
    <section id="experience" name="experience" className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Experience
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Backend engineering with DevOps instincts—resilient AI platforms end to end.
        </h2>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {capabilities.map(({ id, title, description, highlights }) => (
          <article
            key={id}
            className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/40 backdrop-blur"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-200">{description}</p>
            </div>
            <ul className="mt-6 space-y-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              {highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/40 backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          Recent wins
        </p>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200">
          {wins.map(({ id, label, detail }) => (
            <li key={id}>
              <span className="font-semibold text-white">{label}:</span> {detail}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
