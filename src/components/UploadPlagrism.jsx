import React from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useChatContext } from "../context/PlagarismContext.jsx";

const UploadPlagrism = () => {
    const { setChatOutput, setLoading } = useChatContext();

    const sendTextToAPI = async (text) => {
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
            setChatOutput(chat_data);

            setLoading(false);
        } catch (err) {
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
                setChatOutput(chat_data);

                setLoading(false);
            } catch (err) {
                console.error('API Error:', err);
            }
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = async (event) => {
            const text = event.target.result;
            sendTextToAPI(text);
            console.log(text);

        };
        reader.readAsText(file);

    }
    return (
        <div className="mt-12 w-full max-w-screen-lg flex flex-col items-center px-2 sm:px-4">
            <h2 className="text-2xl text-white mb-4">or Upload Your File</h2>
            <input
                type="file"
                accept=".txt"
                onChange={handleFileChange}
                className="border-2 border-[#4E8FF8] bg-transparent text-white py-2 px-4 rounded-md cursor-pointer focus:outline-none hover:bg-[#4E8FF8] hover:text-[#101828] transition-all duration-300"
            />

        </div>
    )
}

export default UploadPlagrism
