import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, useFirebaseContext } from '../context/FirebaseContext.jsx';
import { BeatLoader } from 'react-spinners';

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const { setUser } = useFirebaseContext();

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user, setUser]);

  if (loading) {
    return (
      <div className='flex items-center bg-black justify-center h-screen'>
        <BeatLoader color="#0f3dff" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};


export default ProtectedRoute