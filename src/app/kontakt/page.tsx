"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLocale } from "@/hooks/useLocale";

export default function KontaktPage() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Hvala! Vaša poruka je poslata.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-12 text-primary-500"
        >
          {t.kontakt.title}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t.kontakt.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#546e7a] focus:ring-2 focus:ring-primary-400 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#546e7a] focus:ring-2 focus:ring-primary-400 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t.kontakt.subjectLabel}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#546e7a] focus:ring-2 focus:ring-primary-400 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t.kontakt.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-[#546e7a] focus:ring-2 focus:ring-primary-400 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-500 text-white font-semibold hover:bg-primary-300 transition-all border-2 border-[#546e7a]"
              >
                {t.kontakt.sendButton}
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white p-8">
              <h2 className="text-2xl font-heading font-bold mb-6 text-primary-500">
                {t.kontakt.infoTitle}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {t.kontakt.directorTitle}
                  </h3>
                  <p className="text-gray-700">
                    Tijana Ivanišević, dipl. inž. saobraćaja
                  </p>
                  <p className="text-gray-700">
                    Email:{" "}
                    <a
                      href="mailto:t.ivanisevic@tsgserbia.com"
                      className="text-primary-400 hover:text-primary-500"
                    >
                      t.ivanisevic@tsgserbia.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {t.kontakt.assistantTitle}
                  </h3>
                  <p className="text-gray-700">
                    Milan M. Vujanić, master inž. saobraćaja
                  </p>
                  <p className="text-gray-700">
                    Email:{" "}
                    <a
                      href="mailto:m.vujanic@tsgserbia.com"
                      className="text-primary-400 hover:text-primary-500"
                    >
                      m.vujanic@tsgserbia.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {t.kontakt.secretaryTitle}
                  </h3>
                  <p className="text-gray-700">Branka Milojević</p>
                  <p className="text-gray-700">
                    Email:{" "}
                    <a
                      href="mailto:b.milojevic@tsgserbia.com"
                      className="text-primary-400 hover:text-primary-500"
                    >
                      b.milojevic@tsgserbia.com
                    </a>
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-primary-100">
                  <p className="text-gray-700 mb-2">
                    {t.kontakt.directContact} <br />
                    <a
                      href="mailto:office@tsgserbia.com"
                      className="text-primary-400 hover:text-primary-500"
                    >
                      office@tsgserbia.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    {t.kontakt.phoneContact}{" "}
                    <a
                      href="tel:+381114202010"
                      className="text-primary-400 hover:text-primary-500"
                    >
                      +381 (11) 4202010
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
