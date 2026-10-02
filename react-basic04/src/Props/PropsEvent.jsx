import React from 'react'
import '../App.css'

function PropsEvent() {
    const SayHello = () => {
        console.log("좋은 아침~")
    }

    const SayBye = () => {
        console.log("해피 주말~")
    }
    return (
        <div>
            <Button label="Hello" onClick={SayHello} />
            <Button label="Bye" onClick={SayBye} />
        </div>
    )
}

function Button({ label, onClick }) {
    return (
        <button onClick={onClick}>{label}</button>
    )
}

export default PropsEvent