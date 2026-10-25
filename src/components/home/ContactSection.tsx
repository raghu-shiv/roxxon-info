"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactInfoCard from "@/components/ui/ContactInfoCard";
import FloatingInfoCard from "@/components/ui/FloatingInfoCard";
import ConsultationForm from "./ConsultationForm";

import {
  CONTACT_ITEMS,
  CONTACT_TRUST,
  FLOATING_CARDS,
} from "@/lib/data/contact";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section className="relative isolate overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-cyan-100/80 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-20 -z-10 h-80 w-80 rounded-full bg-blue-100/70 blur-[110px]"
      />

      <SectionHeader
        badge="Let's Talk"
        title="Let's Build Something"
        highlight="Great Together"
        description="Whether you're planning a new product, scaling your engineering team or modernizing your technology, we'd love to hear about your project."
      />

      <div className="relative mt-14 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <motion.div
          variants={reduceMotion ? undefined : fadeUp}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="min-w-0"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800">
            <Sparkles size={16} aria-hidden="true" />
            Project Consultation
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Tell us what
            <span className="block bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 bg-clip-text text-transparent">
              you're building.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Every successful project starts with a conversation. Share your
            vision, and we'll help you determine the right technology,
            architecture and delivery strategy.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-semibold text-slate-900">
              {CONTACT_TRUST.rating}
            </span>
            <span className="text-sm text-slate-600">{CONTACT_TRUST.text}</span>
          </div>

          <div className="mt-8 space-y-4">
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

        <div className="relative min-w-0">
          {!reduceMotion &&
            FLOATING_CARDS.map((card) => (
              <FloatingInfoCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
                duration={card.duration}
                className={card.className}
              />
            ))}

          <ConsultationForm />
        </div>
      </div>
    </Section>
  );
}
