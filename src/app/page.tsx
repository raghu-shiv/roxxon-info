import ConsultCounter from "@/components/home/ConsultCounter";
import WhatsAppContactForm from "@/components/home/WhatsAppContactForm";
import ExclusiveServices from "@/components/home/ExclusiveServices";
import GrowBusiness from "@/components/home/GrowBusiness";
import Hero from "@/components/home/Hero";
import StrategicWork from "@/components/home/StrategicWork";
// import Testimonials from "@/components/home/Testimonials";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <GrowBusiness />
      <ConsultCounter />
      <ExclusiveServices />
      <StrategicWork />
      {/* <Testimonials /> */}
      <Projects />
      <WhatsAppContactForm />
    </main>
  );
}
