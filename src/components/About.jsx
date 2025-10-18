import React from "react";

const stats = [
  { id: 1, label: "Years building products", value: "1+" },
  { id: 2, label: "Production launches", value: "6" },
  { id: 3, label: "Tech specialties", value: "AI • Cloud • DevOps" },
];

const careerHighlights = [
  {
    id: 1,
    period: "2024 — Present",
    role: "SDE & AI Engineer",
    company: "omniqAI",
    bullets: [
      "Leading SkinAI and SmartVision — AI platforms that power real-time diagnostics and visual intelligence.",
      "Designed a Docker Automation Platform with real-time visibility for 120+ distributed containers.",
      "Scaled AWS + Kubernetes infrastructure with observability-first pipelines and security guardrails.",
    ],
  },
  {
    id: 2,
    period: "2023 — 2024",
    role: "Full-stack & DevOps Engineer",
    company: "Independent Projects",
    bullets: [
      "Delivered automation-heavy applications using React, Express, and TypeScript with production telemetry.",
      "Built a Jenkins CI/CD pipeline that ships to Kubernetes with automated quality and security gates.",
      "Partnered with product and design to translate ambiguous ideas into measurable business impact.",
    ],
  },
];

const principles = [
  {
    id: 1,
    title: "Ship with clarity",
    copy: "Every build starts with explicit goals, crisp success metrics, and a shared language across engineering, product, and design.",
  },
  {
    id: 2,
    title: "Own the lifecycle",
    copy: "From architecture to observability, I stay accountable for the full lifecycle—so teams iterate fast without sacrificing reliability.",
  },
  {
    id: 3,
    title: "Bias for learning",
    copy: "Retrospectives, experimentation, and continuous feedback loops keep products aligned with evolving customer needs.",
  },
];

const About = () => {
  return (
    <section
      name="about"
      className="relative w-full bg-gradient-to-b from-gray-900 via-gray-950 to-black py-32 text-white"
    >
      <div className="absolute inset-0 -z-0 opacity-60">
        <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-screen-xl flex-col gap-16 px-6">
        <header className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About
          </h2>
          <p className="mt-6 text-lg text-gray-300 sm:text-xl leading-relaxed">
            I am{" "}
            <span className="font-semibold text-cyan-300">
              Sohail — SDE & AI Engineer @ omniqAI
            </span>{" "}
            with a passion for crafting automation-first platforms and polished
            user experiences. I thrive in high-ownership environments where
            solving complex problems means pairing engineering precision with
            thoughtful design.
          </p>
          <p className="mt-4 text-lg text-gray-300 sm:text-xl leading-relaxed">
            My toolkit blends{" "}
            <span className="text-purple-300 font-semibold">
              AI engineering, cloud-native infrastructure, and full-stack web
              development
            </span>
            . Whether it’s orchestrating workloads on AWS &amp; Kubernetes,
            wiring up resilient DevOps pipelines, or launching expressive React
            interfaces, I bring the same intent: ship impactful software, fast.
          </p>
          <p className="mt-4 text-lg text-gray-300 sm:text-xl leading-relaxed">
            Recent highlights include{" "}
            <span className="font-semibold text-green-300">SkinAI</span> for
            dermatology triage, a{" "}
            <span className="font-semibold text-cyan-200">
              SmartVision recognition service
            </span>{" "}
            for retail, and a{" "}
            <span className="font-semibold text-blue-200">
              Docker + Jenkins automation suite
            </span>{" "}
            that keeps deployments safe and fast.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map(({ id, label, value }) => (
            <div
              key={id}
              className="rounded-2xl border border-white/5 bg-white/5 px-6 py-8 text-center shadow-lg shadow-cyan-500/10 backdrop-blur transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
            >
              <p className="text-3xl font-bold text-cyan-300">{value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-300">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-6 rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-xl shadow-black/30 backdrop-blur">
            <h3 className="text-2xl font-semibold text-cyan-200">
              What I'm focused on
            </h3>
            <p className="text-base text-gray-200 leading-relaxed">
              Recently, I designed{" "}
              <span className="font-semibold text-green-300">
                SkinAI
              </span>{" "}
              and{" "}
              <span className="font-semibold text-green-300">
                SmartVision
              </span>{" "}
              to turn complex AI models into approachable, trustworthy
              interfaces. On the platform side, a{" "}
              <span className="font-semibold text-cyan-200">
                Docker Automation Platform
              </span>{" "}
              with real-time fleet controls keeps releases resilient for every
              team.
            </p>
            <p className="text-base text-gray-200 leading-relaxed">
              Beyond shipping features, I invest in observability, developer
              experience, and automation. My codebases are guided by clean
              architecture, type safety, and testing that gives teams confidence
              to iterate quickly.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cyan-200">
              Career at a glance
            </h3>
            <div className="space-y-6">
              {careerHighlights.map(({ id, period, role, company, bullets }) => (
                <div
                  key={id}
                  className="rounded-2xl border border-white/5 bg-black/40 p-6 shadow-lg shadow-black/20 backdrop-blur transition hover:border-cyan-400/60"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                    {period}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {role} · {company}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300">
                    {bullets.map((item, index) => (
                      <li key={index} className="leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/5 bg-black/40 p-8 shadow-2xl shadow-black/30 backdrop-blur">
          <h3 className="text-2xl font-semibold text-cyan-200">
            How I partner with teams
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {principles.map(({ id, title, copy }) => (
              <div
                key={id}
                className="space-y-3 rounded-2xl border border-white/5 bg-white/5 p-6 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-300">
                  {title}
                </p>
                <p className="text-sm text-gray-200 leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
