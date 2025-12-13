"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AnketaPage() {
  const [selectedAnswer1, setSelectedAnswer1] = useState("");
  const [selectedAnswer2, setSelectedAnswer2] = useState("");
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          Anketa / Poll
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {/* Poll 1: Mladi i saobraćajne nezgode */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-heading font-semibold mb-6 bg-gray-800 text-white p-4 rounded-lg">
              Mladi i saobraćajne nezgode
            </h2>
            <p className="text-lg font-medium mb-6 text-gray-800">
              Zbog čega mladi najčešće učestvuju u saobraćajnim nezgodama?
            </p>
            <div className="space-y-3 mb-6">
              {[
                "Zbog brze vožnje",
                "Zbog vožnje u alkoholisanom stanju",
                "Zbog telefoniranja tokom vožnje",
                "Zbog neiskustva",
                "Zbog loših puteva",
              ].map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-3 cursor-pointer hover:bg-primary-50 p-3 rounded-lg transition-colors"
                >
                  <input
                    type="radio"
                    name="poll1"
                    value={option}
                    checked={selectedAnswer1 === option}
                    onChange={(e) => setSelectedAnswer1(e.target.value)}
                    className="w-5 h-5 text-primary-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition-colors">
                Vote
              </button>
              <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                Results
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-right">Poll Maker</p>
          </div>

          {/* Poll 2: Saobraćajne nezgode tokom letnjih meseci */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-heading font-semibold mb-6 bg-gray-800 text-white p-4 rounded-lg">
              Saobraćajne nezgode tokom letnjih meseci
            </h2>
            <p className="text-lg font-medium mb-6 text-gray-800">
              Šta je glavi uzrok saobraćajnih nezgoda tokom letnjih meseci?
            </p>
            <div className="space-y-3 mb-6">
              {[
                "Brza vožnja",
                "Umor",
                "Izostanak preventivne medijske kampanje",
                "Nepažnja vozača",
                "Neispravna vozila",
              ].map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-3 cursor-pointer hover:bg-primary-50 p-3 rounded-lg transition-colors"
                >
                  <input
                    type="radio"
                    name="poll2"
                    value={option}
                    checked={selectedAnswer2 === option}
                    onChange={(e) => setSelectedAnswer2(e.target.value)}
                    className="w-5 h-5 text-primary-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition-colors">
                Vote
              </button>
              <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                Results
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-right">Poll Maker</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
