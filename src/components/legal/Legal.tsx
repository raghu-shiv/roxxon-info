type Section = {
  heading: string;
  content: string;
};

type LegalContent = {
  title: string;
  sections: Section[];
};

const Legal = (props: LegalContent) => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {props && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-6">{props.title}</h2>
            {props.sections.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  {section.heading}
                </h3>
                <p className="text-gray-700">{section.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Legal;
