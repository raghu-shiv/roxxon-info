import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import CoreServices from "@/components/home/CoreServices";
import TechnologyRibbon from "@/components/home/TechnologyRibbon";
import WhyRoxxon from "@/components/home/WhyRoxxon";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ContactSection from "@/components/home/ContactSection";
import ConsultationForm from "@/components/home/ConsultationForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <CoreServices />
      <div className="-mt-12 relative z-10">
        <TechnologyRibbon />
      </div>
      <WhyRoxxon />
      <FeaturedProjects />
      <ContactSection />
      <ConsultationForm />
    </main>
  );
}
