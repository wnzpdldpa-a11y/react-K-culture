import React from 'react'

function RoomCard() {
    const roomCardStyle = {
        borderRadius: 12,
        border: '1px solid #bbb',
        padding: 25
    }
    const titleStyle = {
        fontSize: 20,
        fontWeight: 500,
        marginBottom: 20
    }

    return (
        <div className='card' style={roomCardStyle}>
            <h3 style={titleStyle}>전경</h3>
            <img src="https://images.unsplash.com/photo-1618237600880-fb9d72e98393?q=80&w=400&auto=format&fit=crop" alt="경주한옥호텔" />
            <p>
                고즈넉한 한옥에서 만나는 편안한 쉼 <br />자연과 함께 머무는 느린 하루
            </p>
            <button style={{ marginTop: '25px' }}>지금 예약하기</button>
        </div>
    )
}

export default RoomCard