import React, { useEffect, useState } from 'react'
import { useFirebaseContext } from "../context/FirebaseContext.jsx";
import { db } from "../context/ChatContext.jsx";
import { collection, getDocs } from "firebase/firestore";

const NoHistory = () => {
  return (
    <div className="flex flex-col mt-4 items-center justify-center h-full text-center space-y-4">
      <p className="text-gray-500 text-lg font-medium">
        No history found
      </p>
      <p className="text-gray-400 text-sm">
        Start correcting your sentences to see your history here.
      </p>
    </div>
  );
};


const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const { user } = useFirebaseContext();
  const userID = user?user.uid:"";

  const fetchHistory = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "chats"));
      querySnapshot.forEach((doc) => {
        if (doc.data().user_id === userID) {
          setHistory((prevHistory) => {
            const newEntry = doc.data();
            return prevHistory.some(history => history.user_id === newEntry.user_id && history.original_text === newEntry.original_text) 
              ? prevHistory 
              : [...prevHistory, newEntry];
          });
          console.log(doc.data());
          
        }
      });

    } catch (error) {
      console.log(error);
      setHistory([]);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [user])

  return (
    <div className="flex flex-col items-center pt-40 p-10 space-y-4 h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1642355008521-236f1d29d0a8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      {history.length > 0 ? history.map((chat, index) => (
        <div
          key={index}
          className="p-4 mx-10 w-full md:w-1/2 border rounded-lg  bg-opacity-5 hover:shadow-[0px_9px_22px_0px_rgba(59,_130,_246,_0.5)] transition-shadow duration-500 ease-in-out"
        >
          <p className="text-white font-semibold">Original Text: {chat.original_text}</p>
          <p className="text-white font-extrabold mt-2"> Corrected Text: {chat.processed_text}</p>
        </div>
      )) : <NoHistory />}
    </div>

  )
}

export default HistoryPage