"use client";

import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppWidget = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="918090452438"
      accountName="Roxxon Infotech"
      darkMode
      avatar="/images/logo.png"
    />
  );
};

export default WhatsAppWidget;
