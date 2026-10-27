"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status =
  | { type: "idle"; message: "" }
  | { type: "loading"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputClass =
  "mt-2 block w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 transition focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60";

const labelClass = "block text-sm font-semibold text-slate-200";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<Status>({
    type: "idle",
    message: "",
  });

  const isSubmitting = status.type === "loading";

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.type === "error") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    setStatus({
      type: "loading",
      message: "Sending your message…",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          typeof result?.error === "string"
            ? result.error
            : "We couldn't send your message. Please try again.",
        );
      }

      setFormData(initialFormData);
      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. Thank you for contacting Roxxon Infotech.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again or email us directly.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            required
            maxLength={120}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email address <span className="text-cyan-400">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            required
            maxLength={254}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className={labelClass}>
          Subject <span className="text-cyan-400">*</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="What would you like to discuss?"
          value={formData.subject}
          onChange={handleChange}
          className={inputClass}
          required
          maxLength={200}
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Your message <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="Tell us about your project, requirements, or questions…"
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} min-h-40 resize-y`}
          required
          maxLength={5000}
          disabled={isSubmitting}
        />
        <p className="mt-2 text-right text-xs text-slate-500">
          {formData.message.length}/5000 characters
        </p>
      </div>

      {status.type !== "idle" && (
        <div
          role={status.type === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
            status.type === "success"
              ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-200"
              : status.type === "error"
                ? "border-red-500/20 bg-red-500/10 text-red-200"
                : "border-cyan-500/20 bg-cyan-500/10 text-cyan-200"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2
              size={19}
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            />
          ) : status.type === "error" ? (
            <AlertCircle
              size={19}
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            />
          ) : (
            <LoaderCircle
              size={19}
              className="mt-0.5 shrink-0 animate-spin"
              aria-hidden="true"
            />
          )}

          <p>{status.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle
              size={18}
              className="animate-spin"
              aria-hidden="true"
            />
            Sending message…
          </>
        ) : (
          <>
            Send Message
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
              aria-hidden="true"
            />
          </>
        )}
      </button>

      <p className="text-xs leading-6 text-slate-500">
        Please don’t include passwords or other sensitive information in your
        message.
      </p>
    </form>
  );
}
