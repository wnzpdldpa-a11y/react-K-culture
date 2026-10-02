import React from 'react'

function RoomCard({ image, title, desc }) {

    //버튼이벤트
    function btnView() {
        alert(title + "를 선택했습니다.")
    }
    return (
        <div className='room-card'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
            <button onClick={btnView}>자세히보기</button>
        </div>
    )
}

export default RoomCard