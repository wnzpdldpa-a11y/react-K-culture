import { useState } from 'react'
import './App.css'

function App() {
  const [login, setLogin] = useState(false);
  console.log('login', login)

  //나이를 변수에 저장
  const age = 15;


  return (
    <>
      <h1>나이 확인</h1>
      <p>나이: {age} 세</p>
      <p>{age >= 20 ? "성인입니다" : "미성년자입니다"}</p>

      <h2>로그인상태</h2>
      {/* 
       login이 true -> 환영합니다
       login이 false -> 로그인이 필요합니다.
      */}
      <p>
        {login ? "환영합니다" : "로그인이 필요합니다."}
      </p>
      <button onClick={() => { setLogin(true) }}>로그인</button>
    </>
  )
}

export default App
