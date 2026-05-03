"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuGithub, LuLinkedin, LuMail, LuPhone } from "react-icons/lu";
import { hero } from "@/lib/content";
import { links } from "@/lib/links";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

import { GridBackground } from "@/components/ui/grid-background";

export function Hero() {
  const words = hero.title.split(" ").map((word) => ({
    text: word,
    className: word === "Shaik" || word === "Sohail"
      ? "bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400 font-extrabold"
      : "text-white dark:text-white",
  }));

  const inlineLinks = [
    { label: "Email", href: `mailto:${links.email}`, icon: LuMail },
    { label: "LinkedIn", href: links.linkedin, icon: LuLinkedin },
    { label: "GitHub", href: links.github, icon: LuGithub },
    links.phone ? { label: "Phone", href: `tel:${links.phone.replace(/\s+/g, "")}`, icon: LuPhone } : null
  ].filter(Boolean) as { label: string; href: string; icon: any }[];

  return (
    <section className="relative min-h-screen w-full overflow-hidden rounded-md bg-slate-950 antialiased">
      <GridBackground className="absolute inset-0">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <BackgroundBeams />
      </GridBackground>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-20 sm:py-24 sm:px-6 flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-bold uppercase tracking-[0.4em] text-accent"
              >
                Available for new opportunities
              </motion.p>
              <TypewriterEffect words={words} className="text-left justify-center md:justify-start" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mx-auto max-w-lg text-lg text-neutral-400 md:mx-0"
              >
                {hero.subtitle}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center justify-center gap-4 md:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-white px-8 font-bold text-black hover:bg-neutral-200"
              >
                <a href={links.cvUrl} target="_blank" rel="noreferrer noopener">
                  {hero.ctaText}
                </a>
              </Button>

              <div className="flex gap-4">
                {inlineLinks.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ y: -4, color: "#38bdf8" }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-neutral-400 transition-colors hover:border-accent/40 hover:bg-slate-900/50"
                    title={item.label}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  >
                    <item.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-accent to-blue-600 opacity-20 blur-xl transition duration-1000 group-hover:opacity-40" />
              <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/50 p-4 shadow-2xl backdrop-blur-sm">
                <Image
                  src="/sohail.jpeg"
                  alt="Portrait of Sohail Shaik"
                  width={300}
                  height={300}
                  priority
                  className="h-64 w-64 rounded-[1.5rem] object-cover grayscale transition duration-700 group-hover:grayscale-0 sm:h-72 sm:w-72"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
