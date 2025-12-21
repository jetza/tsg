"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";

export default function CrnaGoraPutovanjeAutomobilomPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          {t.dokumenta.crnaGora.putovanje.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <div className="border-l-4 border-primary-400 pl-4">
              <a
                href={t.dokumenta.crnaGora.putovanje.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-primary-500 hover:text-primary-700 hover:underline transition-colors"
              >
                {t.dokumenta.crnaGora.putovanje.title}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
