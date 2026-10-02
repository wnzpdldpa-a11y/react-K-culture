//App.jsx
import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Mypick from './pages/Mypick';
import Footer from './components/Footer';

function App() {
  /* 
    내가 저장한 플레이리스트를 관리해주는 state
    처음에는 아무것도 저장하지 않았으므로 빈 배열로 시작
  */
  const [savedList, setSavedList] = useState([]);

  return (
    <div className="app">
      <Header saveCount={savedList.length} />

      <Routes>
        {/* Home */}
        <Route path='/' element={<Home />} />

        {/* playlist */}
        <Route
          path='/playlist'
          element={
            <Playlist
              savedList={savedList}
              setSavedList={setSavedList}
            />} />

        {/* Mypick */}
        <Route
          path='/mypick'
          element={
            <Mypick
              savedList={savedList}
              setSavedList={setSavedList}
            />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
