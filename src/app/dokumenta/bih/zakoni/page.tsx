"use client";

import { motion } from "framer-motion";

export default function BiHZakoniPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          BiH - Zakoni
          <span className="block text-2xl mt-2 text-primary-300">Bosnia and Herzegovina - Laws</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Zakoni Bosne i Hercegovine
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Relevantni zakoni Bosne i Hercegovine koji se odnose na saobraćaj i bezbednost na putevima.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Zakon o osnovama bezbjednosti saobraćaja na putevima u BiH
                </h3>
                <p className="text-gray-600">
                  Osnovni zakon koji reguliše bezbednost saobraćaja u Bosni i Hercegovini.
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Zakon o javnim putevima
                </h3>
                <p className="text-gray-600">
                  Reguliše javne puteve i saobraćajnu infrastrukturu.
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Zakon o vozačima
                </h3>
                <p className="text-gray-600">
                  Uslovi za sticanje prava na upravljanje motornim vozilima.
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Zakon o tehničkim pregledima motornih vozila
                </h3>
                <p className="text-gray-600">
                  Reguliše tehničku ispravnost i pregled vozila.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              Laws of Bosnia and Herzegovina
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Relevant laws of Bosnia and Herzegovina related to traffic and road safety.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
