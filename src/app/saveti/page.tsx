"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function SavetiPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          {t.saveti.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {/* Main Article */}
          <article className="bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              {t.saveti.article1.title}
            </h2>

            <div className="mb-6">
              <p className="text-lg text-gray-600 italic mb-4">
                {t.saveti.article1.subtitle}
              </p>
              <img
                src="/images/bridge-467397_1280.jpg"
                alt="Vožnja na godišnji odmor"
                className="w-full h-auto rounded-lg mb-6"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed">
                {t.saveti.article1.intro}
              </p>

              <section className="mt-8">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-600">
                  {t.saveti.article1.section1Title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t.saveti.article1.section1Content}
                </p>
              </section>

              <section className="mt-8">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-600">
                  {t.saveti.article1.section2Title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t.saveti.article1.section2Content}
                </p>
              </section>

              <section className="mt-8">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-600">
                  {t.saveti.article1.section3Title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t.saveti.article1.section3Content}
                </p>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {t.saveti.article1.tiredness}
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=BfZPFbdBMkE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                    {t.saveti.article1.videoLink}
                  </a>
                </div>
              </section>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
}
