"use client";

export default function Map() {
  return (
    <div className="w-full h-full md:rounded-r-md overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.285346474699!2d72.85100551490373!3d19.197653837019303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7777cce4c91%3A0x5a37d9e8cfa83748!2sLokhandwala%20Complex%2C%20Kandivali%20East%2C%20Mumbai%2C%20Maharashtra%20400101!5e0!3m2!1sen!2sin!4v1718798800000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
