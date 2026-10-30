"use client";

import React, { useState } from "react";
import { DataRefineryScene } from "@/components/data-refinery/data-refinery-scene";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MacbookCockpit } from "@/components/macbook-cockpit";
import { Footer } from "@/components/footer";
import { LuCompass } from "react-icons/lu";

export default function Home() {
  const [viewMode, setViewMode] = useState<"refinery3d" | "workstation">("workstation");

  return (
    <main className="relative min-h-screen bg-[#12141c] text-white selection:bg-[#00f0ff] selection:text-black">
      {/* ── VIEW 1: FULL 3D ISOMETRIC REFINERY (Bruno Simon style) ── */}
      {viewMode === "refinery3d" ? (
        <DataRefineryScene onSwitchToMac={() => setViewMode("workstation")} />
      ) : (
        /* ── VIEW 2: THE MACBOOK PRO COCKPIT & STUDIO ── */
        <div className="relative bg-white text-[#0b0b0c] min-h-screen animate-fadeIn">
          {/* Floating button to jump back into 3D World */}
          <div className="fixed top-5 right-6 z-50">
            <button
              onClick={() => setViewMode("refinery3d")}
              className="press flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#12141c] text-white text-xs font-mono font-bold shadow-2xl border border-white/20 hover:bg-slate-900 transition-all"
            >
              <LuCompass className="text-sky-400 text-sm" />
              <span>Enter 3D World</span>
            </button>
          </div>
          <Navbar />
          <Hero />
          <MacbookCockpit />
          <Footer />
        </div>
      )}
    </main>
  );
}
