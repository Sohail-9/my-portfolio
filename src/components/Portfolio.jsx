import React from "react";

import reactParallax from "../assets/portfolio/reactParallax.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const caseStudies = [
  {
    id: 1,
    title: "SkinAI",
    tagline: "Dermatology triage in seconds, powered by responsible AI.",
    context: "AI Healthcare · omniqAI Labs",
    summary:
      "A full-stack platform that classifies dermatological conditions, surfaces likely diagnoses, and guides users toward professional care—without replacing the clinician.",
    metrics: [
      { label: "Inference latency", value: "1.7s" },
      { label: "Condition coverage", value: "25+" },
      { label: "Human handoff", value: "Built-in" },
    ],
    highlights: [
      "Fine-tuned a CNN ensemble on curated dermatology datasets with precision guardrails.",
      "Designed a React + TypeScript interface that delivers risk-aware insights and triage next steps.",
      "Encrypted medical imagery at rest/in transit, aligning with healthcare data-handling guidelines.",
    ],
    tech: ["React", "TypeScript", "FastAPI", "MongoDB", "OpenCV"],
    image: reactParallax,
    demoLink: "https://github.com/Sohail-9/SkinAI",
    codeLink: "https://github.com/Sohail-9/SkinAI",
  },
  {
    id: 2,
    title: "Docker Automation Platform",
    tagline: "Single-pane control of every container in production.",
    context: "Platform Engineering · omniqAI",
    summary:
      "A self-service control plane that replaces ad-hoc scripts with real-time visibility, lifecycle automation, and team-wide guardrails for Docker workloads.",
    metrics: [
      { label: "MTTR reduction", value: "→ 15 min" },
      { label: "Fleet size", value: "120+ containers" },
      { label: "Deploy cadence", value: "Daily" },
    ],
    highlights: [
      "Automated container provisioning, health monitoring, and log streaming using Docker SDK.",
      "Implemented role-based access controls and Slack alerting to keep ops loops tight.",
      "Split React frontend and Node.js orchestration service into independently deployable units.",
    ],
    tech: ["React", "Node.js", "Express", "Docker SDK", "AWS"],
    image: installNode,
    demoLink: "https://github.com/Sohail-9/Docker-Automation",
    codeLink: "https://github.com/Sohail-9/Docker-Automation",
  },
  {
    id: 3,
    title: "Jenkins CI/CD Pipeline",
    tagline: "Cloud-native delivery from commit to Kubernetes rollout.",
    context: "DevOps · Personal Lab",
    summary:
      "An infrastructure as code playbook for provisioning Jenkins on AWS, wiring Docker agents, and shipping applications automatically to Kubernetes environments.",
    metrics: [
      { label: "Release prep", value: "↓ 60%" },
      { label: "Pipelines", value: "4 stages" },
      { label: "Rollback", value: "1-click" },
    ],
    highlights: [
      "Provisioned Jenkins on hardened EC2 instances with declarative pipelines and shared libraries.",
      "Orchestrated Docker-based build agents to keep the master lightweight and reproducible.",
      "Integrated quality gates (linting, tests, image scans) before promoting to Kubernetes.",
    ],
    tech: ["AWS", "Jenkins", "Docker", "Kubernetes", "Terraform"],
    image: reactSmooth,
    demoLink: "https://github.com/Sohail-9/Jenkins-ci-cd-pipeline",
    codeLink: "https://github.com/Sohail-9/Jenkins-ci-cd-pipeline",
  },
  {
    id: 4,
    title: "SmartVision Product Recognition",
    tagline: "Real-time retail intelligence from any camera stream.",
    context: "Computer Vision · Personal R&D",
    summary:
      "A YOLO-powered vision service that identifies supermarket produce, overlays pricing, and pushes inventory events to downstream systems.",
    metrics: [
      { label: "Detection fps", value: "30" },
      { label: "Classes trained", value: "40" },
      { label: "SKU accuracy", value: "92%" },
    ],
    highlights: [
      "Extended YOLOv5 to custom vegetable classes with continual learning pipelines.",
      "Built a Flask service delivering MJPEG streams with bounding boxes and confidence scores.",
      "Connected recognition events to inventory APIs, unlocking automated stock reconciliation.",
    ],
    tech: ["YOLOv5", "PyTorch", "Flask", "OpenCV", "Azure Blob"],
    image: reactWeather,
    demoLink: "https://github.com/Sohail-9/product.recognition.using.smart.vision",
    codeLink: "https://github.com/Sohail-9/product.recognition.using.smart.vision",
  },
];

