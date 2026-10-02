import React from 'react'
import './App.css'
import ServiceCard from './ServiceCard'


function Props1() {
    return (
        <div style={{ padding: '100px' }}>
            <div className='menu grid'>
                <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTg4JTk5JUVDJTg2JThDfGVufDB8fDB8fHww" alt="" />
                <ServiceCard title="편안한 숙소" desc="엄선된 공간을 소개합니다." span="자세히 보기" />

                <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVDJTg4JTk5JUVDJTg2JThDfGVufDB8fDB8fHww" alt="" />
                <ServiceCard title="간편한 예약" desc="원하는 날짜에 예약해보세요." span="예약하기" />

                <img src="https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8JUVDJTg4JTk5JUVDJTg2JThDfGVufDB8fDB8fHww" alt="" />
                <ServiceCard title="특별한 경험" desc="다양한 테마의 숙소를 만나보세요" span="둘러보기" />
            </div>
        </div>
    )
}

export default Props1