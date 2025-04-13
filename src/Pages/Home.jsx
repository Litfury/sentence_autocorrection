import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const description =
    "This tool helps enhance sentence quality and detect plagiarism. Our Sentence Auto-corrector analyzes grammar, punctuation, and spelling using NLP, while the Plagiarism Checker compares your input against a vast database to ensure originality and credibility.";

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-900 text-gray-200 p-6">
      
      {/* Title Section */}
      <h1 className="mt-19 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fff7d6] via-[#dee6fd] to-[#f1f1e6] drop-shadow-lg mb-6">
         Welcome to Sentence Senti-Mentor
      </h1>
      
      <p className="text-lg text-center max-w-3xl text-gray-400 mb-10">
        {description}
      </p>

      {/* Button Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-16">
        <Link
          to="/sentence"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-lg shadow-md"
        >
          Sentence Auto-corrector
        </Link>

        <Link
          to="/plagarism"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-lg shadow-md"
        >
          Plagiarism Checker
        </Link>
      </div>

      {/* Visual Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
        <div className="md:w-2/3 px-4 mb-6 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Why use our tools?</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Whether you're refining your writing or checking for originality,
            our tools are built with advanced NLP and AI models to ensure top-notch accuracy and usability. Elevate your writing with ease and confidence.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src="../../public/vid.gif"
            alt="Writing tools illustration"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;




