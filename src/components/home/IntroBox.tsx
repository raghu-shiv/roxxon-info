"use client";

import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiLightBulb } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

const introData = [
  {
    icon: (
      <AiOutlineThunderbolt className="text-white text-2xl sm:text-3xl md:text-4xl group-hover:text-amber transition-colors duration-300" />
    ),
    text: "Information Technology Consultancy",
    color: "bg-primary",
    hover: "hover:bg-secondary",
  },
  {
    icon: (
      <GiLightBulb className="text-white text-2xl sm:text-3xl md:text-4xl group-hover:text-amber transition-colors duration-300" />
    ),
    text: "Workforce Solutions",
    color: "bg-blue-1",
    hover: "hover:bg-secondary",
  },
  {
    icon: (
      <FaReact className="text-white text-2xl sm:text-3xl md:text-4xl group-hover:text-amber transition-colors duration-300" />
    ),
    text: "Web Design & Development",
    color: "bg-blue-2",
    hover: "hover:bg-secondary",
  },
];

// Static variant keys
const boxVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function IntroBox() {
  return (
    <section className="md:w-2xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-end">
          <div className="w-full">
            <div className="flex flex-wrap items-stretch">
              {introData.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={boxVariants}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                  className="w-full md:w-1/3 flex"
                >
                  <div
                    className={`relative w-full aspect-square pl-4 pr-6 sm:pl-5 sm:pr-10 md:pr-20 py-4 sm:py-5 transition-all duration-300 group ${item.color} ${item.hover}`}
                  >
                    {/* Decorative Lines */}
                    <div className="absolute inset-0 pointer-events-none">
                      <span className="absolute top-0 right-0 w-[10px] h-[4px] bg-white transition-all duration-300 group-hover:w-[30px] group-hover:bg-amber" />
                      <span className="absolute bottom-0 left-0 w-[10px] h-[4px] bg-white transition-all duration-300 group-hover:w-[30px] group-hover:bg-amber" />
                    </div>
                    <div className="absolute top-0 right-0 w-[4px] h-[10px] bg-white transition-all duration-300 group-hover:h-[30px] group-hover:bg-amber" />
                    <div className="absolute bottom-0 left-0 w-[4px] h-[10px] bg-white transition-all duration-300 group-hover:h-[30px] group-hover:bg-amber" />

                    {/* Icon */}
                    <div className="py-2">{item.icon}</div>

                    {/* Text */}
                    <div className="flex-1 mt-3 sm:mt-4 text-white text-base sm:text-lg transition-colors duration-300 group-hover:text-amber">
                      <h3>{item.text}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
