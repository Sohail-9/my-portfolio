import React from "react";

import installNode from "../assets/portfolio/installNode.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const projects = [
  {
    id: 1,
    title: "Docker Automation Platform",
    context: "Platform Engineering · omniqAI",
    description:
      "A self-service control plane that gives engineering teams instant visibility into distributed Docker workloads. Built to replace manual scripts with a polished experience backed by Docker SDK.",
    impact:
      "Reduced container triage time from hours to minutes and enabled on-call engineers to resolve incidents with confidence.",
    tech: ["React", "Docker SDK", "Node.js", "AWS", "Socket.IO"],
    highlights: [
      "Streamed live container telemetry with Socket.IO overlays and resilient fallbacks.",
      "Separated frontend/back-end deploys with microservice boundaries and automated CI/CD.",
      "Codified operational runbooks and alerts so on-call engineers respond in minutes.",
    ],
    image: installNode,
    demoLink: "https://github.com/Sohail-9",
    codeLink: "https://github.com/Sohail-9",
  },
  {
    id: 2,
    title: "AI Knowledge Copilot",
    context: "AI Engineering · omniqAI",
    description:
      "An agentic copilot that surfaces operational knowledge, generates implementation-ready runbooks, and integrates with internal APIs for automated ticket triage.",
    impact:
      "Helped product teams ship features faster by automating the research workflow and contextualizing historical decisions.",
    tech: ["Next.js", "LangChain", "Pinecone", "OpenAI", "TypeScript"],
    highlights: [
      "Blended semantic search with retrieval-augmented generation for trustworthy answers.",
      "Injected guardrails and role-based access so sensitive knowledge stays protected.",
      "Instrumented feedback analytics to keep prompts evolving with the org’s needs.",
    ],
    image: reactParallax,
    demoLink: "https://github.com/Sohail-9",
    codeLink: "https://github.com/Sohail-9",
  },
  {
    id: 3,
    title: "DevOps Observability Dashboard",
    context: "Full-stack · Freelance",
    description:
      "Unified dashboard aggregating CI/CD events, deployment health, and service-level insights. Designed with an emphasis on drill-down diagnostics and executive-friendly reporting.",
    impact:
      "Unlocked proactive incident response by pairing real-time telemetry with predictive alerts and actionable recommendations.",
    tech: ["React", "Express", "Grafana", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Federated multiple observability feeds into a single curated experience.",
      "Modeled OKRs and SLOs so leadership can tie reliability work to business goals.",
      "Delivered drill-down workflows that cut debugging time for engineers on-call.",
    ],
    image: reactSmooth,
    demoLink: "https://github.com/Sohail-9",
    codeLink: "https://github.com/Sohail-9",
  },
  {
    id: 4,
    title: "Real-time Weather Intel",
    context: "Product Experiment · Personal",
    description:
      "Micro-frontend that enriches weather data with event planning insights, location intelligence, and AI-generated summaries tailored to user preferences.",
    impact:
      "Showcased the potential of combining third-party APIs with custom AI prompts for context-aware storytelling.",
    tech: ["React", "RapidAPI", "Vercel Edge Functions", "OpenAI"],
    highlights: [
      "Crafted AI prompts that adapt tone and recommendations to user intent.",
      "Optimized Edge Functions to deliver near-instant updates across devices.",
      "Added geo-personalized insights that spark shareable, delightful experiences.",
    ],
    image: reactWeather,
    demoLink: "https://github.com/Sohail-9",
    codeLink: "https://github.com/Sohail-9",
  },
];

const Portfolio = () => {
  return (
    <section
      name="portfolio"
      className="relative w-full bg-gradient-to-b from-gray-900 via-black to-gray-950 py-32 text-white"
    >
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute top-20 left-1/4 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-16 right-10 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-screen-xl flex-col gap-14 px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Selected Work
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 sm:text-xl">
            Product bets that combine AI, thoughtful UX, and production-grade
            engineering. Each project balances technical depth with real user
            outcomes.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map(
            ({
              id,
              title,
              context,
              description,
              impact,
              tech,
              highlights,
              image,
              demoLink,
              codeLink,
            }) => (
              <article
                key={id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-xl shadow-black/30 backdrop-blur transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 backdrop-blur">
                    {context}
                  </p>
                </div>

                <div className="flex flex-1 flex-col gap-6 p-8">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-white">{title}</h3>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {description}
                    </p>
                    <p className="text-sm font-medium text-cyan-200">{impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-400/50 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-sm text-gray-200">
                    {highlights.map((item, index) => (
                      <li key={index} className="leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-4 pt-4">
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-center text-sm font-semibold shadow-lg shadow-cyan-500/30 transition hover:translate-y-[-2px] hover:shadow-xl hover:shadow-cyan-500/40"
                    >
                      View case study
                    </a>
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full border border-white/20 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-200"
                    >
                      View repo
                    </a>
                  </div>
                </div>
              </article>
            )
          )}
        </div>

        <div className="rounded-3xl border border-white/5 bg-black/40 p-8 text-center shadow-lg shadow-black/20 backdrop-blur">
          <p className="text-lg font-semibold text-gray-200 sm:text-xl">
            Want a tailored walkthrough for your team?
          </p>
          <p className="mt-3 text-sm text-gray-400">
            I’m happy to share demos, architecture docs, and lessons learned on
            scaling AI-driven platforms.
          </p>
          <a
            href="mailto:s.suhail9849@gmail.com"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:translate-y-[-2px] hover:shadow-xl hover:shadow-cyan-500/40"
          >
            Request a live demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
