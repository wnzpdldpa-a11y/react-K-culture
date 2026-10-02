import React, { useState, useEffect } from 'react'

function App2() {
    //상품수량을 저장하는 state
    const [count, setCount] = useState(1)

    //상품수량이 변경되면 브라우저 탭의 제목도 변경
    useEffect(() => {
        console.log("상품수량이 변경되었습니다.")
        console.log("현재수량", count)
        document.title = `장바구니 ${count}`
    }, [count]);

    //상품수량 증가
    const increase = () => {
        setCount(count + 1)
    }

    //상품수량 감소
    const decrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='product'>
            <h2>Daily Sneakers</h2>
            <p>가볍고 편안한 데일리 스니커즈</p>
            <strong>89,000원</strong>

            <div className="count-box">
                <button onClick={decrease}>-</button>
                <span>{count}</span>
                <button onClick={increase}>+</button>
            </div>

            <div className='total'>
                <strong>
                    {(89000 * count).toLocaleString()}원
                </strong>
            </div>
        </div>

    )
}

export default App2