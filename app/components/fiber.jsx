'use client'
import { useState } from 'react'

export default function Fiber() {
  const [isCorporate, setIsCorporate] = useState(false)

  const packages = [
    { speed: 100, price: 25 },
    { speed: 150, price: 30 },
    { speed: 250, price: 36 },
  ]

  return (
    <section className="text-center text-[#1f2937] px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">İnternet/Fiber</h2>

      <div className="flex items-center justify-center gap-4 mb-10">
        <span className="text-base sm:text-lg font-medium">Fərdi</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isCorporate}
            onChange={() => setIsCorporate(!isCorporate)}
          />
          <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-[#5d5fef] transition duration-300 peer-focus:outline-none"></div>
          <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition duration-300"></div>
        </label>
        <span className="text-base sm:text-lg font-medium">Korporativ</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((item, index) => {
          const finalPrice = isCorporate ? item.price + 4 : item.price
          const buttonColor = isCorporate
            ? 'bg-[#3c3edf] hover:bg-[#2f32c7]'
            : 'bg-[#5d5fef] hover:bg-[#4c4fd4]'

          return (
            <div
              key={index}
              className="bg-white rounded-xl cursor-pointer shadow-lg hover:scale-95 transition-all duration-300 hover:shadow-xl p-6 text-left"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-2">
                {item.speed}
                <span className="text-base font-medium">/mb</span>
              </h3>
              <ul className="text-base text-[#374151] mb-6 space-y-1">
                <li className="flex items-center gap-2">✅ Fiber Optik</li>
                <li className="flex items-center gap-2">✅ Wi-Fi ruter PULSUZ</li>
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
