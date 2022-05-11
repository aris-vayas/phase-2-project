import "./App.css";
import "./styles.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Carousle from "./Carousle";
import VideoDetail from "./VideoDetail";
import MusicDetail from "./MusicDetail";
//import { Switch, Route } from "react-router-dom";
function App() {
  const [songs, setSong] = useState([]);
  const [page, setPage] = useState("/");

  useEffect(() => {
    fetch("http://localhost:3001/music")
      .then((r) => r.json())
      .then((data) => setSong(data));
  }, []);

  function getCurrentPage() {
    switch (page) {
      case "/":
        return <Carousle songs={songs} />;
      case "/Music":
        return <MusicDetail songs={songs} />;
      case "/Videos":
        return <VideoDetail songs={songs} />;
      default:
        return <h1>404 not found</h1>;
    }
  }
  return (
    <div>
      <Header setPage={setPage} />
      {getCurrentPage()}
    </div>
  );
}

export default App;
