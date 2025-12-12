"use client";

import { motion } from "framer-motion";

export default function EdukacijaPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          Edukacija
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Obuka za upotrebu programa PC Crash
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Obuka za rad u najobuhvatnijem programu za analizu saobraćajnih
              nezgoda – PC Crash. Pored poznavanja rukovanja PC Crash-om, možete
              saznati i specifičnosti primene programa.
            </p>

            <div className="bg-primary-50 p-6 rounded-xl mb-6">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
                Program obuke uključuje:
              </h3>
              <ul className="space-y-3 text-gray-700">
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
                  Osnove rada u PC Crash programu
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
                  Rekonstrukcija saobraćajnih nezgoda
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
                  Analiza sudara vozila
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
                  Simulacije kretanja vozila
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
                  Izrada stručnih izveštaja
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Zainteresovani ste za obuku?
            </h3>
            <p className="text-lg mb-6">
              Kontaktirajte nas za više informacija o terminima i ceni obuke.
            </p>
            <a
              href="/kontakt"
              className="inline-block px-8 py-3 bg-white text-primary-500 rounded-full font-semibold hover:bg-primary-50 transition-all"
            >
              Kontakt
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
