"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
    const timeout = setTimeout(() => setShow(false), 1);
    return () => clearTimeout(timeout);
  }, [controls]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-white"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background ring */}
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          stroke="#eeeeee"
        />

        {/* Animated ring */}
        <motion.circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          stroke="#F96D00"
          strokeLinecap="round"
          strokeDasharray="89 200"
          strokeDashoffset="0"
          animate={{
            rotate: 360,
            strokeDashoffset: [-35, -136],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.5,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: "center",
          }}
        />
      </svg>
    </motion.div>
  );
}
