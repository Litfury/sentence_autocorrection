// src/layout/Layout.jsx
import React from 'react';
import Navbar from '../components/Navbar.jsx';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pt-16"> {/* Prevent content from going under the fixed Navbar */}
        {children}
      </div>
    </>
  );
};

export default Layout;
