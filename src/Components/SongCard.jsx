import { SwiperSlide } from "swiper/react";
import { Typography } from "@mui/material";
import Carousel from "./Carousel";
////
const SongCard = ({ songs }) => {
  const card = songs.map((item) => {
    ////
    return (
      <SwiperSlide key={item.id}>
        <div>
          <img className={"images"} src={item.thumbnail} alt={item.title}></img>
          <br></br>
          <Typography variant="h6" align="center">
            "{item.title}" by {item.creator}
          </Typography>
          <audio controls src={item.songlink}></audio>
        </div>
      </SwiperSlide>
      ////
    );
  });
  ////
  return <Carousel>{card}</Carousel>;
};

export default SongCard;
