"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Search,
  UserCheck,
  CalendarCheck2,
  BadgeCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Understand Your Hiring Needs",
    description:
      "We work with your hiring managers to understand the role, technology stack, team culture, and hiring goals.",
  },
  {
    icon: Search,
    title: "AI-Powered Talent Sourcing",
    description:
      "Our recruiters leverage LinkedIn Recruiter, AI-assisted sourcing, Boolean search, referrals, and our internal talent network.",
  },
  {
    icon: UserCheck,
    title: "Technical & HR Screening",
    description:
      "Every candidate is evaluated for technical expertise, communication skills, and cultural fit before submission.",
  },
  {
    icon: CalendarCheck2,
    title: "Interview Coordination",
    description:
      "We coordinate interviews, gather feedback, manage candidate engagement, and keep the hiring process moving.",
  },
  {
    icon: BadgeCheck,
    title: "Offer & Hiring",
    description:
      "From offer negotiation to joining formalities, we help ensure a smooth and positive hiring experience.",
  },
  {
    icon: Rocket,
    title: "Onboarding Support",
    description:
      "Our relationship doesn't end at offer acceptance—we stay involved through onboarding and post-joining support.",
  },
];

export default function HiringProcess() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Hiring Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            A Simple, Transparent Hiring Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We've refined our recruitment process to help startups and
            enterprises hire faster while maintaining exceptional candidate
            quality.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-0 right-0 top-12 h-0.5 bg-slate-200" />

          <div className="grid grid-cols-6 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-xl">
                    <Icon size={34} />
                  </div>

                  <div className="mt-8">
                    <div className="mb-2 text-sm font-semibold text-cyan-600">
                      Step {index + 1}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="mt-16 space-y-8 lg:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                  <Icon size={28} />
                </div>

                <div>
                  <div className="text-sm font-semibold text-cyan-600">
                    Step {index + 1}
                  </div>

                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
