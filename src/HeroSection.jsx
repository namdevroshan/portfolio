import React from "react";
import { motion } from "framer-motion";
import profileImage from "./assets/young-pretty-woman-looking-happy-goofy-with-broad-fun-loony-smile-eyes-wide-open-against-white-wall 2.svg"; // Replace with actual image path
import threeLineImage from "./assets/Vector 1.svg"; // Replace with actual image path
import threeLineImageBottom from "./assets/Vector 2.svg"; // Replace with actual image path
const HeroSection = () => {
  return (
    <section className="relative bg-white top-9 text-black flex flex-col items-center justify-center text-center py-16 px-4">
      {/* Orange Background Circle */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="w-[659px] h-[322px] bg-orange-400 rounded-t-full mb-16"></div>
      </div>

      {/* Three-Line Image */}
      <img 
        src={threeLineImage} 
        alt="Decorative lines" 
        className="absolute top-3 left-[54%] transform -translate-x-1/2 w-9"
      />

      {/* Hello Badge */}
      <motion.div
        className="absolute top-10 bg-white shadow-md px-4 py-1 rounded-full text-black font-semibold border-2 border-black"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Hello!
      </motion.div>

      {/* Headline */}
      <h1 className="text-6xl font-bold leading-tight relative">
        I'm <span className="text-orange-500">Jenny</span>,
        <br /> Product Designer
        
      </h1>
      <img 
        src={threeLineImageBottom} 
        alt="Decorative lines" 
        className="absolute top-[23%] left-80 w-16"
      />

      {/* Profile Image */}
      <motion.img
        src={profileImage}
        alt="Jenny"
        className="relative mt-4 w-130 h-130 object-cover "
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      />

      {/* Testimonial */}
      <div className="absolute left-4 top-1/3 max-w-sm text-left text-gray-600 text-xl font-semibold">
        <p className="text-xl italic">“Jenny’s exceptional product design ensured our website’s success. Highly recommended.”</p>
      </div>

      {/* Experience */}
      <div className="absolute right-6 top-1/3 flex flex-col items-center">
        <div className="flex gap-1 text-orange-500 text-2xl">★★★★★</div>
        <p className="text-black font-bold text-3xl">10 Years</p>
        <p className="text-gray-500 text-xl">Experience</p>
      </div>
    </section>
  );
};

export default HeroSection;
