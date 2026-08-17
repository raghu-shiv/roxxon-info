"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";

interface Props {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className?: string;
  duration?: number;
}

export default function FloatingInfoCard({
  icon: Icon,
  title,
  subtitle,
  className,
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
      className={className}
    >
      <GlassCard className="flex items-center gap-4 p-4">
        <div className="rounded-xl bg-cyan-500/10 p-3">
          <Icon size={20} className="text-cyan-600" />
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>

          <p className="text-xs text-slate-500">{subtitle}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
