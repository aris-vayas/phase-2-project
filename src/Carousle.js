// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import SongCard from "./SongCard";
// Import Swiper styles
import "swiper/css";
//import SongCard from "./SongCard";
function Carousle({ songs }) {
  const SwiperCard = songs.map((item) => {
    return (
      <SwiperSlide>
        <h1>{item.title}</h1>
        <div>
          <img
            onClick={() => console.log("click")}
            className={"images"}
            src={item.thumbnail}
          ></img>
          <audio controls src={item.songlink}></audio>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {SwiperCard}
    </Swiper>
  );
}
export default Carousle;
