"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#14254F] text-white px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8 md:space-y-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <Link href="/services" className="text-cyan-400 font-semibold hover:underline transition-all">
            XİDMƏTLƏR
          </Link>
          <Link href="/blogs" className="text-cyan-400 font-semibold hover:underline transition-all">
            XƏBƏRLƏR
          </Link>
          <Link href="/contact" className="text-cyan-400 font-semibold hover:underline transition-all">
            ƏLAQƏ
          </Link>
        </div>

        <div className="text-center text-sm text-gray-400 space-y-1">
          <p>BÜTÜN HÜQUQLAR QORUNUR © 2025.</p>
          <p>
            <Link href="/privacy" className="hover:underline">Gizlilik siyasəti</Link> ·{' '}
            <Link href="/terms" className="hover:underline">Qaydalar və şərtlər</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