const Portfolio = () => {
  return (
    <section
      name="portfolio"
      className="relative w-full bg-gradient-to-b from-gray-950 via-black to-gray-950 py-32 text-white"
    >
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute top-16 left-1/3 h-80 w-80 animate-pulse rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 animate-pulse rounded-full bg-purple-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute top-1/2 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-screen-xl flex-col gap-16 px-6">
        <header className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
            Case studies
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            A portfolio of AI products, platform tooling, and resilient delivery
            pipelines.
          </h2>
          <p className="mt-4 text-lg text-gray-300 sm:text-xl">
            Each build pairs a thoughtful user experience with measurable impact.
            These are the projects I reference when partnering with engineering
            leaders, founders, and design teams.
          </p>
        </header>

        <article className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent shadow-[0_35px_120px_rgba(0,255,255,0.15)] backdrop-blur-xl transition hover:border-cyan-400/60 hover:shadow-[0_45px_140px_rgba(0,255,255,0.25)] md:grid md:grid-cols-[1.05fr,0.95fr]">
          <div className="relative">
            <img
              src={caseStudies[0].image}
              alt={caseStudies[0].title}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 backdrop-blur">
                {caseStudies[0].context}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-10 lg:p-14">
            <div>
              <h3 className="text-3xl font-semibold text-white">
                {caseStudies[0].title}
              </h3>
              <p className="mt-2 text-base font-medium text-cyan-200">
                {caseStudies[0].tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-200">
                {caseStudies[0].summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {caseStudies[0].tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="grid gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 sm:grid-cols-3">
              {caseStudies[0].metrics.map(({ label, value }) => (
                <div key={label} className="space-y-1 text-center sm:text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    {label}
                  </p>
                  <p className="text-lg font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-2 text-sm text-gray-200">
              {caseStudies[0].highlights.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-4 pt-4">
              <a
                href={caseStudies[0].demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-center text-sm font-semibold shadow-lg shadow-cyan-500/30 transition hover:translate-y-[-2px] hover:shadow-xl hover:shadow-cyan-500/40"
              >
                Deep dive
              </a>
              <a
                href={caseStudies[0].codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full border border-white/20 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-200"
              >
                View repo
              </a>
            </div>
          </div>
        </article>

        <div className="grid gap-10 lg:grid-cols-3">
          {caseStudies.slice(1).map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(59,130,246,0.2)] backdrop-blur transition duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:shadow-[0_35px_110px_rgba(56,189,248,0.25)]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <p className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-200 backdrop-blur">
                  {project.context}
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-cyan-200">
                    {project.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-200">
                    {project.summary}
                  </p>
                </div>

                <div className="grid gap-2 rounded-2xl border border-white/10 bg-black/30 p-4">
                  {project.metrics.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-gray-400"
                    >
                      <span>{label}</span>
                      <span className="text-sm font-semibold text-white tracking-normal">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-sm text-gray-200">
                  {project.highlights.map((item, index) => (
                    <li key={index} className="leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-4 pt-2">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-center text-sm font-semibold shadow-lg shadow-cyan-500/30 transition hover:translate-y-[-2px] hover:shadow-xl hover:shadow-cyan-500/40"
                  >
                    Case study
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full border border-white/20 px-5 py-2 text-center text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-200"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="rounded-[28px] border border-white/10 bg-black/40 p-8 text-center shadow-[0_25px_90px_rgba(8,112,184,0.35)] backdrop-blur">
          <p className="text-lg font-semibold text-gray-200 sm:text-xl">
            Want a tailored walkthrough for your team?
          </p>
          <p className="mt-3 text-sm text-gray-400">
            I’m happy to share architecture diagrams, deployment pipelines, and
            lessons from launching automation-heavy products.
          </p>
          <a
            href="mailto:s.suhail9849@gmail.com"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:translate-y-[-2px] hover:shadow-xl hover:shadow-cyan-500/40"
          >
            Request a live demo
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Portfolio;
