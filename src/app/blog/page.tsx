"use client";

import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
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
            Blog sadržaj će biti dostupan uskoro.
          </p>
          <p className="text-gray-500">
            Ovaj deo sajta će biti implementiran nakon migracije na cPanel hosting sa MySQL bazom.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
