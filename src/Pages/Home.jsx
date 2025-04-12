// import React from 'react';
// import InputComponent from '../components/InputComponent.jsx';
// import OutputComponent from '../components/OutputComponent.jsx';

// const Home = () => {
//   return (
//     <div
//       className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
//     >
//       {/* Futuristic Glowing Border Container */}
//       <div className="relative z-10 w-full max-w-4xl px-8 py-10 border border-purple-500/30 rounded-3xl bg-white/5 backdrop-blur-xl shadow-[0_0_40px_#7f5af0]">
//         {/* Title */}
//         <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] via-pink-500 to-[#00d1ff] drop-shadow-lg mb-10">
//           🚀 Sentence Auto-corrector
//         </h1>

//         {/* Input / Output Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Input Panel */}
//           <div className="bg-white/10 rounded-xl p-6 border border-white/10 hover:border-purple-400 transition-all duration-300 shadow-inner">
//             <h2 className="text-xl font-semibold mb-4 text-purple-300">User Input</h2>
//             <InputComponent />
//           </div>

//           {/* Output Panel */}
//           <div className="bg-white/10 rounded-xl p-6 border border-white/10 hover:border-cyan-400 transition-all duration-300 shadow-inner">
//             <h2 className="text-xl font-semibold mb-4 text-cyan-300">Result</h2>
//             <OutputComponent />
//           </div>
//         </div>
//       </div>

//       {/* Optional Decorative Glow Effects */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';

import InputComponent from '../components/InputComponent.jsx';
import OutputComponent from '../components/OutputComponent.jsx';

const Home = () => {
  const description = "A sentence auto-corrector functions as an intelligent proofreading assistant, aiming to enhance the quality and correctness of written text. It analyzes sentences not just for basic spelling mistakes, but also for a range of grammatical errors, punctuation issues, and sometimes even stylistic awkwardness. By leveraging extensive dictionaries, predefined grammatical rules, and often sophisticated Natural Language Processing (NLP) algorithms trained on vast amounts of text data, these tools can detect inconsistencies like subject-verb disagreement, incorrect verb tenses, improper pronoun usage, missing or misplaced punctuation, and contextual spelling errors. Once an issue is identified, the auto-corrector typically suggests one or more corrections, or in some cases, automatically applies the most probable fix, thereby helping users produce clearer, more accurate, and professional-sounding sentences.";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 py-12 text-gray-200 ">

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


      <div className="mt-2 w-full max-w-7xl px-4 md:px-0 flex items-center justify-center md:justify-between"> 
        <div className="text-center w-7/10"> 
          <h1 className="mb-12 mt-4 text-5xl font-bold ma-20">About me</h1>
          <p className="text-xl text-gray-400 px 20 ">
            {description}
          </p>
        </div>
        <img
          src="../../public/vid.gif" 
          alt="Your GIF Description"
          className="ml-8 w-2/10"
          style={{ maxWidth: 'none', height: 'auto' }}
        />
      </div>


    </div> // End of Main Container
  );
};

export default Home;