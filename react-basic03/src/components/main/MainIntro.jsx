import React from 'react'

function MainIntro() {
    const introText = {
        fontSize: 20,
        color: 'red',
        marginBottom: 40
    }
    return (
        <div className="Intro">
            <p className="subText">STAY PICK</p>
            <h2>오늘은 <br />쉬어가고 싶나요?</h2>
            <p style={introText}>
                한옥, 숲, 바다, 그리고 도심 속 작은 휴식까지..
                <br />
                취향에 맞는 감성 숙소를 만나보세요.
            </p>
            <button>숙소 둘러보기</button>
        </div>
    )
}

export default MainIntro