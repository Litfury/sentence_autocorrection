import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/authentication/Login'
import SignUp from './Pages/authentication/SignUp'
import NotFound from './Pages/NotFound.jsx'
import Home from './Pages/Home'
import HistoryPage from './Pages/HistoryPage'
import ProtectedRoute from './Pages/ProtectedRoute.jsx'
import Plagarism from './Pages/Plagarism.jsx'
import Sentence from './Pages/Sentence.jsx'

function App() {

  return (
    <>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<ProtectedRoute ><Home /></ProtectedRoute>} />
          <Route path='/history' element={<ProtectedRoute ><HistoryPage /></ProtectedRoute>} />
          <Route path='*' element={<NotFound />} />
          <Route path='/sentence' element={<ProtectedRoute ><Sentence /></ProtectedRoute>} />
          <Route path='/plagarism' element={<ProtectedRoute ><Plagarism /></ProtectedRoute>} />
        </Routes>
    </>
  )

}

export default App
