"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function KorisniLinkoviPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          {t.korisniLinkovi.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {/* Traffic Safety Section */}
          <section className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              {t.korisniLinkovi.safetyTitle}
            </h2>
            <ul className="space-y-4">
              {t.korisniLinkovi.safetyLinks.map(
                (link: { name: string; url: string }, index: number) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-lg text-primary-600 hover:text-primary-700 transition-colors group"
                    >
                      <svg
                        className="w-5 h-5 mr-3 text-primary-400 group-hover:text-primary-600 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      {link.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </section>

          {/* Transport Section */}
          <section className="bg-primary-50 p-8 rounded-lg">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              {t.korisniLinkovi.transportTitle}
            </h2>
            <ul className="space-y-4">
              {t.korisniLinkovi.transportLinks.map(
                (link: { name: string; url: string }, index: number) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-lg text-primary-600 hover:text-primary-700 transition-colors group"
                    >
                      <svg
                        className="w-5 h-5 mr-3 text-primary-400 group-hover:text-primary-600 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      {link.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
