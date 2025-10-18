import React from "react";

import aws from "../assets/aws.webp";
import kubernetes from "../assets/kubernetes.webp";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";

const coreStacks = [
  {
    id: 1,
    title: "AI & Automation",
    description:
      "Applied AI that blends model accuracy with human guardrails—SkinAI diagnostics, SmartVision recognition, and agentic workflows.",
    tags: ["LLMs", "Computer Vision", "Agentic AI", "Model Ops"],
  },
  {
    id: 2,
    title: "Cloud & DevOps",
    description:
      "Production-ready infrastructure with observability, security, and CI/CD baked in from day zero.",
    tags: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins"],
  },
  {
    id: 3,
    title: "Full-stack Engineering",
    description:
      "Delightful, performant experiences across web front-ends and resilient APIs that scale with the business.",
    tags: ["React", "Next.js", "Express", "Node.js", "TypeScript"],
  },
];

const spotlights = [
  {
    id: 1,
    label: "SkinAI",
    summary:
      "CNN ensemble + FastAPI backend mapped to a humane React experience that delivers dermatology insights responsibly.",
    impact: "Scoped ethical guardrails and triage flows with clinicians in the loop.",
    link: "https://github.com/Sohail-9/SkinAI",
  },
  {
    id: 2,
    label: "Docker Automation Platform",
    summary:
      "Automation hub streamlining provisioning, health checks, and remediation across 120+ containers.",
    impact: "Cut on-call toil; enabled product squads to self-serve deploys safely.",
    link: "https://github.com/Sohail-9/Docker-Automation",
  },
  {
    id: 3,
    label: "Jenkins CI/CD",
    summary:
      "Infrastructure-as-code playbook for spinning up Jenkins, Docker agents, and GitOps-style rollouts to Kubernetes.",
    impact: "Baked quality gates, rollback paths, and blue/green deployments into every pipeline.",
    link: "https://github.com/Sohail-9/Jenkins-ci-cd-pipeline",
  },
  {
    id: 4,
    label: "SmartVision",
    summary:
      "Computer-vision service that recognises produce in real time and syncs inventory with point-of-sale systems.",
    impact: "Delivered 92% SKU accuracy with 30 FPS inference on commodity hardware.",
    link: "https://github.com/Sohail-9/product.recognition.using.smart.vision",
  },
];

const techs = [
  {
    id: 1,
    src: aws,
    title: "AWS",
    style: "shadow-yellow-500/30",
  },
  {
    id: 2,
    src: kubernetes,
    title: "Kubernetes",
    style: "shadow-blue-500/30",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500/30",
  },
  {
    id: 4,
    src: reactImage,
    title: "React",
    style: "shadow-blue-600/30",
  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-400/30",
  },
  {
    id: 6,
    src: node,
    title: "Node.js",
    style: "shadow-green-400/30",
  },
  {
    id: 7,
    src: python,
    title: "Python",
    style: "shadow-pink-400/30",
  },
  {
    id: 8,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400/30",
  },
  {
    id: 9,
    src: typescript,
    title: "TypeScript",
    style: "shadow-blue-400/30",
  },
];

const Experience = () => {
  return (
    <section
      name="experience"
      className="w-full bg-gradient-to-b from-black via-gray-950 to-gray-900 py-32 text-white"
    >
      <div className="mx-auto flex max-w-screen-xl flex-col gap-16 px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Experience
          </h2>
          <p className="mt-4 text-lg text-gray-300 sm:text-xl">
            Precision engineering across AI, cloud, and full-stack delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {coreStacks.map(({ id, title, description, tags }) => (
            <article
              key={id}
              className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-7 shadow-lg shadow-black/20 backdrop-blur transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
            >
              <h3 className="text-xl font-semibold text-cyan-200">{title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-white/5 bg-black/40 p-8 shadow-2xl shadow-black/30 backdrop-blur">
          <p className="text-center text-lg font-semibold text-gray-200 sm:text-xl">
            Tools & ecosystems I’m fluent in
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`group flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 px-4 py-6 shadow-lg backdrop-blur transition hover:border-cyan-400/60 hover:bg-cyan-400/10 ${style}`}
              >
                <img
                  src={src}
                  alt={title}
                  className="h-16 w-16 object-contain transition group-hover:scale-105"
                />
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-200">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {spotlights.map(({ id, label, summary, impact, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_20px_70px_rgba(59,130,246,0.25)] transition hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:shadow-[0_30px_90px_rgba(56,189,248,0.3)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                {label}
              </p>
              <p className="text-sm text-gray-200 leading-relaxed">{summary}</p>
              <p className="text-sm font-medium text-cyan-100">{impact}</p>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-300 transition group-hover:text-cyan-200">
                Explore →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
