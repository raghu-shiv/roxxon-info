"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        hover:shadow-xl
      "
    >
      <div className="inline-flex rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-4 text-white">
        <Icon size={28} />
      </div>

      <h3 className="mt-8 text-2xl font-bold text-slate-900">{title}</h3>

      <p className="mt-5 leading-8 text-slate-600">{description}</p>
    </motion.div>
  );
}
