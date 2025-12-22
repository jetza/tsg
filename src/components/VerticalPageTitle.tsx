"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface VerticalPageTitleProps {
  title: string;
}

export default function VerticalPageTitle({ title }: VerticalPageTitleProps) {
  const [isVisible, setIsVisible] = useState(false);
  // Capitalize first letter only, rest lowercase
  const formattedTitle =
    title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  const letters = formattedTitle.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hidden md:flex fixed left-[340px] top-0 h-screen items-center justify-start z-50 pointer-events-none px-20">
      <div className="flex items-center justify-center h-full">
        <div
          className="flex gap-1"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{ opacity: 0, y: -100 }}
              animate={
                isVisible
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-primary-400 font-montserrat font-extralight text-8xl tracking-normal"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
