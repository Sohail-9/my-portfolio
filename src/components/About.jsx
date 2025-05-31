import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white pt-40 animate-fadeIn"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-cyan-400 mb-4 tracking-wide">
            About
          </p>
        </div>

        <p className="text-xl mt-12 leading-relaxed text-gray-300">
          I am{" "}
          <span className="text-cyan-400 font-semibold">
            SDE & AI Engineer @ omniqAI
          </span>{" "}
          with a passion for creating innovative solutions and delivering
          exceptional user experiences.
          <br />
          <br />
          With a solid foundation in{" "}
          <span className="text-purple-300 font-medium">
            cloud technologies like AWS, Kubernetes, Docker, Jenkins
          </span>
          , I’ve honed my skills in full-stack development using{" "}
          <span className="text-pink-400">ReactJS</span>,{" "}
          <span className="text-pink-400">ExpressJS</span>, and{" "}
          <span className="text-pink-400">NodeJS</span>. My goal is to
          continually contribute impactful projects that drive growth and
          innovation.
        </p>

        <br />

        <p className="text-xl leading-relaxed text-gray-300">
          One of my notable projects is the{" "}
          <span className="text-green-400 font-semibold">
            Docker Automation Platform
          </span>{" "}
          using Docker SDK — a React web application enabling users to monitor
          multiple Docker containers in real time.
          <br />
          <br />I implemented a microservices architecture by deploying the
          React frontend and Node.js backend independently. Using React’s
          powerful hooks like{" "}
          <code className="bg-black/30 px-1 py-0.5 rounded">
            useState
          </code> and{" "}
          <code className="bg-black/30 px-1 py-0.5 rounded">useEffect</code>, I
          ensured seamless user interactivity, with{" "}
          <span className="text-blue-300">Axios</span> powering API integration.
          <br />
          <br />
          This project showcases my ability to work across{" "}
          <span className="text-orange-300 font-semibold">ReactJS</span>,{" "}
          <span className="text-blue-400 font-semibold">AWS</span>, and{" "}
          <span className="text-cyan-300 font-semibold">Docker</span> to create
          performant, dynamic interfaces with engineering precision.
        </p>
      </div>
    </div>
  );
};

export default About;
