import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const navigate = useNavigate;
    return (
        <div>
            <h1>장바구니</h1>
            <p>치즈버거 1개가 담겨있습니다.</p>
            <button onnClick={() => navigate(-1)} 이전페이지로></button>
            <button onClick={
                () => {
                    alert('주문이 완료되었습니다.');
                    navigate('/')
                }
            }>결재하기</button>
        </div>
    )
}

export default Cart