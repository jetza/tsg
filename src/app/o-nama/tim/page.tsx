"use client";

import { motion } from "framer-motion";

export default function TimPage() {
  const teamMembers = [
    {
      name: "Prof. dr Milan Vujanić",
      role: "Transport",
      description:
        "Redovni profesor na Saobraćajnom fakultetu u Beogradu i šef katedre za drumski i gradski saobraćaj i transport. Predsednik je stručnog veća Instituta Saobraćajnog fakulteta.",
    },
    {
      name: "Milorad Cvijan, dipl.inž.",
      role: "Transport",
      description:
        "Sudski veštak iz oblasti bezbednosti saobraćaja, sa dugogodišnjim iskustvom u veštačenju saobraćajnih nezgoda.",
    },
    {
      name: "Doc. dr Ognjen Pantelić",
      role: "Informacioni sistemi",
      description:
        "Docent na Fakultetu organizacionih nauka u Beogradu i konsultant za informacione sisteme u saobraćaju.",
    },
    {
      name: "Doc. dr sc. med Zoran V. Ćosić",
      role: "Medicina",
      description:
        "Klinički radiolog, sa specijalizacijom interne medicine i subspecijalizacijom kardiologije. Fellow Of European Association of Cardiologist.",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          Naš Tim
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-heading font-bold mb-2 text-primary-500">
                {member.name}
              </h3>
              <p className="text-primary-300 font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
