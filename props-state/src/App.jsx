import './App.css'
import { useState } from 'react';
import OrderCard from './components/OrderCard'

function App() {
  //부모가 주문수량 관리할때
  //처음에는 주문수량이 없으므로 0
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>오늘의 메뉴</h1>
      <OrderCard
        name="아이스 아메리카노"
        desc="깔끔하고 시원한 커피"
        price={4500} /* 숫자는 {}에 담는다 */

        //부모의 state를 전달
        count={count}

        //부모의 함수도 전달
        increase={increase}
        decrease={decrease}
      />

      <OrderCard
        name="아이스 아메리카노"
        desc="깔끔하고 시원한 커피"
        price={4500} /* 숫자는 {}에 담는다 */

        //부모의 state를 전달
        count={count}

        //부모의 함수도 전달
        imcrease={increase}
        decrease={decrease}
      />

      <OrderCard
        name="아이스 아메리카노"
        desc="깔끔하고 시원한 커피"
        price={4500} /* 숫자는 {}에 담는다 */

        //부모의 state를 전달
        count={count}

        //부모의 함수도 전달
        imcrease={increase}
        decrease={decrease}
      />
    </>
  )
}

export default App
