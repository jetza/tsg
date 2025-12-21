"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";

export default function EUPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          {t.dokumenta.eu.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.dokumenta.eu.intro}
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  {t.dokumenta.eu.principlesTitle}
                </h3>
                <p className="text-gray-600 mb-2">
                  {t.dokumenta.eu.principlesIntro}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {t.dokumenta.eu.principles.map(
                    (principle: string, index: number) => (
                      <li key={index}>{principle}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  {t.dokumenta.eu.licenseTitle}
                </h3>
                <p className="text-gray-600">{t.dokumenta.eu.licenseDesc}</p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  {t.dokumenta.eu.inspectionTitle}
                </h3>
                <p className="text-gray-600">{t.dokumenta.eu.inspectionDesc}</p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  {t.dokumenta.eu.penaltiesTitle}
                </h3>
                <p className="text-gray-600">{t.dokumenta.eu.penaltiesDesc}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
