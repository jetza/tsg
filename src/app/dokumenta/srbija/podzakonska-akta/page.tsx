"use client";

import { motion } from "framer-motion";

export default function SrbijaPodzakonskaAktaPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          Srbija - Podzakonska akta
          <span className="block text-2xl mt-2 text-primary-300">Serbia - Bylaws</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Podzakonska akta Republike Srbije
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pravilnici, uredbe i drugi podzakonski akti koji detaljnije regulišu oblast saobraćaja.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Pravilnik o saobraćajnoj signalizaciji
                </h3>
                <p className="text-gray-600">
                  Određuje način postavljanja i značenje saobraćajne signalizacije.
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Pravilnik o tehničkom pregledu vozila
                </h3>
                <p className="text-gray-600">
                  Uslovi i postupak tehničkog pregleda motornih i priključnih vozila.
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Pravilnik o homologaciji vozila
                </h3>
                <p className="text-gray-600">
                  Reguliše postupak homologacije motornih vozila.
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Pravilnik o saobraćajnom obrazovanju
                </h3>
                <p className="text-gray-600">
                  Uređuje način organizovanja i sprovođenja saobraćajnog obrazovanja.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              Bylaws of the Republic of Serbia
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Regulations, decrees and other bylaws that regulate traffic in more detail.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
