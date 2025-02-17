import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* The BrowserRouter component provides context to the rest of your application about what route the user is on, and where they are navigating to */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
