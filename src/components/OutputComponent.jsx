import React, { useEffect } from 'react'
import { useChatContext } from "../context/ChatContext.jsx";
import { RingLoader } from 'react-spinners'

const OutputComponent = () => {
  const { currentChat, loading } = useChatContext();
  if (loading) {
    return (
      <div className="flex items-center justify-center mt-4">
        <RingLoader color="#00b2ff" />
      </div>
    )
  }

  return (
    <div className="bg-black bg-opacity-15 p-4  max-w-md mx-auto mt-8 bg-white/10 rounded-xl p-6 border border-white/10">

      {currentChat.original_text ?

        <>
          <h1 className="text-2xl font-bold text-gray-100">Output</h1>
          <p className="text-gray-100 my-4">Your Input: <span className="font-bold">{currentChat.original_text}</span></p>
          <p className="text-gray-100 my-4">Corrected Text: <span className="font-bold">{currentChat.processed_text}</span></p>
        </>

        : <h1 className="text-2xl font-bold text-gray-100">Start correcting your text</h1>}
    </div>
  )
}

export default OutputComponent