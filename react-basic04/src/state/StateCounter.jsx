import React from 'react'
import { useState } from 'react'
import '../App.css'

function StateCounter() {
    //[초기값, 업데이트함수] = useState(초기값)
    const [count, setCount] = useState(0);
    //console.log(count)
    const [like, setLike] = useState(0)

    //글자변경
    const [message, setMessage] = useState("예약가능")

    //버튼 핸들러
    const btnClick = () => {
        setCount(count + 1)
    }

    const btnLike = () => {
        setLike(like + 1)
    }

    const btnText = () => {
        setMessage("예약가능")
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={btnClick}>+1</button>

            <h2>오늘의 여행사진</h2>
            <p>마음에 들면 좋아요를 눌러주세요</p>
            <button onClick={btnLike}>
                ❤{like}
            </button>

            <h2>{message}</h2>
            <button onClick={btnText}>예약하기</button>
        </div>
    )
}

export default StateCounter