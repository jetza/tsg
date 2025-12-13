"use client";

import { motion } from "framer-motion";

export default function ZaposleniPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          Zaposleni / Employees
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {/* Intro */}
          <section>
            <p className="text-xl text-gray-700 leading-relaxed">
              Traffic Safety Group (TSG) is the leading consultant company for
              business in the field of traffic safety and transport in the region
              of Southeastern Europe. Our team consists exclusively of leading
              experts with long time practical experience.
            </p>
          </section>

          {/* Director Tijana Ivanišević */}
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500 uppercase">
              Director Tijana Ivanišević, B.Sc.
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Associate in business traffic and technical expertise in the Expert
              Commission of the Institute of Traffic Engineering in Belgrade and
              TRAFFIC SAFETY GROUP LTD She is currently working as a traffic
              engineer at temporary jobs, the jobs database, the Division for the
              management - information systems in transport, in &ldquo;Roads of
              Serbia&rdquo;, in the Republic of Serbia. She is a member of the
              research team on multiple projects and studies at the Faculty of
              Transport in Belgrade. She participated in numerous scientific and
              professional conferences, where she has published dozens of
              scientific papers, both in Serbia and abroad. By education, since
              2014, is a graduate engineer of traffic and is currently improving
              her knowledge in the field of traffic safety.
            </p>
          </section>

          {/* Deputy Director Milan M. Vujanić */}
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500 uppercase">
              Deputy Director Milan M. Vujanić, M.Sc.
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Expert in traffic and technical expertise and the member of
              committee of experts at the Institute of Faculty of Transport and
              Traffic Engineering in Belgrade. He is also technical secretary on
              the project Strategy on traffic safety for the city of Belgrade. He
              is M.Sc in traffic engineering who is currently at doctoral studies
              in the field of traffic safety at the Faculty of Transport and
              Traffic Engineering in Belgrade.
            </p>
          </section>

          {/* Business Secretary Branka Kovač */}
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary-500 uppercase">
              Business Secretary Branka Kovač
            </h2>
          </section>

          {/* Expert Consultants */}
          <section className="mt-12">
            <h3 className="text-xl font-heading font-semibold mb-4 text-primary-400">
              Part of our team are also our expert consultants:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Milan Vujanic, Ph.D.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Milorad Cvijan, B.Sc.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Legal team</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Doc. dr sc. med Zoran V. Ćosić</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Ognjen Pantelić, Ph.D.</span>
              </li>
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
