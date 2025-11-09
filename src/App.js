import React from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="min-h-screen bg-[#04060c] text-slate-100 antialiased scroll-smooth">
      <NavBar />
      <main className="relative mx-auto flex max-w-5xl flex-col gap-28 px-6 pb-32 pt-28 md:px-10">
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] border border-white/10 bg-white/5 blur-[160px] backdrop-blur-3xl" />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <SocialLinks />
    </div>
  );
}

export default App;
