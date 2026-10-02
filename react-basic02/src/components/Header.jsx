import React from 'react'

function Header() {
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

export default Header