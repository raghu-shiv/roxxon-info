"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface GradientHeadingProps {
  title: string;
  highlight?: string;
  className?: string;
  center?: boolean;
}

export default function GradientHeading({
  title,
  highlight,
  className,
  center = false,
}: GradientHeadingProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className={clsx(center && "text-center")}
    >
      <h2
        className={clsx(
          "text-4xl font-black tracking-tight text-slate-900 lg:text-5xl",
          className,
        )}
      >
        {title}

        {highlight && (
          <>
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              {highlight}
            </span>
          </>
        )}
      </h2>
    </motion.div>
  );
}
