import React from 'react'
import '../Sub.css'

function Main() {
    const imgUrl = 'https://images.unsplash.com/photo-1788042286484-ac22dffd0c5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'
    return (
        <main>
            <h2>오늘, 잠시 쉬어가는 쉼이 필요할 때...</h2>
            <img src={imgUrl} alt="" />
            <p>
                바쁜 일상 속에서 잠시 벗어나 자연 속에서 온전한 휴식을 만나보세요
                <br />당신의 마음이 천천히 편안해지는 특별한 공간
            </p>
        </main>

    )
}

export default Main