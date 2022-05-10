import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";

function App() {
  const [song, setSong] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/music")
      .then((r) => r.json())
      .then((data) => setSong(data));
  }, []);
  const songToPlay = song.map((item) => {
    return (
      <div key={item.id}>
        <h2> Artist: {item.creator}</h2>
        <h3>Song: {item.title}</h3>
        <img className="images" src={item.thumbnail} />
        <audio className="audio" controls src={item.songlink}></audio>
        <iframe src={item.video}></iframe>
      </div>
    );
  });

  return (
    <div className="App">
      <Header />
      {songToPlay}
    </div>
  );
}

export default App;
