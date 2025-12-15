"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* TSG Logo */}
          <div className="mb-8">
            <img
              src="/logo/tria.svg"
              alt="TSG Logo"
              className="w-32 h-28 mx-auto opacity-50"
            />
          </div>

          {/* 404 Text */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-9xl font-heading font-bold text-primary-500 mb-4"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-heading font-bold text-primary-400 mb-6"
          >
            Stranica nije pronađena
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-700 mb-8"
          >
            Stranica koju tražite ne postoji ili je premeštena.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              Početna stranica
            </Link>
            <Link
              href="/kontakt"
              className="px-8 py-3 bg-white text-primary-500 border-2 border-primary-500 rounded-lg hover:bg-primary-50 transition-colors font-medium"
            >
              Kontaktirajte nas
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 pt-8 border-t border-primary-200"
          >
            <p className="text-sm text-gray-600 mb-4">Popularne stranice:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/o-nama"
                className="text-primary-500 hover:text-primary-600 hover:underline"
              >
                O nama
              </Link>
              <Link
                href="/delatnosti"
                className="text-primary-500 hover:text-primary-600 hover:underline"
              >
                Delatnosti
              </Link>
              <Link
                href="/dokumenta"
                className="text-primary-500 hover:text-primary-600 hover:underline"
              >
                Dokumenta
              </Link>
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 hover:underline"
              >
                Blog
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
