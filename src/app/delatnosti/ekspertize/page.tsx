"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function EkspertizePage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          {t.ekspertize.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.ekspertize.intro}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            {t.ekspertize.definition}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            {t.ekspertize.importance1}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            {t.ekspertize.types1}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            {t.ekspertize.types2}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed italic bg-primary-50 p-4 rounded">
            {t.ekspertize.law}
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500">
              {t.ekspertize.examplesTitle}
            </h2>
            <ul className="space-y-3">
              {t.ekspertize.examples.map(
                (example: { title: string; file: string }, index: number) => (
                  <li key={index}>
                    <a
                      href={`/pdfs/${example.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-lg text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <svg
                        className="w-6 h-6 mr-2 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                      </svg>
                      {example.title}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
