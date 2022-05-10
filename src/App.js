import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [song, setSong] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/music")
      .then((r) => r.json())
      .then((data) => setSong(data));
  }, []);
  const songToPlay = song.map((item) => {
    return (
      <>
        <p>{item.title}</p>
        <audio controls src={item.songlink}></audio>
      </>
    );
  });

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
        <div>{songToPlay}</div>
      </header>
    </div>
  );
}

export default App;
