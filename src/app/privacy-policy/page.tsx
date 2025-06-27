import PageBanner from "@/components/layout/PageBanner";
import Legal from "@/components/legal/Legal";

const privacyData = {
  title: "Privacy Policy",
  sections: [
    {
      heading: "Data We Collect",
      content:
        "Roxxon Infotech may collect personal information that you voluntarily submit via our website’s contact or consultation forms (such as name, email address, phone number, and any message content). Like many websites, we may also automatically collect technical information such as your IP address, browser type, and pages visited for system security and spam prevention cafeobj.org gravityforms.com. For example, if you leave a comment or inquiry on the site, the information you provide (name, email, etc.) and your IP address and user-agent string are recorded to help with spam detection cafeobj.org. We do not require user registration or accounts, but if you do create a profile or interact with our site, we store any personal data you provide to fulfill your requests.",
    },
    {
      heading: "Use of Data",
      content:
        "We use collected data solely to respond to your inquiries, provide the services or consultation you request, and improve our offerings. For instance, contact form submissions are used to reply to your questions or quotes. We do not sell or rent your personal information. We may use your email address to send you updates or newsletters only if you have opted in. As required by law, our Privacy Policy discloses what personal data is collected, how it is used, and with whom it is shared gravityforms.com.",
    },
    {
      heading: "Data Sharing and Third Parties",
      content:
        "We do not share personal data with unrelated third parties for marketing. We may share data with trusted service providers (such as hosting companies or email/CRM vendors) only as needed to deliver our services. For example, visitor comments (if any) may be checked through an automated spam filter service cafeobj.org. We will not otherwise disclose your personal information except when required by law (such as to comply with a court order).",
    },
    {
      heading: "Cookies and Analytics",
      content:
        "The Roxxon Infotech website may use “cookies” and similar technologies. For example, if you leave a comment, the site may offer to save your name and email in a cookie for convenience (so you don’t have to re-enter them) cafeobj.org. If the site has a login feature, temporary cookies may be set to maintain your session (discarded on logout or browser close) cafeobj.org. We may also use standard web analytics (such as Google Analytics) to understand site usage; such analytics use cookies to collect aggregate data about visits (page views, duration, etc.). These cookies do not identify you personally.",
    },
    {
      heading: "Data Security and Storage",
      content:
        "We store your personal data on secure servers and take reasonable precautions to protect it (e.g. encryption, access controls). However, no internet transmission or storage is completely secure. By using the site, you acknowledge these risks. Any data breach or unauthorized use of data will be handled in accordance with applicable law.",
    },
    {
      heading: "Your Rights",
      content:
        "You have the right to access, correct, or delete your personal data held by us. If you have submitted data through our forms or any account you may have created, you may request an exported copy of your personal information or ask us to erase it at any time cafeobj.org. We will comply with valid requests to the extent required by Indian law. You may also withdraw consent for marketing communications at any time. Please note that we may retain certain information as required by law or for legitimate business purposes even after a deletion request (for example, to comply with tax or accounting rules).",
    },
    {
      heading: "Contact for Data Concerns",
      content:
        "If you have any questions about our data practices or this Privacy Policy, you may contact us at the details below. Roxxon Infotech is located at Lokhnadwala Complex, Kandivali (E), Mumbai – 400101, India, phone +91 8090452438, email roxxoninfotech@gmail.com roxxoninfo.com. We will make reasonable efforts to address any privacy-related concerns.",
    },
  ],
};

const PrivacyPolicy = () => {
  return (
    <>
      <PageBanner title="Privacy Policy" />
      <Legal {...privacyData} />
    </>
  );
};

export default PrivacyPolicy;
