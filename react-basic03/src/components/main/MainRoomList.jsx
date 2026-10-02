import React from 'react'
import MainCard from './MainCard'

function MainRoomList() {
    const roomList = {
        padding: '80px 40px',
    }
    const title = {
        marginBottom: '30px',
    }
    const titleP = {
        margin: '0 0 8px',
        fontSize: '14px',
        fontWeight: 700
    }
    return (
        <div style={roomList} className='grid'>
            <div style={title}>
                <p>RECOMMEND</p>
                <h2>추천 숙소</h2>
                <span>만나보세요</span>
            </div>
            <div className='grid'>
                <MainCard
                    image="https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWlyYm5ifGVufDB8fDB8fHww" title="숲속 캐빈"
                    desc="푸른 숲과 함께 자연 속에서 보내는 하루"
                    price="240,000"
                />
                <MainCard
                    image="https://images.unsplash.com/photo-1697807646004-31ae73a1a625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcmJuYnxlbnwwfHwwfHx8MA%3D%3D" title="장작과 오두막"
                    desc="푸른 숲과 함께 자연 속에서 보내는 하루"
                    price="400,000" />
                <MainCard
                    image="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlyYm5ifGVufDB8fDB8fHww" title="호수 오두막"
                    desc="푸른 강과 함께 자연 속에서 보내는 하루"
                    price="200,000" />
            </div>
        </div>
    )
}

export default MainRoomList