import './App.css'
import Footer2 from './components/Footer2'
import Main from './components/Main'
import RoomPage from './pages/RoomPage'

function App2() {
    return (
        <div className='wrap'>
            <Header2 />
            <Main />
            <Footer2 />
            <RoomPage />
        </div>
    )
}

function Header2() {
    const headerStyle = {
        maxWidth: 1200,
        margin: 'auto',
        padding: '30px 0',
        borderBottom: '4px solid #739c77',
        display: 'flex',
        justifyContent: 'space-between',
        alignItem: 'center'
    }
    const navStyle = {
        display: 'flex',
        fontSize: '18px',
        fontWeight: 500,
        gap: 80
    }
    return (
        <header style={headerStyle}>
            <h1 style={{ color: 'seagreen', fontSize: '28px', textTransform: 'capitalize' }}>Stay Pick</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Room</a>
                <a href="#">About</a>
            </nav>
        </header>
    )
}

export default App2