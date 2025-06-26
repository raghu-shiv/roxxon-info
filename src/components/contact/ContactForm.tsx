"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Try again.");
        console.error(result.error);
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["name", "email"].map((field) => (
          <div key={field}>
            <label className="block font-semibold text-sm text-[#323edd] mb-1 capitalize">
              {field === "email" ? "EMAIL ADDRESS" : "FULL NAME"}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field === "email" ? "Email" : "Name"}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#323edd]"
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      {["subject", "message"].map((field, idx) => (
        <div className="mt-4" key={`${field}${idx}`}>
          <label className="block font-semibold text-sm text-[#323edd] mb-1 capitalize">
            {field.toUpperCase()}
          </label>
          {field === "message" ? (
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#323edd]"
              value={formData.message}
              onChange={handleChange}
            />
          ) : (
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#323edd]"
              value={formData.subject}
              onChange={handleChange}
            />
          )}
        </div>
      ))}

      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-[#323edd] text-white py-3 px-4 rounded hover:bg-[#323dee] transition-colors duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
