import {
  BrainCircuit,
  Cloud,
  Code2,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

export const WHATSAPP_NUMBER = "918090452438";

export interface ServiceOption {
  value: string;
  title: string;
  description: string;
  duration: string;
  icon: LucideIcon;
}

export interface ContactInfoItem {
  title: string;
  value: string;
  icon: LucideIcon;
}

export interface FloatingCardItem {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  duration: number;
  className: string;
}

export interface BudgetOption {
  label: string;
  value: string;
}

export const SERVICES: ServiceOption[] = [
  {
    value: "Software Development",
    title: "Software Development",
    description:
      "Custom web applications, SaaS platforms and enterprise software.",
    duration: "30–45 min Discovery Call",
    icon: Code2,
  },
  {
    value: "AI Solutions",
    title: "AI Solutions",
    description:
      "Generative AI, automation, chatbots and intelligent workflows.",
    duration: "45–60 min Strategy Session",
    icon: BrainCircuit,
  },
  {
    value: "Cloud Engineering",
    title: "Cloud Engineering",
    description: "Cloud migration, DevOps, infrastructure and scalability.",
    duration: "45–60 min Architecture Review",
    icon: Cloud,
  },
  {
    value: "Workforce Solutions",
    title: "Workforce Solutions",
    description: "IT staffing, dedicated teams and technical recruitment.",
    duration: "20–30 min Hiring Consultation",
    icon: Users,
  },
];

export const CONTACT_ITEMS: ContactInfoItem[] = [
  {
    title: "Email",
    value: "hello@roxxoninfo.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+91 80904 52438",
    icon: Phone,
  },
  {
    title: "Location",
    value: "India • Serving Clients Worldwide",
    icon: MapPin,
  },
];

export const FLOATING_CARDS: FloatingCardItem[] = [
  {
    title: "Free Consultation",
    subtitle: "No commitment required",
    icon: Rocket,
    duration: 5,
    className: "-left-10 top-8 hidden xl:block",
  },
  {
    title: "AI-Driven Delivery",
    subtitle: "Accelerated development",
    icon: BrainCircuit,
    duration: 6,
    className: "-right-10 bottom-12 hidden xl:block",
  },
  {
    title: "Trusted Engineering",
    subtitle: "Modern technology stack",
    icon: ShieldCheck,
    duration: 7,
    className: "left-12 -bottom-8 hidden 2xl:block",
  },
];

export const BUDGET_OPTIONS: BudgetOption[] = [
  {
    label: "Estimated Budget (Optional)",
    value: "",
  },
  {
    label: "Under ₹1 Lakh",
    value: "Under ₹1 Lakh",
  },
  {
    label: "₹1L – ₹5L",
    value: "₹1L – ₹5L",
  },
  {
    label: "₹5L – ₹20L",
    value: "₹5L – ₹20L",
  },
  {
    label: "₹20L+",
    value: "₹20L+",
  },
  {
    label: "Let's Discuss",
    value: "Let's Discuss",
  },
];

export const CONTACT_BADGE = {
  icon: Sparkles,
  text: "Project Consultation",
};

export const CONTACT_TRUST = {
  rating: "★★★★★",
  text: "Trusted by startups & growing businesses",
};
