'use client'
import { useState } from 'react'

export default function KabelTV() {
  const [isCorporate, setIsCorporate] = useState(false)

  const packages = [
    {
      title: 'Analoq kabel TV',
      channels: 100,
      basePrice: 2,
    },
    {
      title: 'Rəqəmsal kabel TV',
      channels: 150,
      basePrice: 4,
    },
  ]

  return (
    <section className="text-center text-[#1f2937] px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Kabel TV</h2>

      <div className="flex items-center justify-center gap-4 mb-10">
        <span className="text-base sm:text-lg font-medium">Fərdi</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isCorporate}
            onChange={() => setIsCorporate(!isCorporate)}
          />
          <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-[#5d5fef] transition duration-300"></div>
          <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition duration-300"></div>
        </label>
        <span className="text-base sm:text-lg font-medium">Korporativ</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {packages.map((pkg, idx) => {
          const finalPrice = isCorporate ? pkg.basePrice + 2 : pkg.basePrice
          const buttonColor = isCorporate
            ? 'bg-[#1e3a8a] hover:bg-[#1b2f96]'
            : 'bg-[#2339b0] hover:bg-[#1e40af]'

          return (
            <div
              key={idx}
              className="bg-white rounded-xl cursor-pointer shadow-lg hover:scale-95 duration-300 hover:shadow-lg transition-all p-6 text-left"
            >
              <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
              <h4 className="text-5xl font-bold text-[#111827] mb-1">
                {pkg.channels}
                <span className="text-lg font-medium"> kanal</span>
              </h4>

              <ul className="text-sm text-[#374151] mb-6 space-y-1 mt-4">
                <li>✅ Birinci TV qəbuledicisi üçün – 10 manat</li>
                <li>✅ İkinci və hər sonrakı TV qəbuledicisi üçün – 2 manat</li>
              </ul>

              <button
                className={`${buttonColor} text-white cursor-pointer font-semibold w-full py-2 rounded-lg transition`}
              >
                Qoşul • {finalPrice} AZN / hər ay
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
