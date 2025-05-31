import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="fixed w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10 shadow-md">
      <div className="flex justify-between items-center w-full h-20 px-4 max-w-screen-xl mx-auto text-white">
        {/* Brighter, Glowing Brand Name */}
        <h1 className="text-4xl font-signature tracking-wide bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-transform duration-300">
          Sohail
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-lg font-medium text-gray-300 hover:text-white hover:scale-110 hover:drop-shadow-glow relative transition duration-300 cursor-pointer"
            >
              <Link to={link} smooth duration={500} className="relative group">
                {link}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-gray-300 md:hidden z-20"
        >
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-300 animate-fadeIn space-y-6 text-2xl">
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setNav(false)}
                  className="capitalize hover:text-cyan-400 transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
