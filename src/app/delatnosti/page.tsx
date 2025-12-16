"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";

export default function DelatnostiPage() {
  const { t, locale } = useLocale();

  const activities = [
    {
      title: t.projekti.title,
      description: t.projekti.intro,
      href: "/delatnosti/projekti",
    },
    {
      title: t.ekspertize.title,
      description: t.delatnosti.standards,
      href: "/delatnosti/ekspertize",
    },
    {
      title: t.edukacija.title,
      description: t.obukaPCCrash.intro,
      href: "/delatnosti/edukacija",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          {t.delatnosti.title}
        </motion.h1>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 hover: transition-shadow"
            >
              <h2 className="text-3xl font-heading font-bold mb-4 text-primary-500">
                {activity.title}
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {activity.description}
              </p>
              <Link
                href={activity.href}
                className="inline-flex items-center text-primary-400 font-semibold hover:text-primary-500"
              >
                {locale === "sr" ? "Saznajte više" : "Learn more"}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
