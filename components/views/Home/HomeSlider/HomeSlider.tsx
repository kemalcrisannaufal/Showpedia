"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import BannerShowpedia from "./BannerShowpedia/BannerShowpedia";
import BannerShowpediaV2 from "./BannerShowpediaV2";

interface Proptypes {
  reverse?: boolean;
}
const HomeSlider = (props: Proptypes) => {
  const { reverse = false } = props;
  const children = [
    <SwiperSlide key={0}>
      <BannerShowpedia />
    </SwiperSlide>,
    <SwiperSlide key={1}>
      <BannerShowpediaV2 />
    </SwiperSlide>,
  ];

  return (
    <Swiper
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      modules={[Pagination, Autoplay]}
      loop
      className="mb-5 rounded-xl w-full"
    >
      {reverse ? children.reverse() : children}
    </Swiper>
  );
};

export default HomeSlider;
