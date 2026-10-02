//ClassCard
import React, { useState } from 'react'

function ClassCard({ title, desc, level, price }) {
    //수강신청여부
    const [apply, setApply] = useState(false);

    //신청 인원수 
    const [count, setCount] = useState(1);

    //수강신청 버튼
    const btnApply = () => {
        setApply(true)
    }

    //인원증가
    const increase = () => {
        setCount(count + 1)
    }

    //인원감소 버튼
    const decrease = () => {

        if (count > 0) {
            setCount(count - 1)
        }

    }

    return (
        <div className="card">
            <span className='level'>{level}</span>
            <p className="class-title">{title}</p>
            <p className="desc">{desc}</p>
            <p className="price">{price.toLocaleString()}원</p>

            {/* state */}
            {
                !apply ? (
                    <button
                        className='apply-btn'
                        onClick={btnApply}>수강신청</button>
                ) : (

                    <div className="apply-box">
                        <p>신청 인원</p>

                        <div className="count-wrap">
                            <div className="count-box">
                                <button onClick={decrease}>
                                    -
                                </button>
                                <span>{count}</span>
                                <button onClick={increase}>
                                    +
                                </button>
                            </div>

                            <p className="complete">
                                수강 신청이 완료되었습니다.
                            </p>
                        </div>

                    </div>

                )}
        </div>
    )
}

export default ClassCard
