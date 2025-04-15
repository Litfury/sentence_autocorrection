import React, { useState } from "react";
import { useChatContext } from "../context/PlagarismContext.jsx";
import UploadPlagrism from "./UploadPlagrism.jsx"
import { GoogleGenerativeAI } from "@google/generative-ai";

const InputForPlagarism = () => {
  const [text, setText] = useState("");

  const { setChatOutput, setLoading } = useChatContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (text === "") {
      setLoading(false);
      return;
    };
    try {

      const apiKey = import.meta.env.VITE_API_key;
      const systemPrompt = "You are an AI-powered Plagarism detector. Your task is do a deep search on the internet, web, search engines and news sites for the plagarism detection, you also need to detect AI generated content in the text attached and detect plagarism in the content and give an output only in numbers that how much percentage of the text is plagarised and how much percentage is written by human. Do not give anything else as an output except these numbers, if unable to process then return all the values as 0. Return the output in this specificed sample format only 'Plagarism - 72% and Human-content - 28%";
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



      setLoading(false);

    } catch (error) {
      try {

        const apiKey = import.meta.env.VITE_API_key_2;
        const systemPrompt = "You are an AI-powered Plagarism detector. Your task is do a deep search on the internet, web, search engines and news sites for the plagarism detection, you also need to detect AI generated content in the text attached and detect plagarism in the content and give an output only in numbers that how much percentage of the text is plagarised and how much percentage is written by human. Do not give anything else as an output except these numbers, if unable to process then return all the values as 0. Return the output in this specificed sample format only 'Plagarism - 72% and Human-content - 28%";
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



        setLoading(false);

      } catch (error) {
        console.log(error);

      }

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
        className="w-full h-32 px-4 py-2 bg-gray-700 rounded text-white focus:outline-none "
      ></textarea>
      <UploadPlagrism />
      <button
        type="submit"
        className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:hover:bg-blue-200 transition-colors focus:outline-none"
      >
        Check Plagiarism
      </button>
    </form>
  );
}

export default InputForPlagarism
