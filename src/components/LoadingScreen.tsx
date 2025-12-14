"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-background/80 flex items-start justify-center"
      style={{
        left: "256px",
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "16.6rem",
      }}
    >
      <svg
        width="280"
        height="230"
        viewBox="0 0 260 210"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 h-auto"
        shapeRendering="auto"
        style={{ filter: "blur(0.3px)" }}
      >
        <defs>
          {/* Mask za Part 3 */}
          <mask id="radialSweep1">
            <rect width="260" height="210" fill="black" />
            <motion.circle
              cx="120"
              cy="120"
              r="200"
              fill="none"
              stroke="white"
              strokeWidth="400"
              initial={{
                strokeDasharray: "0 1260",
                rotate: 134,
                opacity: 0.2,
              }}
              animate={{
                strokeDasharray: "1260 0",
                rotate: 134,
                opacity: 0.8,
              }}
              transition={{
                strokeDasharray: { duration: 0.7, ease: "linear", delay: 0 },
                opacity: { duration: 0.3, ease: "easeIn", delay: 0 },
                rotate: { duration: 0 },
              }}
              style={{
                transformOrigin: "120px 120px",
              }}
            />
          </mask>

          {/* Mask za Part 2 */}
          <mask id="radialSweep2">
            <rect width="260" height="210" fill="black" />
            <motion.circle
              cx="120"
              cy="120"
              r="200"
              fill="none"
              stroke="white"
              strokeWidth="400"
              initial={{
                strokeDasharray: "0 1260",
                rotate: -95,
                opacity: 0,
              }}
              animate={{
                strokeDasharray: "1260 0",
                rotate: -95,
                opacity: 0.8,
              }}
              transition={{
                strokeDasharray: { duration: 0.7, ease: "linear", delay: 0.4 },
                opacity: { duration: 0.3, ease: "easeIn", delay: 0.4 },
                rotate: { duration: 0 },
              }}
              style={{
                transformOrigin: "120px 120px",
              }}
            />
          </mask>

          {/* Mask za Part 1 */}
          <mask id="radialSweep3">
            <rect width="260" height="210" fill="black" />
            <motion.circle
              cx="120"
              cy="120"
              r="200"
              fill="none"
              stroke="white"
              strokeWidth="400"
              initial={{
                strokeDasharray: "0 1260",
                rotate: 20,
                opacity: 0.2,
              }}
              animate={{
                strokeDasharray: "1260 0",
                rotate: 20,
                opacity: 1,
              }}
              transition={{
                strokeDasharray: { duration: 0.7, ease: "linear", delay: 0.8 },
                opacity: { duration: 0.3, ease: "easeIn", delay: 0.8 },
                rotate: { duration: 0 },
              }}
              style={{
                transformOrigin: "120px 120px",
              }}
            />
          </mask>
        </defs>

        {/* Part 3 - Lightest */}
        <g mask="url(#radialSweep1)">
          <path
            d="M26.939,201.98C26.931,201.994 26.915,202.003 26.899,202.003C26.882,202.003 26.867,201.995 26.858,201.981C25.87,200.437 7.5,171.712 7.5,171.712C7.5,171.712 104.051,11.74 110.494,1.063C110.566,0.945 110.694,0.873 110.832,0.873C110.97,0.872 111.098,0.945 111.17,1.063C117.062,10.8 197.984,144.533 197.984,144.533L161.669,144.432L111.626,64.373C111.626,64.373 29.024,198.592 26.939,201.98Z"
            fill="rgb(120,144,156)"
            stroke="none"
          />
        </g>

        {/* Part 2 - Medium */}
        <g mask="url(#radialSweep2)">
          <path
            d="M111.689,0.872C111.51,0.871 111.344,0.967 111.256,1.123C111.167,1.279 111.171,1.471 111.264,1.624C118.087,12.827 198.303,144.533 198.303,144.533L96.667,144.249L77.289,176.981L259.059,176.9L154.254,1.104C154.254,1.104 117.869,0.905 111.689,0.872Z"
            fill="rgb(84,110,122)"
            fillOpacity="0.99"
            stroke="none"
          />
        </g>

        {/* Part 1 - Darkest */}
        <g mask="url(#radialSweep3)">
          <path
            d="M258.891,176.74L241.294,202.846C241.294,202.846 32.375,201.864 27.534,201.842C27.516,201.842 27.5,201.832 27.492,201.817C27.483,201.802 27.483,201.783 27.492,201.768C29.672,198.169 111.635,62.84 111.635,62.84L128.121,89.629L77.353,176.813L258.891,176.74Z"
            fill="rgb(38,50,56)"
            fillOpacity="0.99"
            stroke="none"
          />
        </g>
      </svg>
    </motion.div>
  );
}
