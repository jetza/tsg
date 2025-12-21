"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { bihZakoni } from "@/data/bih-zakoni";

export default function BiHZakoniPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          {t.dokumenta.bih.zakoni.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-primary-300 mb-12"
        >
          {t.dokumenta.bih.zakoni.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              {t.dokumenta.bih.zakoni.activeTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.dokumenta.bih.zakoni.intro}
            </p>

            <div className="space-y-4">
              {bihZakoni.map((zakon) => (
                <div
                  key={zakon.name}
                  className="border-l-4 border-primary-400 pl-4 py-2"
                >
                  <a
                    href={zakon.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-primary-500 hover:text-primary-700 hover:underline transition-colors"
                  >
                    {zakon.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
