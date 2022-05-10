import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Carousle({ songs }) {
  const SwiperCard = songs.map((item) => {
    return (
      <SwiperSlide key={item.id}>
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
