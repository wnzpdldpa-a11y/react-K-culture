import React from 'react'
import MainIntro from './MainIntro'
import MainRoomList from './MainRoomList'
import MainCard from './MainCard'

function SectionMain() {
    return (
        <section className="main">
            <MainIntro />
            <MainRoomList />
            <MainCard />
        </section>
    )
}

export default SectionMain