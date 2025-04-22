const branches = [
    {
      title: "Yasamal filialı",
      description:
        'Yasamal r-nu, 559-cu məhəllə, Bəxtiyar Vahabzadə küçəsi bina A (Ədliyyə Nazirliyinin arxasında olan küçə, "Nana" restoranı ilə üzbəüz)',
    },
    {
      title: "Sabit Orucov filialı",
      description:
        'Sabit Orucov 13 ("Perinatal" klinikanın arxası, "Bravo" və "SPAR" marketlərin yanı)',
    },
    {
      title: "Masazır filialı",
      description:
        'Abşeron r-nu, Masazır kəndi, Əliağa Vahid küç., bina 180 ("Araz" marketin yanı, "Bravo" ilə üzbəüz bina)',
    },
  ];
  
  const ContactSection = () => {
    return (
      <section className="bg-gray-50 py-16 px-4">
        <div className="text-center mb-12">
          <span className="text-2xl tracking-wide text-indigo-600 font-semibold uppercase">
            BİZİMLƏ ƏLAQƏ
          </span>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white cursor-pointer hover:shadow-lg hover:scale-95 transition-all duration-300 shadow rounded-lg p-6 text-center">
            <div className="text-indigo-500 text-2xl mb-2">📞</div>
            <h3 className="text-lg font-semibold mb-1">Bizə zəng edin</h3>
            <p className="text-indigo-600">
              <a href="tel:+994124901616">(+99412) 490 16 16</a> /{" "}
              <a href="tel:+994124905051">(+99412) 490 50 51</a>
            </p>
          </div>
          <div className="bg-white cursor-pointer hover:shadow-lg hover:scale-95 transition-all duration-300 shadow rounded-lg p-6 text-center">
            <div className="text-indigo-500 text-2xl mb-2">📧</div>
            <h3 className="text-lg font-semibold mb-1">Bizə yazın</h3>
            <p className="text-indigo-600">
              <a href="mailto:info@ultel.az">info@ultel.az</a>
            </p>
          </div>
        </div>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ünvanımız</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {branches.map((branch, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow p-5 border-l-4 border-indigo-500
                hover:translate-x-2 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  🏢 {branch.title}
                </h3>
                <p className="text-sm text-gray-600">{branch.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center items-center py-6">
            <div className="w-full max-w-md h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48631.19173086727!2d49.839971!3d40.3767296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307c4cb1f91d21%3A0xf1ec5cd5282d3acb!2zQmFrxLEgYnVsdmFyxLE!5e0!3m2!1saz!2saz!4v1745070912720!5m2!1saz!2saz"
                className="w-full h-full rounded-lg shadow-md"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  