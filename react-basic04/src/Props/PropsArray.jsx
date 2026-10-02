import React from 'react'

function PropsArray() {
    return (
        <div>
            <h1>Props로 배열 값을 넘겨주는 방법</h1>
            <h2>오늘의 할 일</h2>
            <TodoList
                items={['react 수업', '팀 프로젝트', '피드백']}
            />

        </div>
    )
}

function TodoList({ items }) {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    )
}
export default PropsArray