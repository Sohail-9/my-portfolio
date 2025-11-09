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

const focusAreas = [
  {
    id: 1,
    title: "Traceable AI agents",
    body: "Instrumented RAG, knowledge graphs, and guardrails so assistants stay explainable and reversible.",
  },
  {
    id: 2,
    title: "Delivery calm",
    body: "GitOps, progressive delivery, and rehearsed rollback drills keep releases boring even at peak traffic.",
  },
  {
    id: 3,
    title: "Infrastructure hygiene",
    body: "Terraform + Helm baselines with budgets, policies, and automated scorecards to prevent drift.",
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

      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          Focus for 2025
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map(({ id, title, body }) => (
            <article
              key={id}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200 shadow-lg shadow-slate-900/40 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {title}
              </p>
              <p className="mt-2 leading-relaxed text-slate-300">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
