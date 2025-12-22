"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { makedonijaZakoni } from "@/data/makedonija-zakoni";

export default function MakedonijaPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          {t.dokumenta.makedonija.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-primary-300 mb-12"
        >
          {t.dokumenta.makedonija.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-white p-8">
            <div className="space-y-4">
              {makedonijaZakoni.map((zakon, index) => (
                <div key={index} className="border-l-4 border-primary-400 pl-4">
                  <a
                    href={zakon.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary-500 hover:underline transition-colors"
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
