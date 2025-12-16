"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function MedijiPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          {t.mediji.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.mediji.intro}
          </p>

          {/* Radio appearances section */}
          <section className="bg-primary-50 p-8 rounded-lg">
            <h2 className="text-2xl font-heading font-bold mb-6 text-primary-500">
              {t.mediji.appearancesTitle}
            </h2>
            <div className="space-y-8">
              {t.mediji.radioAppearances.map(
                (
                  radio: {
                    title: string;
                    date: string;
                    description: string;
                    audioFile: string;
                  },
                  index: number
                ) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-xl font-heading font-bold text-primary-600 mb-2">
                      {radio.title}
                    </h4>
                    <h5 className="text-sm font-semibold text-gray-600 mb-4">
                      {radio.date}
                    </h5>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {radio.description}
                    </p>
                    <audio
                      controls
                      preload="none"
                      className="w-full"
                      style={{ maxWidth: "100%" }}
                    >
                      <source src={radio.audioFile} type="audio/mpeg" />
                      Vaš pregledač ne podržava audio element.
                    </audio>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Press links section */}
          <section className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading font-bold mb-6 text-primary-500">
              {t.mediji.pressTitle}
            </h2>
            <div className="space-y-6">
              {t.mediji.pressArticles.map(
                (
                  article: { date: string; title: string; url: string },
                  index: number
                ) => (
                  <div
                    key={index}
                    className="border-l-4 border-primary-400 pl-4 py-2"
                  >
                    <h5 className="text-sm font-semibold text-gray-600 mb-2">
                      {article.date}
                    </h5>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-primary-600 hover:text-primary-700 transition-colors hover:underline"
                    >
                      {article.title}
                    </a>
                  </div>
                )
              )}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
