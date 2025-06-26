"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const counters = [
  { number: 30, label: "Project Complete" },
  { number: 20, label: "Active Clients" },
  { number: 25, label: "Business Partners" },
  { number: 5, label: "Glorious Years" },
];

const ConsultCounter = () => {
  const [count, setCount] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger counter only when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const interval = setInterval(() => {
      setCount((prev) =>
        prev.map((val, index) => (val < counters[index].number ? val + 1 : val))
      );
    }, 50);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="sm:px-8 md:px-12 lg:px-20 xl:px-44">
      <div className="flex flex-col md:flex-row bg-primary">
        <div className="w-full md:w-1/2">
          <div className="h-full w-full">
            <Image
              src="/images/about.jpg"
              alt="about"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-primary text-white p-8 md:p-16">
          <div className="pb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Consult us here in{" "}
              <span className="text-amber">Roxxon Infotech</span>
            </h2>
            <p className="text-white/80">
              Our mission is to give clients the best service
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            {counters.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {count[idx]}
                </div>
                <div className="text-sm sm:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultCounter;
