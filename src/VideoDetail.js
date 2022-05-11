import React from "react";
import ReactPlayer from "react-player";
function VideoDetail({ songs }) {
  const videoPage = songs.map((item) => {
    return (
      <div>
        <h1>{item.title}</h1>

        <ReactPlayer url={item.video} />
      </div>
    );
  });
  return <>{videoPage}</>;
}

export default VideoDetail;
