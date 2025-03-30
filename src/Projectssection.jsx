import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import project1 from "./assets/projectssectionimg.svg"; // Replace with actual image
import project2 from "./assets/projectssectionimg.svg"; // Replace with actual image
import project3 from "./assets/projectssectionimg.svg"; // Replace with actual image

const projects = [
  { image: project1, title: "Food Delivery App" },
  { image: project2, title: "E-Commerce Website" },
  { image: project3, title: "Portfolio Design" },
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-16 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Lets have a look at <br />
            my <span className="text-orange-500">Portfolio</span>
          </h2>

          {/* "See All" Button - Moved to the top right */}
          <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition">
            See All <ArrowRight size={20} />
          </button>
        </div>

        {/* Portfolio Items with Auto Swiping */}
        <div className="relative overflow-hidden mt-8 w-full h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative w-full h-full rounded-[30px] shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Portfolio Image with Overlay */}
              <div className="relative w-full h-full">
                <img
                  src={projects[currentIndex].image}
                  alt={`Portfolio ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Title (Bottom Left, Large & White) */}
              <div className="absolute bottom-6 left-6 text-white text-[60px] font-bold">
                {projects[currentIndex].title}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Pagination Bullets */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <motion.div
              key={index}
              className={`h-[12px] rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-[28px] bg-orange-500" : "w-[12px] bg-[#E4E7EC]"
              }`}
            ></motion.div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          {["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"].map(
            (tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-600 shadow-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* Description */}
        <div className="text-center mt-8">
          <h3 className="text-[48px] font-bold text-gray-900">
            {projects[currentIndex].title}
          </h3>
          <p className="text-[20px]-gray-500 mt-2 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            congue interdum ligula a dignissim. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
