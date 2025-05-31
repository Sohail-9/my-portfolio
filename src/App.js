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
    <div className="bg-black text-white scroll-smooth">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
