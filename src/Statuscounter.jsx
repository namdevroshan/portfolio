import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import statsImage from "./assets/Mask group.svg"; // Add your image path

const stats = [
  { label: "Projects Completed", count: 120 },
  { label: "Happy Clients", count: 85 },
  { label: "Years of Experience", count: 5 },
  { label: "Awards Won", count: 10 },
];

const Counter = ({ value }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
    const duration = 2000; // Animation duration in ms
    const stepTime = Math.abs(Math.floor(duration / value));

    const timer = setInterval(() => {
      start += 1;
      if (start > value) {
        clearInterval(timer);
        setCount(value);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span className="text-4xl font-bold text-black-500">{count}+</span>;
};

const StatusCounter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[#F2F4F7] text-black py-16 px-4 rounded-[50px] shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img src={statsImage} alt="Stats" className="w-3/4" />
        </motion.div>

        {/* Right Side - Text & Counters */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-orange-500">Achievements</span>
          </h2>
          <p className="text-gray-500 mb-6">
            Over the years, I have built numerous projects, satisfied many clients, and won awards for my outstanding work.
          </p>

          {/* Counters */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-lg shadow-md"
              >
                <Counter value={item.count} />
                <p className="text-gray-500 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Hire Me Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8"
          >
            <button className="px-8 py-4 border-[1px] border-black text-black text-lg font-semibold rounded-[20px] shadow-md transition-transform transform hover:scale-105">
              Hire Me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatusCounter;