"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi2";
import { FaRegFileCode } from "react-icons/fa6";

const GrowBusiness = () => {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-44">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center pb-10"
        >
          <div className="text-center max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Accelerate <span className="text-primary">Your Business</span>{" "}
              with Tech <span className="text-primary">& Talent</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              We provide the best services for businesses
            </p>
          </div>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center px-2 sm:px-4"
          >
            <div className="flex justify-center text-primary text-5xl sm:text-6xl md:text-7xl mb-4">
              <FaRegFileCode />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-700">
              Software Solutions
            </h3>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg px-1 sm:px-2">
              Our IT team is highly skilled and experienced in software
              development.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/images/services.svg"
              alt="services"
              width={500}
              height={400}
              className="w-full max-w-sm sm:max-w-md md:max-w-full h-auto"
            />
          </motion.div>

          {/* Right Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center px-2 sm:px-4"
          >
            <div className="flex justify-center text-primary text-5xl sm:text-6xl md:text-7xl mb-4">
              <HiAcademicCap />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-700">
              Workforce Solutions
            </h3>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg px-1 sm:px-2">
              Our Workforce Solutions team connects businesses with skilled
              professionals across diverse industries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GrowBusiness;
