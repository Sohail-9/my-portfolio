import React from "react";
import { FiExternalLink, FiGithub, FiPlay } from "react-icons/fi";

const sectionIntro = {
  eyebrow: "Projects",
  title: "Operator-grade platforms that keep AI workstreams reliable.",
  description:
    "Each build blends product thinking with infra discipline—ship fast, observe everything, and design for calm on-call rotations.",
};

const projects = [
  {
    id: 1,
    title: "TraceFox AI",
    tagline: "AI-assisted code review mission control",
    summary:
      "Async FastAPI services listen to GitHub events, spin up ephemeral runners, and stream Gemini-backed review notes, SLA checks, and RCA packets into one cockpit.",
    highlights: [
      "Multi-cloud agent orchestration with Terraform + Helm blueprints",
      "LLM prompt hub that explains every suggestion with trace IDs",
      "Playbooks and scorecards so releases stay auditable",
    ],
    tech: ["FastAPI", "Redis", "Neo4j", "Next.js", "Terraform", "Docker"],
    links: [
      {
        id: "demo-tracefox",
        href: "https://github.com/Sohail-9/TraceFox-AI#readme",
        label: "Demo",
        icon: FiPlay,
      },
      {
        id: "repo-tracefox",
        href: "https://github.com/Sohail-9/TraceFox-AI",
        label: "Code",
        icon: FiGithub,
      },
    ],
  },
  {
    id: 2,
    title: "SkinAI",
    tagline: "Responsible dermatology triage",
    summary:
      "CNN ensembles pair with a FastAPI backend and React front-end to triage cases in seconds while keeping clinicians in the loop with transparent confidence bands.",
    highlights: [
      "PII-safe storage with encrypted object stores",
      "Clinical review portal with audit-ready exports",
      "Inference latency held under 2 seconds on commodity GPUs",
    ],
    tech: ["React", "TypeScript", "FastAPI", "OpenCV", "Docker"],
    links: [
      {
        id: "live-skinai",
        href: "https://github.com/Sohail-9/SkinAI#readme",
        label: "Preview",
        icon: FiExternalLink,
      },
      {
        id: "repo-skinai",
        href: "https://github.com/Sohail-9/SkinAI",
        label: "Code",
        icon: FiGithub,
      },
    ],
  },
  {
    id: 3,
    title: "Docker Automation Platform",
    tagline: "Self-serve ops for 120+ containers",
    summary:
      "A React + Node control plane that lets squads launch, patch, and observe services without paging infra—complete with RBAC, audit logs, and GitOps hooks.",
    highlights: [
      "Runtime patching + health dashboards backed by Prometheus",
      "Safe rollout templates with automated smoke tests",
      "MTTR dropped to 15 minutes through guided remediation",
    ],
    tech: ["React", "Node.js", "Docker SDK", "AWS", "Prometheus"],
    links: [
      {
        id: "live-docker",
        href: "https://github.com/Sohail-9/Docker-Automation#readme",
        label: "Preview",
        icon: FiExternalLink,
      },
      {
        id: "repo-docker",
        href: "https://github.com/Sohail-9/Docker-Automation",
        label: "Code",
        icon: FiGithub,
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" name="portfolio" className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          {sectionIntro.eyebrow}
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">{sectionIntro.title}</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          {sectionIntro.description}
        </p>
      </header>

      <div className="grid gap-5 sm:gap-6">
        {projects.map(({ id, title, tagline, summary, highlights, tech, links }) => (
          <article
            key={id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-6 shadow-lg shadow-slate-900/50 backdrop-blur transition hover:border-white/20 hover:shadow-cyan-500/20"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-400">
                    {tagline}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {links.map(({ id: linkId, href, label, icon: Icon }) => (
                    <a
                      key={linkId}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200 transition hover:border-white/40 hover:bg-white/10"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{label}</span>
                      <span className="sm:hidden">{label.slice(0, 4)}</span>
                    </a>
                  ))}
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-200">{summary}</p>

              <ul className="space-y-2 text-sm text-slate-300">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
