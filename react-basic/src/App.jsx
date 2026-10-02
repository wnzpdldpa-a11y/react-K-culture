import './App.css';
function App() {
  return (
    <>
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  )
}

function Header() {
  return (
    <header>
      <h1><a href="/">세계의 관광지</a></h1>
    </header>
  )
}

function Card() {
  return (
    <div className='card'>
      <h2>관광명소</h2>
      <p>
        신중하게 설계된 관광 패키지를 통해 낙원을 발견한 수천 명의 만족한 여행자들과 함께하세요. 저희는 모험과 편안함, 문화와 휴식을 혼합한 맞춤형 여정을 만드는 것을 전문으로 합니다. 프리미엄 호텔 및 현지 전문가와의 파트너십은 진정한 경험과 경쟁력 있는 가격을 보장합니다.
      </p>
    </div>
  )
}

export default App
