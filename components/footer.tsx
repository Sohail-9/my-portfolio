import Image from "next/image";
import { LuGithub, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu";
import { footer } from "@/lib/content";
import { links } from "@/lib/links";

const items = [
  { label: "LinkedIn", href: links.linkedin, icon: LuLinkedin },
  { label: "GitHub", href: links.github, icon: LuGithub },
  { label: "Twitter", href: links.twitter, icon: LuTwitter },
  { label: "Contact", href: `mailto:${links.email}`, icon: LuMail }
];

export function Footer() {
  return (
    <footer className="relative py-16">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-slate-900/80 to-transparent" aria-hidden />
      <div className="mx-auto w-full max-w-3xl space-y-6 px-4 sm:px-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-6 rounded-full border border-white/15 bg-white/5 px-6 py-3 shadow-card backdrop-blur-3xl">
            {items.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                aria-label={label}
                className="text-2xl text-white/80 transition hover:text-accent"
              >
                <Icon />
              </a>
            ))}
            <span className="h-8 w-px bg-white/10" aria-hidden />
            <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/sohail.jpeg"
                alt="Portrait of Sohail Shaik"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-slate-400">Crafted in async bursts by Sohail Shaik</p>
      </div>
    </footer>
  );
}
