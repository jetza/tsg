"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function EdukacijaPage() {
  const { t, locale, switchLocale } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-end mb-4">
          <button
            onClick={switchLocale}
            className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors"
          >
            {locale === "sr" ? "EN" : "SR"}
          </button>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          {t.edukacija.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.edukacija.intro}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.edukacija.tsgActivity}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.edukacija.closedSystems}
            </p>

            <div className="bg-primary-50 p-6 mb-6 mt-8">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
                {t.edukacija.programTitle}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {t.edukacija.programItems.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-primary-500 text-white p-8">
            <h3 className="text-2xl font-heading font-bold mb-4">
              {t.edukacija.ctaTitle}
            </h3>
            <p className="text-lg mb-6">{t.edukacija.ctaText}</p>
            <a
              href="/kontakt"
              className="inline-block px-8 py-3 bg-white text-primary-500 font-semibold hover:bg-primary-50 transition-all"
            >
              {t.edukacija.ctaButton}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
