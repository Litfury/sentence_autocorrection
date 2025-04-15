import React from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useChatContext } from "../context/ChatContext.jsx";

const downloadTextFile = (text) => {
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'response.txt';
    link.click();
};



const UploadSection = () => {
    const { setChatOutput, setLoading, createChat } = useChatContext();

    const sendTextToAPI = async (text) => {
        setLoading(true);
        if (text === "") {
            setLoading(false);
            return;
        };
        try {
            const apiKey = import.meta.env.VITE_API_key;

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
            setChatOutput(chat_data);
            downloadTextFile(result.response.text()); // Adjust key as per your API
            createChat(chat_data.original_text, chat_data.processed_text);
            setLoading(false);
        } catch (err) {
            try {
                const apiKey = import.meta.env.VITE_API_key2;

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
                setChatOutput(chat_data);
                downloadTextFile(result.response.text()); // Adjust key as per your API
                createChat(chat_data.original_text, chat_data.processed_text);
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
            <h2 className="text-2xl text-white text-center mb-4">or Upload Your File</h2>
            <input
                type="file"
                accept=".txt"
                onChange={handleFileChange}
                className="border-2 border-[#4E8FF8] bg-transparent text-white py-2 px-4 rounded-md cursor-pointer focus:outline-none hover:bg-[#4E8FF8] hover:text-[#101828] transition-all duration-300"
            />
            {/* {file && (
          <div className="mt-4 text-lg text-white text-center">
            <p>Uploaded File: {file.name}</p>
            <p>File Size: {(file.size / 1024).toFixed(2)} KB</p>
          </div>
        )} */}
        </div>
    )
}

export default UploadSection
