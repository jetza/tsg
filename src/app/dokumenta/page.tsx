"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

export default function DokumentaPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          {t.dokumenta.mainPage.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <Link href="/dokumenta/zakonska-regulativa">
            <div className="bg-white p-8 hover: transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-4 text-primary-500">
                    {t.dokumenta.mainPage.regulativaTitle}
                  </h2>
                  <p className="text-lg text-gray-700">
                    {t.dokumenta.mainPage.regulativaDesc}
                  </p>
                </div>
                <svg
                  className="w-8 h-8 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>

          <div className="bg-primary-50 p-8">
            <div className="flex items-start">
              <svg
                className="w-8 h-8 text-primary-400 mr-4 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <div>
                <h3 className="text-xl font-heading font-bold mb-2 text-primary-500">
                  {t.dokumenta.mainPage.noteTitle}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t.dokumenta.mainPage.noteDesc}
                </p>
                <Link
                  href="/registrovani-korisnici"
                  className="inline-block px-6 py-3 bg-primary-500 text-white font-semibold hover:bg-primary-300 transition-all border-2 border-[#546e7a]"
                >
                  {t.dokumenta.mainPage.registerButton}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
