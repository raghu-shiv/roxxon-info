"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type PageBannerProps = {
  title: string;
};

export default function PageBanner({ title }: PageBannerProps) {
  return (
    <section
      className="relative bg-no-repeat bg-center bg-[length:200%] sm:bg-cover sm:bg-fixed"
      style={{
        backgroundImage: "url('/images/bg_3.jpg')",
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary opacity-50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex justify-center">
          <div className="text-center text-white max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs sm:text-sm md:text-base breadcrumbs"
            >
              <span className="mr-2">
                <Link href="/" className="hover:underline">
                  Home <i className="fa fa-chevron-right ml-1"></i>
                </Link>
              </span>
              <span>
                {title} <i className="fa fa-chevron-right ml-1"></i>
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
