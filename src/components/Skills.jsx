import React, { useState } from "react";

const skillCategories = [
  {
    id: 1,
    title: "Languages",
    items: ["Python", "TypeScript", "C++"],
  },
  {
    id: 2,
    title: "Backend & Cloud",
    items: [
      "FastAPI",
      "Node.js",
      "Kubernetes",
      "Docker",
      "Helm",
      "Terraform",
      "AWS",
      "Linode",
    ],
  },
  {
    id: 3,
    title: "Data & Messaging",
    items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "MinIO", "Qdrant"],
  },
  {
    id: 4,
    title: "DevOps & Observability",
    items: [
      "GitHub Actions",
      "GitOps",
      "Prometheus",
      "Grafana",
      "Loki",
      "OpenTelemetry",
      "Postman",
      "MCP",
    ],
  },
];

const operatingPrinciples = [
  "Infrastructure-as-code keeps releases reproducible and auditable.",
  "Observability, alerts, and runbooks land in the same sprint as new services.",
  "Automation, testing, and docs make platform changes safe for any engineer.",
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  return (
    <section id="skills" name="skills" className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Skills & tooling
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          The stack I lean on to build AI platforms end-to-end.
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          From codifying infrastructure to wiring retrieval-augmented agents, these are the tools
          and habits I reach for to keep systems observable, secure, and fast to evolve.
        </p>
      </header>

      <div className="space-y-3">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-500">
          Tap a stack to spotlight it
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map(({ id, title, items }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveCategory(id)}
              onMouseEnter={() => setActiveCategory(id)}
              className={`group h-full rounded-3xl border bg-white/5 p-6 text-left shadow-lg shadow-slate-900/40 backdrop-blur transition ${
                activeCategory === id
                  ? "border-cyan-300/40 shadow-cyan-400/20"
                  : "border-white/10 hover:border-cyan-200/30"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                  activeCategory === id ? "text-cyan-200" : "text-slate-400 group-hover:text-cyan-100"
                }`}
              >
                {title}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm font-medium text-slate-100">
                {items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full border bg-white/5 px-3 py-1 text-[0.75rem] uppercase tracking-[0.2em] transition ${
                      activeCategory === id ? "border-cyan-300/40 text-cyan-100" : "border-white/10"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/40 backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          Operating principles
        </p>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200">
          {operatingPrinciples.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
