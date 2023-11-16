import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import NextIcon from "../../assets/nextIcon.png";
import PrevIcon from "../../assets/prevIcon.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";
import { useRef } from "react";
const Index = ({ label, data }) => {
  let swiperRef = useRef(label);
  label = label.slice(" ");
  console.log(data);
  return (
    <>
      <Swiper
        ref={swiperRef}
        modules={[Virtual, Navigation, Pagination]}
        virtual
        spaceBetween={30}
        slidesPerView={8}
        navigation={{
          nextEl: `.arrow-right-${label[0]}`,
          prevEl: `.arrow-left-${label[0]}`,
        }}
      >
        {data.map((item) => (
          <SwiperSlide value={label} key={item.id}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`arrow-left arrow arrow-left-${label[0]}`}>
        <img src={PrevIcon} alt="prev" />
      </div>
      <div className={`arrow-right arrow arrow-right-${label[0]}`}>
        <img src={NextIcon} alt="next" />
      </div>
    </>
  );
};

export default Index;
