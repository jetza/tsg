"use client";

import { motion } from "framer-motion";

export default function SrbijaZakoniPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          Srbija - Zakoni
          <span className="block text-2xl mt-2 text-primary-300">Serbia - Laws</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Zakoni Republike Srbije
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ovde možete pronaći relevantne zakone Republike Srbije koji se odnose na saobraćaj, bezbednost i ekspertize.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Zakon o bezbednosti saobraćaja na putevima
                </h3>
                <p className="text-gray-600">
                  Osnovni zakon koji reguliše bezbednost saobraćaja u Republici Srbiji.
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Zakon o javnim putevima
                </h3>
                <p className="text-gray-600">
                  Reguliše izgradnju, održavanje i korišćenje javnih puteva.
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Zakon o prevoznim sredstvima
                </h3>
                <p className="text-gray-600">
                  Reguliše tehničku ispravnost i registraciju vozila.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              Laws of the Republic of Serbia
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Here you can find relevant laws of the Republic of Serbia related to traffic, safety and expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
