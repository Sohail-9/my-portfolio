import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const links = [
  {
    id: 1,
    label: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    href: "https://www.linkedin.com/in/shaiksohail96/",
  },
  {
    id: 2,
    label: "GitHub",
    icon: <FaGithub size={18} />,
    href: "https://github.com/Sohail-9",
  },
  {
    id: 3,
    label: "Mail",
    icon: <HiOutlineMail size={18} />,
    href: "mailto:s.suhail9849@gmail.com",
  },
  {
    id: 4,
    label: "Résumé",
    icon: <BsFillPersonLinesFill size={18} />,
    href: "/Sohail_SDE.pdf",
    download: true,
  },
];

const SocialLinks = () => {
  return (
    <div className="fixed bottom-8 right-6 z-40 hidden sm:block">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-lg shadow-slate-900/40 backdrop-blur">
        {links.map(({ id, label, icon, href, download }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            download={download}
            aria-label={label}
            className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:text-white"
          >
            {icon}
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
