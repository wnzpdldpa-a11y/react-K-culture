import React, { useState } from 'react'
import './Seat.css'

function SeatReservation() {
    //1. 선택한 좌석 등급 저장
    const [seat, setSeat] = useState("A");

    //2. 예약 인원을 저장
    const [count, setCount] = useState(1);

    //3. 예약완료 여부 저장
    const [reserved, setReserved] = useState(false);

    //좌석별 가격
    const prices = {
        A: 50000,
        B: 40000,
        C: 30000
    }
    //+ 버튼
    const increase = () => {
        setCount(count + 1)
    }

    //- 버튼
    const decrease = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    //예약하기 버튼
    const reservation = () => {
        setReserved(true)
    }

    //다시 선택하기
    const resetResevation = () => {
        setCount(1),
            setSeat('A'),
            setReserved(false)
    }
    //총 가격계산
    const totalPrice = prices[seat] * count

    return (
        <div className='reservation'>
            <h1>공연 좌석 예약</h1>

            {/* 예약이 완료되지 않았을 때 */}
            {!reserved ? (
                <div className='reservation-box'>
                    <h2>좌석을 선택하세요</h2>
                    <div className="seat-list">
                        <button
                            onClick={() => setSeat("A")}
                            className={seat === "A" ? "active" : ""}
                        > A석 <span>50,000원</span>
                        </button>
                        <button
                            onClick={() => setSeat("B")}
                            className={seat === "B" ? "active" : ""}
                        > B석 <span>40,000원</span>
                        </button>
                        <button
                            onClick={() => setSeat("C")}
                            className={seat === "C" ? "active" : ""}
                        > C석 <span>30,000원</span>
                        </button>
                    </div>

                    {/* 인원수 */}
                    <div className="count-box">
                        <h2>인원</h2>
                        <div className="count-control">
                            <button onClick={decrease}>-</button>
                            <span>{count}명</span>
                            <button onClick={increase}>+</button>
                        </div>
                    </div>

                    {/* 예약정보 */}
                    <div className="summary">
                        <p>선택좌석 <strong>{seat} 석</strong></p>
                        <p>예약인원 <strong>{count} 명</strong></p>
                        <p>총 금액 <strong>{totalPrice.toLocaleString()} 원</strong></p>
                    </div>
                    <button
                        className='reserve-btn'
                        onClick={reservation}
                    ></button>
                </div>
            ) : (
                //예약완료
                <div className="complete-box">
                    <h2>예약이 완료되었습니다.</h2>
                    <p>{seat} 석 / {count} 명</p>
                    <strong>{totalPrice.toLocaleString()} 원</strong>
                    <button onClick={resetResevation}>다시 선택하기</button>
                </div>
            )
            }

        </div>
    )
}

export default SeatReservation