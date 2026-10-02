import React from 'react'

function Header() {
    const headerStyle = {
        padding: '25px 0',
        display: 'grid',
        placeItems: 'center',
        background: '#F7D6D0'
    }
    return (
        <header style={headerStyle}>
            <h1 style={{
                fontSize: '34px',
                fontWeight: 600,
                marginBottom: '15px'
            }}><a href="">REACT APPS</a></h1>
            <p className='subText'>react는 웹UI를 구현하는 자바스크립트 라이브러리입니다.</p>
        </header>
    )
}

export default Header