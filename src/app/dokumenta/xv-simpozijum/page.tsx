"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";

export default function XVSimpozijumPage() {
  const { t, locale } = useLocale();
  const simpData = t.dokumenta.simpozijumData;

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-8 text-primary-500"
        >
          {t.dokumenta.xvSimpozijum.title}
          <span className="block text-2xl mt-2 text-primary-300">
            {t.dokumenta.xvSimpozijum.subtitle}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              {t.dokumenta.xvSimpozijum.aboutTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t.dokumenta.xvSimpozijum.aboutDesc}
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-3">
                  {t.dokumenta.xvSimpozijum.infoTitle}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    <strong>{locale === "sr" ? "Datum" : "Date"}:</strong>{" "}
                    {simpData.date}
                  </li>
                  <li>
                    <strong>{locale === "sr" ? "Mesto" : "Location"}:</strong>{" "}
                    {simpData.location}
                  </li>
                  <li>
                    <strong>{locale === "sr" ? "Jezik" : "Language"}:</strong>{" "}
                    {simpData.lang}
                  </li>
                  <li>
                    <strong>
                      {locale === "sr" ? "Učesnici" : "Participants"}:
                    </strong>{" "}
                    {simpData.participants}
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-3">
                  {t.dokumenta.xvSimpozijum.themesTitle}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>{simpData.theme1}</li>
                  <li>{simpData.theme2}</li>
                  <li>{simpData.theme3}</li>
                  <li>{simpData.theme4}</li>
                  <li>{simpData.theme5}</li>
                  <li>{simpData.theme6}</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-400 pl-4">
                <h3 className="text-xl font-semibold text-primary-500 mb-3">
                  {t.dokumenta.xvSimpozijum.programTitle}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>{simpData.program1}</li>
                  <li>{simpData.program2}</li>
                  <li>{simpData.program3}</li>
                  <li>{simpData.program4}</li>
                  <li>{simpData.program5}</li>
                </ul>
              </div>

              <div className="bg-primary-50 p-6 border-l-4 border-primary-400">
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  {t.dokumenta.xvSimpozijum.registrationTitle}
                </h3>
                <p className="text-gray-700">
                  {t.dokumenta.xvSimpozijum.registrationDesc}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
