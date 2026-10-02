import React, { useState } from 'react'

function DarkMode() {
    const [dark, setDark] = useState(false);

    return (
        <div style={{
            padding: '100px',
            background: dark ? "#111" : "#fff",
            color: dark ? "#fff" : "#111"
        }}>
            <p>
                {dark ? "다크 모드" : "라이트 모드"}
            </p>
            <button onClick={() => setDark(!dark)}>모드전환</button>
        </div>
    )
}

export default DarkMode