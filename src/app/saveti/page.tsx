"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import VerticalPageTitle from "@/components/VerticalPageTitle";

export default function SavetiPage() {
  const { t } = useLocale();

  return (
    <>
      <VerticalPageTitle title="Saveti" />
      <div className="min-h-screen py-20 px-6 md:ml-40">
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
                    <div className="border-l-4 border-primary-400 pl-4 py-2">
                      <a
                        href="https://www.youtube.com/watch?v=BfZPFbdBMkE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-primary-500 hover:underline transition-colors"
                      >
                        {t.saveti.article1.videoLink}
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </>
  );
}
