import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-scroll";



// The NavBar component in the App
const NavBar = () => {

  const [nav, setNav] = useState(false);

  // Links for the Navigation Bar
  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    },
  ];


  return (

    /* NAVIGATION BAR */
    /* The navigation bar appears at the top with a height of 20 pixels */
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">

      {/* TOP LEFT LOGO */}
      {/* Add a logo in the top left of the Navigation Bar */}
      <div>
        <h1 className="text-5xl font-signature ml-2">Sohail</h1>
      </div>


      {/* NAVIGATION BAR LINKS */}
      {/* Create an unordered list of Navigation Bar links */}
      <ul className="hidden md:flex">

        {/* Display links in JSX using the links array */}
        {links.map(({ id, link }) => (

          /* Each list item will be styled in CSS and display the link name */
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            
            {/* Use the React Scroll library to scroll to the appropriate section */}
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>


      {/* HAMBURGER MENU ICON */}
      {/* Create the hamburger navigation bar icon in mobile view */}
      {/* When it is clicked, change it from the Hamburger icon to the Close (x) icon */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">

        {/* Conditional Rendering: */}
        {/* If the nav variable is true, display the Close (x) icon */}
        {/* If the nav variable is false, display the Hamburger icon */}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
        
      
      {/* DROPDOWN MENU FOR MOBILE */}          
      {/* If the nav variable is true, display the dropdown menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
  
          {/* Display dropdown links in JSX using the links array */}
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              
              {/* Use the React Scroll library to scroll to the appropriate section and close the menu */}
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}



export default NavBar;