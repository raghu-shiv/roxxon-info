"use client";

import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, Clock3 } from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import StepIndicator from "@/components/ui/StepIndicator";
import ServiceSelector from "@/components/ui/ServiceSelector";

import { SERVICES, BUDGET_OPTIONS, WHATSAPP_NUMBER } from "@/lib/data/contact";

import {
  contactFormSchema,
  ConsultationFormData,
} from "@/lib/validation/contactFormSchema";

export default function ConsultationForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  /* -------------------------------------------------- */
  /* Watch Fields */
  /* -------------------------------------------------- */

  const service = watch("service");

  const message = watch("message");

  /* -------------------------------------------------- */
  /* Current Step */
  /* -------------------------------------------------- */

  const currentStep = useMemo(() => {
    if (!service) return 1;

    if (!message || message.trim().length < 20) return 2;

    return 3;
  }, [service, message]);

  /* -------------------------------------------------- */
  /* Consultation */
  /* -------------------------------------------------- */

  const consultation = useMemo(() => {
    return SERVICES.find((item) => item.value === service);
  }, [service]);

  /* -------------------------------------------------- */
  /* Submit */
  /* -------------------------------------------------- */

  const onSubmit = async (data: ConsultationFormData) => {
    const whatsappMessage = [
      "🚀 New Project Enquiry",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email || "Not Provided"}`,
      `Service: ${data.service}`,
      `Budget: ${data.budget || "Not Specified"}`,
      "",
      "Project Details",
      "────────────────",
      data.message,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        whatsappMessage,
      )}`,
      "_blank",
    );
  };

  return (
    <GlassCard className="relative overflow-hidden p-8 lg:p-10">
      {/* Background Glow */}

      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-100 blur-[120px]" />

      <div className="relative">
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Project Consultation
            </h3>

            <p className="mt-2 text-slate-500">Tell us about your project.</p>
          </div>

          <Clock3 size={28} className="text-cyan-500" />
        </div>

        {/* Progress */}

        <StepIndicator currentStep={currentStep} />

        {/* Form */}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
          {/* Name + Email */}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <Input placeholder="Your Name" {...register("name")} />

              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email Address (Optional)"
                {...register("email")}
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Service */}

          <div>
            <label className="mb-4 block text-sm font-semibold text-slate-700">
              Choose a Service
            </label>

            <Controller
              name="service"
              control={control}
              render={({ field }) => (
                <ServiceSelector
                  value={field.value}
                  options={SERVICES}
                  onChange={field.onChange}
                />
              )}
            />

            {errors.service && (
              <p className="mt-3 text-sm text-red-500">
                {errors.service.message}
              </p>
            )}
          </div>

          {/* Consultation Card */}

          {consultation && (
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                rounded-2xl
                border
                border-cyan-200
                bg-cyan-50
                p-5
              "
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-cyan-500/10 p-3">
                  <Clock3 className="text-cyan-600" size={22} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Recommended Consultation
                  </p>

                  <p className="text-slate-600">{consultation.duration}</p>
                </div>
              </div>
            </motion.div>
          )}
          {/* Budget */}

          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Estimated Budget
            </label>

            <Select {...register("budget")}>
              {BUDGET_OPTIONS.map((budget) => (
                <option key={budget.value || "default"} value={budget.value}>
                  {budget.label}
                </option>
              ))}
            </Select>
          </div>

          {/* Message */}

          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="text-sm font-semibold text-slate-700">
                Project Details
              </label>

              <span className="text-xs text-slate-400">
                {message?.length ?? 0} / 2000
              </span>
            </div>

            <Textarea
              rows={7}
              placeholder="Tell us about your project, goals, timeline, team size or hiring requirements..."
              {...register("message")}
            />

            {errors.message && (
              <p className="mt-2 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Footer */}

          <div className="flex flex-col gap-5 border-t border-slate-200 pt-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-medium text-slate-800">
                Typical response time
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Within one business day
              </p>
            </div>

            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="
                min-w-[220px]
                justify-center
                shadow-lg
                shadow-cyan-500/20
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="mr-2 h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      opacity=".25"
                    />

                    <path
                      d="M22 12a10 10 0 00-10-10"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Start Your Project
                  <ArrowRight size={18} className="ml-2" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </GlassCard>
  );
}
