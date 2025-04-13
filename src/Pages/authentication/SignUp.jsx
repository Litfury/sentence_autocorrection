import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useFirebaseContext } from '../../context/FirebaseContext.jsx';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const { SignUpwithPassword } = useFirebaseContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        SignUpwithPassword(email, password);
    };

    return (
        <div className="bg-[#101828] flex items-center justify-center min-h-screen">
      {/* Left half - Signup Form */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mr-8"> {/* Added mr-8 for spacing */}
          <h2 className="text-2xl font-bold text-white text-center mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit} method="POST">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-100 font-medium mb-2">email</label>
              <input
                type="email"
                id="email"
                autoComplete="on"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-800"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-100 font-medium mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-800"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirm-password" className="block text-gray-100 font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-800"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center text-gray-200 mt-4">
            Already have an account ? &nbsp;
            <Link to={'/login'} className="text-blue-500 hover:underline">Log in</Link>
          </p>
        </div>
      </div>

      {/* Right half - Image */}
      <div className="w-1/2 h-screen">
        <img
          src="../../../public/waterfall.gif" // Replace with the actual URL or path to your image
          alt="Signup Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    )
}

export default SignUp