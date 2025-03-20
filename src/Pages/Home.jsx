import React from 'react'
import InputComponent from '../components/InputComponent.jsx';
import OutputComponent from '../components/OutputComponent.jsx';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1642355008521-236f1d29d0a8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="relative z-10 w-full md:w-1/2">
        <InputComponent />
        <OutputComponent />
      </div>
    </div>
  )
}

export default Home