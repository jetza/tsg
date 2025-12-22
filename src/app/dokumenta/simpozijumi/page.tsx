"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { simpozijumi } from "@/data/simpozijumi";
import { useState } from "react";

export default function SimpozijumiPage() {
  const { t } = useLocale();
  const [expandedSimpozijum, setExpandedSimpozijum] = useState<string | null>(
    null,
  );

  const toggleSimpozijum = (naziv: string) => {
    setExpandedSimpozijum(expandedSimpozijum === naziv ? null : naziv);
  };

  return (
    <div className="min-h-screen py-20 px-6 pr-6 md:pr-40 md:ml-40">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          {t.dokumenta.simpozijumi.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-primary-300 mb-12"
        >
          {t.dokumenta.simpozijumi.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {simpozijumi.map((simpozijum, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleSimpozijum(simpozijum.naziv)}
                className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-primary-500">
                    {simpozijum.naziv}
                  </h2>
                  <p className="text-gray-600 mt-1">{simpozijum.godina}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {simpozijum.radovi.length} radova
                  </p>
                </div>
                <svg
                  className={`w-6 h-6 text-primary-500 transform transition-transform ${
                    expandedSimpozijum === simpozijum.naziv ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedSimpozijum === simpozijum.naziv && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <ul className="space-y-3 mt-4">
                    {simpozijum.radovi.map((rad, radIndex) => (
                      <li
                        key={radIndex}
                        className="border-l-4 border-primary-400 pl-4 py-2 hover:bg-gray-50"
                      >
                        <a
                          href={rad.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-primary-500 hover:underline transition-colors"
                        >
                          {rad.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
