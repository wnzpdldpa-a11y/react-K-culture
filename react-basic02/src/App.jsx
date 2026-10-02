import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import ServiceList from './components/ServiceList'

function App() {
  return (
    <div>
      <Header />
      <About />
      <ServiceList />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header>
      <h1>리액트 앱</h1>
      <p>리액트는 SPA(Single Page Application) 방식과 Virtual Dom(가상 DOM)이라는 특징을 가지고 있다.</p>
    </header>
  )
}

export default App