"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  SearchCheck,
  UserCheck,
  ScanSearch,
  CheckCircle2,
} from "lucide-react";

const pipeline = [
  {
    icon: ScanSearch,
    title: "AI Resume Matching",
    progress: 95,
  },
  {
    icon: Sparkles,
    title: "Intelligent Boolean Search",
    progress: 100,
  },
  {
    icon: SearchCheck,
    title: "Passive Candidate Discovery",
    progress: 92,
  },
  {
    icon: BrainCircuit,
    title: "Skills Intelligence",
    progress: 96,
  },
  {
    icon: UserCheck,
    title: "Recruiter Validation",
    progress: 100,
  },
];

export default function RecruitmentIntelligence() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Recruitment Intelligence
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
              AI Accelerates Hiring.
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Recruiters Make the Decisions.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              At Roxxon, artificial intelligence enhances every stage of
              sourcing and talent discovery. Our experienced recruiters remain
              responsible for evaluating technical capability, communication,
              culture fit, and hiring recommendations.
            </p>

            <div className="mt-12 space-y-8">
              {pipeline.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <div className="mb-3 flex justify-between">
                      <div className="flex items-center gap-3">
                        <Icon size={20} className="text-cyan-400" />

                        <span className="font-medium text-white">
                          {item.title}
                        </span>
                      </div>

                      <span className="text-cyan-400">{item.progress}%</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${item.progress}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400">Candidate Intelligence</p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Senior React Developer
                  </h3>
                </div>

                <div className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">
                  Recommended
                </div>
              </div>

              <div className="mt-10 space-y-6">
                {[
                  ["React / Next.js", "98%"],
                  ["TypeScript", "95%"],
                  ["Node.js", "92%"],
                  ["Communication", "96%"],
                  ["Culture Fit", "94%"],
                ].map(([skill, score]) => (
                  <div key={skill}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-slate-300">{skill}</span>

                      <span className="text-cyan-400">{score}</span>
                    </div>

                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        style={{
                          width: score,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400" size={22} />

                  <span className="font-semibold text-white">
                    Recruiter Recommendation
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  Strong technical profile with excellent communication skills.
                  Recommended for immediate client interview.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
