"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";

const zakoni = [
  {
    name: "Zakon o bezbednosti saobraćaja na putevima",
    file: "zakon-o-bezbednosti-saobracaja-na-putevima.pdf",
  },
  {
    name: "Zakon o sudskim veštacima",
    file: "zakon-o-sudskim-vestacima.pdf",
  },
  {
    name: "Zakon o javnim putevima",
    file: "zakon-o-javnim-putevima.pdf",
  },
  {
    name: "Zakon o bezbednosti i interoperabilnosti železnice",
    file: "zakon-o-bezbednosti-i-interoperabilnosti-zeleznice.pdf",
  },
  {
    name: "Zakon o prevozu u drumskom saobraćaju",
    file: "zakon-o-prevozu-u-drumskom-saobracaju.pdf",
  },
  {
    name: "Zakon o transportu opasnog tereta",
    file: "zakon-o-transportu-opasnog-tereta.pdf",
  },
  {
    name: "Zakon o prometu eksplozivnih materija",
    file: "zakon-o-prometu-eksplozivnih-materija.pdf",
  },
  {
    name: "Zakon o ugovorima o prevozu u drumskom saobraćaju",
    file: "zakon-o-ugovorima-o-prevozu-u-drumskom-saobracaju.pdf",
  },
  {
    name: "Krivični Zakonik",
    file: "krivicni-zakonik.pdf",
  },
  {
    name: "Zakonik o krivičnom postupku",
    file: "zakonik-o-krivicnom-postupku.pdf",
  },
  {
    name: "Zakon o prekršajima",
    file: "zakon-o-prekrsajima.pdf",
  },
  {
    name: "Zakon o parničnom postupku",
    file: "zakon-o-panicnom-postupku.pdf",
  },
  {
    name: "Zakon o vanparničnom postupku",
    file: "zakon-o-vanpanicnom-postupku.pdf",
  },
  {
    name: "Zakon o opštem upravnom postupku",
    file: "zakon-o-opstem-upravnom-postupku.pdf",
  },
  {
    name: "Zakon o izvršenju i obezbeđenju",
    file: "zakon-o-izvrsenju-i-obezbedjenju.pdf",
  },
  {
    name: "Zakon o izvršenju krivičnih sankcija",
    file: "zakon-o-izvrsenju-krivicnih-sankcija.pdf",
  },
  {
    name: "Zakon o privrednim društvima",
    file: "zakon-o-privrednim-drustvima.pdf",
  },
  {
    name: "Zakon o radu",
    file: "zakon-o-radu.pdf",
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
                  href={`/pdfs/srbija/zakoni/${zakon.file}`}
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
