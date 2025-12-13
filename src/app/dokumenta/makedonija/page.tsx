"use client";

import { motion } from "framer-motion";

export default function MakedonijaPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          Severna Makedonija - Saobraćajna regulativa
          <span className="block text-2xl mt-2 text-primary-300">North Macedonia - Traffic Regulations</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Saobraćajna regulativa Severne Makedonije
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Relevantni zakoni i propisi o saobraćaju u Severnoj Makedoniji.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Ograničenja brzine
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Naseljeno mesto: 50 km/h</li>
                  <li>Van naselja: 80 km/h</li>
                  <li>Brzi put: 100 km/h</li>
                  <li>Auto-put: 130 km/h</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Dokumenti za ulazak
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
                  Obavezna oprema
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Rezervni točak ili set za popravku guma</li>
                  <li>Trougao i reflektujući prsluk</li>
                  <li>Rezervne sijalice</li>
                  <li>Set prve pomoći</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Važne napomene
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Obavezno korišćenje dnevnih svetala tokom cele godine</li>
                  <li>Zimska oprema obavezna od 15. novembra do 15. marta</li>
                  <li>Dozvoljeni nivo alkohola: 0.5 promila (0.0 za mlade vozače)</li>
                  <li>Kazne se naplaćuju na licu mesta</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Putarina
                </h3>
                <p className="text-gray-600">
                  Na auto-putevima u Severnoj Makedoniji naplaćuje se putarina. Dostupna je naplata u gotovini i platnim karticama na svim naplatnim stanicama.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              Traffic Regulations in North Macedonia
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Relevant laws and regulations about traffic in North Macedonia, including speed limits, required documents, mandatory equipment, and toll road information.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
