import React from 'react'
import './App.css'
import Welcome from './Welcome'
import CoffeMenu from './CoffeMenu'

function Props1() {
    return (
        <div style={{ padding: '100px' }}>
            <h1>props</h1>
            <p style={{ marginBottom: '20px' }}>부모 컴포넌트가 자식 컴포넌트에게 값을 전달하는 방법</p>
            <Welcome name='민지' major="시각디자인" />
            <Welcome name='철수' major="건축디자인" />
            <Welcome name='영희' major="웹디자인" />

            <div className='menu grid'>
                <CoffeMenu name="아메리카노" price="4500" />
                <CoffeMenu name="카페라떼" price="8500" />
                <CoffeMenu name="바닐라라떼" price="9500" />
                <CoffeMenu name="프라푸치노" price="100000" />
            </div>
        </div>


    )
}

export default Props1