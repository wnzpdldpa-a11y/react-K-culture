import React from 'react'

function ExhibitionCard({ exhibitions, savedExhibitions, setSavedExhibitions }) {
    //관심전시 등록
    const btnSave = () => {
        //이미 등록되어있다면
        if (saved) {
            const newList = savedExhibitions.filter(
                (item) => item.id !== exhibition.id
            )
        }
        //기존 관심 전시 + 지금 선택한 관심 전시
        const newList = [
            ...savedExhibitions, exhibitions
        ]
        //현재 전시가 관심전시에 등록도었는지 확인
        const saved = savedExhibitions.some(
            (item) => item.id === exhibition.id
        )
        //관심전시 목록변경
        setSavedExhibitions(newList);
    }

    return (
        <div className='exhibition-card'>
            <p className='category'>{exhibitions.category}</p>
            <h3>{exhibitions.title}</h3>
            <p className='place'>{exhibitions.place}</p>
            <p className='date'>{exhibitions.date}</p>
            <p className='price'>{exhibitions.price.toLocaleString()}원</p>

            <button onClick={btnSave}>
                {
                    saved ? "관심전시해제" : "관심전시등록"
                }</button>
        </div>
    )
}

export default ExhibitionCard