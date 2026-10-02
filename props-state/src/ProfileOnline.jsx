import React, { useState } from 'react'
import ProfileCard from './components/ProfileCard'

function ProfileOnline() {
    /* 온라인상태를 부모가 관리 */
    /* true -> 온라인/ false -> 오프라인 */
    const [online, setOnline] = useState(true)

    //온라인 상태변경
    const changeState = () => {
        //true -> false
        //false -> true
        setOnline(!online)
    }

    return (
        <div>
            <h1>Team</h1>
            <ProfileCard
                name="김하늘"
                job="UI/UX디자이너"

                //부모의 state
                online={online}

                //state를 변경하는 함수
                changeState={changeState} />
        </div>
    )
}

export default ProfileOnline