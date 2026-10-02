//data.js
// 이미지 가져오기
import mood1 from '../assets/images/mood1.jpg'
import mood2 from '../assets/images/mood2.jpg'
import mood3 from '../assets/images/mood3.jpg'
import mood4 from '../assets/images/mood4.jpg'
import mood5 from '../assets/images/mood5.jpg'
import mood6 from '../assets/images/mood6.jpg'

// 플레이리스트 데이터
const playlistData = [

    {
        id: 1,
        title: '아무것도 하기 싫은 오후',
        category: 'CHILL',
        desc: '조용히 흘려보내고 싶은 오후를 위한 음악',
        songs: '18 TRACKS',
        image: mood1
    },

    {
        id: 2,
        title: '퇴근 후 야간 드라이브',
        category: 'DRIVE',
        desc: '도시의 불빛과 함께 달리는 밤',
        songs: '24 TRACKS',
        image: mood2
    },

    {
        id: 3,
        title: '커피 한 잔과 시작하는 아침',
        category: 'MORNING',
        desc: '조금 천천히 하루를 시작하고 싶은 날',
        songs: '16 TRACKS',
        image: mood3
    },

    {
        id: 4,
        title: '집중이 필요한 두 시간',
        category: 'FOCUS',
        desc: '해야 할 일을 미루지 않게 도와주는 음악',
        songs: '30 TRACKS',
        image: mood4
    },

    {
        id: 5,
        title: '노을이 예쁜 날',
        category: 'SUNSET',
        desc: '하루가 저물어가는 시간에 듣는 음악',
        songs: '21 TRACKS',
        image: mood5
    },

    {
        id: 6,
        title: '오늘은 조금 신나는 걸로',
        category: 'ENERGY',
        desc: '기분을 끌어올리고 싶을 때 듣는 플레이리스트',
        songs: '26 TRACKS',
        image: mood6
    }

]

export default playlistData