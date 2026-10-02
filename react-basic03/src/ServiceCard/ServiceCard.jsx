import React from 'react'

function ServiceCard({ img, title, desc, span }) {
    return (
        <div>
            <h1 style={{ margin: 0 }}>StayPick Service</h1>
            <div className="icon">{img}</div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <p>{span}</p>
        </div>
    )
}

export default ServiceCard