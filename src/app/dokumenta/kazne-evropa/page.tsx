"use client";

import { motion } from "framer-motion";

export default function KazneEvropaPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          Kazne u Evropi
          <span className="block text-2xl mt-2 text-primary-300">Penalties in Europe</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Pregled saobraćajnih kazni u evropskim zemljama
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Evropske zemlje primenjuju različite sisteme kazni za saobraćajne prekršaje. Iznosi variraju u zavisnosti od težine prekršaja i lokalne regulative.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-3">
                  Prekoračenje brzine
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Nemačka:</strong> 10-800 € (visoке kazne na auto-putevima)</p>
                  <p><strong>Austrija:</strong> 30-2.180 € (progresivne kazne)</p>
                  <p><strong>Švajcarska:</strong> Do 3.000 CHF (jedna od najstrožijih)</p>
                  <p><strong>Italija:</strong> 41-3.287 € (zavisi od područja)</p>
                  <p><strong>Francuska:</strong> 68-1.500 € (fiksne i progresivne kazne)</p>
                </div>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-3">
                  Vožnja pod uticajem alkohola
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Velika Britanija:</strong> Do £5.000 i gubitak dozvole</p>
                  <p><strong>Švedska:</strong> Minimum 40 dnevnih zarada + gubitak dozvole</p>
                  <p><strong>Holandija:</strong> 325-900 € + obavezni kursevi</p>
                  <p><strong>Češka:</strong> 25.000-50.000 CZK + zabrana vožnje</p>
                  <p><strong>Poljska:</strong> 5.000 PLN + kazne zatvora</p>
                </div>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-3">
                  Korišćenje mobilnog telefona
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Holandija:</strong> 240 €</p>
                  <p><strong>Španija:</strong> 200 € + 3 kaznena boda</p>
                  <p><strong>Belgija:</strong> 116-174 €</p>
                  <p><strong>Danska:</strong> 200 €</p>
                  <p><strong>Grčka:</strong> 100 €</p>
                </div>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-3">
                  Nekorišćenje sigurnosnog pojasa
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Norveška:</strong> 180 €</p>
                  <p><strong>Austrija:</strong> 35 €</p>
                  <p><strong>Belgija:</strong> 110 €</p>
                  <p><strong>Slovenija:</strong> 120 €</p>
                  <p><strong>Hrvatska:</strong> 65 €</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 border-l-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                  Važna napomena
                </h3>
                <p className="text-yellow-700">
                  EU uspostavlja sistem prekograničnih kazni, što znači da kazne izrečene u jednoj državi članici mogu biti naplaćene i u drugoj državi članici. Neplaćene kazne mogu rezultirati dodatnim kaznama, sudskim postupcima ili zabranom ulaska u određene zemlje.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              Penalties in Europe
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              European countries apply different penalty systems for traffic violations. Amounts vary depending on the severity of the offense and local regulations. The EU is establishing a cross-border penalty system for enforcement across member states.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
