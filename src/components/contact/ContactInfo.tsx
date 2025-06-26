export default function ContactInfo() {
  const items = [
    {
      icon: "fa-map-marker",
      label: "Address",
      value: "Lokhandwala Cmx, Kandivali (E), Mumbai - 400101",
    },
    {
      icon: "fa-phone",
      label: "Phone",
      value: "+91 8090452438",
      href: "tel:+918090452438",
    },
    {
      icon: "fa-paper-plane",
      label: "Email",
      value: "roxxoninfotech@gmail.com",
      href: "mailto:roxxoninfotech@gmail.com",
    },
    { icon: "fa-globe", label: "Website", value: "roxxoninfo.com", href: "/" },
  ];

  return (
    <div className="wrapper px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {items.map((i, idx) => (
          <div
            key={idx}
            className="flex flex-col w-full items-center justify-center text-center p-4 bg-white shadow-sm rounded"
          >
            <div className="icon w-24 h-24 flex items-center justify-center mb-2 text-3xl text-white bg-[#323eed] rounded-full">
              <span className={`fa ${i.icon}`}></span>
            </div>
            <div className="text">
              {i.href ? (
                <p>
                  <span>{i.label}:</span>{" "}
                  <a href={i.href} className="text-[#323eed] hover:underline">
                    {i.value}
                  </a>
                </p>
              ) : (
                <p className="text-gray-400">
                  <span className="text-black">{i.label}:</span> {i.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
