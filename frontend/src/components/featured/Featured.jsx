import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../../assets/1.jpg";
import Img2 from "../../assets/2.jpg";
import Img3 from "../../assets/3.jpg";
import Img4 from "../../assets/4.jpg";
import Img5 from "../../assets/5.jpg";
import Img6 from "../../assets/6.jpg";
import "./featured.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Autoplay,Navigation, EffectFade } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        modules={[Autoplay,EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Img1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img5} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img6} alt="img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
