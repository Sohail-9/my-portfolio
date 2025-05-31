import React from "react";

import aws from "../assets/aws.webp";
import kubernetes from "../assets/kubernetes.webp";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: aws,
      title: "AWS",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: kubernetes,
      title: "Kubernetes",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black pt-40 pb-20 text-white animate-fadeIn"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mb-8 text-center">
          <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-cyan-400 tracking-wide">
            Experience
          </p>
          <p className="text-gray-300 mt-4 text-lg">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4 sm:px-0 text-center">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-md hover:scale-110 transform transition duration-300 hover:shadow-2xl ${style}`}
            >
              <img
                src={src}
                alt={title}
                className="w-20 mx-auto drop-shadow-lg"
              />
              <p className="mt-6 text-lg font-semibold text-gray-200">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
