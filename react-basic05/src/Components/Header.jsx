import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>My React App</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/menu">MENU</Link>
                <Link to="/Cart">CART</Link>
            </nav>
        </header>
    )
}

export default Header