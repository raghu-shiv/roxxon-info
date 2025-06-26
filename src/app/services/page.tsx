"use client";

import PageBanner from "@/components/layout/PageBanner";
import ServicesSection from "@/components/services/ServicesSection";
// import { useState } from "react";

export default function Services() {
  // const [selected, setSelected] = useState<ServiceItem | null>(null);

  return (
    <>
      <PageBanner title="Services" />
      <ServicesSection />
    </>
  );
}
