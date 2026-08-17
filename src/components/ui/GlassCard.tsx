"use client";

import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: Props) {
  return (
    <div
      className={clsx(
        "rounded-3xl",
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur-2xl",
        "shadow-xl",
        "transition-all duration-300",
        "hover:-translate-y-2",
        "hover:shadow-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
