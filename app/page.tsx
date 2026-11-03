"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-sky-500/20 selection:text-sky-900">
      {/* ── Ambient Pastel Aurora Background on Pure White ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-Center Aurora (Hero) */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full blur-[140px] opacity-25 animate-aurora-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(139, 92, 246, 0.25) 50%, transparent 75%)",
          }}
        />

        {/* Right Mid Aurora (Experience & About) */}
        <div
          className="absolute top-[35%] -right-32 w-[700px] h-[700px] rounded-full blur-[150px] opacity-20 animate-aurora-reverse"
          style={{
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(244, 114, 182, 0.2) 50%, transparent 75%)",
          }}
        />

        {/* Left Mid Aurora (Projects) */}
        <div
          className="absolute top-[60%] -left-32 w-[750px] h-[750px] rounded-full blur-[150px] opacity-20 animate-aurora-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(52, 211, 153, 0.2) 50%, transparent 75%)",
          }}
        />

        {/* Bottom Aurora (Skills & Footer) */}
        <div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[850px] h-[600px] rounded-full blur-[140px] opacity-25 animate-aurora-reverse"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(56, 189, 248, 0.2) 50%, transparent 75%)",
          }}
        />

        {/* Micro Cyber Grid overlay on white */}
        <div className="absolute inset-0 cyber-grid opacity-75" />
      </div>

      {/* ── Page Content ── */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
