"use client";

import { ITVShow } from "@/types/tvshow.type";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import TypingTextEffect from "@/components/ui/TypingTextEffect";
import { useRef } from "react";
import { Swiper as SwiperCore } from "swiper/types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import Link from "next/link";

interface Proptypes {
  shows: ITVShow[];
}

const ShowpediaPick = ({ shows }: Proptypes) => {
  const swiperRef = useRef<SwiperCore>(null);

  return (
    <section className="relative flex justify-center items-center p-4 md:p-10 overflow-hidden">
      <div className="z-10 flex md:flex-row flex-col flex-wrap md:flex-nowrap justify-center items-center gap-10 lg:gap-20">
        <div className="w-full max-w-md text-white">
          <TypingTextEffect
            classname="mb-2 md:mb-5 font-bold text-transparent bg-gradient-to-r bg-clip-text via-[#B11226] from-[#E50914] to-[#E50914] text-3xl md:text-4xl lg:text-5xl min-h-8 md:min-h-12 w-full"
            text="Showpedia Pick"
          />
          <p className="text-md text-neutral-600 dark:text-white">
            Recommended shows chosen by Showpedia. Explore the top picks with
            visuals and details.
          </p>
          <div className="flex gap-4 mt-4">
            <Button onClick={() => swiperRef.current?.slidePrev()}>
              <FaChevronLeft />
            </Button>
            <Button onClick={() => swiperRef.current?.slideNext()}>
              <FaChevronRight />
            </Button>
          </div>
        </div>

        <div className="w-full max-w-[300px] md:max-w-[350px]">
          <Swiper
            effect="cards"
            grabCursor
            modules={[EffectCards]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="mySwiper"
          >
            {shows.map((show) => (
              <SwiperSlide key={show.id} className="rounded-xl">
                <div className="relative shadow-lg rounded-xl overflow-hidden">
                  <Link href={`/shows/${show.id}`}>
                    <Image
                      src={
                        show.image?.original ||
                        show.image?.medium ||
                        "/images/illustrations/img-not-found.jpg"
                      }
                      alt={show.name}
                      width={350}
                      height={500}
                      className="w-full h-[500px] object-cover"
                    />
                  </Link>
                  <div className="bottom-0 absolute bg-black/60 p-3 rounded-b-xl w-full text-white">
                    <h3 className="font-semibold text-lg">{show.name}</h3>
                    <p className="text-sm">{show.genres?.join(", ")}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ShowpediaPick;
