import React from 'react'
import "./App.css";
import profileImg from './assets/img/roomcard03.jpg';
import Profile from './components/Profile';

function ProfileCard() {
    return (
        <main>
            <h1>학생소개</h1>
            <Profile
                image={profileImg}
                name="수석매니저"
                subject="객실부"
                career={8}/* 숫자는 {}를 사용 */
            />

        </main>
    )
}

export default ProfileCard