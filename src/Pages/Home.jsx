import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const description =
    "Elevate your writing with our intelligent tools. Whether correcting grammar or ensuring originality, our AI-powered Sentence Auto-corrector and Plagiarism Checker provide accurate, reliable results that empower your creativity.";

  return (
    <main className="min-h-screen bg-[#101828] text-[#F4F9FF] px-6 py-12 flex flex-col justify-center items-center font-sans">

      {/* Header */}
      <header className="text-center mb-16 mt-12"> {/* <-- Added mt-12 here */}
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#dee6fd] via-[#4E8FF8] to-[#F4F9FF] text-transparent bg-clip-text mb-4">
          Sentence Senti-Mentor
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
          {description}
        </p>
      </header>

      {/* Buttons */}
      <section className="flex flex-col md:flex-row gap-6 mb-20">
        <Link
          to="/sentence"
          className="px-6 py-3 rounded-lg text-lg font-medium bg-[#4E8FF8] text-white hover:bg-blue-600 transition duration-300 shadow-lg"
        >
          ✍️ Sentence Auto-corrector
        </Link>
        <Link
          to="/plagarism"
          className="px-6 py-3 rounded-lg text-lg font-medium bg-green-500 text-white hover:bg-green-600 transition duration-300 shadow-lg"
        >
          🕵️ Plagiarism Checker
        </Link>
      </section>

      {/* Features */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl gap-10 w-full px-4">
        <div className="md:w-2/3 text-center md:text-left backdrop-blur-lg bg-white/10 border border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:border-[#f1f1e6] transition-all duration-300 shadow-inner">
          <h2 className="text-4xl font-semibold mb-9 ma-9 text-[#F4F9FF]">Why Choose Us?</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Backed by powerful AI and NLP algorithms, our tools help users of all kinds — from students to professionals — produce clear, error-free, and original content. Accuracy meets simplicity.
          </p>
        </div>

        <div className="md:w-1/3 w-full">
          <img
            src="/vid.gif"
            alt="Writing tools illustration"
            className="w-full rounded-xl shadow-xl"
          />
        </div>
      </section>


    </main>
  );
};

export default Home;
