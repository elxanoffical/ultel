'use client'

export default function ADSL() {
  const packages = [
    { speed: 5, price: 15 },
    { speed: 6, price: 20 },
    { speed: 8, price: 25 },
    { speed: 10, price: 30 },
    { speed: 12, price: 40 },
    { speed: 14, price: 60 },
  ]

  return (
    <section className="text-center text-[#1f2937] px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">İnternet/ADSL</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 text-left"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-[#111827]">
              {pkg.speed}
              <span className="text-base font-medium">/mb</span>
            </h3>
            <ul className="text-base text-[#374151] mb-6 space-y-1">
              <li className="flex items-center gap-2">✅ ADSL bağlantısı</li>
              <li className="flex items-center gap-2">✅ Wi-Fi ruter PULSUZ</li>
            </ul>
            <button className="bg-[#5d5fef] hover:bg-[#4c4fd4] text-white w-full py-2 rounded-lg font-semibold transition">
              Qoşul • {pkg.price} AZN / hər ay
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
