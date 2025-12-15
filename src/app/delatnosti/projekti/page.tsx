"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function ProjektiPage() {
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
          {t.projekti.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-white p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.projekti.intro}
            </p>
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-500">
              {t.delatnosti.intro}
            </h2>
            <ul className="space-y-3 text-gray-700">
              {t.delatnosti.services.map((service: string, index: number) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="bg-primary-50 p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t.delatnosti.mainActivity}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t.delatnosti.standards}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.delatnosti.consulting}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
