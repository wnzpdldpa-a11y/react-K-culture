//ClassMain
import React from 'react'
import ClassCard from './ClassCard'
import './css/Main.css'

function ClassMain() {
    return (
        <main>
            <div className="title-area">
                <span>ONLINE CLASS</span>
                <h2>오늘부터 시작하는 실무클래스</h2>
                <p className="sub-title">관심있는 강의를 선택하고 수강신청해보세요.</p>
            </div>
            <div className="class-area">
                <h3>추천클래스</h3>
                <p className="sub-text">관심있는 강의를 선택하고 수강신청해보세요.</p>

                <div className="classList grid">
                    <ClassCard
                        level="입문"
                        title="처음시작하는 웹 디자인"
                        desc="레이아웃과 색상, 타이포그래피의 기본을 배웁니다"
                        price={39000}
                    />
                    <ClassCard
                        level="초급"
                        title="Javascript UI 만들기"
                        desc="버튼, 탭, 모달 등 웹 UI의 동작을 직접 만들어봅니다."
                        price={45000}
                    />
                    <ClassCard
                        level="초급"
                        title="React 컴포넌트 기초"
                        desc="컴포넌트와 Props, State의 기본 원리를 익힙니다."
                        price={52000}
                    />
                </div>
            </div>
        </main>
    )
}

export default ClassMain