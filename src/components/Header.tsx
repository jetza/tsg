"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { HiOutlineGlobeAlt, HiOutlineUser } from "react-icons/hi2";

export default function Header() {
  const { locale, switchLocale } = useLocale();

  return (
    <header className="hidden md:flex fixed top-0 right-0 z-40 items-center gap-2 p-4">
      {/* Language Switcher */}
      <button
        onClick={switchLocale}
        className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white hover:bg-primary-400 transition-all duration-300 text-sm font-light border-2 border-[#546e7a]"
        title={locale === "sr" ? "Switch to English" : "Prebaci na srpski"}
      >
        <HiOutlineGlobeAlt className="w-4 h-4" />
        {locale === "sr" ? "EN" : "SR"}
      </button>

      {/* Login Button */}
      <Link
        href="/login"
        className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white hover:bg-primary-400 transition-all duration-300 text-sm font-light border-2 border-[#546e7a]"
        title="Login"
      >
        <HiOutlineUser className="w-4 h-4" />
        Login
      </Link>
    </header>
  );
}
