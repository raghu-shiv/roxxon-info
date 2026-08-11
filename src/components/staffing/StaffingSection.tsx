"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import Hero from "./Hero";
import Services from "./Services";
import TechStack from "./TechStack";
import RolesSlider from "./RoleSlider";
import WhyRoxxon from "./WhyRoxxon";
import HiringProcess from "./HiringProcess";
import RecruitmentIntelligence from "./RecruitmentIntelligence";
import SuccessMetrics from "./SuccessMetrics";

export default function StaffingSection() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Scroll Progress */}

      <motion.div
        className="
          fixed
          left-0
          right-0
          top-0
          z-[9999]
          h-1
          origin-left
          bg-gradient-to-r
          from-cyan-500
          via-blue-500
          to-indigo-600
        "
        style={{
          scaleX,
        }}
      />

      <motion.main
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <Hero />

        <Services />

        <TechStack />

        <RolesSlider />

        <WhyRoxxon />

        <HiringProcess />

        <RecruitmentIntelligence />

        <SuccessMetrics />
      </motion.main>
    </>
  );
}
