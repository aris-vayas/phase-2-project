import "./App.css";
import "./styles.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Carousle from "./Carousle";
import VideoDetail from "./VideoDetail";
import MusicDetail from "./MusicDetail";
import { Switch, Route } from "react-router";
function App() {
  const [songs, setSong] = useState([]);
  //const [singleSong, setSingleSong] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/music")
      .then((r) => r.json())
      .then((data) => setSong(data));
  }, []);
  //console.log("click", singleSong);
  return (
    <div className="App">
      <Header songs={songs} />
      <MusicDetail songs={songs} />
      {/* <Carousle songs={songs} /> */}
      {/* <VideoDetail songs={songs} /> */}
    </div>
  );
}

export default App;
