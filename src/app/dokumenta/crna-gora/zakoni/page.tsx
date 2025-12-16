"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function CrnaGoraZakoniPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          {t.dokumenta.crnaGora.zakoni.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-primary-300 mb-12"
        >
          {t.dokumenta.crnaGora.zakoni.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              {t.dokumenta.crnaGora.zakoni.activeTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.dokumenta.crnaGora.zakoni.lawsIntro}
            </p>

            <div className="space-y-6 mt-6">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  {t.dokumenta.crnaGora.zakoni.lawTitle}
                </h3>
                <p className="text-gray-600">
                  {t.dokumenta.crnaGora.zakoni.lawDesc}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              {t.dokumenta.crnaGora.zakoni.englishTitle}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.dokumenta.crnaGora.zakoni.englishIntro}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
