"use client";

import { motion } from "framer-motion";

export default function ONamaPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          O Nama
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Naša specijalnost je razvoj i primena inovativnih projekata u
            oblasti bezbednosti saobraćaja. Članovi našeg tima učestvovali su u
            izradi &ldquo;Zakona o bezbednosti saobraćaja na putevima&rdquo; i
            nekih od podzakonskih akata.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Vodeći prevoznici, sa preko 2,000 vozila učestvuju u našem projektu
            podizanja nivoa bezbednosti u prevozu putnika. Organizujemo stručne
            skupove čiji je cilj unapređenje nivoa poslovanja, ali i učestvujemo
            kao predavači na konferencijama koje organizuju Privredna komora
            Srbije, Saobraćajni fakultet u Beogradu, IRU Academy iz Ženeve i
            drugi.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-8">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-500">
              Naša vizija
            </h2>
            <p className="text-lg text-gray-700">
              Naša vizija je da postanemo priznati lider u razvoju i primeni
              projekata u oblasti bezbednosti saobraćaja u regionu.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
