"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { zakoni } from "@/data/zakoni";

export default function SrbijaZakoniPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          {t.dokumenta.srbija.zakoni.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Važeći zakoni */}
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              {t.dokumenta.srbija.zakoni.activeTitle}
            </h2>

            <div className="space-y-3">
              {zakoni.map((zakon, index) => (
                <Link
                  key={index}
                  href={`/pdfs/srbija/zakoni/${zakon.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 hover:bg-primary-50 transition-colors rounded group"
                >
                  <svg
                    className="w-6 h-6 text-red-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                  <span className="text-gray-700 group-hover:text-primary-500">
                    {zakon.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
