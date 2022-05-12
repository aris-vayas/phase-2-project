import { Swiper } from "swiper/react";
import { Mousewheel } from "swiper";

const Carousel = ({ children }) => {
  return (
    <Swiper
      slidesPerView={1}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
