"use client";

import { motion } from "framer-motion";

const documents = [
  {
    title: "Zakon o bezbednosti saobraćaja na putevima",
    country: "Srbija",
    year: "2024",
    size: "2.5 MB",
  },
  {
    title: "Pravilnik o saobraćajnoj signalizaciji",
    country: "Srbija",
    year: "2023",
    size: "1.8 MB",
  },
  {
    title: "Zakon o prevoznicima u drumskom saobraćaju",
    country: "Srbija",
    year: "2023",
    size: "1.2 MB",
  },
  {
    title: "Zakon o bezbednosti saobraćaja",
    country: "Crna Gora",
    year: "2023",
    size: "2.1 MB",
  },
];

export default function ZakonskaRegulativaPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          Zakonska regulativa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-700 mb-12"
        >
          Pregled zakonske regulative vezane za saobraćaj u Srbiji, Crnoj Gori i
          BiH. Sva dokumenta su u PDF formatu i dostupna su za download.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start mb-4">
                <svg
                  className="w-12 h-12 text-primary-400 mr-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold mb-2 text-primary-500">
                    {doc.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-gray-600 mb-4">
                    <span>{doc.country}</span>
                    <span>•</span>
                    <span>{doc.year}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                  </div>
                  <button className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition-all">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Preuzmi
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-primary-50 p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500">
            Potreban vam je određeni dokument?
          </h2>
          <p className="text-gray-700 mb-6">
            Ako ne možete pronaći dokument koji vam je potreban, kontaktirajte
            nas i mi ćemo vam pomoći.
          </p>
          <a
            href="/kontakt"
            className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition-all"
          >
            Kontaktirajte nas
          </a>
        </motion.div>
      </div>
    </div>
  );
}
