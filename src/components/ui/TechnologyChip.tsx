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
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        backdrop-blur-xl
        transition-all
        hover:border-cyan-400/40
        hover:bg-cyan-500/10
      "
    >
      <Icon
        size={18}
        style={{
          color: technology.color,
        }}
      />

      <span className="text-sm font-medium text-white">{technology.name}</span>
    </motion.div>
  );
}
