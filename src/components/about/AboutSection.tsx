"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-28">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24 xl:px-44">
        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Who <span className="text-primary">We Are</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Roxxon Infotech is a forward-thinking Information Technology company
            founded in 2023 by four passionate partners with a shared vision: to
            transform the way businesses harness technology. With innovation at
            our core, we specialize in delivering cutting-edge digital solutions
            tailored to meet the evolving needs of today’s fast-paced,
            tech-driven world.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about.jpg"
              alt="About Roxxon Infotech"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              What <span className="text-primary">We Do</span>
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
              At Roxxon Infotech, we are more than just a technology provider —
              we are problem solvers, strategists, and dedicated partners. Our
              founding team brings together a diverse blend of expertise in IT
              consulting, website creation and web development, AMC services,
              Biometrics systems and CCTV Surveillance system. This synergy
              allows us to offer comprehensive, end-to-end technology services
              that empower businesses of all sizes to grow, scale, and thrive.
            </p>

            <p className="text-gray-700 leading-relaxed mb-2 text-base sm:text-lg">
              We provide a range of innovative IT solutions, including:
            </p>
            <ul className="space-y-1 text-gray-700 list-disc list-inside text-base sm:text-lg">
              <li>Custom Website Development</li>
              <li>Web & Mobile Application Development</li>
              <li>IT Infrastructure Management</li>
              <li>IT Consulting & Strategy</li>
              <li>Workforce Solutions</li>
            </ul>
          </motion.div>
        </div>

        {/* Final Statement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-[#323edd] text-white rounded-lg px-6 py-10 sm:px-10 md:flex items-center gap-10 shadow-lg">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h4 className="text-2xl sm:text-3xl font-semibold mb-2">
                Your Partner for Smart Technology Solutions
              </h4>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                Whether you&apos;re a startup seeking a digital foundation or an
                enterprise aiming to modernize legacy systems, Roxxon Infotech
                is your trusted partner for scalable, secure, and smart
                technology solutions.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Image
                src="/images/about-1.jpg"
                alt="Smart Technology"
                width={300}
                height={300}
                className="rounded-xl shadow-md object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
