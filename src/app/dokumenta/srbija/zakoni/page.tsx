"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const zakoni = [
  {
    name: "Zakon o bezbednosti saobraćaja na putevima",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-bezbednosti-saobracaja-na-putevima.pdf",
  },
  {
    name: "Zakon o sudskim veštacima",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-sudskim-vestacima.pdf",
  },
  {
    name: "Zakon o javnim putevima",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-javnim-putevima.pdf",
  },
  {
    name: "Zakon o bezbednosti i interoperabilnosti železnice",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-bezbednosti-i-interoperabilnosti-zeleznice.pdf",
  },
  {
    name: "Zakon o prevozu u drumskom saobraćaju",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-prevozu-u-drumskom-saobracaju.pdf",
  },
  {
    name: "Zakon o transportu opasnog tereta",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-transportu-opasnog-tereta.pdf",
  },
  {
    name: "Zakon o prometu eksplozivnih materija",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-prometu-eksplozivnih-materija.pdf",
  },
  {
    name: "Zakon o ugovorima o prevozu u drumskom saobraćaju",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-ugovorima-o-prevozu-u-drumskom-saobracaju.pdf",
  },
  {
    name: "Krivični Zakonik",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Krivicni-Zakonik.pdf",
  },
  {
    name: "Zakonik o krivičnom postupku",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakonik-o-krivicnom-postupku.pdf",
  },
  {
    name: "Zakon o prekršajima",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-prekrsajima.pdf",
  },
  {
    name: "Zakon o parničnom postupku",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-panicnom-postupku.pdf",
  },
  {
    name: "Zakon o vanparničnom postupku",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-vanpanicnom-postupku.pdf",
  },
  {
    name: "Zakon o opštem upravnom postupku",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-opstem-upravnom-postupku.pdf",
  },
  {
    name: "Zakon o upravnim sporovima",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-upravnim-sporovima.pdf",
  },
  {
    name: "Zakon o izvršenju i obezbeđenju",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-izvrsenju-i-obezbedjenju.pdf",
  },
  {
    name: "Zakon o izvršenju krivičnih sankcija",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-izvrsenju-krivicnih-sankcija.pdf",
  },
  {
    name: "Zakon o privrednim društvima",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-privrednim-drustvima.pdf",
  },
  {
    name: "Zakon o radu",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-radu.pdf",
  },
];

const zakoniArhiva = [
  {
    name: "Zakon o osnovama bezbednosti saobraćaja na putevima",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-osnovama-bezbednosti-saobracaja-na-putevima.pdf",
  },
  {
    name: "Zakon o bezbednosti saobraćaja na putevima (stara verzija)",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-bezbednosti-saobracaja-na-putevima-stari.pdf",
  },
  {
    name: "Zakon o bezbednosti u železničkom saobraćaju",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-bezbednosti-u-zeleznickom-saobracaju.pdf",
  },
  {
    name: "Zakonik o krivičnom postupku (stara verzija)",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakonik-o-krivicnom-postupku-stari.pdf",
  },
  {
    name: "Zakon o prekršajima (stara verzija)",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-prekrsajima-stari.pdf",
  },
  {
    name: "Zakon o prevozu opasnih materija",
    file: "https://tsgserbia.page.gd/wp-content/uploads/2015/03/Zakon-o-prevozu-opasnih-materija.pdf",
  },
];

export default function SrbijaZakoniPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          Zakoni
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Važeći zakoni */}
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Zakonska akta – važeća
            </h2>

            <div className="space-y-3">
              {zakoni.map((zakon, index) => (
                <Link
                  key={index}
                  href={zakon.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 hover:bg-primary-50 transition-colors rounded group"
                >
                  <svg
                    className="w-6 h-6 text-red-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                  <span className="text-gray-700 group-hover:text-primary-500">
                    {zakon.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Arhiva zakona */}
          <div className="bg-primary-50 p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Zakonska akta – nisu više u primeni
            </h2>

            <div className="space-y-3">
              {zakoniArhiva.map((zakon, index) => (
                <Link
                  key={index}
                  href={zakon.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 hover:bg-white transition-colors rounded group"
                >
                  <svg
                    className="w-6 h-6 text-red-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                  <span className="text-gray-700 group-hover:text-primary-500">
                    {zakon.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <p className="text-gray-700">
              <strong>Napomena:</strong> PDF dokumenta se otvaraju u novom tabu.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
