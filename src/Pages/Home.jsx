import React from 'react';
import InputComponent from '../components/InputComponent.jsx';
import OutputComponent from '../components/OutputComponent.jsx';

const Home = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Futuristic Glowing Border Container */}
      <div className="relative z-10 w-full max-w-4xl px-8 py-10 border border-purple-500/30 rounded-3xl bg-white/5 backdrop-blur-xl shadow-[0_0_40px_#7f5af0]">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] via-pink-500 to-[#00d1ff] drop-shadow-lg mb-10">
          🚀 Sentence Auto-corrector
        </h1>

        {/* Input / Output Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="bg-white/10 rounded-xl p-6 border border-white/10 hover:border-purple-400 transition-all duration-300 shadow-inner">
            <h2 className="text-xl font-semibold mb-4 text-purple-300">User Input</h2>
            <InputComponent />
          </div>

          {/* Output Panel */}
          <div className="bg-white/10 rounded-xl p-6 border border-white/10 hover:border-cyan-400 transition-all duration-300 shadow-inner">
            <h2 className="text-xl font-semibold mb-4 text-cyan-300">Result</h2>
            <OutputComponent />
          </div>
        </div>
      </div>

      {/* Optional Decorative Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
    </div>
  );
};

export default Home;
