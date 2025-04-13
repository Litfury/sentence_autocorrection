import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFirebaseContext } from '../../context/FirebaseContext.jsx';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { SignInwithPassword, GoogleAuthentication } = useFirebaseContext();

    const handleGoogleLogin = () => {
        GoogleAuthentication();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        SignInwithPassword(email, password);
    };

    return (
        <div className="bg-[#101828] flex items-center justify-center min-h-screen">
            <div className="w-1/2 flex justify-center items-center">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mr-8"> {/* Added mr-8 for spacing */}
                    <h2 className="text-2xl font-bold text-gray-100 text-center mb-8">Login to Your Account</h2>
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-100 font-medium mb-2">
                                email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-800"
                                placeholder="Enter your email"
                                autoComplete="on"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-100 font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full mb-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Login
                        </button>
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Login with Google
                        </button>
                    </form>
                    <p className="text-sm text-center text-gray-500 mt-4">
                        Don't have an account ? &nbsp;
                        <Link to={'/signup'} className="text-blue-500 hover:underline">
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
            <div className="w-1/2 h-screen">
                <img
                    src="../../../public/waterfall.gif"
                    alt="Login Illustration"
                    className="w-full h-full object-cover"
                />
            </div>

        </div>
    );
};

export default Login;