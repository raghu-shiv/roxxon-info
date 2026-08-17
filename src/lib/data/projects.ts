import { Technology } from "./technologies";
import { technologies } from "./technologies";

export interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  technologies: Technology[];
  status: "Live" | "Private";
  images: string[];
  url?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Volney Inc.",
    category: "Corporate Website",
    description:
      "Modern corporate website focused on showcasing business capabilities and services.",
    technologies: [
      technologies.react,
      technologies.next,
      technologies.typescript,
      technologies.tailwind,
    ],
    status: "Live",
    url: "https://www.volney.in/",
    images: [
      "/images/volney_1.png",
      "/images/volney_2.png",
      "/images/volney_3.png",
      "/images/volney_4.png",
    ],
  },
  {
    id: 2,
    name: "Paras LED",
    category: "Business Website",
    description:
      "Business website for LED lighting products and industrial solutions.",
    technologies: [
      technologies.next,
      technologies.react,
      technologies.tailwind,
    ],
    status: "Private",
    url: "",
    images: [
      "/images/paras_1.png",
      "/images/paras_2.png",
      "/images/paras_3.png",
      "/images/paras_4.png",
    ],
  },
  {
    id: 3,
    name: "YT Scripts",
    category: "AI SaaS",
    description:
      "AI-powered platform for generating YouTube scripts using modern LLM workflows.",
    technologies: [
      technologies.next,
      technologies.nest,
      technologies.openai,
      technologies.postgres,
    ],
    status: "Live",
    featured: true,
    url: "https://www.yt-scripts.online/",
    images: ["/images/yt_scripts_1.png"],
  },
  {
    id: 4,
    name: "Jarvis AI",
    category: "AI Assistant",
    description:
      "Enterprise AI assistant integrating automation and conversational workflows.",
    technologies: [technologies.react, technologies.node, technologies.openai],
    status: "Private",
    url: "",
    images: ["/images/jarvis_ai_1.png"],
  },
  {
    id: 5,
    name: "ERP POS",
    category: "Enterprise Software",
    description:
      "Integrated ERP and POS platform for inventory, billing and business operations.",
    technologies: [technologies.react, technologies.node, technologies.mysql],
    status: "Private",
    url: "",
    images: ["/images/erp_pos_1.png"],
  },
];
