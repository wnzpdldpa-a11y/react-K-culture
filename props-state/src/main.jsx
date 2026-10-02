import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProfileOnline from './ProfileOnline.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ProfileOnline />
  </StrictMode>,
)
