import React from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import heroImage from "../assets/heroImage.jpg";

const heroMeta = [
  { id: 1, label: "SDE @ OmniqAI" },
  { id: 2, label: "Bengaluru · Remote friendly" },
  { id: 3, label: "Available for collaborations" },
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

      <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-200">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse-slow" />
            Sohail · Backend & DevOps Engineer
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            I build reliable AI platforms with Python, calm automation, and built-in observability.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I pair async services with infrastructure-as-code, GitOps delivery, and telemetry that
            explains every release—so teams ship faster without sacrificing trust.
          </p>
          <div className="flex flex-wrap gap-2">
            {heroMeta.map(({ id, label }) => (
              <span
                key={id}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-200"
              >
                {label}
              </span>
            ))}
          </div>
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
        </div>

        <aside>
          <figure className="relative isolate overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/20 to-slate-900/80 p-3 shadow-2xl shadow-cyan-500/20">
            <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-cyan-400/20 via-transparent to-rose-400/20 blur-2xl" />
            <img
              src={heroImage}
              alt="Sohail smiling with a laptop"
              className="h-96 w-full rounded-[2rem] object-cover"
            />
            <div className="absolute inset-3 rounded-[2.4rem] border border-white/10" />
          </figure>
        </aside>
      </div>
    </section>
  );
};

export default Home;
