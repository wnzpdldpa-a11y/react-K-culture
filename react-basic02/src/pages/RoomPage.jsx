import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoomInfo from '../components/RoomInfo';

function RoomPage() {
    return (
        <>
            {/* header/footer는 공통 컴포넌트 */}
            <Header />
            <RoomInfo />
            <Footer />
        </>
    )
}

export default RoomPage