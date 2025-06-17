"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import BannerShowpedia from "./BannerShowpedia/BannerShowpedia";
import BannerShowpediaV2 from "./BannerShowpediaV2";

const HomeSlider = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      autoplay={{ delay: 7000 }}
      modules={[Pagination, Autoplay]}
      loop
      className="mb-5 rounded-xl w-full"
    >
      <SwiperSlide>
        <BannerShowpedia />
      </SwiperSlide>

      <SwiperSlide>
        <BannerShowpediaV2 />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
