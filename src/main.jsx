import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { FirbaseProvider } from './context/FirebaseContext.jsx'
import ChatContext from './context/ChatContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <FirbaseProvider>
        <ChatContext>
          <App />
        </ChatContext>
      </FirbaseProvider>
    </Router>
  </StrictMode>,
)
