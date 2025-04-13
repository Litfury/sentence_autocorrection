import React, { useState } from 'react';

import PlagarismContext from '../context/PlagarismContext.jsx';
import InputForPlagarism from '../components/InputForPlagarism.jsx';
import OutputForPlagarism from '../components/OutputForPlagarism.jsx';

const Plagarism = () => {
  const description =
    "A plagiarism checker is an advanced tool designed to verify the originality of written content by comparing it against a vast database of online sources, academic papers, and published materials. It detects exact matches, paraphrased text, and potential instances of unintentional copying, helping users maintain academic and professional integrity. Using powerful algorithms and Natural Language Processing (NLP), it highlights similarities and provides detailed reports with source links, originality scores, and contextual insights. These tools can identify not only verbatim matches but also nuanced rewording, improper citations, and structural similarities. Whether you're a student, researcher, educator, or content creator, a plagiarism checker ensures your work is authentic, properly cited, ethically sound, and free from duplication—promoting credibility and responsible writing practices. By encouraging originality and transparency, it plays a vital role in upholding academic standards, protecting intellectual property, and building trust in both educational and professional environments.";

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
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-base sm:text-xl text-gray-400">
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

      {/* File Upload Section */}
      <div className="mt-12 w-full max-w-screen-lg flex flex-col items-center px-2 sm:px-4">
        <h2 className="text-2xl text-white mb-4">Upload Your File</h2>
        <input
          type="file"
          onChange={handleFileUpload}
          className="border-2 border-[#4E8FF8] bg-transparent text-white py-2 px-4 rounded-md cursor-pointer focus:outline-none hover:bg-[#4E8FF8] hover:text-[#101828] transition-all duration-300"
        />
        {file && (
          <div className="mt-4 text-lg text-white text-center">
            <p>Uploaded File: {file.name}</p>
            <p>File Size: {(file.size / 1024).toFixed(2)} KB</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Plagarism;
