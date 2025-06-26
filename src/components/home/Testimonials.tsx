"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative h-screen bg-[url('/images/bg_1.jpg')] bg-fixed bg-center bg-cover pt-32">
      <div className="absolute inset-0 bg-[#060a24]/60" />

      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What our clients say about us?
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
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative flex flex-col h-full text-white">
                  {/* Left half - message */}
                  <div className="w-1/2 flex items-start p-6">
                    <p className="text-base sm:text-lg leading-relaxed">
                      {item.message}
                    </p>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <span className="text-sm text-amber">{item.position}</span>
                  </div>
                </div>

                {activeIndex === idx && (
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

export default Testimonials;

const testimonials = [
  {
    image: "/images/testimony-1.jpg",
    message:
      "Very well thought out and articulate communication. Clear milestones, deadlines and fast work. No shortcuts. Always solving problems with great original ideas.",
    name: "Courtney Henry",
    position: "Customer in USA",
  },
  {
    image: "/images/testimony-2.jpg",
    message:
      "Roxxon's team implements cutting edge technology that improved our scalability. Communication was seamless, even across timezones.",
    name: "Martin Tonheim",
    position: "Customer in UK",
  },
  {
    image: "/images/testimony-3.jpg",
    message:
      "We hired Roxxon Infotech to revamp our e-commerce platform. They modernized our UI/UX, improved site speed, and integrated our CRM flawlessly. Brilliant job!",
    name: "Emma Robertson",
    position: "Customer in UK",
  },
  {
    image: "/images/testimony-4.jpg",
    message:
      "As a tech consultant, I’ve worked with many agencies, but Roxxon Infotech stands out for their technical expertise and commitment to quality.",
    name: "Natalie Scott",
    position: "Customer in Australia",
  },
  {
    image: "/images/testimony-5.jpg",
    message:
      "Roxxon Infotech helped us launch our edtech platform. Their developers were proactive and quick to adapt to our evolving needs.",
    name: "Paul White",
    position: "Customer in Canada",
  },
];
