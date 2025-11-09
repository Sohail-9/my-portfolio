import React from "react";

const summaryPoints = [
  "Each build is production-minded with clear links for deeper dives.",
  "AI agents, automation, and platform tooling that teams can trust.",
];

const projectThemes = {
  "TraceFox AI": {
    badge: "border-emerald-300/30 bg-emerald-400/10 text-emerald-100",
    glow: "hover:border-emerald-300/40 hover:shadow-emerald-400/20",
  },
  SkinAI: {
    badge: "border-sky-300/30 bg-sky-400/10 text-sky-100",
    glow: "hover:border-sky-300/40 hover:shadow-sky-400/20",
  },
  "Docker Automation Platform": {
    badge: "border-purple-300/30 bg-purple-400/10 text-purple-100",
    glow: "hover:border-purple-300/40 hover:shadow-purple-400/20",
  },
};

const projects = [
  {
    id: 1,
    title: "TraceFox AI",
    subtitle: "AI-powered code review and test platform.",
    description:
      "FastAPI orchestrates modular services, webhooks, and async pipelines for pull-request analysis, automated test generation, and compliance drift detection. A Next.js mission control streams live telemetry.",
    outcome:
      "Automated multi-cloud setup, AI review flows, and execution artefacts—giving teams instant feedback and structured RCA.",
    tech: [
      "FastAPI",
      "Python",
      "Next.js",
      "Redis",
      "Postgres",
      "Neo4j",
      "Qdrant",
      "Terraform",
      "Docker",
    ],
    link: "https://github.com/Sohail-9/TraceFox-AI",
  },
  {
    id: 2,
    title: "SkinAI",
    subtitle: "Dermatology triage powered by responsible AI.",
    description:
      "CNN ensemble + FastAPI backend with a reassuring UI that keeps clinicians in the loop.",
    outcome: "Delivers guidance in 1.7s with guardrails and encrypted storage throughout.",
    tech: ["React", "TypeScript", "FastAPI", "OpenCV"],
    link: "https://github.com/Sohail-9/SkinAI",
  },
  {
    id: 3,
    title: "Docker Automation Platform",
    subtitle: "Operations console for 120+ containers.",
    description:
      "Self-service control plane covering provisioning, health, and runtime changes with RBAC.",
    outcome: "Lowered MTTR to 15 minutes while enabling squads to ship independently.",
    tech: ["React", "Node.js", "Docker SDK", "AWS"],
    link: "https://github.com/Sohail-9/Docker-Automation",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" name="portfolio" className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Selected work
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          AI platforms, automation tooling, and delivery systems worth talking about.
        </h2>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-300 sm:text-base">
          {summaryPoints.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </header>

      <div className="space-y-6">
        {projects.map(({ id, title, subtitle, description, outcome, tech, link }) => (
          <article
            key={id}
            className={`group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/40 backdrop-blur transition ${projectThemes[title]?.glow ?? "hover:border-cyan-300/40"}`}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] ${projectThemes[title]?.badge ?? "border-cyan-300/30 bg-cyan-400/10 text-cyan-100"}`}
                >
                  <span className="h-2 w-2 rounded-full bg-current animate-pulse-slow" />
                  {subtitle}
                </span>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 transition hover:text-white"
                >
                  View project
                  <span className="inline-block h-1 w-4 translate-y-[1px] rounded-full bg-slate-400 transition group-hover:w-6 group-hover:bg-white" />
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">{description}</p>
              </div>

              <p className="text-sm font-medium text-white/90">{outcome}</p>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
              {tech.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] tracking-[0.3em] transition group-hover:border-white/30"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
