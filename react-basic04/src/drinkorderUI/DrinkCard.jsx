import React, { useState } from 'react';

function DrinkCard({ name, desc, price }) {
    //주문수량을 관리하는 state
    //처음 수량은 0
    const [count, setCount] = useState(0);

    //+버튼
    const increase = () => {
        setCount(count + 1)
    };
    //-버튼
    const decrease = () => {
        //수량이 0보다 클때만
        if (count > 0) {
            setCount(count - 1)
        }
    };

    return (
        <div className="grid-card">
            <h2>{name}</h2>
            <p>{desc}</p>
            <p>{price.toLocaleString()}원</p>

            {/* state */}
            <div className="count-box">
                <button onClick={increase}>+</button>
                <span>{count}</span>
                <button onClick={decrease}>-</button>
            </div>
        </div>
    )
}

export default DrinkCard