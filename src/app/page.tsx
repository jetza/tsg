"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LogoLoader from "@/components/LogoLoader";
import { useLocale } from "@/hooks/useLocale";

export default function HomePage() {
  const { locale } = useLocale();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center justify-center bg-white"
      >
        <div className="container mx-auto px-6 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <LogoLoader />
          </div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 text-primary-500"
          >
            TSG Serbia
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 font-light text-gray-700"
          >
            {locale === "sr"
              ? "Bezbednost saobraćaja - Traffic Safety Group"
              : "Traffic Safety Group"}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Link
              href="/delatnosti"
              className="px-8 py-3 bg-primary-500 text-white font-semibold hover:bg-primary-300 transition-all border-2 border-[#546e7a]"
            >
              {locale === "sr" ? "Naše usluge" : "Our Services"}
            </Link>
            <Link
              href="/kontakt"
              className="px-8 py-3 border-2 border-[#546e7a] text-primary-500 font-semibold hover:bg-primary-500 hover:text-white transition-all"
            >
              {locale === "sr" ? "Kontaktirajte nas" : "Contact Us"}
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-heading font-bold mb-8 text-center text-primary-500">
              {locale === "sr"
                ? "Dobrodošli u Traffic Safety Group"
                : "Welcome to Traffic Safety Group"}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Traffic Safety Group (TSG) se bavi projektovanjem i pružanjem
                konsultantskih usluga iz oblasti drumskog i gradskog saobraćaja
                i transporta. Garancija kvaliteta naših usluga su dugogodišnje
                iskustvo, profesionalni autoritet i odlični poslovni rezultati
                našeg tima i konsultanata sa kojima sarađujemo.
              </p>
              <p>
                Naša specijalnost je razvoj i primena inovativnih projekata u
                oblasti bezbednosti saobraćaja. Članovi našeg tima učestvovali
                su u izradi &ldquo;Zakona o bezbednosti saobraćaja na
                putevima&rdquo; i nekih od podzakonskih akata. Vodeći
                prevoznici, sa preko 2,000 vozila učestvuju u našem projektu
                podizanja nivoa bezbednosti u prevozu putnika. Organizujemo
                stručne skupove čiji je cilj unapređenje nivoa poslovanja, ali i
                učestvujemo kao predavači na konferencijama koje organizuju
                Privredna komora Srbije, Saobraćajni fakultet u Beogradu, IRU
                Academy iz Ženeve i drugi.
              </p>
              <p>
                Naša vizija je da postanemo priznati lider u razvoju i primeni
                projekata u oblasti bezbednosti saobraćaja u regionu.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Naši projekti */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 border-2 border-[#546e7a] hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
                {locale === "sr" ? "Naši projekti" : "Our Projects"}
              </h3>
              <p className="text-gray-700 mb-6">
                {locale === "sr"
                  ? "Tim TSG-a je učestvovao na izradi i implementaciji projekata iz različitih oblasti. Za svaki od urađenih projekata je bilo najvažnije projektovati željeni nivo bezbednosti saobraćaja."
                  : "The TSG team participated in the development and implementation of projects from various fields. For each of the completed projects, it was most important to design the desired level of traffic safety."}
              </p>
              <Link
                href="/delatnosti/projekti"
                className="inline-block px-6 py-2 bg-primary-500 text-white font-semibold hover:bg-primary-300 transition-colors border-2 border-[#546e7a]"
              >
                {locale === "sr" ? "Pročitajte više" : "Read More"}
              </Link>
            </motion.div>

            {/* PC Crash obuka */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-8 border-2 border-[#546e7a] hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-2xl font-heading font-semibold mb-2 text-primary-500">
                {locale === "sr" ? "PC Crash obuka" : "PC Crash Training"}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {locale === "sr"
                  ? "Obuka za rad u najobuhvatnijem programu"
                  : "Training for the most comprehensive program"}
              </p>
              <p className="text-gray-700 mb-6">
                {locale === "sr"
                  ? "Obuka za rad u najobuhvatnijem programu za analizu saobraćajnih nezgoda – PC Crash. Pored poznavanja rukovanja PC Crash-om, možete saznati i specifičnosti primene programa."
                  : "Training for the most comprehensive program for traffic accident analysis - PC Crash. In addition to knowing how to operate PC Crash, you can also learn the specifics of using the program."}
              </p>
              <Link
                href="/delatnosti/edukacija"
                className="inline-block px-6 py-2 bg-primary-500 text-white font-semibold hover:bg-primary-300 transition-colors border-2 border-[#546e7a]"
              >
                {locale === "sr" ? "Pročitajte više" : "Read More"}
              </Link>
            </motion.div>

            {/* Zakonska regulativa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white p-8 border-2 border-[#546e7a] hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
                {locale === "sr" ? "Zakonska regulativa" : "Legal Regulations"}
              </h3>
              <p className="text-gray-700 mb-6">
                {locale === "sr"
                  ? "Pregled zakonske regulative vezane za saobraćaj u Srbiji, Crnoj"
                  : "Overview of legal regulations related to traffic in Serbia, Montenegro"}
                Gori i BiH. Sva dokumenta su u PDF formatu i dostupna su za
                download.
              </p>
              <Link
                href="/dokumenta/zakonska-regulativa"
                className="inline-block px-6 py-2 bg-primary-500 text-white font-semibold hover:bg-primary-300 transition-colors border-2 border-[#546e7a]"
              >
                Pogledajte dokumente
              </Link>
            </motion.div>

            {/* Ekspertize */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-white p-8 border-2 border-[#546e7a] hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
                Ekspertize
              </h3>
              <p className="text-gray-700 mb-6">
                Prilikom pružanja ekspertskih usluga TSG koristi najviše
                standarde države Srbije, uzimajući u obzir trenutna dostignuća
                iz relevantnih oblasti u svetu.
              </p>
              <Link
                href="/delatnosti/ekspertize"
                className="inline-block px-6 py-2 bg-primary-500 text-white font-semibold hover:bg-primary-300 transition-colors border-2 border-[#546e7a]"
              >
                Pročitajte više
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Postanite povlašćeni korisnik
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Registrujte se i pristupite ekskluzivnim sadržajima i dokumentima.
            </p>
            <Link
              href="/registrovani-korisnici"
              className="inline-block px-8 py-3 bg-white text-primary-500 font-semibold hover:bg-primary-50 transition-all"
            >
              Registracija
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
