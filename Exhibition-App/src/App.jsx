import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Exhibition from './pages/Exhibition'
import MyPage from './pages/MyPage'
import { useState } from 'react'

function App() {
  //관심전시 목록을 저장하는 state
  const [savedExhibitions, setSavedExhibitions] = useState([]);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exhibition" element={<Exhibition
          savedExhibitions={savedExhibitions}
          setSavedExhibitions={setSavedExhibitions} />} />
        <Route path="/mypage" element={
          <MyPage
            savedExhibitions={savedExhibitions}
            setSavedExhibitions={setSavedExhibitions}
          />}
        />

      </Routes>

    </>
  )
}

export default App
