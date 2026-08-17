import React from "react";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/contact/EmailTemplate";
import { contactFormSchema } from "@/lib/validation/contactFormSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");

      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const body = await request.json();

    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.error.flatten().fieldErrors,
        },
        {
          status: 400,
        },
      );
    }

    const { name, email, service, budget, message } = validation.data;

    const response = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.CONTACT_EMAIL!],

      subject: `🚀 New Consultation Request • ${service}`,

      react: React.createElement(EmailTemplate, {
        name,
        email,
        service,
        budget,
        message,
      }),
    });

    if (response.error) {
      console.error(response.error);

      return NextResponse.json(
        {
          success: false,
          error: "Unable to send email.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error.",
      },
      {
        status: 500,
      },
    );
  }
}
