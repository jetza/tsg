"use client";

import { motion } from "framer-motion";

export default function StrucnaLiteraturaPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          Stručna literatura
          <span className="block text-2xl mt-2 text-primary-300">Professional Literature</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Preporučena stručna literatura
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Lista relevantne stručne literature iz oblasti saobraćajno-tehničkih ekspertiza, rekonstrukcije saobraćajnih nezgoda i bezbednosti saobraćaja.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Saobraćajne ekspertize
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4">
                    <p className="font-semibold text-gray-800">Saobraćajno-tehnička ekspertiza</p>
                    <p className="text-gray-600 text-sm">Dr Milan Vujanić, Dr Milorad Cvijan</p>
                    <p className="text-gray-500 text-sm mt-1">Osnove saobraćajno-tehničkih ekspertiza i metodologija analize saobraćajnih nezgoda</p>
                  </div>

                  <div className="bg-gray-50 p-4">
                    <p className="font-semibold text-gray-800">Sudska procena saobraćajnih nezgoda</p>
                    <p className="text-gray-600 text-sm">Dr Vojin Todorović</p>
                    <p className="text-gray-500 text-sm mt-1">Pravni aspekti i sudska praksa u procesuiranju saobraćajnih nezgoda</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Rekonstrukcija saobraćajnih nezgoda
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4">
                    <p className="font-semibold text-gray-800">Accident Reconstruction</p>
                    <p className="text-gray-600 text-sm">J. Stannard Baker, Lynn B. Fricke</p>
                    <p className="text-gray-500 text-sm mt-1">Temeljno delo o rekonstrukciji saobraćajnih nezgoda (Engleski jezik)</p>
                  </div>

                  <div className="bg-gray-50 p-4">
                    <p className="font-semibold text-gray-800">Traffic Accident Reconstruction Manual</p>
                    <p className="text-gray-600 text-sm">John Daily, Nathan Shigemura, Jeremy Daily</p>
                    <p className="text-gray-500 text-sm mt-1">Priručnik za analizu i rekonstrukciju saobraćajnih nezgoda (Engleski jezik)</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  PC Crash i kompjuterske simulacije
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4">
                    <p className="font-semibold text-gray-800">PC Crash - Priručnik za korisnike</p>
                    <p className="text-gray-600 text-sm">Dr. techn. Hermann Steffan</p>
                    <p className="text-gray-500 text-sm mt-1">Zvanični priručnik za rad u programu PC Crash</p>
                  </div>

                  <div className="bg-gray-50 p-4">
                    <p className="font-semibold text-gray-800">Simulacija saobraćajnih nezgoda</p>
                    <p className="text-gray-600 text-sm">Razni autori - Zbornici radova sa simpozijuma</p>
                    <p className="text-gray-500 text-sm mt-1">Praktični primeri primene softvera za simulaciju</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Bezbednost saobraćaja
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4">
                    <p className="font-semibold text-gray-800">Bezbednost saobraćaja</p>
                    <p className="text-gray-600 text-sm">Prof. dr Krsto Lipovac</p>
                    <p className="text-gray-500 text-sm mt-1">Sveobuhvatna analiza faktora bezbednosti saobraćaja</p>
                  </div>

                  <div className="bg-gray-50 p-4">
                    <p className="font-semibold text-gray-800">Traffic Safety</p>
                    <p className="text-gray-600 text-sm">Leonard Evans</p>
                    <p className="text-gray-500 text-sm mt-1">Međunarodni standardi i naučni pristup bezbednosti (Engleski jezik)</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Zbornici radova
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4">
                    <p className="font-semibold text-gray-800">Međunarodni simpozijum o saobraćajno-tehničkim ekspertizama</p>
                    <p className="text-gray-600 text-sm">TSG Serbia (organizator)</p>
                    <p className="text-gray-500 text-sm mt-1">Godišnji zbornici radova sa međunarodnih simpozijuma (2009-danas)</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Za dodatne informacije
                </h3>
                <p className="text-blue-700">
                  Za detaljnije informacije o preporučenoj literaturi, kao i za nabavku pojedinih publikacija, kontaktirajte TSG tim na <strong>office@tsgserbia.com</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              Professional Literature
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A comprehensive list of recommended professional literature covering traffic accident expertise, accident reconstruction, computer simulations, and traffic safety standards from both domestic and international authors.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
