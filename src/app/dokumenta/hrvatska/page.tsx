"use client";

import { motion } from "framer-motion";

export default function HrvatskaPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          Hrvatska - Saobraćajna regulativa
          <span className="block text-2xl mt-2 text-primary-300">Croatia - Traffic Regulations</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Saobraćajna regulativa Hrvatske
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Kao članica EU, Hrvatska primenjuje harmonizovanu saobraćajnu regulativu sa dodatnim specifičnostima za vožnju na domaćem teritoriju.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Ograničenja brzine
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Naseljeno mesto: 50 km/h</li>
                  <li>Van naselja: 90 km/h</li>
                  <li>Brza cesta: 110 km/h</li>
                  <li>Autocesta (auto-put): 130 km/h</li>
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
                  <li>Zeleni karton (za vozila van EU)</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Obavezna oprema
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Rezervni točak ili komplet za popravku guma</li>
                  <li>Trougao i reflektujući prsluk</li>
                  <li>Rezervne sijalice</li>
                  <li>Set prve pomoći</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Dodatne informacije
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Obvezno korištenje dnevnih svjetala tijekom cijele godine</li>
                  <li>Zimska oprema obavezna od 15. novembra do 15. aprila u zimskim uslovima</li>
                  <li>Naplatne stanice na auto-putevima (gotovina i kartice)</li>
                  <li>Stroga primena propisa o vožnji pod uticajem alkohola (0.5 promila)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              Traffic Regulations in Croatia
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              As an EU member, Croatia applies harmonized traffic regulations with specific requirements for driving on its territory, including speed limits, mandatory equipment, and seasonal winter tire requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
