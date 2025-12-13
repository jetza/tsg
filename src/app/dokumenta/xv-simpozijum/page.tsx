"use client";

import { motion } from "framer-motion";

export default function XVSimpozijumPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          XV Međunarodni simpozijum
          <span className="block text-2xl mt-2 text-primary-300">XV International Symposium</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              O Simpozijumu
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              XV Međunarodni simpozijum o saobraćajno-tehničkim ekspertizama okuplja vodeće stručnjake iz regiona i sveta koji dele svoje znanje i iskustvo u oblasti rekonstrukcije saobraćajnih nezgoda.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Osnovne informacije
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Organizator:</strong> Traffic Safety Group (TSG)</p>
                  <p><strong>Učesnici:</strong> Stručnjaci iz više od 10 zemalja</p>
                  <p><strong>Jezik:</strong> Srpski i engleski sa simultanim prevodom</p>
                </div>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Teme simpozijuma
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Najnovije metode rekonstrukcije saobraćajnih nezgoda</li>
                  <li>Primena PC Crash i drugih softverskih alata</li>
                  <li>Analiza sudskih slučajeva i pravni aspekti ekspertiza</li>
                  <li>Otkrivanje prevara u saobraćajnim nezgodama</li>
                  <li>Biomeh anika i povrede u saobraćaju</li>
                  <li>Najnovije tehnologije u vozilima i njihov uticaj na bezbednost</li>
                  <li>Autonomna vozila i budućnost saobraćajne ekspertize</li>
                  <li>Evropska zakonska regulativa i harmonizacija standarda</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Program
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-semibold">Prvi dan</p>
                    <p className="text-gray-600">Plenarno zasedanje sa keynote govornicima iz inostranstva</p>
                  </div>
                  <div>
                    <p className="font-semibold">Drugi dan</p>
                    <p className="text-gray-600">Paralelne sekcije po temama, prezentacije radova učesnika</p>
                  </div>
                  <div>
                    <p className="font-semibold">Treći dan</p>
                    <p className="text-gray-600">Praktične radionice i demonstracije PC Crash softvera</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Zbornik radova
                </h3>
                <p className="text-gray-700">
                  Svi prihvaćeni radovi objavljuju se u zborniku radova simpozijuma sa ISBN brojem. Zbornik je dostupan učesnicima i zainteresovanim stručnjacima nakon simpozijuma.
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Dotadašnji simpozijumi
                </h3>
                <p className="text-gray-700 mb-2">
                  TSG organizuje međunarodne simpozijume od 2009. godine. Do sada je održano 14 uspešnih izdanja sa učešćem:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Preko 500 učesnika iz različitih zemalja</li>
                  <li>Više od 200 prezentovanih naučnih radova</li>
                  <li>Gostujući predavači iz Austrije, Nemačke, Švajcarske, Slovenije</li>
                  <li>Predstavnici sudova, policije, osiguravajućih društava</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-500 to-primary-300 p-6 rounded-lg text-white">
                <h3 className="text-2xl font-semibold mb-3">
                  Prijava za učešće
                </h3>
                <p className="mb-4">
                  Za informacije o prijavama, rokovima za slanje radova i registraciji, kontaktirajte nas:
                </p>
                <p className="text-lg">
                  <strong>Email:</strong> office@tsgserbia.com<br />
                  <strong>Telefon:</strong> +381 (11) 4202010
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              About the Symposium
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The XV International Symposium on Traffic Accident Expertise brings together leading experts from the region and around the world to share knowledge and experience in accident reconstruction, including latest methodologies, software applications, legal aspects, and emerging technologies in vehicle safety.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
