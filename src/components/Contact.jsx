import React from "react";

const contactMethods = [
  {
    id: 1,
    label: "Email",
    value: "s.suhail9849@gmail.com",
    link: "mailto:s.suhail9849@gmail.com",
    description: "Fastest response for collaborations, opportunities, and questions.",
  },
  {
    id: 2,
    label: "Location",
    value: "Hyderabad, India · Remote friendly",
    description: "Happy to collaborate across time zones.",
  },
  {
    id: 3,
    label: "LinkedIn",
    value: "linkedin.com/in/shaiksohail96",
    link: "https://www.linkedin.com/in/shaiksohail96/",
    description: "Let’s connect and talk about what you’re building.",
  },
];

const Contact = () => {
  return (
    <section
      name="contact"
      className="relative w-full bg-gradient-to-b from-black via-gray-950 to-gray-900 py-32 text-white"
    >
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute left-10 top-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-10 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-screen-xl flex-col gap-16 px-6">
        <div className="mx-auto text-center sm:max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's collaborate
          </h2>
          <p className="mt-5 text-lg text-gray-300 sm:text-xl">
            Whether you need help shipping an AI feature, scaling infrastructure,
            or refining product direction—I’d love to hear about it.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/5 bg-white/5 p-8 shadow-xl shadow-black/30 backdrop-blur">
              <h3 className="text-2xl font-semibold text-cyan-200">
                Ways to reach me
              </h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Looking for a quick chat? Drop a note and I’ll follow up within
                a day. I’m also available for technical deep-dives, portfolio
                walkthroughs, and pair-programming sessions.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map(({ id, label, value, link, description }) => (
                <div
                  key={id}
                  className="rounded-2xl border border-white/5 bg-black/40 p-6 shadow-lg shadow-black/20 backdrop-blur transition hover:border-cyan-400/60"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
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
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/5 bg-black/40 p-8 shadow-2xl shadow-black/30 backdrop-blur">
            <p className="text-lg font-semibold text-gray-200">
              Prefer email? Drop a message.
            </p>
            <form
              action="https://getform.io/f/eb55abd9-a4fd-4287-bf51-85412677cbcc"
              method="POST"
              className="mt-6 space-y-5"
            >
              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                  How can I help?
                </span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project, challenge, or idea."
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40"
                  required
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:translate-y-[-2px] hover:shadow-xl hover:shadow-cyan-500/40"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
