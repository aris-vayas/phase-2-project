import "./App.css";
import "./styles.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Carousle from "./Carousle";
function App() {
  const [songs, setSong] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/music")
      .then((r) => r.json())
      .then((data) => setSong(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Carousle songs={songs} />
    </div>
  );
}

export default App;
