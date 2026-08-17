"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cloud, Code2, Users, CheckCircle2 } from "lucide-react";

export interface ServiceOption {
  value: string;
  title: string;
  description: string;
  duration: string;
}

interface Props {
  value: string;
  options: ServiceOption[];
  onChange: (value: string) => void;
}

const icons = {
  "Software Development": Code2,
  "AI Solutions": BrainCircuit,
  "Cloud Engineering": Cloud,
  "Workforce Solutions": Users,
};

export default function ServiceSelector({ value, options, onChange }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {options.map((service) => {
        if (!service.value) return null;

        const Icon = icons[service.value as keyof typeof icons];

        const active = value === service.value;

        return (
          <motion.button
            key={service.value}
            type="button"
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => onChange(service.value)}
            className={`
              relative
              overflow-hidden
              rounded-2xl
              border
              p-5
              text-left
              transition-all
              duration-300

              ${
                active
                  ? `
                  border-cyan-500
                  bg-gradient-to-br
                  from-cyan-500/10
                  to-blue-500/10
                  shadow-lg
                  shadow-cyan-500/20
                `
                  : `
                  border-slate-200
                  hover:border-cyan-300
                  bg-white
                `
              }
            `}
          >
            {/* Selected */}

            {active && (
              <CheckCircle2
                size={22}
                className="absolute right-4 top-4 text-cyan-500"
              />
            )}

            {/* Icon */}

            <div
              className={`
                inline-flex
                rounded-xl
                p-3

                ${
                  active
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-100 text-slate-700"
                }
              `}
            >
              <Icon size={22} />
            </div>

            {/* Title */}

            <h4 className="mt-5 font-bold text-slate-900">{service.title}</h4>

            {/* Description */}

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {service.description}
            </p>

            {/* Duration */}

            <div className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
              {service.duration}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
