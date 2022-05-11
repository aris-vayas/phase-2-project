import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
function Carousle({ songs, setSingleSong }) {
  const SwiperCard = songs.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <div>
          <h1  onClick={(e) => console.log(e.target.value)}>
            {item.title}
          </h1>
        </div>

        <div>
          <img className={"images"} src={item.thumbnail}></img>
          <audio controls src={item.songlink}></audio>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <>
      <Swiper
        // direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        onSlideChange={(e) => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {SwiperCard}
      </Swiper>
    </>
  );
}
export default Carousle;
