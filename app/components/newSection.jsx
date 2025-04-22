
const newsData = [
    {
      id: 1,
      title: '«Ultel» MMC müştərilərinin nəzərinə',
      description:
        'Fiber optik internetdən yararlanan abunəçilərin internet sürəti 100 Mb/s-ə qədər artırılacaq',
      date: '12 İYUL 2024',
      image1x: '/x1.svg',
    },
    {
      id: 2,
      title: 'ADSL internet tarifləri yenilənir',
      description:
        '“Ultel” MMC-nin müəyyən ADSL internet tariflərinin sürətləri yenilənir',
      date: '1 İYUN 2024',
      image1x: '/x2.svg',
    },
  ];
  
  const NewsSection = () => {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">Xəbərlər</h2>
          <a
            href="#"
            className="text-indigo-600 hover:underline text-sm font-medium"
          >
            Daha çox →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white cursor-pointer rounded-lg shadow hover:shadow-xl hover:scale-95 transition-all duration-400"
            >
              <div className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden rounded-t-lg">
                <img
                  src={item.image1x}
                  srcSet={item.image1x}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <span className="text-xs text-gray-500">📅 {item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default NewsSection;
  