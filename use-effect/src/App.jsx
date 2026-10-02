import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //숫자를 저장하는 state
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("count가 변경되었습니다.")
    console.log("현재 count", count)
  }, [count]);//[] -> 컴포넌트가 처음 화면에 나타났을때 실행됨, 한번만 실행됨


  //+버튼
  const increase = () => {
    setCount(count + 1)
  }
  //-버튼
  const decrease = () => {
    setCount(count - 1)
  }


  return (
    <div>
      <h1>React useEffect</h1>
      <p>페이지가 시작되었습니다.</p>
      <h2>현재 숫자</h2>
      <p>{count}</p>

      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  )
}

export default App