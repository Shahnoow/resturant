import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const sliderImages = [
  "/img/slider1.jpg",
  "/img/slider2.jpg",
  "/img/slider3.jpg",
];

const MenuSlider = () => {
  return (
    <section className="max-w-6xl px-4 py-12 mx-auto">
      <h2 className="mb-6 text-3xl font-bold">Featured Slider</h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1200}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {sliderImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="object-cover w-full h-64 rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MenuSlider;
