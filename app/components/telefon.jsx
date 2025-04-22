'use client'
import { useState } from 'react'

export default function Telefon() {
  const [isCorporate, setIsCorporate] = useState(false)

  const price = isCorporate ? 5.5 : 3.5

  return (
    <section className="text-center text-[#1f2937] px-4 sm:px-6 md:px-8">
      {/* Başlıq */}
      <h2 className="text-4xl font-extrabold mb-8">Telefonİya</h2>

      {/* Toggle Switch */}
      <div className="flex items-center justify-center gap-5 mb-10">
        <span className="text-lg font-medium">Fərdi</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isCorporate}
            onChange={() => setIsCorporate(!isCorporate)}
          />
          <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-[#5d5fef] transition duration-300"></div>
          <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transform peer-checked:translate-x-6 transition duration-300"></div>
        </label>
        <span className="text-lg font-medium">Korporativ</span>
      </div>

      {/* Kart */}
      <div className="max-w-sm mx-auto">
        <div className="bg-white cursor-pointer shadow-lg hover:scale-95 duration-300 flex justify-center items-center gap-6 flex-col rounded-xl hover:shadow-lg transition-all p-10 text-center">
          <div className="text-6xl font-bold text-[#111827] mb-4">
            {price}
            <span className="text-2xl font-medium ml-1">AZN</span>
          </div>
          <button className="bg-[#5d5fef] cursor-pointer hover:bg-[#4c4fd4] text-white font-semibold text-lg w-full py-3 rounded-lg transition">
            Qoşul • {price} AZN / hər ay
          </button>
        </div>
      </div>
    </section>
  )
}
