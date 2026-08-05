"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceDetailsPopUp from "./ServiceDetailsPopUp";

const services = [
  {
    title: "IT Infrastructure Management",
    description:
      "Our IT Infrastructure Management service is designed to ensure your business runs seamlessly with secure, scalable, and high-performing systems. From networks and servers to endpoint devices, we oversee every layer of infrastructure with a focus on operational efficiency and cybersecurity.",
    icon: "/images/flaticon/svg/002-travel-1.svg",
  },
  {
    title: "Software Development",
    description:
      "In today’s digital-first world, your website is your brand’s first and most powerful impression. Our Web Designing services focus on crafting responsive, visually stunning, and conversion-oriented websites that engage users and deliver results.",
    icon: "/images/flaticon/svg/001-travel.svg",
  },
  // {
  //   title: "Annual Maintenance Contract",
  //   description:
  //     "Our Annual Maintenance Contract (AMC) services are tailored to deliver uninterrupted IT performance, seamless connectivity, and end-to-end system integration. Roxxon Infotech ensures that your infrastructure operates efficiently, so you can stay focused on scaling your business.",
  //   icon: "/images/flaticon/svg/003-travel-2.svg",
  // },
  // {
  //   title: "Digital Service Cloud Platform",
  //   description:
  //     "Our Digital Service Cloud Platform unifies data, services, and tools to deliver seamless customer interactions, personalized experiences, and faster issue resolution. At Roxxon Infotech, we empower businesses with scalable cloud infrastructure, real-time support, and cost-effective digital transformation solutions.",
  //   icon: "/images/flaticon/svg/004-travel-3.svg",
  // },
  {
    title: "Mobile App Development",
    description:
      "Our Mobile App Development service empowers businesses to deliver seamless, high-performance applications across Android platform. Using cutting-edge technologies like React Native, we create scalable, user-friendly mobile apps tailored to your specific needs—while ensuring faster development cycles and consistent UI across devices.",
    icon: "/images/flaticon/svg/004-travel-3.svg",
  },
  {
    title: "Workforce Solutions",
    description:
      "Our Workforce Solutions service is designed to optimize your human capital management, ensuring that your organization has the right talent in the right roles. From recruitment and onboarding to training and performance management, we provide comprehensive solutions that enhance productivity, employee engagement, and organizational growth.",
    icon: "/images/flaticon/svg/004-travel-3.svg",
  },
  // {
  //   title: "Biometric Security Solutions",
  //   description:
  //     "Our Biometric Security Solutions leverage unique human traits to ensure secure and reliable identity verification. Replacing traditional passwords and PINs with physical and behavioral identifiers, we help businesses enhance security, streamline access control, and reduce fraud across sectors like law enforcement, healthcare, travel, and defense.",
  //   icon: "/images/flaticon/svg/005-travel-4.svg",
  // },
  // {
  //   title: "CCTV Surveillance",
  //   description:
  //     "Our CCTV Surveillance solutions deliver 24/7 real-time monitoring to enhance the safety of your property. Using advanced video camera systems, we enable live and recorded views of indoor and outdoor environments, helping to deter crime and safeguard your assets with dependable and scalable security systems.",
  //   icon: "/images/flaticon/svg/006-food.svg",
  // },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<
    null | (typeof services)[0]
  >(null);

  return (
    <section id="services-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-[1.02] hover:bg-amber group hover:cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="w-20 h-20 flex-shrink-0 mr-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-gray-600 group-hover:text-secondary transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/75 mt-2">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceDetailsPopUp
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}
