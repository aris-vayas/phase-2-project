import NavBar from "./NavBar";
import SongSubmission from "./SongSubmission";
import { SwiperSlide } from "swiper/react";
import { Typography } from "@mui/material"
import ReactPlayer from "react-player"
const Videos = ({ songs, getMusic }) => {
  const SwiperCard = songs.map((item) => {

    return (
      <SwiperSlide key={item.id}>
        <div>

            <ReactPlayer  url={item.video}/>

          <Typography variant="h6" align="center">
            "{item.title}" by {item.creator}
          </Typography>
          {/* <audio controls src={item.songlink}></audio> */}
        </div>
      </SwiperSlide>
    );
  });
  return (
    <>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {SwiperCard}
      <br></br>
      <br></br>
      <Typography variant="h3" align="center">
        Submit A Video
      </Typography>
      <br></br>
      <SongSubmission getMusic={getMusic} />
    </>
  );
};

export default Videos;
