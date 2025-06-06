import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={28} />
        </>
      ),
      href: "https://www.linkedin.com/in/shaiksohail96/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={28} />
        </>
      ),
      href: "https://github.com/Sohail-9",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={28} />
        </>
      ),
      href: "mailto:s.suhail9849@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={28} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-48 h-14 px-4 ml-[-120px] hover:ml-0 hover:rounded-md transition-all duration-500 text-gray-200 bg-black/40 backdrop-blur-md border border-white/10 shadow-md ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full font-medium"
              download={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
