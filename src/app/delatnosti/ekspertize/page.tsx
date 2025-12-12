"use client";

import { motion } from "framer-motion";

export default function EkspertizePage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          Ekspertize
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Saobraćajno-tehničke ekspertize
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Prilikom pružanja ekspertskih usluga TSG koristi najviše standarde
              države Srbije, uzimajući u obzir trenutna dostignuća iz
              relevantnih oblasti u svetu.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Naš tim stručnjaka vrši detaljne analize saobraćajnih nezgoda,
              procenjuje odgovornost učesnika, kao i visinu štete nastale na
              vozilima i drugim objektima.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              Naše usluge ekspertize uključuju:
            </h3>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Kompjuterske simulacije i rekonstrukcije saobraćajnih nezgoda
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Analiza brzina vozila i mehaničkih oštećenja
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Procena mogućnosti izbegavanja nezgode
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Izveštaji za sudske postupke
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
