"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function KonsultantiPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          {t.konsultanti.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {/* TRANSPORT Section */}
          <section>
            <h2 className="text-2xl font-heading font-bold mb-6 text-primary-500 uppercase">
              {t.konsultanti.transportTitle}
            </h2>

            {/* Milan Vujanić Ph.D. */}
            <div className="mb-10">
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary-400 uppercase">
                {t.konsultanti.milanVujanicTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.konsultanti.milanVujanicBio}
              </p>
            </div>

            {/* Milorad Cvijan */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary-400 uppercase">
                {t.konsultanti.cvijanTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.konsultanti.cvijanBio}
              </p>
            </div>
          </section>

          {/* INFORMATION SYSTEMS Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-heading font-bold mb-6 text-primary-500 uppercase">
              {t.konsultanti.informationTitle}
            </h2>

            <div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary-400 uppercase">
                {t.konsultanti.pantelicTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.konsultanti.pantelicBio}
              </p>
            </div>
          </section>

          {/* MEDICINE Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-heading font-bold mb-6 text-primary-500 uppercase">
              {t.konsultanti.medicineTitle}
            </h2>

            <div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary-400 uppercase">
                {t.konsultanti.cosicTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.konsultanti.cosicBio}
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
