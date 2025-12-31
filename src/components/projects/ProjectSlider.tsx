"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface Props {
  images: string[];
}

export default function ProjectSlider({ images }: Props) {
  return (
    <Swiper
      modules={[EffectCoverflow]}
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      loop
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      className="w-full h-64"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className="!w-[85%] sm:!w-[70%] md:!w-[60%]">
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src={img}
              alt="Project image"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
