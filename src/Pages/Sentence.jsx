import React, { useState } from 'react';

import InputComponent from '../components/InputComponent.jsx';
import OutputComponent from '../components/OutputComponent.jsx';

const Sentence = () => {
  const description = "A sentence auto-corrector is a smart editing tool that enhances writing by fixing spelling, grammar, punctuation, and style issues. Using dictionaries, grammar rules, and advanced NLP algorithms, it detects problems like subject-verb disagreement, incorrect tenses, and misplaced punctuation. It then suggests or applies corrections to make writing clearer, more polished, and professional.";

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
        <div className="text-center md:text-left flex-1 backdrop-blur-lg bg-white/10 border border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:border-[#f1f1e6] transition-all duration-300 shadow-inner">
          <h2 className="text-3xl sm:text-5xl font-bold mb-9 text-center">About Me</h2>
          <p className="text-base sm:text-xl text-gray-400 text-justify">
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

export default Sentence;
