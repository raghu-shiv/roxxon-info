"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExpand } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const projects = [
  {
    image: "/images/work-1.jpg",
    category: "Web Development",
    title: "Best Solution for Information Technology",
  },
  {
    image: "/images/work-2.jpg",
    category: "Web Application",
    title: "Creative Idea Build Up",
  },
  {
    image: "/images/work-3.jpg",
    category: "Web Development",
    title: "Web Design Concept & Web Analysis",
  },
  {
    image: "/images/work-4.jpg",
    category: "UI/UX Strategy",
    title: "Strategy for Enduring Customer Relationships",
  },
];

export default function StrategicWork() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="pt-0 pb-28 bg-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-44">
        <div className="text-center pb-10">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Strategic <span className="text-primary">Work</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((item, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden mb-10 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              onClick={() => {
                setCurrentIndex(i);
                setOpen(true);
              }}
            >
              {/* Image */}
              <div className="relative rounded overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transform scale-110 group-hover:scale-100 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Text */}
              <div className="text-center pt-6 transition-all duration-500">
                <span className="text-sm text-gray-500 font-medium block mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-primary">
                  <a href="/project">{item.title}</a>
                </h3>
              </div>

              {/* Icon */}
              <div className="absolute top-[-50px] group-hover:top-8 right-4 w-[50px] h-[50px] rounded-full border border-white bg-primary/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <FaExpand />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={projects.map((item) => ({ src: item.image }))}
        plugins={[Zoom]}
      />
    </section>
  );
}
