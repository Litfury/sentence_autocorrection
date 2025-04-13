import React, { useEffect, useState } from 'react';
import { auth,useFirebaseContext } from "../context/FirebaseContext.jsx";
import { db } from "../context/ChatContext.jsx";
import { collection, getDocs } from "firebase/firestore";
import { Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';

const NoHistory = () => {
  
  return (
    <div className="flex flex-col mt-20 items-center justify-center text-center space-y-2">
      <p className="text-gray-400 text-xl font-semibold">No history found</p>
      <p className="text-gray-500 text-sm">Start correcting your sentences to view your history here.</p>
    </div>
  );
};

const HistoryPage = () => {
  const [user, loading] = useAuthState(auth);
  const [history, setHistory] = useState([]);
  const { user: firebaseUser } = useFirebaseContext();
  const userID = firebaseUser ? firebaseUser.uid : "";

  const fetchHistory = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "chats"));
      const entries = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.user_id === userID) {
          if (!entries.some(h => h.original_text === data.original_text && h.user_id === data.user_id)) {
            entries.push(data);
          }
        }
      });
      setHistory(entries.reverse());
    } catch (error) {
      console.error(error);
      setHistory([]);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [user]);

  if (!user) {
    console.log("user not logged in");
    
    return <Navigate to="/login" />;
  }
  return (
    <div className="min-h-screen w-full bg-[#101828] p-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mt-20 mb-10 tracking-tight">
        🕓 Your History
      </h1>

      {history.length > 0 ? (
        <div className="w-full max-w-4xl space-y-6">
          {history.map((chat, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl transition-shadow duration-300 hover:shadow-lg"
            >
              <p className="text-[#F4F9FF] font-medium">
                <span className="text-sm text-gray-400">Original:</span> {chat.original_text}
              </p>
              <p className="text-[#4E8FF8] font-semibold mt-2">
                <span className="text-sm text-gray-400">Corrected:</span> {chat.processed_text}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <NoHistory />
      )}
    </div>
  );
};

export default HistoryPage;
