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
                <div className="border-l-4 border-primary-400 pl-4 py-2">
                  <a
                    href="/pdfs/Metod-vrednovanja-postojeceg-stanja-bezbednosti-saobracaja-kod-prevoznika.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary-500 hover:underline transition-colors"
                  >
                    {t.projekti.pdfTitle}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
