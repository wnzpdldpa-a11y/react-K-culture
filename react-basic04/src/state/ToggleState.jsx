import React, { useState } from 'react'

function ToggleState() {
    const [open, setOpen] = useState(false);
    console.log(open)

    //open이벤트
    const btnOpen = () => {
        setOpen(!open);
    }
    return (
        <div>
            <button onClick={btnOpen}>
                {open ? "닫기" : "열기"}
            </button>

            {
                //&&논리연산자는 true일때만 실행
                open && (
                    <div>
                        <p>추가 내용이 나타났습니다.</p>
                    </div>
                )
            }
        </div>
    )
}

export default ToggleState