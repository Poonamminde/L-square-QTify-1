import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import NextIcon from "../../assets/nextIcon.png";
import PrevIcon from "../../assets/prevIcon.png";
import "swiper/css"; // core Swiper
import "swiper/css/navigation"; // Navigation module
import "swiper/css/pagination";
import "./carousel.css";
const index = ({ data }) => {
  console.log(data);
  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        virtual
        spaceBetween={30}
        slidesPerView={8}
        navigation={{
          nextEl: ".arrow-right",
          prevEl: ".arrow-left",
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="arrow-left arrow">
        <img src={PrevIcon} alt="prev" />
      </div>
      <div className="arrow-right arrow">
        <img src={NextIcon} alt="next" />
      </div>
    </>
  );
};

export default index;
