import React from 'react'
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';

function App2() {
    return (
        <div>
            <About />
            <Header />
            <Service />
        </div>
    )
}

export default App2
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App2 />
    </StrictMode>
)
