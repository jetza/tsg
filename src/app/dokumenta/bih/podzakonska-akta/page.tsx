"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function BiHPodzakonskaAktaPage() {
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
          {t.dokumenta.bih.podzakonska.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-primary-300 mb-12"
        >
          {t.dokumenta.bih.podzakonska.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Podzakonska akta Bosne i Hercegovine
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pravilnici i uredbe koje detaljnije regulišu oblast saobraćaja u
              Bosni i Hercegovini.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Pravilnik o saobraćajnoj signalizaciji
                </h3>
                <p className="text-gray-600">
                  Način postavljanja i značenje saobraćajne signalizacije.
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Pravilnik o tehničkim uslovima vozila u saobraćaju
                </h3>
                <p className="text-gray-600">
                  Tehnički uslovi koje vozila moraju ispunjavati.
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Pravilnik o medicinskim pregledima vozača
                </h3>
                <p className="text-gray-600">
                  Uslovi zdravstvene sposobnosti za upravljanje motornim
                  vozilima.
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Pravilnik o homologaciji vozila
                </h3>
                <p className="text-gray-600">
                  Postupak homologacije motornih i priključnih vozila.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              Bylaws of Bosnia and Herzegovina
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Regulations and decrees that regulate traffic in Bosnia and
              Herzegovina in more detail.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
