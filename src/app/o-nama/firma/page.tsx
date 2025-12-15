"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function FirmaPage() {
  const { t, locale, switchLocale } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Language Switcher */}
        <div className="flex justify-end mb-6">
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
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          {t.firma.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Traffic Safety Group (TSG) */}
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500">
              {t.firma.tsgTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t.firma.tsgIntro1}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.firma.tsgIntro2}
            </p>
          </section>

          {/* TRAFFIC ACCIDENT EXPERTISE */}
          <section className="mt-12">
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500 uppercase">
              {t.firma.expertiseTitle}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{t.firma.expertiseP1}</p>
              <p>{t.firma.expertiseP2}</p>
              <p>{t.firma.expertiseP3}</p>
              <p>{t.firma.expertiseP4}</p>
            </div>
          </section>

          {/* SYMPOSIUMS */}
          <section className="mt-12">
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500 uppercase">
              {t.firma.symposiumsTitle}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{t.firma.symposiumsP1}</p>
              <p>{t.firma.symposiumsP2}</p>
              <p>{t.firma.symposiumsP3}</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
