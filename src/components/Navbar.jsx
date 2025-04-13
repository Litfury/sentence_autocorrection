import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFirebaseContext } from '../context/FirebaseContext.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useFirebaseContext();

  const hyperlinks = [
    { name: 'Home', href: '/' },
    { name: 'History', href: '/history' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#06090f]/60 backdrop-blur-md border-b border-[#4E8FF8]/20 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-white hover:text-[#4E8FF8] transition-colors duration-200">
          Sentence Senti-Mentor
        </Link>

        {/* Hamburger */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Links + Logout */}
        <ul
          className={`sm:flex sm:items-center sm:space-x-6 text-sm font-medium transition-all duration-300 ease-in-out 
          ${isOpen ? 'block mt-6 sm:mt-0 space-y-4 sm:space-y-0' : 'hidden sm:flex'}`}
        >
          {hyperlinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                className="text-white hover:text-[#4E8FF8] transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li>
            <button
              onClick={logout}
              className="group relative inline-flex items-center justify-center px-4 py-2 border border-white text-sm font-medium rounded-md overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white w-0 group-hover:w-full h-full transition-all duration-300 ease-in-out"></span>
              <span className="relative text-white group-hover:text-[#101828] z-10">
                Logout
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
