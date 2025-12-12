"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function RegistrovaniKorisniciPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          Registrovani korisnici
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Postanite povlašćeni korisnik
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Registracijom dobijate pristup ekskluzivnim sadržajima i
              dokumentima koji su dostupni samo registrovanim korisnicima.
            </p>

            <div className="bg-primary-50 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
                Benefiti registracije:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Pristup zakonskoj regulativi i standardima
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Ekskluzivni stručni materijali
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Obaveštenja o novim sadržajima
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Mogućnost komentarisanja na blogu
                </li>
              </ul>
            </div>

            <div className="bg-primary-500 text-white p-6 rounded-xl">
              <h3 className="text-xl font-heading font-bold mb-2">
                Godišnja članarina
              </h3>
              <p className="mb-4">
                Na vašu e-mejl adresu će vam stići uputstvo za uplatu
                registracije. Nakon evidentiranja vaše uplate na našem
                žiro-računu, vaš nalog će biti aktiviran i postajete povlašćeni
                korisnik naših usluga u trajanju od godinu dana.
              </p>
              <p className="text-sm">
                Neophodne detalje u vezi uplate godišnje naknade za
                registraciju, možete dobiti putem e-mail adrese:{" "}
                <a
                  href="mailto:office@tsgserbia.com"
                  className="underline font-semibold"
                >
                  office@tsgserbia.com
                </a>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/registrovani-korisnici/prijava"
              className="bg-primary-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
            >
              <h3 className="text-2xl font-heading font-bold mb-2">Prijava</h3>
              <p>Već imate nalog? Prijavite se ovde.</p>
            </Link>

            <Link
              href="/registrovani-korisnici/registracija"
              className="bg-white text-primary-500 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center border-2 border-primary-500"
            >
              <h3 className="text-2xl font-heading font-bold mb-2">
                Registracija
              </h3>
              <p>Nemate nalog? Registrujte se ovde.</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
