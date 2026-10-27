import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";
import SectionHeader from "@/components/ui/SectionHeader";

const conversationTopics = [
  "IT & software development",
  "Workforce and recruitment",
  "Infrastructure & technical support",
  "Business and project enquiries",
];

export default function Contact() {
  return (
    <main className="overflow-hidden bg-slate-950 text-white">
      {/* Hero — follows Staffing/Hero.tsx */}
      <section className="relative overflow-hidden bg-slate-950">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                <Sparkles size={16} aria-hidden="true" />
                Contact Roxxon
              </span>

              <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Let’s Start a
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Conversation.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Tell us about your goals, your project, or the challenge you
                want to solve. We’ll help you explore the right next step for
                your business.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Send an Enquiry
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href="mailto:roxxoninfotech@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Email Us
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-cyan-400"
                    aria-hidden="true"
                  />
                  Direct communication
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-cyan-400"
                    aria-hidden="true"
                  />
                  Business-focused solutions
                </span>
              </div>
            </div>

            {/* Glass panel — mirrors the Staffing hero's right column */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-2xl"
              />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-2xl sm:p-9">
                <div className="mb-8">
                  <div className="inline-flex rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-cyan-400">
                    <MessageCircle size={28} aria-hidden="true" />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                    How can we help?
                  </h2>

                  <p className="mt-3 leading-7 text-slate-300">
                    Whether you have a clear brief or are still exploring
                    options, start by telling us what you need.
                  </p>
                </div>

                <div className="space-y-3">
                  {conversationTopics.map((topic, index) => (
                    <div
                      key={topic}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/50 p-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-sm font-semibold text-cyan-300">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-medium text-slate-200">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-5">
                  <p className="text-sm leading-7 text-slate-300">
                    Not sure where to begin? Send us a short description of your
                    requirements and we can take it from there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100/70 blur-[110px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Get in Touch"
            title="Choose How"
            highlight="You Reach Us."
            description="Have a question or a business enquiry? Use the contact method that works best for you."
          />

          <div className="mt-16">
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Enquiry form and location */}
      <section className="relative overflow-hidden border-t border-white/10 bg-slate-900/50 py-20 lg:py-28">
        <div className="absolute inset-0">
          <div
            aria-hidden="true"
            className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/[0.08] blur-[120px]"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Start a Conversation"
            title="Tell Us About"
            highlight="Your Requirements."
            description="Share a few details about what you’re looking for. Use the form below to send your enquiry to our team."
            tone="dark"
          />

          <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div
              id="contact-form"
              className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-9 lg:p-10"
            >
              <div className="mb-8 border-b border-white/10 pb-6">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Send an enquiry
                </span>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  We’re listening.
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Complete the fields below and tell us how we can help.
                </p>
              </div>

              <ContactForm />
            </div>

            <div className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
              <div className="p-6 sm:p-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-300">
                  <Sparkles size={14} aria-hidden="true" />
                  Find Roxxon
                </span>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  Our Location
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  Lokhandwala Complex, Kandivali East, Mumbai, Maharashtra
                  400101.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Lokhandwala+Complex%2C+Kandivali+East%2C+Mumbai+400101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  Get directions
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>

              <div className="min-h-[320px] flex-1 overflow-hidden border-y border-white/10">
                <Map />
              </div>

              <div className="flex items-start gap-3 p-6 sm:p-8">
                <CheckCircle2
                  className="mt-1 shrink-0 text-cyan-400"
                  size={19}
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-300">
                  Prefer to speak directly? Call{" "}
                  <a
                    href="tel:+918090452438"
                    className="font-semibold text-white underline decoration-cyan-500/60 underline-offset-4 hover:text-cyan-300"
                  >
                    +91 80904 52438
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:roxxoninfotech@gmail.com"
                    className="font-semibold text-white underline decoration-cyan-500/60 underline-offset-4 hover:text-cyan-300"
                  >
                    our team
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
