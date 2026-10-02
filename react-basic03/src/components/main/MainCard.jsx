import React from 'react'
import './Main.css'

function MainCard({ image, title, desc, price }) {
    return (
        <div className='room-card'>
            <img src={image} alt={title} />

            <div className='room-info'>
                <span className='room-location'>평창</span>
                <p className="title">{title}</p>
                <p className="desc">{desc}</p>
                <p className="price">{price}</p>
            </div>
        </div>
    )
}

export default MainCard