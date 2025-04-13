import React, { useState } from 'react';

import InputComponent from '../components/InputComponent.jsx';
import OutputComponent from '../components/OutputComponent.jsx';

const Sentence = () => {
  const description = "A sentence auto-corrector serves as a smart editing assistant designed to improve the clarity, accuracy, and overall quality of written text. Beyond correcting basic spelling mistakes, it identifies a wide range of issues, including grammatical errors, punctuation problems, and stylistic inconsistencies. Leveraging comprehensive dictionaries, grammar rules, and advanced Natural Language Processing (NLP) algorithms trained on vast text corpora, these tools can spot issues such as subject-verb disagreement, incorrect verb tenses, improper pronoun usage, and misplaced or missing punctuation. Once detected, the tool either suggests suitable corrections or automatically applies the most likely fix—helping users produce writing that is clearer, more polished, and professional.";

  const [file, setFile] = useState(null);

  // Handle file upload
  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      // You can process the file here (e.g., send it for processing)
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 py-12 text-gray-200">

      {/* Content card: Input/Output Area */}
      <div className="w-full rounded-lg bg-gray-800 p-6 shadow-lg mt-10 mb-19 md:p-8 ma-15 bg-white/10 rounded-xl p-6 border border-white/10 hover:border-[#f1f1e6] transition-all duration-300 shadow-inner">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fff7d6] via-[#dee6fd] to-[#f1f1e6] drop-shadow-lg mb-10">
          🚀 Sentence Auto-corrector
        </h1>
        {/* Input Section */}
        <div className=""> 
          <InputComponent />
        </div>

        {/* Output Section */}
        <div>
          <OutputComponent />
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

export default Sentence;
