import "./App.css";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Music from "./Components/Music";
import Videos from "./Components/Videos";

function App() {
  const [songs, setSong] = useState([]);

  const getMusic = () => {
    fetch("http://localhost:3001/music")
      .then((r) => r.json())
      .then((data) => setSong(data));
  };

  useEffect(() => {
    getMusic();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home songs={songs} getMusic={getMusic} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/music"
          element={<Music songs={songs} getMusic={getMusic} />}
        ></Route>
        <Route
          path="/videos"
          element={<Videos songs={songs} getMusic={getMusic} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
