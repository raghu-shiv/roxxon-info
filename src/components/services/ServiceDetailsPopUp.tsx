"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

type Service = {
  title: string;
  description: string;
  icon: string;
};

interface Props {
  service: Service;
  onClose: () => void;
}

const serviceDetails = [
  {
    title: "IT Infrastructure Management",
    points: [
      {
        name: "Hardware Services",
        description:
          "We provide expert technical support, maintenance, and repair for all your physical hardware. Our services help maintain optimal device performance and extend hardware lifespan, ensuring minimal downtime and maximum reliability.",
      },
      {
        name: "Surveillance & Access Control",
        description:
          "Enhance security with intelligent surveillance systems and advanced access control. Our solutions support biometric authentication—including facial recognition, voice ID, gait analysis, and more—to safeguard your premises with modern, frictionless technology.",
      },
      {
        name: "Free Infrastructure Diagnosis",
        description:
          "We offer complimentary hardware diagnostics to identify potential infrastructure issues before they become critical. This proactive service is designed to improve operational continuity and reduce unexpected disruptions.",
      },
    ],
  },
  {
    title: "Web Designing",
    points: [
      {
        name: "Captivating Visual Identity",
        description:
          "We create a strong digital presence through compelling visuals, thoughtful color palettes, and brand-aligned imagery that captivate users and communicate your message effectively.",
      },
      {
        name: "Seamless User Experience",
        description:
          "With user-centric design at the core, we build intuitive navigation structures that ensure users find what they need effortlessly—enhancing satisfaction, trust, and engagement.",
      },
      {
        name: "Conversion-Driven Design",
        description:
          "Designs are not just meant to look good—they’re built to perform. Our approach strategically places CTAs and optimizes layouts to guide users toward actions that matter for your business growth.",
      },
    ],
  },
  {
    title: "Annual Maintenance Contract",
    points: [
      {
        name: "24/7 On-Demand Support",
        description:
          "Our AMC provides around-the-clock technical assistance to ensure minimal downtime. From urgent issues to routine fixes, we’re always available to keep your systems running at peak performance.",
      },
      {
        name: "Comprehensive Cabling Services",
        description:
          "We offer full-spectrum structured cabling solutions that establish a solid foundation for your IT infrastructure—supporting reliable, high-speed data transfer and seamless communication across your organization.",
      },
      {
        name: "Seamless Integration & Migration",
        description:
          "As your tech stack evolves, we handle complex system integrations and data migrations with minimal disruption—ensuring a smooth transition to updated platforms and environments.",
      },
    ],
  },
  {
    title: "Mobile App Development",
    points: [
      {
        name: "Cross-Platform Development",
        description:
          "Build once and deploy across both iOS and Android, significantly reducing time and cost without compromising performance or design quality.",
      },
      {
        name: "Native Performance",
        description:
          "React Native components are compiled into native code, delivering fast and fluid performance that's indistinguishable from apps built using native tools.",
      },
      {
        name: "Consistent UI & UX",
        description:
          "Create visually consistent interfaces that adapt seamlessly to various screen sizes and platforms, ensuring a smooth user experience.",
      },
      {
        name: "Faster Iteration with Hot Reloading",
        description:
          "Speed up the development process with live reloading and real-time preview of changes—ideal for rapid prototyping and debugging.",
      },
      {
        name: "Extensive Libraries & Community Support",
        description:
          "Tap into a vast ecosystem of libraries, plugins, and community tools to accelerate development and integrate advanced features with ease.",
      },
      {
        name: "Secure and Scalable",
        description:
          "Build apps that not only perform well but also meet enterprise-grade security and scalability standards, ready for growth.",
      },
    ],
  },
  // {
  //   title: "Digital Service Cloud Platform",
  //   points: [
  //     {
  //       name: "Remote Cloud Support",
  //       description:
  //         "We offer real-time remote support for cloud setup, configuration, and maintenance. Our experts ensure continuous uptime and fast issue resolution—minimizing disruptions to your operations.",
  //     },
  //     {
  //       name: "Scalable Cloud Solutions",
  //       description:
  //         "Get access to secure cloud storage, automated data backups, software hosting, and remote collaboration tools. We help businesses streamline workflows, reduce IT overheads, and enhance productivity.",
  //     },
  //     {
  //       name: "Cloud-Based Customer Service",
  //       description:
  //         "Our cloud-enabled customer service ensures rapid query resolution, resource optimization, and smooth user experiences—enhancing service delivery across digital touchpoints.",
  //     },
  //   ],
  // },
  {
    title: "Biometric Security Solutions",
    points: [
      {
        name: "Physiological Biometrics",
        description:
          "We implement a wide range of biometric technologies including fingerprint scanning, facial recognition, iris and retina analysis, palm vein mapping, and even scent and DNA-based verification. These solutions offer high accuracy and non-repudiation for secure identity management.",
      },
      {
        name: "Behavioral Biometrics",
        description:
          "Our behavioral systems capture unique patterns like voice recognition, typing rhythm, gesture dynamics, and mouse movement to authenticate users in real-time. These passive security layers are ideal for continuous authentication and fraud detection.",
      },
      {
        name: "Advanced Applications",
        description:
          "Biometric systems are widely deployed in sectors like border security, e-governance, health tech, and finance. We provide scalable solutions designed for both on-premise and cloud-based ecosystems—enhancing compliance and operational integrity.",
      },
    ],
  },
  {
    title: "CCTV Surveillance",
    points: [
      {
        name: "High-Definition Cameras",
        description:
          "Choose from IP or analog cameras including dome, bullet, and covert options. Our team ensures strategic placement and optimal resolution based on your area size, angles, and surveillance objectives.",
      },
      {
        name: "Monitoring Stations",
        description:
          "Monitors allow for live viewing and playback of footage. We customize the number of screens required based on your facility size and coverage goals, with easy scalability as needs grow.",
      },
      {
        name: "Cables & Routers",
        description:
          "Our systems support both wired and wireless setups. We configure the right networking infrastructure—including cables, routers, and switches—for seamless connectivity between all devices.",
      },
      {
        name: "Video Recorders",
        description:
          "We offer both DVR (Digital Video Recorders) and NVR (Network Video Recorders) to match your camera type. These devices ensure secure video processing, recording, and centralized management.",
      },
      {
        name: "Robust Storage Solutions",
        description:
          "We implement enterprise-grade storage systems built for continuous recording and long-term video retention. Our CCTV solutions are paired with high-performance drives that handle multi-feed video storage 24/7.",
      },
    ],
  },
  {
    title: "Workforce Solutions",
    points: [
      {
        name: "IT Talent Outsourcing",
        description:
          "We help US startups scale quickly by providing dedicated remote IT professionals, including Full Stack Developers, Frontend Developers, Backend Developers, QA Engineers, DevOps Engineers, UI/UX Designers, and AI specialists. Our flexible engagement models reduce hiring time and operational costs.",
      },
      {
        name: "IT Staffing & Recruitment",
        description:
          "We provide end-to-end IT staffing solutions across India, connecting businesses with highly skilled professionals for permanent, contractual, and project-based roles. Our rigorous screening process ensures every candidate aligns with your technical and business requirements.",
      },
      {
        name: "Dedicated Development Teams",
        description:
          "Build an extension of your in-house team with dedicated developers who work exclusively on your projects. We manage talent acquisition, onboarding, and ongoing support, allowing you to focus on product innovation and business growth.",
      },
      {
        name: "Contract & Project Staffing",
        description:
          "Whether you need short-term specialists or an entire project team, we provide experienced IT professionals for contract, contract-to-hire, and project-based engagements with rapid deployment and seamless integration.",
      },
      {
        name: "Talent Management & HR Support",
        description:
          "Beyond recruitment, we assist with onboarding, workforce management, performance coordination, and employee engagement, ensuring a smooth experience for both clients and professionals throughout the engagement lifecycle.",
      },
    ],
  },
];

export default function ServiceDetailsPopUp({ service, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-primary/50 flex items-center justify-center px-4">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl w-full relative overflow-y-auto max-h-[90vh]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-red-600 text-3xl focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="text-center mb-6">
          <img
            src={service.icon}
            alt={service.title}
            className="mx-auto mb-4 w-16 h-16"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
            {service.title}
          </h2>
        </div>

        <p className="text-gray-600 mt-3">{service.description}</p>

        {serviceDetails
          .filter((detail) => detail.title === service.title)
          .map((detail, index) => (
            <div key={index} className="mt-6 space-y-6">
              {detail.points.map((point, idx) => (
                <div key={idx} className="bg-amber/60 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {point.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
      </motion.div>
    </div>
  );
}
