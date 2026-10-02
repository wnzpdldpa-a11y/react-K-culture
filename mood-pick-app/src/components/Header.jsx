import React from 'react'
import { Link } from 'react-router-dom'

function Header({ saveCount }) {
    return (
        <header className='header'>
            <Link to='/' className='logo'>MOOD PICK</Link>


            <nav>
                <Link to='/'>HOME</Link>
                <Link to='/playlist'>PLAYLIST</Link>
                <Link to='/mypick'>
                    MYPICK
                    {/* 저장된 개수표시 */}
                    <span className='pick-count'>{saveCount}</span>
                </Link>
            </nav>
        </header>
    )
}

export default Header