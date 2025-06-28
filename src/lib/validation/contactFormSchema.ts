import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const whatsAppContactSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().optional(),
  service: z.string().min(5),
  message: z.string().min(10, "Message should be more descriptive"),
});

export type WhatsAppContactData = z.infer<typeof whatsAppContactSchema>;
