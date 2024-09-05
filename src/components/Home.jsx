import React from "react";

import HeroImage from "../assets/heroImage.jpg"

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-scroll";


const Home = () => {

  return (
    <div name="home" className="h-fit w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24 md:pt-60">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
        <div className="flex flex-col justify-center h-full">

          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
<<<<<<< HEAD
            I have 1 Year of experience building and designing software applications.
            Currently, I'm working on AI, Devops, Full stack and my tech stack is React,js, Next.js, Express.js and TypeScript, Generative AI, Agentic AI.
=======
            I have 2 Years of experience building and designing software applications.
            Currently, I'm working on web applications and my tech stack is React,js, Next.js, Express.js, TypeScript.
>>>>>>> c3c2f6d3c4a7332549e9b29724574e0e7926a799
          </p>


          <div>

            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio

              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  )
};



export default Home;