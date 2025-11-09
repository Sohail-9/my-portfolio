import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const links = [
  { id: 1, label: "Home", target: "home" },
  { id: 2, label: "About", target: "about" },
  { id: 3, label: "Skills", target: "skills" },
  { id: 4, label: "Work", target: "portfolio" },
  { id: 5, label: "Experience", target: "experience" },
  { id: 6, label: "Contact", target: "contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-700/60 bg-[#050b1a]/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-end justify-between gap-6 px-6 py-5 md:items-center md:px-10">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer text-lg font-semibold uppercase tracking-[0.3em] text-slate-200"
          onClick={closeMenu}
        >
          Sohail Shaik
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {links.map(({ id, label, target }) => (
            <Link
              key={id}
              to={target}
              smooth
              duration={500}
              className="uppercase tracking-[0.25em] transition hover:text-white"
            >
              {label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth
            duration={500}
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 transition hover:border-white/30 hover:text-white"
          >
            Let’s talk
          </Link>
        </nav>

        <button
          type="button"
          onClick={toggleMenu}
          className="text-slate-200 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-slate-700/60 bg-[#050b1a]/95 px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5 text-sm font-medium uppercase tracking-[0.2em] text-slate-200">
            {links.map(({ id, label, target }) => (
              <li key={id}>
                <Link
                  to={target}
                  smooth
                  duration={500}
                  onClick={closeMenu}
                  className="block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <nav className="fixed inset-x-0 bottom-4 z-40 flex justify-center md:hidden">
        <ul className="flex items-center gap-4 rounded-full border border-white/10 bg-[#050b1a]/80 px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-slate-200 shadow-xl shadow-slate-900/50 backdrop-blur">
          {links.map(({ id, label, target }) => (
            <li key={id}>
              <Link to={target} smooth duration={500} className="transition hover:text-white">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
