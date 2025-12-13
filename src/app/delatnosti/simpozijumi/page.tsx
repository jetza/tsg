"use client";

import { motion } from "framer-motion";

export default function SimpozijumiPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          Simpozijumi / Symposiums
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-primary-400">
              Međunarodni simpozijumi
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Traffic Safety Group (TSG) organizuje Međunarodne simpozijume
              &ldquo;Ekspertize saobraćajnih nezgoda i prevare u
              osiguranju&rdquo; od 2009. godine.
            </p>
          </section>

          <div className="bg-primary-50 p-8">
            <h3 className="text-xl font-heading font-semibold mb-4 text-primary-500">
              Teme simpozijuma:
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-primary-500">•</span>
                <span>Ekspertize saobraćajnih nezgoda</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-500">•</span>
                <span>Otkrivanje prevara u osiguranju</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-500">•</span>
                <span>Primena zakona o bezbednosti saobraćaja</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-500">•</span>
                <span>Najnovije tehnologije u analizi nezgoda</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-500">•</span>
                <span>Razmena iskustava sa međunarodnim ekspertima</span>
              </li>
            </ul>
          </div>

          <section>
            <p className="text-lg text-gray-700 leading-relaxed">
              Simpozijumi okupljaju vodeće stručnjake iz oblasti bezbednosti
              saobraćaja, sudske veštake, predstavnike osiguravajućih društava,
              sudije, tužioce, advokate i sve zainteresovane za ovu oblast.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
