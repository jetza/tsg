"use client";

import { motion } from "framer-motion";

export default function ZimskaOpremaEvropaPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          Zimska oprema u Evropi
          <span className="block text-2xl mt-2 text-primary-300">Winter Equipment in Europe</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Propisi o zimskoj opremi po državama
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Evropske zemlje imaju različite propise o obaveznoj zimskoj opremi. Pre putovanja, proverite aktuelne propise za svaku zemlju kroz koju planirate da putujete.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Nemačka
                </h3>
                <p className="text-gray-600">
                  <strong>Obavezno:</strong> Zimske gume kada su zimski uslovi (sneg, led, poledica). Nema fiksnog perioda.<br />
                  <strong>Minimalna dubina šare:</strong> 1.6 mm (preporučeno 4 mm)<br />
                  <strong>Kazna:</strong> 60-120 € + bod
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Austrija
                </h3>
                <p className="text-gray-600">
                  <strong>Period:</strong> 1. novembar - 15. april<br />
                  <strong>Minimalna dubina šare:</strong> 4 mm<br />
                  <strong>Alternativa:</strong> Snežni lanci na pogonskim točkovima<br />
                  <strong>Kazna:</strong> Do 5.000 €
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Švajcarska
                </h3>
                <p className="text-gray-600">
                  <strong>Obavezno:</strong> Nije generalno obavezno, ali vozač je odgovoran za bezbednost<br />
                  <strong>Minimalna dubina šare:</strong> 1.6 mm<br />
                  <strong>Napomena:</strong> Ako blokirate saobraćaj bez zimskih guma, kazna može biti vrlo visoka
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Italija
                </h3>
                <p className="text-gray-600">
                  <strong>Obavezno:</strong> Varira po regionima i putevima (posebno planinskim)<br />
                  <strong>Period:</strong> Uglavnom 15. novembar - 15. april<br />
                  <strong>Minimalna dubina šare:</strong> 1.6 mm<br />
                  <strong>Kazna:</strong> 84-338 € (viša na auto-putevima)
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Francuska
                </h3>
                <p className="text-gray-600">
                  <strong>Obavezno:</strong> Planinski regioni od 1. novembra do 31. marta<br />
                  <strong>Minimalna dubina šare:</strong> 3.5 mm<br />
                  <strong>Alternativa:</strong> Snežni lanci u planinama<br />
                  <strong>Kazna:</strong> 135 €
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Češka
                </h3>
                <p className="text-gray-600">
                  <strong>Period:</strong> 1. novembar - 31. mart (u zimskim uslovima)<br />
                  <strong>Minimalna dubina šare:</strong> 4 mm<br />
                  <strong>Kazna:</strong> Do 2.000 CZK
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Slovenija
                </h3>
                <p className="text-gray-600">
                  <strong>Period:</strong> 15. novembar - 15. mart<br />
                  <strong>Minimalna dubina šare:</strong> 3 mm<br />
                  <strong>Alternativa:</strong> Letnje gume + snežni lanci<br />
                  <strong>Kazna:</strong> 120-300 €
                </p>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  Hrvatska
                </h3>
                <p className="text-gray-600">
                  <strong>Period:</strong> 15. novembar - 15. april (u zimskim uslovima)<br />
                  <strong>Minimalna dubina šare:</strong> 4 mm<br />
                  <strong>Alternativa:</strong> Snežni lanci<br />
                  <strong>Kazna:</strong> 65-130 €
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Preporuke za putovanje
                </h3>
                <ul className="list-disc list-inside text-blue-700 space-y-1">
                  <li>Uvek proverite aktuelne propise neposredno pre putovanja</li>
                  <li>Zimske gume treba montirati na sva četiri točka</li>
                  <li>Nosite snežne lance u vozilu prilikom putovanja u planinskim predelima</li>
                  <li>Minimalna dubina šare je zakonski minimum - za bezbednost preporučuje se veća dubina</li>
                  <li>Obeležavanje M+S nije uvek dovoljno - tražite Alpine simbol (planina sa sne žnom pahuljom)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
              Winter Equipment in Europe
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              European countries have different regulations regarding mandatory winter equipment. Requirements vary by country and often by region, with specific periods, minimum tread depth requirements, and penalties for non-compliance. Always check current regulations before traveling.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
