import { ArrowUpRight, Globe, Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    label: "Office Address",
    value: "Lokhandwala Complex, Kandivali East, Mumbai - 400101",
    action: "Get directions",
    href: "https://www.google.com/maps/search/?api=1&query=Lokhandwala+Complex%2C+Kandivali+East%2C+Mumbai+400101",
    icon: MapPin,
    external: true,
  },
  {
    label: "Phone",
    value: "+91 8090452438",
    action: "Call our team",
    href: "tel:+918090452438",
    icon: Phone,
    external: false,
  },
  {
    label: "Email",
    value: "roxxoninfotech@gmail.com",
    action: "Send an email",
    href: "mailto:roxxoninfotech@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "Website",
    value: "roxxoninfo.com",
    action: "Explore Roxxon",
    href: "/",
    icon: Globe,
    external: false,
  },
];

export default function ContactInfo() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {contactItems.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.label}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/200 sm:p-7"
          >
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white-500/[0.06] blur-2xl transition group-hover:bg-white-500/10"
            />

            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 transition group-hover:bg-cyan-500/15">
              <Icon size={27} aria-hidden="true" />
            </div>

            <h3 className="relative mt-7 text-xl font-bold text-slate-950">
              {item.label}
            </h3>

            <p className="relative mt-3 min-h-[3.5rem] break-words text-sm leading-7 text-slate-500">
              {item.value}
            </p>

            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="relative mt-6 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {item.action}
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </article>
        );
      })}
    </div>
  );
}
