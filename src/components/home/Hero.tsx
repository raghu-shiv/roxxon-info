"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import IntroBox from "@/components/home/IntroBox";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Responsive: detect if mobile to disable parallax
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const backgroundY = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -300]);

  return (
    <motion.section
      ref={heroRef}
      style={{ backgroundPositionY: backgroundY }}
      className="relative h-screen -mt-[5.75rem] bg-[url('/images/bg_1.jpg')] bg-cover bg-center flex sm:flex-col items-center justify-center text-white px-4"
    >
      <div className="absolute inset-0 bg-[#060a24]/60" />
      <div className="relative z-10 text-start">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Experienced for Every Kind of IT Solution
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          We provide innovative IT solutions for your business.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 py-4 px-6 bg-primary hover:bg-secondary text-white rounded transition"
        >
          Contact Us
        </a>
      </div>
      {/* IntroBox inside Hero */}
      <div className="md:absolute md:right-0 md:bottom-0 sm:relative mt-6 sm:mt-8 md:mt-0">
        <IntroBox />
      </div>
    </motion.section>
  );
}
