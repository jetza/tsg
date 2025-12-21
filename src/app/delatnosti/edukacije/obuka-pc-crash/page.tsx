"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function ObukaPCCrashPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          {t.obukaPCCrash.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.obukaPCCrash.intro}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.obukaPCCrash.specifics}
          </p>

          {/* Examples Section */}
          {/* <div className="mt-8 mb-8">
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500">
              {t.obukaPCCrash.examplesTitle}
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center text-lg text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6 mr-2 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  {t.obukaPCCrash.exampleVideo1}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-lg text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6 mr-2 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  {t.obukaPCCrash.exampleVideo2}
                </a>
              </li>
            </ul>
          </div> */}

          <div className="bg-primary-50 p-8 mt-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              {t.obukaPCCrash.about}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t.obukaPCCrash.requirements}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t.obukaPCCrash.precision}
            </p>
          </div>

          <div className="mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.obukaPCCrash.example}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.obukaPCCrash.advanced}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
