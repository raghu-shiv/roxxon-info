"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import Glow from "@/components/ui/Glow";
import ContactInfoCard from "@/components/ui/ContactInfoCard";
import FloatingInfoCard from "@/components/ui/FloatingInfoCard";

import ConsultationForm from "./ConsultationForm";

import {
  CONTACT_ITEMS,
  CONTACT_TRUST,
  FLOATING_CARDS,
} from "@/lib/data/contact";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ContactSection() {
  return (
    <Section className="relative overflow-hidden bg-white">
      {/* Background Effects */}

      <Glow className="left-0 top-0 h-96 w-96 bg-cyan-400/15" />

      <Glow className="right-0 bottom-0 h-96 w-96 bg-blue-500/15" />

      {/* Section Header */}

      <SectionHeader
        badge="Let's Talk"
        title="Let's Build Something"
        highlight="Great Together"
        description="Whether you're planning a new product, scaling your engineering team or modernizing your technology, we'd love to hear about your project."
      />

      <div className="relative mt-20 grid items-start gap-20 lg:grid-cols-2">
        {/* LEFT */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700">
            <Sparkles size={16} />
            Project Consultation
          </div>

          <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900">
            Tell us what
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              you're building.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Every successful project starts with a conversation. Share your
            vision, and we'll help you determine the right technology,
            architecture and delivery strategy.
          </p>

          {/* Trust */}

          <div className="mt-10 flex items-center gap-3">
            <span className="text-xl text-amber-400">
              {CONTACT_TRUST.rating}
            </span>

            <span className="text-slate-500">{CONTACT_TRUST.text}</span>
          </div>

          {/* Contact Cards */}

          <div className="mt-12 space-y-5">
            {CONTACT_ITEMS.map((item) => (
              <ContactInfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                value={item.value}
              />
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}

        <div className="relative">
          {/* Floating Cards */}

          {FLOATING_CARDS.map((card) => (
            <FloatingInfoCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
              duration={card.duration}
              className={card.className}
            />
          ))}

          {/* Form */}

          <ConsultationForm />
        </div>
      </div>
    </Section>
  );
}
