import React from "react";

// Import the thumbnail images for all of the items in our portfolio
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";



// The Portfolio component in the App
const Portfolio = () => {

  // Array of Portfolio Items
  // Each portfolio item has an id and src to display the image
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct
    },
    {
      id: 2,
      src: reactParallax
    },
    {
      id: 3,
      src: navbar
    },
    {
      id: 4,
      src: reactSmooth
    },
    {
      id: 5,
      src: installNode
    },
    {
      id: 6,
      src: reactWeather
    },
  ];



  // Return the Portfolio component
  return (

    /* PORTFOLIO COMPONENT */
    /* A gradient is added to the background and the text is changed to white*/
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-40">

      {/* Container for portfolio title, description and thumbnails */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Container for title and description */}
        <div className="pb-8">

          {/* Portfolio title */}
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>

          {/* Portfolio description */}
          <p className="py-6">
            Check out some of my work right here
          </p>
        </div>

        {/* Container of Portfolio Thumbnails */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

          {/* Display portfolio items in JSX using the portfolios array */}
          {portfolios.map(({id, src}) => (

              /* Container for the individual thumbnail and text */
              /* Set the id and src for the thumbnail image */
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                
                {/* Thumbnail image */}
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                
                {/* Container for the 'Demo' and 'Code' text */}
                <div className="flex items-center justify-center">

                  {/* Buttons */}
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
};



export default Portfolio;