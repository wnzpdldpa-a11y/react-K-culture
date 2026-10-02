import React from 'react'

function Welcome(props) {
    return (
        <div>Welcome!~{props.name}님의 전공은 {props.major}입니다.</div>
    )
}

export default Welcome