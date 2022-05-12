import NavBar from "./NavBar";
import SongSubmission from "./SongSubmission";
import { SwiperSlide } from "swiper/react";
import { Typography } from "@mui/material";
import ReactPlayer from "react-player";
import Carousle from "./Carousel";
import Rating from "./Rating";
const Videos = ({ songs, getMusic }) => {
  const VideoCard = songs.map((item) => {
    ////
    return (
      <SwiperSlide key={item.id}>
        <div>
          <ReactPlayer url={item.video} />
          <Rating />
          <Typography variant="h2" align="center">
            "{item.title}" by {item.creator}
          </Typography>
        </div>
      </SwiperSlide>
      ////
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

      <Carousle>{VideoCard}</Carousle>

      <Typography variant="h3" align="center">
        Submit A Video
      </Typography>
      <br></br>
      <SongSubmission getMusic={getMusic} />
    </>
  );
};

export default Videos;
