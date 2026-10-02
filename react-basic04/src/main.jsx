import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import ProfileCard from './ProfileCard.jsx'
//import StateCounter from './state/StateCounter.jsx'
//import ToggleState from './state/ToggleState.jsx'
//import DrinkApp from './drinkorderUI/DrinkApp.jsx'
//import ClassApp from './classApp/ClassApp.jsx'
//import PropsChildren from './Props/PropsChildren.jsx'
//import PropsEvent from './Props/PropsEvent.jsx'
//import DarkMode from './state/DarkMode.jsx'
//import LoginState from './state/LoginState.jsx'
//import Modal from './state/Modal.jsx'
//import TabUI from './state/TabUI.JSX'
import SeatReservation from './state/SeatReservation'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SeatReservation />
  </StrictMode>,
)
