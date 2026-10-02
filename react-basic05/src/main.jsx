import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
//import App from './App.jsx'
//import MyPage from './MyPage.jsx'
//import Stock from './Stock.jsx'
//import Map from './Map.jsx'
import ProductList from './ProductList.jsx'
import Hompage from './Hompage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Hompage />
    </BrowserRouter>
  </StrictMode>,
)
