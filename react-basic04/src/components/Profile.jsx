import React from 'react'

function profile({ image, name, subject, career }) {
    function profileView() {
        alert(name + '님의 프로필카드입니다.')
    }
    return (
        <div className='profile'>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>직위:{subject}</p>
            <p>경력:{career}년</p>
            <button>프로필보기</button>
        </div>
    )
}

export default profile