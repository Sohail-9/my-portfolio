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
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-40"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={`project-${id}`}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
