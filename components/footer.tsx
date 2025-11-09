import { footer } from "@/lib/content";
import { links } from "@/lib/links";

const socials = [
  { label: "Email", href: `mailto:${links.email}` },
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github }
];

export function Footer() {
  return (
    <footer className="relative py-16">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-slate-900/80 to-transparent" aria-hidden />
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 space-y-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center text-sm text-slate-200 shadow-card backdrop-blur-xl sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] text-white/70 sm:justify-center">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-white transition hover:border-accent/60 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-slate-400">{footer.text}</p>
      </div>
    </footer>
  );
}
