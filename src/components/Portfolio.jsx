import React from "react";

import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demoLink: "https://your-demo-link.com/array-destructuring",
      codeLink: "https://github.com/yourusername/array-destructuring",
    },
    {
      id: 2,
      src: reactParallax,
      demoLink: "https://your-demo-link.com/react-parallax",
      codeLink: "https://github.com/yourusername/react-parallax",
    },
    {
      id: 3,
      src: navbar,
      demoLink: "https://your-demo-link.com/responsive-navbar",
      codeLink: "https://github.com/yourusername/responsive-navbar",
    },
    {
      id: 4,
      src: reactSmooth,
      demoLink: "https://your-demo-link.com/react-smooth-scroll",
      codeLink: "https://github.com/yourusername/react-smooth-scroll",
    },
    {
      id: 5,
      src: installNode,
      demoLink: "https://your-demo-link.com/install-node-server",
      codeLink: "https://github.com/yourusername/node-server-setup",
    },
    {
      id: 6,
      src: reactWeather,
      demoLink: "https://your-demo-link.com/react-weather-app",
      codeLink: "https://github.com/yourusername/react-weather-app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white pt-40 pb-20 animate-fadeIn"
    >
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col justify-center w-full h-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-cyan-400 tracking-wide">
            Portfolio
          </h2>
          <p className="py-6 text-lg text-gray-300">
            Here are some of my featured projects. Click to explore!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div
              key={id}
              className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-cyan-500/20 transition-shadow duration-300 border border-gray-700 flex flex-col"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={src}
                  alt={`project-${id}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-5">
                <h3 className="text-xl font-semibold text-center mb-4">
                  Project {id}
                </h3>
                <div className="flex justify-center gap-4">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 w-1/2 text-sm text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-semibold shadow hover:scale-110 transform transition"
                  >
                    Demo
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 w-1/2 text-sm text-center bg-gradient-to-r from-gray-700 to-gray-900 rounded-md text-white font-semibold shadow hover:scale-110 transform transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
