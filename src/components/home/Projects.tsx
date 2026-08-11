"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "@/lib/data/projects";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative h-screen bg-[url('/images/bg_1.jpg')] bg-fixed bg-center bg-cover pt-32">
      <div className="absolute inset-0 bg-[#060a24]/60" />

      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Checkout our recent projects
          </h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-96"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.images[0]})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative flex flex-col h-full text-white">
                  {/* Left half - message */}
                  <div className="w-1/2 flex items-start p-6">
                    <p className="text-base sm:text-lg leading-relaxed">
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber hover:underline"
                        >
                          Visit Project
                        </a>
                      )}
                    </p>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                  </div>
                </div>

                {activeIndex === item.id && (
                  <>
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-8 border-l-8 border-amber" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-8 border-r-8 border-amber" />
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
