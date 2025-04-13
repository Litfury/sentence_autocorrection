import { createContext, useContext, useState, useEffect, use } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom'
import { auth, useFirebaseContext } from "../context/FirebaseContext.jsx";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_Firebase_API_key,
  authDomain: "sentencecorrector-e8cd4.firebaseapp.com",
  projectId: "sentencecorrector-e8cd4",
  storageBucket: "sentencecorrector-e8cd4.firebasestorage.app",
  messagingSenderId: "664438901821",
  appId: "1:664438901821:web:f8809cba832af862736e54",
  measurementId: "G-NK2Z0KJVKF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


const chatContext = createContext(null);

export const useChatContext = () => useContext(chatContext);

const ChatContext = (props) => {
  const [currentChat, setChatOutput] = useState({});
  const [loading, setLoading] = useState(false);
  const [user, isLoading] = useAuthState(auth);
  const userID = user ? user.uid : "";
  

  useEffect(() => {
    console.log(currentChat);
  }, [currentChat]);

  const createChat = async (original_text, processed_text) => {
    
    if(user){
      try {
        const docRef = await addDoc(collection(db, "chats"), {
          user_id: userID,
          original_text: original_text,
          processed_text: processed_text,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    
  };

  return <chatContext.Provider value={{ currentChat, setChatOutput, loading, setLoading, createChat }}>
    {props.children}
  </chatContext.Provider>
}

export default ChatContext