import { Resend } from "resend";
import { EmailTemplate } from "@/components/contact/EmailTemplate";
import { contactFormSchema } from "@/lib/validation/contactFormSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Validate form data using Zod
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    const { error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["roxxoninfotech@gmail.com"],
      subject: subject,
      react: await EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json({ error: "Failed to send email." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
