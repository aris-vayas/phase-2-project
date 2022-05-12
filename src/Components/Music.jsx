import NavBar from "./NavBar";
import SongSubmission from "./SongSubmission";
import { SwiperSlide } from "swiper/react";
import { Typography } from "@mui/material";

const Music = ({ songs, getMusic }) => {
  const SwiperCard = songs.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <div>
          <img className={"images"} src={item.thumbnail}></img>
          <br></br>
          <Typography variant="h6" align="center">
            "{item.title}" by {item.creator}
          </Typography>
          <audio controls src={item.songlink}></audio>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <>
      <NavBar />
      {SwiperCard}
      <br></br>
      <br></br>
      <Typography variant="h3" align="center">
        Submit A Song
      </Typography>
      <br></br>
      <SongSubmission getMusic={getMusic} />
    </>
  );
};

export default Music;
