"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function BlogPage() {
  const { locale, switchLocale } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
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
          Blog
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-sm text-center"
        >
          <p className="text-xl text-gray-600 mb-4">
            {locale === "sr"
              ? "Blog sadržaj će biti dostupan uskoro."
              : "Blog content coming soon."}
          </p>
          <p className="text-gray-500">
            {locale === "sr" ? "U pripremi!" : "In preparation!"}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
