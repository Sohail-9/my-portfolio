import React from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

// ✅ The main App component
function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white scroll-smooth">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_60%)] blur-3xl" />
        <div className="absolute inset-y-0 left-1/2 h-full w-[120vw] -translate-x-1/2 bg-[radial-gradient(circle_at_20%_80%,rgba(192,38,211,0.13),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[conic-gradient(at_top_right,rgba(59,130,246,0.12),rgba(14,165,233,0.05),rgba(244,114,182,0.08),rgba(59,130,246,0.12))] opacity-40 mix-blend-screen" />
      </div>

      <div className="relative z-10 flex flex-col">
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </div>

      <SocialLinks />
    </div>
  );
}

export default App;
