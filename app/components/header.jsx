"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="WiFi illustration"
            href="/"
            className="text-xl font-bold text-indigo-600"
          ></Image>
        </Link>
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav
          className={`absolute top-full left-0 w-full bg-white border-t lg:border-none lg:static lg:w-auto lg:flex items-center space-y-2 lg:space-y-0 lg:space-x-6 px-4 py-2 lg:py-0 transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <Link
            href="/services"
            className="block py-2 text-gray-700 hover:text-indigo-600"
          >
            Xidmətlər
          </Link>
          <Link
            href="/blogs"
            className="block py-2 text-gray-700 hover:text-indigo-600"
          >
            Xəbərlər
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-gray-700 hover:text-indigo-600"
          >
            Əlaqə
          </Link>
          <Link
            href="/terms"
            className="block py-2 text-gray-700 hover:text-indigo-600"
          >
            Qaydalar və Şərtlər
          </Link>
          <Link
            href="/privacy"
            className="block py-2 text-gray-700 hover:text-indigo-600"
          >
            Gizlilik Siyasəti
          </Link>
        </nav>
      </div>
    </header>
  );
}
