"use client";

import Link from "next/link";
import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonProps =
  | ({
      href: string;
      children: ReactNode;
      className?: string;
    } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href">)
  | ({
      href?: undefined;
      children: ReactNode;
      className?: string;
    } & ButtonHTMLAttributes<HTMLButtonElement>);

export default function Button({
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        <ArrowRight size={18} />
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      <ArrowRight size={18} />
    </button>
  );
}
