import './App.css'
import RoomCard from './components/RoomCard'
import roomImg1 from './assets/img/roomcard01.jpg';
import roomImg2 from './assets/img/roomcard02.jpg';
import roomImg3 from './assets/img/roomcard03.jpg';

function App() {

  return (
    <section>
      <h1>추천 객실</h1>
      <div className="room-list">
        <RoomCard
          image={roomImg1}
          title="Forest Room"
          desc="숲 속에서 편안하게 쉬어가는 객실" />
        <RoomCard
          image={roomImg2}
          title="Forest Room"
          desc="숲 속에서 편안하게 쉬어가는 객실" />
        <RoomCard
          image={roomImg3}
          title="Forest Room"
          desc="숲 속에서 편안하게 쉬어가는 객실" />
      </div>
    </section>
  )
}

export default App
