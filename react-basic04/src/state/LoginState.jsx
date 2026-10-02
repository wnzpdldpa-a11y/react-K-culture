import React, { useState } from 'react'

function LoginState() {
    const [user, setUser] = useState(null); //user=null이면 로그아웃상태

    return (
        <div>
            <h1>LoginState</h1>
            {
                user ? (
                    <>
                        <p>안녕하세요, {user}님</p>
                        <button onClick={() => setUser(null)}>
                            로그아웃
                        </button>
                    </>
                ) : (
                    <>
                        <p>로그인이 필요합니다.</p>
                        <button onClick={() => setUser('고객')}>
                            로그인
                        </button>
                    </>
                )
            }
        </div>
    )
}

export default LoginState