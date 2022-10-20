import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Media from './components/Media'
function App() {


  return (
    <div className="App">
      <Media id='123' title='Cowboy Bebop'
        image='https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png'
        description='Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?'
      />
    </div>
  )
}

export default App
