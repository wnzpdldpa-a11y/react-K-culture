import React from 'react'
import '../App.css'
import DrinkCard from './DrinkCard'

function DrinkApp() {
    return (
        <main className='width'>
            <h1>오늘의 음료</h1>
            <div className="grid">
                <DrinkCard
                    name="레몬에이드"
                    price={5500}
                    desc="상큼한 레몬과 탄산이 시원해요"
                />
                <DrinkCard
                    name="말차라떼"
                    price={6000}
                    desc="부드러운 우유와 진한 말차의 깊은 풍미"
                />
                <DrinkCard
                    name="복숭아 아이스티"
                    price={4000}
                    desc="달콤하고 시원한 복숭아 향의 아이스티"
                />
            </div>
        </main>
    )
}

export default DrinkApp