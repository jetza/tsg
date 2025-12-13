"use client";

import { motion } from "framer-motion";

export default function KonsultantiPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          Stručni konsultanti / Expert Consultants
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {/* TRANSPORT Section */}
          <section>
            <h2 className="text-2xl font-heading font-bold mb-6 text-primary-500 uppercase">
              Transport
            </h2>

            {/* Milan Vujanić Ph.D. */}
            <div className="mb-10">
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary-400 uppercase">
                Milan Vujanić Ph.D.
              </h3>
              <p className="text-gray-700 leading-relaxed">
                He is full professor at Faculty of Transport and Traffic
                Engineering in Belgrade and the chief of department for road and
                urban traffic and transport and the chief of module for traffic
                safety. He is the president of the committee of experts at the
                Institute of Faculty of Transport and Traffic Engineering, and a
                full professor at Faculty of Transport and Traffic Engineering in
                Doboj and a full professor at Faculty of Traffic, Communication
                and Logistics in Berane. He was the team leader for writing the
                Law on Road Traffic Safety (Službeni glasnik RS, number 41,
                02.06.2009) and the team leader for numerous projects and studies
                in the field of traffic safety. CV (curriculum vitae)
              </p>
            </div>

            {/* Milorad Cvijan */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary-400 uppercase">
                Milorad Cvijan, Engineer
              </h3>
              <p className="text-gray-700 leading-relaxed">
                He is the court Expert in the field of traffic safety, with
                long-term experience in traffic accident expertise. As a member
                of the research team at the Institute of Faculty of Transport and
                Traffic Engineering he took part in many projects and studies in
                the field of traffic safety. He is the author and the co-author
                of many papers at expert gatherings, symposiums and conferences
                about traffic safety.
              </p>
            </div>
          </section>

          {/* INFORMATION SYSTEMS Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-heading font-bold mb-6 text-primary-500 uppercase">
              Information Systems
            </h2>

            <div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary-400 uppercase">
                Ognjen Pantelić, Ph.D.
              </h3>
              <p className="text-gray-700 leading-relaxed">
                He is assistant professor at the Faculty of Organizational
                Sciences in Belgrade and a consultant for information systems in
                traffic.
              </p>
            </div>
          </section>

          {/* MEDICINE Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-heading font-bold mb-6 text-primary-500 uppercase">
              Medicine
            </h2>

            <div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary-400 uppercase">
                Doc. Dr Sc. Med Zoran V. Ćosić, Ph.D.
              </h3>
              <p className="text-gray-700 leading-relaxed">
                He is MD, with the title of assistant professor at the
                University. He is a clinical radiologist, with specialization of
                internal medicine and subspecialized in cardiology, Fellow of
                European Association of Cardiologist and director assistant at the
                Clinical Center &ldquo;Dr Dragiša Mišović Dedinje&rdquo; in
                Belgrade. CV (curriculum vitae)
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
