"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function EkspertizePage() {
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
          {t.ekspertize.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t.ekspertize.intro}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t.ekspertize.definition}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.ekspertize.importance1}
            </p>
          </div>

          <div className="bg-primary-50 p-8">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              {t.ekspertize.servicesTitle}
            </h3>
            <ul className="space-y-3 text-gray-700 text-lg">
              {t.ekspertize.services.map((service: string, index: number) => (
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
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
