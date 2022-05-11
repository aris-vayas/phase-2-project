import React from "react";

function MusicDetail({ songs }) {
  const music = songs.map((item) => {
    return (
      <>
        <div>
          <h1>{item.title}</h1>
          <h2>{item.creator}</h2>
          <h3>{item.genre}</h3>
        </div>

        <span>
          <img className={"images"} src={item.thumbnail}></img>
          <audio controls src={item.songlink}></audio>
        </span>
      </>
    );
  });
  return <>{music}</>;
}

export default MusicDetail;
