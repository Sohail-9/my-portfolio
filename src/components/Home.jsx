import React from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import HeroImage from "../assets/heroImage.jpg";

const heroHighlights = [
  {
    id: 1,
    title: "SDE & AI Engineer",
    subtitle: "Driving AI-first experiences & platform foundations @ omniqAI",
  },
  {
    id: 2,
    title: "Cloud Native",
    subtitle: "AWS, Kubernetes, Docker, Zero-downtime delivery playbooks",
  },
  {
    id: 3,
    title: "Product Velocity",
    subtitle: "Shipping automation platforms with measurable outcomes",
  },
];

const valuePillars = [
  {
    id: 1,
    label: "Zero-to-one builds",
    description:
      "Translate ambiguous problems into high-leverage solutions with crisp UX and measurable success criteria.",
  },
  {
    id: 2,
    label: "Scale with confidence",
    description:
      "Design fault-tolerant infra, observability, and rollout strategies that keep velocity high without trading on quality.",
  },
  {
    id: 3,
    label: "Human-centered AI",
    description:
      "Ship intelligent assistants that blend LLMs with guardrails, domain context, and ethical considerations.",
  },
];

const impactStats = [
  {
    id: 1,
    label: "AI products in prod",
    value: "2",
    caption: "SkinAI & SmartVision powering real user workflows.",
  },
  {
    id: 2,
    label: "Ops time saved",
    value: "↓ 60%",
    caption: "Docker automation & Jenkins pipelines speeding releases.",
  },
  {
    id: 3,
    label: "Detection accuracy",
    value: "92%",
    caption: "SmartVision improves SKU recognition in live streams.",
  },
];

const Home = () => {
  return (
    <section
      name="home"
      className="relative w-full overflow-hidden bg-gradient-to-br from-black via-slate-950 to-gray-900 text-white"
    >
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-x-0 top-24 h-80 bg-[radial-gradient(circle_at_top,rgba(51,153,255,0.35),transparent_55%)] blur-2xl" />
        <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-screen-xl flex-col items-center gap-16 px-6 pt-32 pb-24 md:flex-row md:pt-40">
        <div className="flex flex-1 flex-col gap-10">
          <div className="space-y-6">
            <p className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80 backdrop-blur">
              Open to new opportunities
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Engineer crafting SkinAI, SmartVision, and the platforms that keep
              them running.
            </h1>
            <p className="max-w-xl text-lg text-gray-300 sm:text-xl">
              I design and ship resilient automation platforms and cloud-native
              experiences. From orchestrating container workloads to crafting
              intelligent diagnostics, I help teams move faster with confidence.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-base font-semibold shadow-lg shadow-cyan-500/30 transition hover:translate-y-[-2px] hover:shadow-xl hover:shadow-cyan-500/40"
            >
              View Selected Work
              <span className="transition group-hover:translate-x-1">
                <MdOutlineKeyboardArrowRight size={22} />
              </span>
            </Link>

            <a
              href="/Sohail_SDE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Download Résumé
            </a>

            <Link
              to="contact"
              smooth
              duration={500}
              className="rounded-full border border-transparent px-6 py-3 text-base font-medium text-gray-300 transition hover:border-cyan-400 hover:text-white"
            >
              Let’s Build Together
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {heroHighlights.map(({ id, title, subtitle }) => (
              <div
                key={id}
                className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur transition hover:border-cyan-400/60 hover:bg-cyan-400/5"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                  {title}
                </p>
                <p className="mt-2 text-sm text-gray-200">{subtitle}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 rounded-3xl border border-white/5 bg-white/5 p-6 shadow-[0_20px_60px_rgba(8,112,184,0.25)] backdrop-blur sm:grid-cols-3">
            {valuePillars.map(({ id, label, description }) => (
              <div key={id} className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                  {label}
                </p>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/5 bg-black/40 p-6 backdrop-blur sm:grid-cols-3">
            {impactStats.map(({ id, label, value, caption }) => (
              <div key={id} className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
                  {label}
                </p>
                <p className="text-2xl font-semibold text-cyan-200">{value}</p>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-1 justify-center md:justify-end">
          <div className="absolute inset-y-8 right-8 -z-10 hidden h-[85%] w-64 rounded-3xl bg-gradient-to-b from-cyan-400/30 via-transparent to-purple-500/20 blur-3xl md:block" />
          <img
            src={HeroImage}
            alt="Sohail, Software Development Engineer"
            className="h-auto w-full max-w-sm rounded-[2.5rem] border border-white/10 bg-white/10 shadow-[0_15px_60px_rgba(0,0,0,0.45)] transition hover:border-cyan-300/70 md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
