import React from 'react'

function ProductCard({ name, price }) {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <p>{price.toLocaleString()}원</p>
            <button>자세히보기</button>
        </div>
    )
}

export default ProductCard