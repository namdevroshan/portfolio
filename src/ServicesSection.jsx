import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import uiuxImage from "./assets/edited-servicecard.png";
import webDesignImage from "./assets/edited-servicecard.png";
import landingPageImage from "./assets/edited-servicecard.png";

const services = [
  { title: "UI/ UX Design", image: uiuxImage },
  { title: "Web Design", image: webDesignImage },
  { title: "Landing Page", image: landingPageImage },
  { title: "App Design", image: uiuxImage },
  { title: "E-commerce Design", image: webDesignImage },
  { title: "Dashboard UI", image: landingPageImage },
];


const ServicesSection = () => {
  return (
    <section className="relative bg-[url('./assets/service.bg.svg')] bg-cover bg-center text-white py-16 px-4 rounded-[50px] h-[740px] top-[-28px]">
      {/* Heading & Description */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-18 mt-8">
        <h2 className="text-4xl font-bold text-left ml-[20px]">
          My <span className="text-orange-500">Services</span>
        </h2>
        <p className="text-start max-w-md text-gray-300 mr-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.
        </p>
      </div>

      {/* Swiper Carousel for Service Cards */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="max-w-6xl mx-auto"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="relative w-80 bg-white/10 backdrop-blur-lg border border-white/20 rounded-[32px] text-center overflow-hidden shadow-lg mx-auto pt-[23px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto rounded-[24px] shadow-lg"
                />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination (Styled Correctly) */}
      <div className="custom-pagination flex justify-center mt-14 space-x-2"></div>

      {/* Forced Swiper Pagination Styles */}
      <style>
        {`
          .swiper-pagination-bullet {
            width: 12px !important;
            height: 12px !important;
            background-color: #E4E7EC !important; /* Orange Color */
            opacity: 1 !important;
            border-radius: 50% !important;
            transition: all 0.3s ease !important;
          }

          .swiper-pagination-bullet-active {
            width: 28px !important; /* Longer active bullet */
            height: 12px !important;
            background-color: #ff7f36 !important;
            border-radius: 20px !important;
          }
        `}
      </style>
    </section>
  );
};

export default ServicesSection;
