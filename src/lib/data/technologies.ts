import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDjango,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiAmazonwebservices,
  SiOpenai,
} from "react-icons/si";

export interface Technology {
  id: string;
  name: string;
  icon: React.ComponentType<{
    className?: string;
    size?: number;
    style?: React.CSSProperties;
  }>;
  color: string;
}

export const technologies = {
  react: {
    id: "react",
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },

  next: {
    id: "next",
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },

  node: {
    id: "node",
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
  },

  nest: {
    id: "nest",
    name: "NestJS",
    icon: SiNestjs,
    color: "#E0234E",
  },

  typescript: {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },

  javascript: {
    id: "javascript",
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  python: {
    id: "python",
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },

  django: {
    id: "django",
    name: "Django",
    icon: SiDjango,
    color: "#092E20",
  },

  tailwind: {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
  },

  mongodb: {
    id: "mongodb",
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },

  postgres: {
    id: "postgres",
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },

  mysql: {
    id: "mysql",
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },

  docker: {
    id: "docker",
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },

  aws: {
    id: "aws",
    name: "AWS",
    icon: SiAmazonwebservices,
    color: "#FF9900",
  },

  openai: {
    id: "openai",
    name: "OpenAI",
    icon: SiOpenai,
    color: "#10A37F",
  },
} satisfies Record<string, Technology>;
