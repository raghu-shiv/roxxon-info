"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDjango,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiOpenai,
  SiLangchain,
  SiTailwindcss,
  SiGraphql,
  SiFirebase,
} from "react-icons/si";

const row1 = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "NestJS", icon: SiNestjs },
];

const row2 = [
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Redis", icon: SiRedis },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "AWS", icon: SiAmazonwebservices },
];

const row3 = [
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "OpenAI", icon: SiOpenai },
  { name: "LangChain", icon: SiLangchain },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Firebase", icon: SiFirebase },
];

interface MarqueeProps {
  items: typeof row1;
  duration: number;
  reverse?: boolean;
}

function Marquee({ items, duration, reverse = false }: MarqueeProps) {
  const data = [...items, ...items];

  return (
    <div className="marquee-container relative overflow-hidden">
      <div className="absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-slate-950 to-transparent" />

      <div className="absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-slate-950 to-transparent" />

      <div
        style={
          {
            "--duration": `${duration}s`,
          } as React.CSSProperties
        }
        className={`

flex
w-max
gap-5

${reverse ? "marquee-right" : "marquee-left"}

`}
      >
        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={`${item.name}-${index}`}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                group
                flex
                items-center
                gap-4
                rounded-full
                border
                border-white/10
                bg-white/5
                px-6
                py-4
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/50
                hover:bg-cyan-500/10
                hover:shadow-xl
                hover:shadow-cyan-500/10
              "
            >
              <Icon
                size={22}
                className="
                  text-slate-400
                  transition-colors
                  duration-300
                  group-hover:text-cyan-400
                "
              />

              <span className="whitespace-nowrap font-medium text-slate-200">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function TechnologyRibbon() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
          Technology Stack
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
          Modern Technologies.
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Future Ready Engineering.
          </span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          We leverage modern programming languages, cloud platforms, AI
          frameworks and engineering tools to build scalable digital products.
        </p>
      </div>

      <div className="relative mt-20 space-y-8">
        <Marquee items={row1} duration={28} />

        <Marquee items={row2} duration={36} reverse />

        <Marquee items={row3} duration={44} />
      </div>
    </section>
  );
}
