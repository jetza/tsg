"use client";

import { motion } from "framer-motion";

export default function ObukaBezbednoPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          Obuka za bezbedno učestvovanje u saobraćaju
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <h2 className="text-2xl font-heading font-semibold mb-4 text-primary-400">
            Obuka za bezbedno učestvovanje u saobraćaju
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Nakon dugogodišnjeg istraživanja i rada na edukaciji učesnika u
            saobraćaju, TSG je tokom 2008. godine postavio program obuke za
            bezbedno učestvovanje u saobraćaju. Osnova bezbednog učestvovanja u
            saobraćaju je detaljno poznavanje prava i obaveza svih učesnika
            (Zakona o bezbednosti saobraćaja) i njihovo ponašanje u skladu sa
            pravilima. Program je zasnovan na tzv. &ldquo;defanzivnom&rdquo;
            učestvovanju u saobraćaju.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Možete naučiti puno od predavača koji dugo godina izučavaju
            bezbednost saobraćaja, istražuju uzroke i okolnosti pod kojima su se
            dogodile saobraćajne nezgode, učestvuju u izradi Zakona o bezbednosti
            saobraćaja, razmenjuju domaća iskustva sa inostranim saradnicima,
            primenjuju strana iskustva u domaćim uslovima, postavljaju programe
            edukacije u drugim domaćim školama bezbedne vožnje.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Pored obuke za bezbedno učestvovanje u saobraćaju (učesnika svih
            uzrasta), TSG organizuje i obuke za bezbednu organizaciju u drumskom
            saobraćaju i transportu.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
