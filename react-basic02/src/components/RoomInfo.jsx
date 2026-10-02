import React from 'react'
import RoomCard from './RoomCard'

function RoomInfo() {
    const roomListStyle = {
        margin: '50px 0 40px',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '24px'
    }
    return (
        <section className="sec-room">
            <h2>Room Info-한옥스테이</h2>
            <div className="room-list" style={roomListStyle}>
                <RoomCard />
                <RoomCard />
                <RoomCard />
            </div>
        </section>
    )
}

export default RoomInfo