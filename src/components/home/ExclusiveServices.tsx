"use client";
import React from "react";
import { FaRegFileCode, FaFingerprint } from "react-icons/fa6";
import { GiCctvCamera } from "react-icons/gi";
import { HiServerStack } from "react-icons/hi2";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaRegFileCode />,
    title: "Web Development",
    desc: "Our Web Designing services focus on crafting responsive, visually stunning, and conversion-oriented websites to engage users.",
  },
  {
    icon: <GiCctvCamera />,
    title: "CCTV Surveillance",
    desc: "Our CCTV Surveillance solutions deliver 24/7 real-time monitoring to enhance the safety of your property.",
  },
  {
    icon: <HiServerStack />,
    title: "Server Security",
    desc: "From networks and servers to endpoint devices, we oversee every layer of infrastructure with a focus on operational efficiency and cybersecurity.",
  },
  {
    icon: <FaFingerprint />,
    title: "Biometrics",
    desc: "Our Biometric Security Solutions leverage unique human traits to ensure secure and reliable identity verification.",
  },
];

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

const ExclusiveServices = () => {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-44">
        <div className="text-center pb-10 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Exclusive <span className="text-primary">IT Solution</span>{" "}
            Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                delay: i * 0.2,
                duration: 0.6,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="relative md:aspect-square px-4 py-4 bg-primary hover:bg-amber transition-colors duration-300 group"
            >
              {/* Decorative Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <span className="absolute top-0 right-0 w-[10px] h-[4px] bg-white transition-all duration-300 group-hover:w-[30px]" />
                <span className="absolute bottom-0 left-0 w-[10px] h-[4px] bg-white transition-all duration-300 group-hover:w-[30px]" />
              </div>
              <div className="absolute top-0 right-0 w-[4px] h-[10px] bg-white transition-all duration-300 group-hover:h-[30px]" />
              <div className="absolute bottom-0 left-0 w-[4px] h-[10px] bg-white transition-all duration-300 group-hover:h-[30px]" />
              <div className="text-6xl text-white my-4">{service.icon}</div>
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-white/75">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveServices;
