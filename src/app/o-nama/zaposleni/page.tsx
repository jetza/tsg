"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function ZaposleniPage() {
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
          {t.zaposleni.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {/* Intro */}
          <section>
            <p className="text-xl text-gray-700 leading-relaxed">
              {t.zaposleni.intro}
            </p>
          </section>

          {/* Director Tijana Ivanišević */}
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500 uppercase">
              {t.zaposleni.directorTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.zaposleni.directorBio}
            </p>
          </section>

          {/* Deputy Director Milan M. Vujanić */}
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500 uppercase">
              {t.zaposleni.deputyDirectorTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.zaposleni.deputyDirectorBio}
            </p>
          </section>

          {/* Business Secretary Branka Kovač */}
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500 uppercase">
              {t.zaposleni.secretaryTitle}
            </h2>
          </section>

          {/* Expert Consultants */}
          <section className="mt-12">
            <h3 className="text-xl font-heading font-semibold mb-4 text-primary-400">
              {t.zaposleni.consultantsTitle}
            </h3>
            <ul className="space-y-2 text-gray-700">
              {t.zaposleni.consultantsList.map(
                (consultant: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{consultant}</span>
                  </li>
                )
              )}
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
