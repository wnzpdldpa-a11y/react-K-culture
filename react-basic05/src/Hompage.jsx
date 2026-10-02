import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './Components/Header'
import Footer from './Components/Footer'
import "./App.css"

function Hompage() {
    return (
        <div className="container">
            <Header />
            <main>
                <h1>오늘 뭐 먹지?</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<About />} />
                    <Route path="/cart" element={<Contact />} />
                </Routes>

            </main>
            <Footer />
        </div>
    )
}

export default Hompage