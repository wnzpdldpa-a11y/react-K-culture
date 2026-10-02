//Mypick.jsx
import React from 'react'
import PlaylistCard from '../components/PlaylistCard'

function Mypick({ savedList, setSavedList }) {
    return (
        <main className="page">
            <section className="page-title">
                <p>MY COLLECTION</p>
                <h1>MY PICK</h1>
                <span>내가 저장한 플레이리스트입니다.</span>
            </section>

            {/* 저장된 것이 하나도 없다면 */}
            {
                savedList.length === 0 ? (
                    <div className="empty">
                        <h2>아직 저장한 음악이 없습니다.</h2>
                        <p>마음에 드는 플레이리스트를 MY PICK에 담아보세요</p>
                    </div>
                ) : (
                    /* 저장된 리스트가 있으면 */
                    <section className="playlist-grid">
                        {
                            savedList.map((item) => (
                                <PlaylistCard
                                    key={item.id}
                                    playlist={item}
                                    savedList={savedList}
                                    setSavedList={setSavedList}
                                />
                            ))
                        }


                    </section>
                )
            }
        </main>
    )
}

export default Mypick