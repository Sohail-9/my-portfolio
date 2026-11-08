"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main
      className="min-h-screen relative font-sans overflow-x-hidden selection:bg-violet-500/20 selection:text-violet-950"
      style={{ background: "#f6f5ff" }}
    >
      {/* ── 5-Layer Organic Drifting Aurora System ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div
          className="aurora-a absolute -top-[20%] -left-[10%] w-[75vw] h-[75vw] max-w-[960px] max-h-[960px] rounded-full blur-[130px]"
          style={{ background: "rgba(139, 92, 246, 0.12)" }}
        />
        <div
          className="aurora-b absolute top-[25%] -right-[15%] w-[65vw] h-[65vw] max-w-[840px] max-h-[840px] rounded-full blur-[140px]"
          style={{ background: "rgba(52, 211, 153, 0.09)" }}
        />
        <div
          className="aurora-c absolute bottom-[5%] left-[15%] w-[55vw] h-[55vw] max-w-[720px] max-h-[720px] rounded-full blur-[120px]"
          style={{ background: "rgba(56, 189, 248, 0.08)" }}
        />
        <div
          className="aurora-d absolute top-[55%] -left-[5%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full blur-[110px]"
          style={{ background: "rgba(251, 191, 36, 0.07)" }}
        />
        <div
          className="aurora-e absolute top-[40%] left-[40%] w-[50vw] h-[50vw] max-w-[680px] max-h-[680px] rounded-full blur-[150px]"
          style={{ background: "rgba(244, 63, 94, 0.05)" }}
        />
      </div>

      {/* ── Main Architectural Content Flow ── */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
