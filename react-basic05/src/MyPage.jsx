import React, { useState } from 'react'

function MyPage() {
    const [login, setLogin] = useState(false);
    return (
        <div>
            <h2>My page</h2>
            {
                login ? (
                    <div>
                        <p>회원님 환영합니다.</p>
                        <button onClick={() => setLogin(false)}>로그아웃</button>
                    </div>
                ) : (
                    <div>
                        <p>로그인이 필요합니다</p>
                        <button onClick={() => setLogin(true)}>로그인</button>
                    </div>
                )
            }
        </div>
    )
}

export default MyPage