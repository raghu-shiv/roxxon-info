"use client";

import { motion } from "framer-motion";
import { Technology } from "@/lib/data/technologies";

interface Props {
  technology: Technology;
}

export default function TechnologyChip({ technology }: Props) {
  const Icon = technology.icon;

  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.04,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
  inline-flex min-h-11 items-center gap-2
  font-semibold text-cyan-300
  transition-colors hover:text-cyan-200
  focus-visible:outline-none focus-visible:ring-2
  focus-visible:ring-cyan-300 focus-visible:ring-offset-2
  focus-visible:ring-offset-slate-900
  motion-reduce:transition-none
"
    >
      <Icon
        size={18}
        style={{
          color: technology.color,
        }}
      />

      <span className="text-sm font-medium text-slate-100">
        {technology.name}
      </span>
    </motion.div>
  );
}
