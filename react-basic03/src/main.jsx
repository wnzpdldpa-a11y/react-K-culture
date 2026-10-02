import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DrinkApp from './drinkorderUI/DrinkApp'
//import App from './App.jsx'
//import ServiceCard from './ServiceCard/ServiceCard.jsx'
//import Props1 from './props/Props1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DrinkApp />
  </StrictMode>,
)
