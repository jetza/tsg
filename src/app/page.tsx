"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-300 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            TSG Serbia
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Bezbednost saobraćaja - Traffic Safety Group
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Link
              href="/delatnosti"
              className="px-8 py-3 bg-white text-primary-500 rounded-full font-semibold hover:bg-primary-50 transition-all hover:scale-105"
            >
              Naše usluge
            </Link>
            <Link
              href="/kontakt"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary-500 transition-all"
            >
              Kontaktirajte nas
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
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-heading font-bold mb-6 text-primary-500">
              O nama
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Naša specijalnost je razvoj i primena inovativnih projekata u
              oblasti bezbednosti saobraćaja. Članovi našeg tima učestvovali su
              u izradi &ldquo;Zakona o bezbednosti saobraćaja na putevima&rdquo;
              i nekih od podzakonskih akata.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center text-primary-500">
            Naše usluge
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Projekti",
                description:
                  "Tim TSG-a je učestvovao na izradi i implementaciji projekata iz različitih oblasti.",
                href: "/delatnosti/projekti",
              },
              {
                title: "Ekspertize",
                description:
                  "Prilikom pružanja ekspertskih usluga TSG koristi najviše standarde države Srbije.",
                href: "/delatnosti/ekspertize",
              },
              {
                title: "Edukacija",
                description:
                  "Obuka za rad u najobuhvatnijem programu za analizu saobraćajnih nezgoda – PC Crash.",
                href: "/delatnosti/edukacija",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-500">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-primary-400 font-semibold hover:text-primary-500 inline-flex items-center"
                >
                  Saznajte više
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            ))}
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
              className="inline-block px-8 py-3 bg-white text-primary-500 rounded-full font-semibold hover:bg-primary-50 transition-all hover:scale-105"
            >
              Registracija
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
