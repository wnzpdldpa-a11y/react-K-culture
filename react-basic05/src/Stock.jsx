import React, { useState } from 'react'
import "./App.css"

function Stock() {
    const [stock, setStock] = useState(3);
    console.log(stock)

    return (
        <div>
            <h2>무선키보드</h2>
            <p>가격:39,000원</p>
            <p>{stock > 0 ? `남은수량: ${stock}개` : "품절"}</p>

            {/* 
            stock에 저장된 값이 0보다 크면 button(구매하기) 클릭했을때 stock -1이 되도록 / 0보다 작으면 버튼에 품절 (속성 disabled)
            */}
            {
                stock > 0 ? (
                    <button onClick={() => setStock(stock - 1)}>구매하기</button>
                ) : (
                    <button disabled>품절</button>
                )
            }




        </div>
    )
}


export default Stock