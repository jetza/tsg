"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function ProjektiPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          {t.projekti.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.projekti.intro}
          </p>

          <section className="mt-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              {t.projekti.passengerTitle}
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.projekti.passengerIntro}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                {t.projekti.statistics1}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                {t.projekti.global}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                {t.projekti.developed}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                {t.projekti.statistics2}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                {t.projekti.consequences}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                {t.projekti.children}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                {t.projekti.implementation}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                {t.projekti.support}
              </p>

              {/* PDF Link */}
              <div className="mt-8">
                <a
                  href="/pdfs/Metod-vrednovanja-postojeceg-stanja-bezbednosti-saobracaja-kod-prevoznika.pdf"
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
                  {t.projekti.pdfTitle}
                </a>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
