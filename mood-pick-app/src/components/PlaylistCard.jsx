import React from 'react'

function PlaylistCard({ playlist, savedList, setSavedList }) {

    //console.log('playlist', playlist)
    const saved = savedList.some(
        (item) => item.id === playlist.id
    )


    //현재 카드가 savedList에 저장되어 있는지 확인
    //some()-> 조건에 맞는 데이터가 하나라도 있으면 
    const btnSave = () => {
        if (saved) {
            const newList = savedListfilter(
                (item) => item.id !== playlist.id
            )
            setSavedList(newList)
        } else {
            /* 저장되어있지 않다면 기존배열 복사하고 현재 playlist 추가 */
            setSavedList([...savedList, playlist])
        }
    }

    return (
        <article className='playlist-card'>
            {/* 이미지 */}
            <div className="card-image">
                <img src={playlist.image} alt={playlist.title} />

                <span className='category'>{playlist.category}</span>
            </div>

            {/* 내용 */}
            <div className="card-content">
                <p className="track">{playlist.song}</p>
                <h2>{playlist.title}</h2>
                <p className="card-desc">{playlist.desc}</p>
            </div>

            {/* 저장버튼 */}
            <button
                className={saved ? 'save-active' : 'save'}
                onClick={btnSave}
            >
                {
                    saved ? 'MY PICK 저장됨' : 'MY PICK'
                }
            </button>
        </article>
    )
}

export default PlaylistCard