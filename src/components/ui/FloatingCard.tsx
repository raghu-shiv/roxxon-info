"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export default function FloatingCard({
  children,
  className = "",
  duration = 5,
}: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        rounded-2xl
        border
        border-white/20
        bg-white/90
        p-5
        shadow-xl
        backdrop-blur-xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
