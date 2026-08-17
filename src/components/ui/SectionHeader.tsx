"use client";

import { motion } from "framer-motion";

interface Props {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
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
      className="mx-auto max-w-3xl text-center"
    >
      <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
        {title}

        {highlight && (
          <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
    </motion.div>
  );
}
