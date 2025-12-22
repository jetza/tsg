"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import VerticalPageTitle from "@/components/VerticalPageTitle";

export default function BlogPage() {
  const { locale } = useLocale();

  return (
    <>
      <VerticalPageTitle title="Blog" />
      <div className="min-h-screen py-20 px-6 md:ml-40">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading font-bold mb-8 text-primary-500"
          >
            Blog
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-sm text-center"
          >
            <p className="text-xl text-gray-600 mb-4">
              {locale === "sr"
                ? "Blog sadržaj će biti dostupan uskoro."
                : "Blog content coming soon."}
            </p>
            <p className="text-gray-500">
              {locale === "sr" ? "U pripremi!" : "In preparation!"}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
