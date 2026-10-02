import React from 'react'
import '../App.css'

function PropsChildren() {
    return (
        <div>
            <h1>오늘의 안내</h1>
            <NoticeCard title="휴관안내" type="NOTICE">
                {/* NoticeCard 시작태그와 끝태그 사이의 내용을 -> Children으로 전달 */}
                <p>평일 오전 9시부터 오후 6시까지 운영합니다.</p>
                <button>자세히보기</button>
            </NoticeCard>
            <NoticeCard title="휴관안내" type="NOTICE">
                <p>이번 주 월요일은 시설 점검으로 휴관합니다.</p>
                <strong>방문 전 일정을 확인해주세요</strong>
                <button>자세히보기</button>
            </NoticeCard>

        </div>
    )
}

//자식요소
function NoticeCard({ title, type, children }) {
    return (
        <div>
            {/* 일반 PROPS */}
            <span>{type}</span>
            <h2>{title}</h2>

            {/* Children */}
            <div>
                {children}
            </div>
        </div>
    )
}

export default PropsChildren