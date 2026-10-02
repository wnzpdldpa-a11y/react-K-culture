//PlayList
import React from 'react'
import playlistData from '../data/PlaylistData'
import PlaylistCard from '../components/PlaylistCard'


function Playlist({ savedList, setSavedList }) {
    return (
        <main className="page">
            <section className="page-title">
                <p>FIND YOUR MUSIC</p>
                <h1>오늘의 플레이리스트</h1>
                <span>기분과 상황에 맞는 음악을 골라보세요.</span>
            </section>

            {/* 플레이리스트 */}
            <section className="playlist-grid">
                {
                    playlistData.map((item) => {
                        return (
                            <PlaylistCard
                                /* key는 map 사용시 각각의 데이터를 구별하기 위해 선언을 함. */
                                key={item.id}

                                //현재 플레이리스트 정보
                                playlist={item}

                                //저장목록
                                savedList={savedList}

                                //저장목록변경함수
                                setSavedList={setSavedList}
                            />
                        )
                    })
                }
            </section>
        </main>
    )
}

export default Playlist