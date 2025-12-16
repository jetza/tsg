"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function SimpozijumiPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          {t.simpozijumi.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <section>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.simpozijumi.intro1}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.simpozijumi.intro2}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.simpozijumi.fraudIssue}
            </p>
          </section>

          <div className="bg-primary-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t.simpozijumi.development}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.simpozijumi.lawApplication}
            </p>
          </div>

          <section>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.simpozijumi.uniformity}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.simpozijumi.organization}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.simpozijumi.openType}
            </p>
          </section>

          {/* Goal Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              {t.simpozijumi.goalTitle}
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.simpozijumi.goal1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.simpozijumi.goal2}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.simpozijumi.goal3}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.simpozijumi.goal4}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                {t.simpozijumi.goal5}
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
