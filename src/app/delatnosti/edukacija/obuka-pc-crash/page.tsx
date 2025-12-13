"use client";

import { motion } from "framer-motion";

export default function ObukaPCCrashPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          Obuka za upotrebu programa PC Crash
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Obuka za rad u najobuhvatnijem programu za analizu saobraćajnih
            nezgoda – PC Crash. Pored poznavanja rukovanja PC Crash-om, možete
            saznati i specifičnosti primene programa.
          </p>

          <div className="bg-primary-50 p-8 mt-8">
            <h2 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              Šta je PC Crash?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              PC Crash je najnapredniji softver za rekonstrukciju saobraćajnih
              nezgoda. Program omogućava detaljnu analizu i simulaciju sudara,
              kao i vizualizaciju događaja koji su doveli do nezgode.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-heading font-semibold mb-4 text-primary-400">
              Program obuke uključuje:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Uvod u PC Crash i osnove rada sa programom</li>
              <li>Kreiranje i priprema scene nezgode</li>
              <li>Analiza traga kočenja i ubrzanja</li>
              <li>Simulacija sudara vozila</li>
              <li>3D vizualizacija i animacija</li>
              <li>Izrada stručnih izveštaja</li>
              <li>Praktični primeri iz realnih slučajeva</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
