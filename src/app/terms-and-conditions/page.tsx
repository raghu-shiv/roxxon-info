import PageBanner from "@/components/layout/PageBanner";
import Legal from "@/components/legal/Legal";

const termsData = {
  title: "Terms & Conditions",
  sections: [
    {
      heading: "Introduction and Scope",
      content:
        "These Terms and Conditions govern your use of the Roxxon Infotech website (roxxoninfo.com). By accessing the site, you agree to these terms. Roxxon Infotech (referred to as “we” or “Company”) provides IT services and related information through this site. These terms apply to all users and visitors. We reserve the right to update the terms at any time without notice; continued use of the site after changes constitutes acceptance.",
    },
    {
      heading: "User Eligibility",
      content:
        "To use this site, you must be at least 18 years old and have the legal capacity to enter into a contract. If you are using the site on behalf of a company or other legal entity, you represent and warrant that you have authority to bind that entity to these terms. By using the site, you agree not to engage in any illegal or unauthorized activities. You must comply with all applicable laws (e.g. intellectual property, export control, anti-spam) when using the site.",
    },
    {
      heading: "Content Accuracy Disclaimer",
      content:
        "The content on this website (including text, graphics, videos, and links) is provided “as-is” for general information only. While we strive for accuracy, we do not warrant that the site content is accurate, complete, or up to date. No warranty or guarantee is made regarding content accuracy or reliability. As with many websites, we disclaim all liability for any errors or omissions in the content indiafilings.com. Users rely on the information at their own risk. We are not liable for any direct or indirect damages arising from use of the site.",
    },
    {
      heading: "Intellectual Property Notice",
      content:
        "All content on this site (including logos, text, images, and code) is the intellectual property of Roxxon Infotech or our licensors. This content is protected under Indian and international copyright and trademark laws. For example, as in typical website terms, any content created by the Company is “protected by intellectual property laws of India” indiafilings.com. Unauthorized use of site materials is prohibited. You are granted a limited license to view and download content for personal, non-commercial use only. Except as expressly permitted, you may not copy, reproduce, distribute, or create derivative works from this content without our written permission indiafilings.com. All trademarks, service marks, and logos are property of Roxxon Infotech or their respective owners.",
    },
    {
      heading: "Limitation of Liability",
      content:
        "TO THE FULLEST EXTENT PERMITTED BY LAW, ROXXON INFOTECH DISCLAIMS ALL LIABILITY FOR DAMAGES ARISING OUT OF YOUR USE OF THE SITE. In no event will Roxxon Infotech be liable for any direct, indirect, incidental or consequential damages arising from or related to the site. Some jurisdictions may not allow certain limitations, so this may not apply to you in full.",
    },
    {
      heading: "Governing Law and Jurisdiction",
      content:
        "These terms are governed by the laws of India. Any dispute arising under or relating to these terms or the use of this site shall be subject to the exclusive jurisdiction of the courts located in Mumbai, India. You agree that venue in these courts is proper, and you irrevocably consent to their jurisdiction.",
    },
    {
      heading: "Contact Details",
      content:
        "If you have any questions about these Terms and Conditions, you may contact Roxxon Infotech at the address below. Our contact information (address, phone, email) is the same as provided above roxxoninfo.com.",
    },
    {
      heading: "Intellectual Property Summary",
      content:
        "All content and materials on this site are © 2025 Roxxon Infotech. All Rights Reserved roxxoninfo.com. Any rights not expressly granted in these terms are reserved by Roxxon Infotech.",
    },
    {
      heading: "Entire Agreement",
      content:
        "These Terms constitute the entire agreement between you and Roxxon Infotech regarding the use of this website. They supersede any prior agreements. If any provision is found unenforceable, the remaining provisions will continue in force.",
    },
    {
      heading: "Changes to Terms",
      content:
        "We may modify these Terms at any time. By using the site after changes are posted, you agree to the revised terms.",
    },
    {
      heading: "Acknowledgment",
      content:
        "By using this website, you acknowledge that you have read these Terms and agree to be bound by them.",
    },
    {
      heading: "Sources",
      content:
        "Information about standard privacy practices and requirements (such as data collected by contact forms and user rights) is supported by sources on industry norms gravityforms.com cafeobj.org. Roxxon Infotech’s contact and company details are as published on the Contact Us page roxxoninfo.com/contact. These documents aim to comply with applicable Indian data protection and IT laws and to be clear and professional for an Indian IT services company.",
    },
  ],
};

const TermsAndConditions = () => {
  return (
    <>
      <PageBanner title="Terms & Conditions" />
      <Legal {...termsData} />
    </>
  );
};

export default TermsAndConditions;
