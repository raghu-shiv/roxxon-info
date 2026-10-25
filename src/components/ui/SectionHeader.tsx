"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  tone?: "light" | "dark";
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  tone = "light",
}: Props) {
  const reduceMotion = useReducedMotion();
  const isDark = tone === "dark";

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView="visible"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      viewport={{ once: true, amount: 0.15 }}
      className="mx-auto max-w-3xl text-center"
    >
      <span
        className={[
          "inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold",
          isDark
            ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
            : "border-cyan-200 bg-cyan-50 text-cyan-800",
        ].join(" ")}
      >
        {badge}
      </span>

      <h2
        className={[
          "mt-6 text-4xl font-bold tracking-tight sm:text-5xl",
          isDark ? "text-white" : "text-slate-900",
        ].join(" ")}
      >
        {title}

        {highlight && (
          <span
            className={[
              "block bg-clip-text text-transparent",
              isDark
                ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                : "bg-gradient-to-r from-cyan-600 to-blue-700",
            ].join(" ")}
          >
            {highlight}
          </span>
        )}
      </h2>

      <p
        className={[
          "mt-6 text-base leading-8 sm:text-lg",
          isDark ? "text-slate-300" : "text-slate-600",
        ].join(" ")}
      >
        {description}
      </p>
    </motion.div>
  );
}
