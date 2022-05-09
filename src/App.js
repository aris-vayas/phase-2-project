import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';

function App() {
  const [audioPlayBack, setAudioPlayBack]=useState(true)
  const audio = new Audio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );

  const start = () => {
    audio.play() 
    setAudioPlayBack(audioPlayBack=>!audioPlayBack);
  }
}
  ;
const stopaudio =()=>{
  audio.pause() 
  audio.currentTime = 0
   setAudioPlayBack(audioPlayBack=>!audioPlayBack)
}
 ;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
      <button onClick={audioPlayBack ? start:stopaudio}>{audioPlayBack? "Start":"stop"}</button>
    </div>
      </header>
    </div>
  );}
  

export default App;
