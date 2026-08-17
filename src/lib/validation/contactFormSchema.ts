import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(3, "Please enter your full name."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .or(z.literal("")),

  service: z.string().min(1, "Please select a service."),

  budget: z.string().optional(),

  message: z
    .string()
    .trim()
    .min(20, "Please describe your project in at least 20 characters.")
    .max(2000, "Project description cannot exceed 2000 characters."),
});

export type ConsultationFormData = z.infer<typeof contactFormSchema>;
