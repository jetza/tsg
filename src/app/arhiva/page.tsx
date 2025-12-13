"use client";

import { motion } from "framer-motion";

export default function ArhivaPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          Arhiva / Archive
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Arhiva blog postova i članaka.
          </p>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 italic">
              Lista arhiviranih postova će biti prikazana ovde...
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
