import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Header() {
    return (
        <header className='header'>
            <div className="inner header-inner">
                <h1 className='logo'>
                    <Link to='/'>K-ARCHIVE</Link>
                </h1>
                <Navbar />
            </div>
        </header>
    )
}

export default Header