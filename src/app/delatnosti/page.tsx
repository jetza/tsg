"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DelatnostiPage() {
  const activities = [
    {
      title: "Projekti",
      description:
        "Tim TSG-a je učestvovao na izradi i implementaciji projekata iz različitih oblasti. Za svaki od urađenih projekata je bilo najvažnije projektovati željeni nivo bezbednosti saobraćaja.",
      href: "/delatnosti/projekti",
    },
    {
      title: "Ekspertize",
      description:
        "Prilikom pružanja ekspertskih usluga TSG koristi najviše standarde države Srbije, uzimajući u obzir trenutna dostignuća iz relevantnih oblasti u svetu.",
      href: "/delatnosti/ekspertize",
    },
    {
      title: "Edukacija",
      description:
        "Obuka za rad u najobuhvatnijem programu za analizu saobraćajnih nezgoda – PC Crash. Pored poznavanja rukovanja PC Crash-om, možete saznati i specifičnosti primene programa.",
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
          Delatnosti
        </motion.h1>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
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
                Saznajte više
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
