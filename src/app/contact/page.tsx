import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";
import PageBanner from "@/components/layout/PageBanner";

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <ContactInfo />
          <div className="flex flex-col md:flex-row md:items-stretch md:mx-4">
            {/* Contact Form */}
            <div className="w-full md:w-7/12">
              <div className="bg-white h-full p-8 md:rounded-l-md">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Contact Us
                </h3>
                <ContactForm />
              </div>
            </div>

            {/* Map */}
            <div className="w-full md:w-5/12 mt-8 md:mt-0">
              <div className="h-full">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
