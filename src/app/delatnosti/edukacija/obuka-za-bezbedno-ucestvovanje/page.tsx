"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function ObukaBezbednoPage() {
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
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          {t.obukaBezbedno.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.obukaBezbedno.program}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.obukaBezbedno.learning}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            {t.obukaBezbedno.additional}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
