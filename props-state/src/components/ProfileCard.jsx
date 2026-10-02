import React from 'react'

function ProfileCard({ name, job, online, changeState }) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{job}</h3>
            {
                online ? (<p>현재 온라인입니다. </p>) : (<p>현재 오프라인입니다.</p>)
            }
            <button onClick={changeState}>상태변경</button>
        </div>
    )
}

export default ProfileCard