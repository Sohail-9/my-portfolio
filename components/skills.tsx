"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuArrowUpRight, LuFileText, LuMail } from "react-icons/lu";
import { links } from "@/lib/links";

const coreTools = [
  "TypeScript",
  "React & Next.js",
  "Node.js",
  "Python",
  "PostgreSQL & pgvector",
  "Redis",
  "AI Agents & LLMs",
  "Docker & AWS",
];

export function Skills() {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <div className="font-mono text-xs uppercase tracking-widest text-[#34e0ef] mb-3">
          {"// About Me"}
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight">
          Who I Am
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Profile Picture */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-white/10 bg-[#151518] shadow-xl">
            <Image
              src="/profile.png"
              alt="Sohail Shaik"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Narrative */}
        <div className="md:col-span-8 flex flex-col justify-center">
          <p className="text-base sm:text-lg text-white leading-relaxed mb-4">
            I’m Sohail, a full-stack engineer with 3+ years of experience building web applications and AI-powered products.
          </p>

          <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed mb-4">
            I enjoy taking an idea from zero to a reliable, fast product in the hands of users. Most recently, as a founding engineer at PrettiFlow, I helped build the platform from the ground up and scaled it to over 100,000+ users and 8,000+ daily active users.
          </p>

          <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed mb-8">
            My everyday focus is simple: write clean code, keep user experiences fast and intuitive, and build practical AI features that solve real problems.
          </p>

          {/* Tools */}
          <div className="mb-8">
            <div className="font-mono text-xs text-[#8e8e93] uppercase tracking-wider mb-3">
              Core Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {coreTools.map((tool) => (
                <span key={tool} className="motion-chip">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={links.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="motion-btn motion-btn-primary"
            >
              <LuFileText className="w-3.5 h-3.5" />
              <span>Download Resume</span>
              <LuArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
            <a href={`mailto:${links.email}`} className="motion-btn motion-btn-ghost">
              <LuMail className="w-3.5 h-3.5" />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
