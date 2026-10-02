import React from 'react'
import "./App.css"

function Map() {
    const fruits = ['사과', '바나나', '복숭아', '포도']

    const products = [
        {
            id: 1,
            name: "무선 키보드",
            price: 39000
        },
        {
            id: 2,
            name: "무선 마우스",
            price: 25000
        },
        {
            id: 3,
            name: "USB 허브",
            price: 18000
        }
    ];

    return (
        <div>
            <h1>과일목록</h1>
            {
                fruits.map((fruit, i) => (
                    <p key={i}>{fruit}</p>
                ))
            }

            <h1>상품목록</h1>
            {
                products.map((products, i) => (
                    <div key={products.id}>
                        <h2>{products.name}</h2>
                        <p>{products.pricr.toLocaleString()}원</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Map