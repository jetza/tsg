"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";

export default function KazneEvropaPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          {t.dokumenta.kazneEvropa.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-primary-300 mb-12"
        >
          {t.dokumenta.kazneEvropa.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-white p-8">
            <div className="border-l-4 border-primary-400 pl-4">
              <a
                href="/pdfs/Kazne-za-pojedine-saobracajne-prekrsaje-u-zemljama-Evrope.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-500 hover:underline transition-colors"
              >
                Kazne za pojedine saobraćajne prekršaje u zemljama Evrope
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
