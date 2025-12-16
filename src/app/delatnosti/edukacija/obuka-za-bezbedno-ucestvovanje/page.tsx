"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function ObukaBezbednoPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
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
