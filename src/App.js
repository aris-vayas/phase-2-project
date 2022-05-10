import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Carousle from "./Carousle";
import ReactPlayer from "react-player";
import SongCard from "./SongCard";
function App() {
  const [songs, setSong] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/music")
      .then((r) => r.json())
      .then((data) => setSong(data));
  }, []);
  console.log(SongCard);
  return (
    <div className="App">
      <Header />
      <Carousle songs={songs} />
    </div>
  );
}

export default App;
