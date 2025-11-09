import React from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const quickFacts = [
  { id: 1, title: "Role", detail: "SDE @ OmniqAI · Jan 2025 – Present" },
  { id: 2, title: "Focus", detail: "Backend & DevOps foundations for AI agents and platforms" },
  { id: 3, title: "Stack", detail: "Python · FastAPI · Node · Kubernetes · Terraform" },
  { id: 4, title: "Based in", detail: "Bengaluru · Remote friendly" },
];

const nowCards = [
  {
    id: 1,
    heading: "Currently shipping",
    body: "TraceFox AI review platform, multi-cloud agent backends, and self-healing delivery pipelines.",
  },
  {
    id: 2,
    heading: "What’s next",
    body: "Partnering with teams that need pragmatic AI systems backed by observability, automation, and a calm engineering culture.",
  },
  {
    id: 3,
    heading: "How to reach me",
    body: "s.suhail9849@gmail.com · +91 96426 39515",
  },
];

const Home = () => {
  return (
    <section id="home" name="home" className="relative space-y-16">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-glow absolute -left-1/4 top-1/3 h-80 w-80 rounded-full blur-3xl" />
        <div
          className="hero-glow absolute right-[-20%] top-10 h-64 w-64 rounded-full blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="hero-grid absolute inset-0" />
      </div>

      <div className="grid gap-16 md:grid-cols-[1.4fr,1fr] md:items-start">
        <div className="space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse-slow" />
            Open to new opportunities
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Backend engineer with a DevOps heartbeat, shipping trustworthy AI platforms.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I design Python-first backends, automate their delivery, and keep them observable.
            Clean APIs, reliable releases, and calm operations are the bar for every build.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-900 transition hover:bg-white"
            >
              See selected work
              <span className="transition duration-200 group-hover:translate-x-1">
                <MdOutlineKeyboardArrowRight size={18} />
              </span>
            </Link>
            <a
              href="/Sohail_SDE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              Download résumé
            </a>
            <Link
              to="contact"
              smooth
              duration={500}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 transition hover:text-white"
            >
              Let’s collaborate
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {quickFacts.map(({ id, title, detail }) => (
              <div
                key={id}
                className="group rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-slate-900/50 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-300 transition group-hover:text-cyan-200">
                  {title}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-100">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          {nowCards.map(({ id, heading, body }) => (
            <div
              key={id}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/50 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-300 transition group-hover:text-cyan-200">
                {heading}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">{body}</p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
};

export default Home;
