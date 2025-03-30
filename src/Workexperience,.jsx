import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "UI/UX Designer",
    company: "Design Studio",
    duration: "2022 - Present",
    description: "Designing engaging user experiences for web and mobile apps.",
  },
  {
    role: "Web Developer",
    company: "Tech Solutions",
    duration: "2020 - 2022",
    description: "Built and maintained responsive and scalable web applications.",
  },
  {
    role: "Graphic Designer",
    company: "Creative Agency",
    duration: "2018 - 2020",
    description: "Created branding materials, illustrations, and social media graphics.",
  },
  {
    role: "Web Designer",
    company: "Creative Agency",
    duration: "2018 - 2020",
    description: "Created branding materials, illustrations, and social media graphics.",
  },
];

const WorkExperience = () => {
  return (
    <section className="relative bg-white text-black py-16 px-4 rounded-[50px] shadow-lg">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          My <span className="text-orange-500">Work Experience</span>
        </h2>
        <p className="text-gray-600 mt-2">
          A journey through my professional experience and expertise.
        </p>
      </div>

      {/* Experience Timeline (Tree Structure) */}
      <div className="max-w-5xl mx-auto relative">
        {/* Tree Trunk - Dotted Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full border-l-4 border-dashed border-gray-400"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex items-center justify-between my-6 ${
              index % 2 === 0 ? "flex-row-reverse text-right" : "text-left"
            }`}
          >
            {/* Tree Branch with Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full border-4 border-dashed relative ${
                  index % 2 === 0 ? "border-orange-500" : "border-black"
                }`}
              >
                {/* Circle */}
                <div
                  className={`w-7 h-7 rounded-full shadow-lg z-20 ${
                    index % 2 === 0 ? "bg-orange-500" : "bg-black"
                  }`}
                ></div>
              </div>
              {/* Branch connecting to the card */}
              <div
                className={`absolute w-16 h-1 ${
                  index % 2 === 0 ? "bg-orange-500 left-full" : "bg-black right-full"
                }`}
              ></div>
            </div>

            {/* Experience Card as a Branch */}
            <div className="relative w-80">
              <motion.div
                className={`p-6 rounded-lg shadow-md border border-gray-300 relative z-10 overflow-hidden
                transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:border-orange-500 group 
                ${index % 2 === 0 ? "bg-gray-100 text-black" : "bg-black text-white"}`}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-20 transition-all duration-500"></div>

                {/* Animated Border Glow */}
                <div className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-500 group-hover:border-orange-500"></div>

                {/* Role & Company */}
                <h3 className="text-xl font-semibold text-orange-500">{exp.role}</h3>
                <p className="font-medium">{exp.company}</p>
                <p className="text-sm italic">{exp.duration}</p>

                {/* Description with Slide-in Effect */}
                <motion.p
                  className="mt-2 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-2"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {exp.description}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
