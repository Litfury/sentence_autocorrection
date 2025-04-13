import React, { useState } from "react";
import { useChatContext } from "../context/ChatContext.jsx";
import { useFirebaseContext } from "../context/FirebaseContext.jsx";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

const InputForPlagarism = () => {
  const [text, setText] = useState("");

  const { setChatOutput, setLoading, createChat } = useChatContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (text === "") {
      setLoading(false);
      return;
    };
    try {

      const apiKey = import.meta.env.VITE_Gemini_API_key;
      const systemPrompt = "You are an AI-powered sentence corrector. Your task is to receive text as input and detect plagarism in the content and give an output only in numbers that how much percentage is written by AI, how much percentage is fetched from internet and how much percentage of the text is written by human. Do not give anything else as an output except these numbers, if unable to process then return all the values as 0. Return it in this sample format 'AI-generated - 0%, From-internet - 2% and Human-content - 98%'";
      const sentence = text;
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `System Prompt: ${systemPrompt}\n\nUser Prompt: ${sentence}`;

      const result = await model.generateContent(prompt);

      const chat_data = {
          original_text: sentence,
          processed_text: result.response.text(),
        }

      console.log(chat_data);
      setChatOutput(chat_data);
      createChat(chat_data.original_text, chat_data.processed_text);



      setLoading(false);

    } catch (error) {
      console.log(error);

    }
    setText("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=""
    >
      <label htmlFor="message" className="block text-white text-lg font-medium mb-2">
        Your Text
      </label>
      <textarea
        id="message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your text here..."
        className="w-full h-32 px-4 py-2 bg-transparent text-white focus:outline-none "
      ></textarea>
      <button
        type="submit"
        className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none border-purple-400 transition-all duration-300 shadow-inner"
      >
        Check Plagarism
      </button>
    </form>
  );
}

export default InputForPlagarism