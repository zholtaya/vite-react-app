import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Avatar from './components/Avatar/Avatar';
import Skill from './components/Skill/Skill'

const skillsList = [
  {
    title: "Вязание",
    color: "#9370D8"
  },
  {
    title: "Пение",
    color: "#9370D8"
  },
  {
    title: "Кушанье",
    color: "#9370D8"
  },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Header/> */}
     
      <Avatar width={200} height={200} hidden={false} path="https://damion.club/uploads/posts/2022-01/1642851056_55-damion-club-p-fioletovii-kot-55.jpg" />
      <h3 className="title">Фахрутдинова Лейсан Ленаровна</h3>
      <div className="skills">
        {
          skillsList.map((skill) => {
            return (
              <Skill key={skill.title} title={skill.title} color={skill.color}/>
            )
          })
        }
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default App;
