"use client";

import { motion } from "framer-motion";

export default function EUPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          Evropska unija - Saobraćajna regulativa
          <span className="block text-2xl mt-2 text-primary-300">European Union - Traffic Regulations</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Saobraćajna regulativa EU
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Evropska unija ima harmonizovanu saobraćajnu regulativu koja obezbeđuje visok nivo bezbednosti saobraćaja u svim državama članicama.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Osnovni principi
                </h3>
                <p className="text-gray-600 mb-2">
                  EU direktivama se regulišu:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Tehnički standardi za vozila</li>
                  <li>Vozačke dozvole (jedinstveni format)</li>
                  <li>Maksimalne brzine na različitim tipovima puteva</li>
                  <li>Upotreba sigurnosnih pojaseva i zaštita dece</li>
                  <li>Dozvoljeni nivo alkohola u krvi</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Vozačka dozvola EU
                </h3>
                <p className="text-gray-600">
                  Vozačka dozvola izdata u bilo kojoj državi članici EU važeća je u svim ostalim državama članicama. Jedinstveni format u vidu kartice sa mikročipom olakšava identifikaciju i smanjuje mogućnost falsifikovanja.
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Tehnički pregled vozila
                </h3>
                <p className="text-gray-600">
                  Države članice su obavezne da sprovode periodične tehničke preglede vozila prema harmonizovanim standardima, čime se obezbeđuje da sva vozila na putevima EU ispunjavaju minimalne tehničke uslove.
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Kazne i prekršaji
                </h3>
                <p className="text-gray-600">
                  EU radi na uspostavljanju sistema prekograničnih kazni, gde vozači mogu biti kažnjeni za prekršaje učinjene u drugoj državi članici. Najčešći prekršaji uključuju prekoračenje brzine, vožnju pod uticajem alkohola i nepropisno parkiranje.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              EU Traffic Regulations
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The European Union has harmonized traffic regulations ensuring high level of road safety across all member states, including unified driving license format, vehicle technical standards, and cross-border penalty systems.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
