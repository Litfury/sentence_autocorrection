import React, { useState } from 'react';

import InputComponent from '../components/InputComponent.jsx';
import OutputComponent from '../components/OutputComponent.jsx';

const Sentence = () => {
  const description =
    "A sentence auto-corrector serves as a smart editing assistant designed to improve the clarity, accuracy, and overall quality of written text. Beyond correcting basic spelling mistakes, it identifies a wide range of issues, including grammatical errors, punctuation problems, and stylistic inconsistencies. Leveraging comprehensive dictionaries, grammar rules, and advanced Natural Language Processing (NLP) algorithms trained on vast text corpora, these tools can spot issues such as subject-verb disagreement, incorrect verb tenses, improper pronoun usage, and misplaced or missing punctuation. Once detected, the tool either suggests suitable corrections or automatically applies the most likely fix—helping users produce writing that is clearer, more polished, and professional.";

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      const text = event.target.result;
      sendTextToAPI(text);
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4 pt-24 pb-12 text-gray-200">
      
      {/* Input/Output Card */}
      <div className="w-full max-w-screen-lg rounded-xl bg-white/10 p-6 md:p-8 border border-white/10 hover:border-[#f1f1e6] transition-all duration-300 shadow-inner">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fff7d6] via-[#dee6fd] to-[#f1f1e6] drop-shadow-lg mb-10">
          🚀 Sentence Auto-corrector
        </h1>

        <div>
          <InputComponent />
        </div>

        <div className="mt-6">
          <OutputComponent />
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
      {/* <div className="mt-12 w-full max-w-screen-lg flex flex-col items-center px-2 sm:px-4">
        <h2 className="text-2xl text-white mb-4">Upload Your File</h2>
        <input
          type="file"
          accept=".txt"
          onChange={handleFileChange}
          className="border-2 border-[#4E8FF8] bg-transparent text-white py-2 px-4 rounded-md cursor-pointer focus:outline-none hover:bg-[#4E8FF8] hover:text-[#101828] transition-all duration-300"
        />
        {file && (
          <div className="mt-4 text-lg text-white text-center">
            <p>Uploaded File: {file.name}</p>
            <p>File Size: {(file.size / 1024).toFixed(2)} KB</p>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Sentence;
