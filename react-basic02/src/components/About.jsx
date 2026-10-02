import React from 'react'

function About() {

    //스타일을 javascript 객체로 작성
    const aboutStyle = {
        backgroundColor: '#f5f5f5',
        maxWidth: '960px',
        padding: '40px',
        borderRadius: '12px',
        border: '1px solid #bbb'
    }
    return (
        <section style={aboutStyle}>
            <h2>ABOUT REACT</h2>
            <p>
                REACT는 웹 화면(UI)를 만들기 위한 Javascript Library입니다.
                HTML/CSS/Javascript로도 웹사이트는 만들 수 있지만 React로 만들게 되면 화면을 작은 단위로 나눈 컴포넌트로 만들었을 때 유지보수가 용이하다.
            </p>
        </section>
    )
}

export default About