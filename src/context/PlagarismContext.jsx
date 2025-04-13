
import { createContext, useContext, useState } from "react";
import { useFirebaseContext } from "../context/FirebaseContext.jsx";

const chatContext = createContext(null);

export const useChatContext = () => useContext(chatContext);

const PlagarismContext = (props) => {
  const [currentChat, setChatOutput] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <chatContext.Provider value={{ currentChat, setChatOutput, loading, setLoading }}>
      {props.children}
    </chatContext.Provider>
  );
}

export default PlagarismContext;
