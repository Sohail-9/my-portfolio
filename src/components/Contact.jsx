import React from "react";

const contactMethods = [
  {
    id: 1,
    label: "Email",
    value: "s.suhail9849@gmail.com",
    link: "mailto:s.suhail9849@gmail.com",
    description: "Fastest way to reach me for collaborations or opportunities.",
  },
  {
    id: 2,
    label: "Phone",
    value: "+91 96426 39515",
    link: "tel:+919642639515",
    description: "Available for quick syncs between 10:00 and 19:00 IST.",
  },
  {
    id: 3,
    label: "LinkedIn",
    value: "linkedin.com/in/shaiksohail96",
    link: "https://www.linkedin.com/in/shaiksohail96/",
    description: "Let’s connect and talk about what you’re building.",
  },
  {
    id: 4,
    label: "Currently in",
    value: "Bengaluru, India · Remote friendly",
    description: "Comfortable collaborating across time zones.",
  },
];

const Contact = () => {
  return (
    <section id="contact" name="contact" className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Contact
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Ready to collaborate on something meaningful?
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          I’m always up for a chat about building reliable AI agents, tightening delivery pipelines,
          or mapping vague product ideas into a roadmap. Drop a message and I’ll reply within a day.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-[1fr,1fr]">
        <div className="space-y-4">
          {contactMethods.map(({ id, label, value, link, description }) => (
            <div key={id} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/40 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                {label}
              </p>
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-lg font-semibold text-white transition hover:text-cyan-200"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-2 text-lg font-semibold text-white">{value}</p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
            </div>
            ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/40 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Send a message
          </p>
          <form
            action="https://getform.io/f/eb55abd9-a4fd-4287-bf51-85412677cbcc"
            method="POST"
            className="mt-6 space-y-4 text-sm text-slate-200"
          >
            <label className="block space-y-2">
              <span className="font-semibold uppercase tracking-[0.2em]">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                required
              />
            </label>

            <label className="block space-y-2">
              <span className="font-semibold uppercase tracking-[0.2em]">Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                required
              />
            </label>

            <label className="block space-y-2">
              <span className="font-semibold uppercase tracking-[0.2em]">Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project or idea."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                required
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-full bg-white/90 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-white"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
