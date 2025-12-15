"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function CrnaGoraPutovanjeAutomobilomPage() {
  const { t, locale, switchLocale } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-end mb-4">
          <button
            onClick={switchLocale}
            className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors"
          >
            {locale === "sr" ? "EN" : "SR"}
          </button>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          {t.dokumenta.crnaGora.putovanje.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Praktični saveti za putovanje
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sve što treba da znate pre putovanja automobilom u Crnu Goru.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Dokumenti potrebni za ulazak
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Važeća lična karta ili pasoš</li>
                  <li>Saobraćajna dozvola vozila</li>
                  <li>Važeća vozačka dozvola</li>
                  <li>Zeleni karton (međunarodna polisa osiguranja)</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Ograničenja brzine
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Naseljeno mesto: 50 km/h</li>
                  <li>Van naselja: 80 km/h</li>
                  <li>Brzi put: 100 km/h</li>
                  <li>Auto-put: 120 km/h</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Obavezna oprema
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Rezervni točak ili set za popravku guma</li>
                  <li>Trougao i reflektujući prsluk</li>
                  <li>Rezervne sijalice</li>
                  <li>Aparatič za gašenje požara</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Važne napomene
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    Duž obale saobraćaj može biti intenzivan tokom letnje sezone
                  </li>
                  <li>Planinskim putevima voziti oprezno, posebno zimi</li>
                  <li>Parkiranje u turističkim mestima često je naplatno</li>
                  <li>Tokom vožnje obavezno korišćenje dnevnih svetala</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              Practical Travel Advice
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Everything you need to know before traveling to Montenegro by car,
              including required documents, speed limits, and mandatory
              equipment.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
