import React, { useState } from "react";
import { useChatContext } from "../context/ChatContext.jsx";
import { useFirebaseContext } from "../context/FirebaseContext.jsx";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

const InputComponent = () => {
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
      const systemPrompt = "You are an AI-powered sentence corrector. Your task is to receive text as input and provide corrected versions of the sentences, focusing on grammar, spelling, punctuation, and clarity. Maintain the original meaning and tone of the input as much as possible. If any other type of input is given return the sentence as it is, do not generate anything else, your only job is to correct the sentence. You have to either correct the sentence or return the input as it is.";
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
      className="bg-black bg-opacity-15 shadow-[10px_9px_24px_-14px_rgba(59,_130,_246,_0.5)] p-6 w-full bg-white/10 rounded-xl p-6 border border-white/10 hover:border-purple-400 transition-all duration-300 shadow-inner"
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
        className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
}

export default InputComponent