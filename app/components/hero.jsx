'use client'
import Image from 'next/image'
import Link from 'next/link'
import heroImage from '@/public/hero.svg' 

export default function Hero() {
  return (
    <section className="bg-[#f6f8fb] py-16">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between">
        
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1b2a4e] mb-6 leading-tight">
            Sürətli və limitsiz <br /> internetə bir addımda qoşulun!
          </h1>
          <p className="text-[#4a5b75] text-base lg:text-lg mb-8">
            Ultel fərdi şəxslər və bizneslər üçün yüksək sürətli və keyfiyyətli xidmət təqdim edən aparıcı regional internet provayderlərdən biridir. Ən son texnologiyaları tətbiq etməklə Ultel abonentlərinə etibarlı qoşulma təmin edir.
          </p>
          <Link
            href="/elaqe"
            className="inline-block bg-[#5d5fef] text-white text-sm font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#4e50d8] transition duration-300"
          >
            BİZİMLƏ ƏLAQƏ
          </Link>
        </div>

        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <Image
            src={heroImage}
            alt="WiFi illustration"
            className="w-full max-w-md lg:max-w-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
}
