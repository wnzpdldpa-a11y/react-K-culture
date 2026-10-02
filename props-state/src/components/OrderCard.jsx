import React from 'react'

function OrderCard({
    name, desc, price, count, increase, decrease
}) {
    return (
        <div className='order-card'>
            {/* 부모에게 받은 props */}
            <h2>{name}</h2>
            <p>{desc}</p>
            <p>{price.toLocaleString()}원</p>

            {/* 부모의 state를 받아서 화면에 출력 */}
            <p>주문수량: {count}</p>
            <div className='count-box'>
                {/* 부모에게 전달받은 함수를 실행 */}
                <button onClick={decrease}>-</button>
                <button onClick={increase}>+</button>
            </div>
        </div>
    )
}

export default OrderCard