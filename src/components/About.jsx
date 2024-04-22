import React from "react";



const About = () => {

  return (

    <div name="about" className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white pt-40">
      
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        <div>

          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        I am an accomplished Full-Stack Developer with a passion for creating innovative solutions and delivering exceptional user experiences. 
        With a solid foundation in cloud technologies like AWS, Kubernetes, Docker, Jenkins. I have honed my skills in front-end and back-end development, 
        as well as in popular frameworks such as ReactJS, ExpessJS and NodeJS. My goal is to leverage my technical expertise and creativity to drive impactful projects 
        and contribute to the success of organizations.
        </p>

        <br />

        <p className="text-xl">
        One of my notable projects is the Crypto Price Tracker, 
        a React web application that allows users to monitor various cryptocurrencies available in the market.
        By utilizing React components like useState and useEffect, I ensured efficient DOM manipulation, while incorporating Axios for API data retrieval. 
        This project showcases my ability to work with diverse technologies such as ReactJS, HTML, CSS, and JavaScript to deliver a dynamic and engaging user interface.
        </p>
      </div>
    </div>
  )
}



export default About;