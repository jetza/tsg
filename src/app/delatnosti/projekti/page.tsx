"use client";

import { motion } from "framer-motion";

export default function ProjektiPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          Projekti
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-white p-8 mb-8">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-500">
              TSG pruža usluge i projekte iz sledećih oblasti:
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                Projektovanje saobraćajnih površina i odgovarajuće signalizacije
              </li>
              <li>
                Izrada tehnoloških projekata auto baza, autobuskih stanica i
                stajališta, površina za parkiranje, parking garaža, stanica za
                snabdevanje gorivom
              </li>
              <li>Izrada projekata zaštite gradilišta</li>
              <li>Projekti zaštite dece u zonama osnovnih škola</li>
              <li>
                Provere pravilnog funkcionisanja signalnih planova na
                raskrsnicama (sa aspekta bezbednosti odvijanja saobraćaja)
              </li>
              <li>
                Konsultativne analize za potrebe prekršajnih, krivičnih i
                parničnih postupaka u saobraćaju
              </li>
              <li>
                Izrada kompjuterskih analiza i provera brzina vozila koja su
                učestvovala u sudaru
              </li>
              <li>
                Pribavljanje tehničkih karakteristika i podataka o vozilima
                drumskog i ostalih vidova saobraćaja
              </li>
              <li>
                Procena visine štete na vozilima i objektima, analiza uzroka i
                okolnosti nastanka štetnog događaja (saobraćajne nezgode) i
                pomoć pri ostvarenju prava na naknadu štete
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 p-8">
            <p className="text-lg text-gray-700">
              TSG je firma koja svoju osnovnu delatnost ostvaruje u oblasti
              bezbednosti saobraćaja, drugim rečima u oblasti zaštite ljudi i
              imovine u saobraćaju. Prilikom pružanja usluga TSG koristi najviše
              standarde države Srbije, uzimajući u obzir trenutna dostignuća iz
              relevantnih oblasti u svetu.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
