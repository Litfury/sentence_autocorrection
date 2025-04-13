import React, { useState } from 'react';

import PlagarismContext from '../context/PlagarismContext.jsx';
import InputForPlagarism from '../components/InputForPlagarism.jsx';
import OutputForPlagarism from '../components/OutputForPlagarism.jsx';

const Plagarism = () => {
  const description = "A plagiarism checker is an advanced tool designed to verify the originality of written content by comparing it against a vast database of online sources, academic papers, and published materials. It detects exact matches, paraphrased text, and potential instances of unintentional copying, helping users maintain academic and professional integrity. Using powerful algorithms and Natural Language Processing (NLP), it highlights similarities and provides detailed reports with source links, originality scores, and contextual insights. These tools can identify not only verbatim matches but also nuanced rewording, improper citations, and structural similarities. Whether you're a student, researcher, educator, or content creator, a plagiarism checker ensures your work is authentic, properly cited, ethically sound, and free from duplication—promoting credibility and responsible writing practices. By encouraging originality and transparency, it plays a vital role in upholding academic standards, protecting intellectual property, and building trust in both educational and professional environments.";

  const [file, setFile] = useState(null);

  // Handle file upload
  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      // You can process the file here (e.g., send it for plagiarism check)
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 py-12 text-gray-200 ">

      {/* Content card: Input/Output Area */}
      <div className="w-full rounded-lg bg-gray-800 p-6 shadow-lg mt-10 mb-19 md:p-8 ma-15 bg-white/10 rounded-xl p-6 border border-white/10 hover:border-[#f1f1e6] transition-all duration-300 shadow-inner">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fff7d6] via-[#dee6fd] to-[#f1f1e6] drop-shadow-lg mb-10">
          🚀 Plagiarism Checker
        </h1>
        {/* Input Section */}
        <div className=""> 
          <InputForPlagarism />
        </div>

        {/* Output Section */}
        <div>
          <OutputForPlagarism />
        </div>

      </div> {/* End of Content Card */}

      {/* About Me Section */}
      <div className="mt-2 w-full max-w-7xl px-4 md:px-0 flex items-center justify-center md:justify-between"> 
        <div className="text-center w-7/10"> 
          <h1 className="mb-12 mt-4 text-5xl font-bold ma-20">About Me</h1>
          <p className="text-xl text-gray-400 px 20 ">
            {description}
          </p>
        </div>
        <img
          src="/vid.gif" 
          alt="Your GIF Description"
          className="ml-8 w-2/10"
          style={{ maxWidth: 'none', height: 'auto' }}
        />
      </div>

      {/* File Upload Section */}
      <div className="mt-10 w-full max-w-7xl px-4 md:px-0 flex flex-col items-center justify-center">
        <h2 className="text-2xl text-white mb-6">Upload Your File</h2>
        <input
          type="file"
          onChange={handleFileUpload}
          className="border-2 border-[#4E8FF8] bg-transparent text-white py-2 px-4 rounded-md cursor-pointer focus:outline-none hover:bg-[#4E8FF8] hover:text-[#101828] transition-all duration-300"
        />
        {file && (
          <div className="mt-4 text-lg text-white">
            <p>Uploaded File: {file.name}</p>
            <p>File Size: {(file.size / 1024).toFixed(2)} KB</p>
          </div>
        )}
      </div>

    </div> // End of Main Container
  );
};

export default Plagarism;
