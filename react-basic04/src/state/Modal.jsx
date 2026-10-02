import React, { useState } from 'react'
import '../App.css'

function Modal() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <h3>운동화</h3>
            <button onClick={() => setOpen(true)}>모달열기</button>

            {/* 
            e.stopPropagation()
            - 모달 닫힘 이벤트가 잘못 전달되진 않도록 막아주는 코드
            - .modal-backdrop -> 화면 전체에 어두운 배경
             -> 클릭하면 setOpen(false) 실행 => 모달 닫힘
            -modal-pannel -> 실제 모달 콘텐츠 박스
              -> 이 안을 클릭할 때는 모달이 닫히면 안됨
              
            *e.stopPropagation()
              -> 이벤트 버블링을 막아줌
              -> 사용자가 흰색박스(modal-pannel)을 클릭하면 이벤트가 부모(modal-backdrop)까지 전달(버블링)되서 setOpen(false)가 실행됨으로 인해 창이 닫히지 않도록 해주는 이벤트
            */}

            {
                //&& 연산자는 변수에 값이 True일 때만 실행-> false일 때는 아무것도 없음.
                open && (
                    <div className='modal-backdrop' onClick={() => setOpen(false)}>
                        <div className='modal-panel' onClick={(e) => e.stopPropagation()}>
                            <h4>운동화 상세정보</h4>
                            <p>가격: 59,000원</p>
                            <button onClick={() => setOpen(false)}>닫기</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Modal