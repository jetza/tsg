"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  delay?: number;
}

export default function PageHeader({
  title,
  subtitle,
  delay = 0,
}: PageHeaderProps) {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="text-5xl font-heading font-bold mb-12 text-primary-500"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.1 }}
          className="text-xl text-primary-300 mb-12"
        >
          {subtitle}
        </motion.p>
      )}
    </>
  );
}
