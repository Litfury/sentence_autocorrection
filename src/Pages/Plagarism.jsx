import React, { useState } from 'react';

import PlagarismContext from '../context/PlagarismContext.jsx';
import InputForPlagarism from '../components/InputForPlagarism.jsx';
import OutputForPlagarism from '../components/OutputForPlagarism.jsx';

const Plagarism = () => {
  const description =
    "A plagiarism checker is a powerful tool that ensures the originality of written content by comparing it against a wide database of online sources, academic papers, and publications. It detects exact matches, paraphrasing, and improper citations using advanced algorithms and NLP. The tool highlights similarities, provides source links, and generates originality reports to help users maintain academic and professional integrity. Ideal for students, educators, and content creators, it promotes ethical writing, protects intellectual property, and upholds credibility in academic and professional settings.";

  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4 pt-24 pb-12 text-gray-200">

      {/* Content card: Input/Output Area */}
      <div className="w-full max-w-screen-lg rounded-xl bg-white/10 p-6 md:p-8 border border-white/10 hover:border-[#f1f1e6] transition-all duration-300 shadow-inner">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fff7d6] via-[#dee6fd] to-[#f1f1e6] drop-shadow-lg mb-10">
          🚀 Plagiarism Checker
        </h1>

        <div>
          <InputForPlagarism />
        </div>

        <div className="mt-6">
          <OutputForPlagarism />
        </div>
      </div>

      {/* About Me Section */}
      <div className="mt-16 w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-between gap-8 px-2 sm:px-4">
        <div className="text-center md:text-left flex-1 backdrop-blur-lg bg-white/10 border border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:border-[#f1f1e6] transition-all duration-300 shadow-inner">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-base sm:text-xl text-gray-400 text-justify ">
            {description}
          </p>
        </div>
        <div className="flex justify-center md:justify-end flex-1">
          <img
            src="/vid.gif"
            alt="Your GIF Description"
            className="w-48 sm:w-64 md:w-80 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Plagarism;
