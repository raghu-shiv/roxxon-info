"use client";

import {
  WhatsAppContactData,
  whatsAppContactSchema,
} from "@/lib/validation/contactFormSchema";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const whatsAppNumber = "918090452438";

const WhatsAppContactForm = () => {
  const [formData, setFormData] = useState<WhatsAppContactData>({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof WhatsAppContactData, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = whatsAppContactSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors: Partial<
        Record<keyof WhatsAppContactData, string>
      > = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof WhatsAppContactData;
        formattedErrors[field] = err.message;
      });
      setErrors(formattedErrors);
      return;
    }

    const { name, email, service, message } = formData;

    const url = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
      `New Free Consultation Query:

Name: ${name}
Email: ${email}
Service Interested: ${service}
Message: ${message}`
    )}`;

    window.open(url, "_blank");
  };

  const inputClasses =
    "w-full px-4 py-3 text-black rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary appearance-none";

  // Framer Motion scroll parallax
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, -300], [0, 500]);

  return (
    <motion.section
      id="whatsapp-contact"
      className="relative h-auto lg:h-screen bg-[url('/images/bg_2.jpg')] bg-fixed bg-center bg-cover"
      style={{
        backgroundAttachment: "fixed",
        backgroundPosition: "center 1%",
      }}
    >
      <motion.div className="absolute inset-0 bg-[#060a24]/60" style={{ y }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-44 py-20 lg:py-24">
        <div className="max-w-2xl text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Don&apos;t hesitate to contact us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
              {["name", "email"].map((field) => (
                <div key={field} className="w-full md:w-1/2">
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={field === "email" ? "Email" : "Your Name"}
                    required
                    value={formData[field as keyof WhatsAppContactData]}
                    onChange={handleChange}
                    className={`${inputClasses} ${errors[field as keyof WhatsAppContactData] && "border-red-500"}`}
                  />
                  {errors[field as keyof WhatsAppContactData] && (
                    <p className="text-sm text-red-300 mt-1">
                      {errors[field as keyof WhatsAppContactData]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`${inputClasses} ${formData.service === "" ? "text-gray-500" : "text-black"}`}
                required
              >
                <option value="" disabled hidden>
                  Select Service
                </option>
                {[
                  "Web Design/Development",
                  "IT Infrastructure Management",
                  "Annual Maintenance Contract",
                  "Biometric Security Solutions",
                  "CCTV Surveillance",
                ].map((s, i) => (
                  <option key={i} className="text-black">
                    {s}
                  </option>
                ))}
              </select>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600 pointer-events-none">
                <i className="fa fa-chevron-down" />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                rows={6}
                placeholder="Message"
                value={formData.message}
                required
                onChange={handleChange}
                className={`${inputClasses} ${errors.message && "border-red-500"}`}
              />
              {errors.message && (
                <p className="text-sm text-red-300 mt-1">{errors.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold p-4 rounded hover:bg-secondary transition"
              >
                Send message via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default WhatsAppContactForm;
