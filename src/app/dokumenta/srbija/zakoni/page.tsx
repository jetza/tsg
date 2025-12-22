"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { zakoni } from "@/data/zakoni";

export default function SrbijaZakoniPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6 pr-6 md:pr-40">
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
                <div
                  key={index}
                  className="border-l-4 border-primary-400 pl-4 py-2"
                >
                  <Link
                    href={`/pdfs/srbija/zakoni/${zakon.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary-500 transition-colors"
                  >
                    {zakon.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
