import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-fit bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-40 pb-20 animate-fadeIn"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-cyan-400">
            Contact
          </p>
          <p className="py-6 text-lg text-gray-300">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/eb55abd9-a4fd-4287-bf51-85412677cbcc"
            method="POST"
            className="bg-black/40 backdrop-blur-md p-8 rounded-xl shadow-lg flex flex-col w-full md:w-1/2 space-y-4 border border-gray-700"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
              required
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="8"
              className="p-3 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
              required
            />

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 mt-6 rounded-md font-semibold tracking-wide hover:scale-110 transform transition duration-300 shadow-md shadow-cyan-500/20">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
