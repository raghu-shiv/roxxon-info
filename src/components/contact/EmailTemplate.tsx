import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  service: string;
  budget?: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  service,
  budget,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
    <h2>New Contact Form Submission</h2>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Service:</strong> {service}
    </p>
    <p>
      <strong>Budget:</strong> {budget}
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <p>{message}</p>
  </div>
);
