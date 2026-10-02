import React from 'react'

function CoffeMenu({ name, store, price }) {
    return (
        <div>
            <h2>메뉴명: {name}</h2>
            <p>가격: {price}원</p>
            <p>매점: {store}</p>
            <p>desc</p>
        </div>
    )
}

export default CoffeMenu