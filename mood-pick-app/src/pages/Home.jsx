import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/images/hero.jpg';

import PlaylistData from '../data/PlaylistData';

function Home() {
    return (
        <main>
            {/* hero */}
            <section className='hero'>
                <img src={hero} alt="음악플레이리스트" />

                <div className="hero-overlay">
                    <p className="hero-dmall">MUSIC FOR YOUR MOMENT</p>
                    <h1>오늘 기분은 <br />어떤 음악인가요?</h1>
                    <p>
                        지금 이 순간에 어울리는 플레이리스트를 찾아보세요.
                    </p>
                    <Link to='/playlist' className='main-btn'>플레이리스트</Link>

                </div>
            </section>

            <section className="intro">
                <p className='section-label'>TODAY'S MOOD</p>
                <h2>음악이 필요한 순간</h2>
                <p>
                    집중하고 싶은 오후부터 <br />
                    아무 생각 없이 쉬고 싶은 밤까지.
                    <br /><br />
                    MOOD PICK이 지금의 분위기에 <br />
                    어울리는 음악을 골라드립니다.
                </p>
            </section>

            {/* 추천카드 */}
            <section className='home-picks'>
                {/* play-list 앞 세개 가져오기 */}
                {PlaylistData
                    .slice(0, 3)
                    .map((item) => (
                        <div className="home-card"
                            key={item.id}
                        >
                            <img
                                src={item.image}
                                alt="item.title"
                            />
                            <span>{item.category}</span>
                        </div>
                    ))
                }
            </section>
        </main>
    )
}

export default Home